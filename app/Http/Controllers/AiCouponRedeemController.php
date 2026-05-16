<?php

namespace App\Http\Controllers;

use App\Models\AiCoupon;
use App\Models\AiCouponRedemption;
use App\Models\AiCreditBalance;
use App\Models\AiCreditTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AiCouponRedeemController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        abort_unless($user->isUmkm(), 403);

        $balance = AiCreditBalance::forUser($user->id);

        $redemptions = AiCouponRedemption::with('coupon')
            ->where('user_id', $user->id)
            ->latest('redeemed_at')
            ->take(10)
            ->get()
            ->map(fn (AiCouponRedemption $redemption) => [
                'id' => $redemption->id,
                'code' => $redemption->coupon?->code ?? '-',
                'name' => $redemption->coupon?->name,
                'video_credits' => $redemption->video_credits,
                'photo_enhance_credits' => $redemption->photo_enhance_credits,
                'redeemed_at' => $redemption->redeemed_at?->toISOString(),
            ]);

        return Inertia::render('umkm/ai-coupons/redeem', [
            'balance' => [
                'video_credits' => $balance->video_credits,
                'photo_enhance_credits' => $balance->photo_enhance_credits,
            ],
            'redemptions' => $redemptions,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:40',
        ]);

        $code = Str::upper(trim($validated['code']));
        $user = $request->user();
        abort_unless($user->isUmkm(), 403);

        DB::transaction(function () use ($code, $user) {
            $coupon = AiCoupon::where('code', $code)->lockForUpdate()->first();

            if (! $coupon) {
                throw ValidationException::withMessages([
                    'code' => 'Kode kupon tidak ditemukan.',
                ]);
            }

            if (! $coupon->is_active) {
                throw ValidationException::withMessages([
                    'code' => 'Kode kupon ini sudah dinonaktifkan.',
                ]);
            }

            if ($coupon->isExpired()) {
                throw ValidationException::withMessages([
                    'code' => 'Kode kupon ini sudah kedaluwarsa.',
                ]);
            }

            if (! $coupon->hasRemainingQuota()) {
                throw ValidationException::withMessages([
                    'code' => 'Kuota pemakaian kupon sudah habis.',
                ]);
            }

            $alreadyRedeemed = AiCouponRedemption::where('ai_coupon_id', $coupon->id)
                ->where('user_id', $user->id)
                ->exists();

            if ($alreadyRedeemed) {
                throw ValidationException::withMessages([
                    'code' => 'Akun Anda sudah pernah memakai kupon ini.',
                ]);
            }

            $balance = AiCreditBalance::firstOrCreate(
                ['user_id' => $user->id],
                ['video_credits' => 0, 'photo_enhance_credits' => 0]
            );

            $balance = AiCreditBalance::whereKey($balance->id)->lockForUpdate()->firstOrFail();
            $balance->video_credits += $coupon->video_credits;
            $balance->photo_enhance_credits += $coupon->photo_enhance_credits;
            $balance->save();

            $coupon->redeemed_count += 1;
            $coupon->save();

            AiCouponRedemption::create([
                'ai_coupon_id' => $coupon->id,
                'user_id' => $user->id,
                'video_credits' => $coupon->video_credits,
                'photo_enhance_credits' => $coupon->photo_enhance_credits,
                'redeemed_at' => now(),
            ]);

            AiCreditTransaction::create([
                'user_id' => $user->id,
                'ai_coupon_id' => $coupon->id,
                'type' => AiCreditTransaction::TYPE_COUPON_REDEEM,
                'video_delta' => $coupon->video_credits,
                'photo_enhance_delta' => $coupon->photo_enhance_credits,
                'description' => 'Redeem kupon AI ' . $coupon->code,
            ]);
        });

        return redirect()
            ->route('umkm.ai-coupons.redeem')
            ->with('success', 'Kupon berhasil dipakai. Paket AI sudah masuk ke akun Anda.');
    }
}

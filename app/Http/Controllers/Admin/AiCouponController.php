<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AiCoupon;
use App\Models\AiCouponRedemption;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AiCouponController extends Controller
{
    public function index()
    {
        $coupons = AiCoupon::with('creator')
            ->withCount('redemptions')
            ->latest()
            ->paginate(20)
            ->through(fn (AiCoupon $coupon) => [
                'id' => $coupon->id,
                'code' => $coupon->code,
                'name' => $coupon->name,
                'redeem_type' => $coupon->redeem_type,
                'video_credits' => $coupon->video_credits,
                'photo_enhance_credits' => $coupon->photo_enhance_credits,
                'max_redemptions' => $coupon->max_redemptions,
                'redeemed_count' => $coupon->redeemed_count,
                'redemptions_count' => $coupon->redemptions_count,
                'is_active' => $coupon->is_active,
                'expires_at' => $coupon->expires_at?->toISOString(),
                'created_at' => $coupon->created_at?->toISOString(),
                'creator_name' => $coupon->creator?->name,
            ]);

        $summary = [
            'active_coupons' => AiCoupon::where('is_active', true)->count(),
            'total_redemptions' => AiCouponRedemption::count(),
            'video_credits_distributed' => AiCouponRedemption::sum('video_credits'),
            'photo_credits_distributed' => AiCouponRedemption::sum('photo_enhance_credits'),
        ];

        return Inertia::render('admin/ai-coupons/index', [
            'coupons' => $coupons,
            'summary' => $summary,
        ]);
    }

    public function store(Request $request)
    {
        $code = Str::upper(trim($request->input('code') ?: 'AI20-' . Str::random(6)));
        $request->merge(['code' => $code]);

        $validated = $request->validate([
            'code' => 'required|string|max:40|unique:ai_coupons,code',
            'name' => 'nullable|string|max:255',
            'redeem_type' => 'required|in:single_use,multi_use',
            'video_credits' => 'required|integer|min:0|max:100',
            'photo_enhance_credits' => 'required|integer|min:0|max:100',
            'max_redemptions' => 'nullable|integer|min:2|max:10000',
            'expires_at' => 'nullable|date|after_or_equal:today',
        ]);

        if ((int) $validated['video_credits'] === 0 && (int) $validated['photo_enhance_credits'] === 0) {
            return back()->withErrors([
                'video_credits' => 'Isi minimal salah satu kredit.',
            ]);
        }

        if ($validated['redeem_type'] === AiCoupon::TYPE_SINGLE_USE) {
            $validated['max_redemptions'] = 1;
        } elseif (empty($validated['max_redemptions'])) {
            return back()->withErrors([
                'max_redemptions' => 'Kupon banyak orang perlu batas maksimal pemakaian.',
            ]);
        }

        AiCoupon::create([
            ...$validated,
            'is_active' => true,
            'created_by' => $request->user()->id,
        ]);

        return back()->with('success', 'Kupon AI berhasil dibuat.');
    }

    public function toggle(AiCoupon $coupon)
    {
        $coupon->update(['is_active' => ! $coupon->is_active]);

        return back()->with('success', $coupon->is_active ? 'Kupon AI diaktifkan.' : 'Kupon AI dinonaktifkan.');
    }

    public function destroy(AiCoupon $coupon)
    {
        if ($coupon->redemptions()->exists()) {
            $coupon->update(['is_active' => false]);

            return back()->with('success', 'Kupon sudah pernah dipakai, jadi kupon dinonaktifkan agar riwayat tetap aman.');
        }

        $coupon->delete();

        return back()->with('success', 'Kupon AI berhasil dihapus.');
    }
}

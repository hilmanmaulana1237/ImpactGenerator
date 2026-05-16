<?php

namespace App\Http\Responses;

use App\Models\AiCreditBalance;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        $user = $request->user();

        $umkmHome = '/umkm/dashboard';
        if ($user->role === 'umkm') {
            $balance = AiCreditBalance::where('user_id', $user->id)->first();
            $hasCredits = $balance && (($balance->video_credits + $balance->photo_enhance_credits) > 0);
            $umkmHome = $hasCredits ? '/umkm/dashboard' : '/umkm/ai-coupons/redeem';
        }

        $home = match ($user->role) {
            'admin' => '/admin/dashboard',
            'umkm' => $umkmHome,
            'courier' => '/courier/radar',
            'affiliator' => '/affiliate/dashboard',
            default => '/marketplace', // buyers go to marketplace
        };

        if ($request->wantsJson()) {
            return new JsonResponse(['two_factor' => false], 200);
        }

        if ($user->role === 'umkm' && $home === '/umkm/ai-coupons/redeem') {
            return redirect($home);
        }

        return redirect()->intended($home);
    }
}

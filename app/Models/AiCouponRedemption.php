<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiCouponRedemption extends Model
{
    protected $fillable = [
        'ai_coupon_id',
        'user_id',
        'video_credits',
        'photo_enhance_credits',
        'redeemed_at',
    ];

    protected $casts = [
        'video_credits' => 'integer',
        'photo_enhance_credits' => 'integer',
        'redeemed_at' => 'datetime',
    ];

    public function coupon(): BelongsTo
    {
        return $this->belongsTo(AiCoupon::class, 'ai_coupon_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiCreditTransaction extends Model
{
    public const TYPE_COUPON_REDEEM = 'coupon_redeem';
    public const TYPE_VIDEO_DEBIT = 'video_debit';
    public const TYPE_PHOTO_DEBIT = 'photo_debit';
    public const TYPE_REFUND = 'refund';

    protected $fillable = [
        'user_id',
        'ai_coupon_id',
        'admin_id',
        'type',
        'video_delta',
        'photo_enhance_delta',
        'description',
        'metadata',
    ];

    protected $casts = [
        'video_delta' => 'integer',
        'photo_enhance_delta' => 'integer',
        'metadata' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function coupon(): BelongsTo
    {
        return $this->belongsTo(AiCoupon::class, 'ai_coupon_id');
    }

    public function admin(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
}

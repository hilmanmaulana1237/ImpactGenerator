<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class AiCoupon extends Model
{
    public const TYPE_SINGLE_USE = 'single_use';
    public const TYPE_MULTI_USE = 'multi_use';

    protected $fillable = [
        'code',
        'name',
        'redeem_type',
        'video_credits',
        'photo_enhance_credits',
        'max_redemptions',
        'redeemed_count',
        'is_active',
        'expires_at',
        'created_by',
    ];

    protected $casts = [
        'video_credits' => 'integer',
        'photo_enhance_credits' => 'integer',
        'max_redemptions' => 'integer',
        'redeemed_count' => 'integer',
        'is_active' => 'boolean',
        'expires_at' => 'datetime',
    ];

    public function setCodeAttribute(string $value): void
    {
        $this->attributes['code'] = Str::upper(trim($value));
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function redemptions(): HasMany
    {
        return $this->hasMany(AiCouponRedemption::class);
    }

    public function hasRemainingQuota(): bool
    {
        return $this->redeemed_count < $this->max_redemptions;
    }

    public function isExpired(): bool
    {
        return $this->expires_at !== null && $this->expires_at->isPast();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiCreditBalance extends Model
{
    protected $fillable = [
        'user_id',
        'video_credits',
        'photo_enhance_credits',
    ];

    protected $casts = [
        'video_credits' => 'integer',
        'photo_enhance_credits' => 'integer',
    ];

    public static function forUser(int $userId): self
    {
        return self::firstOrCreate(
            ['user_id' => $userId],
            ['video_credits' => 0, 'photo_enhance_credits' => 0]
        );
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

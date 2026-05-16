<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ai_credit_balances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained()->cascadeOnDelete();
            $table->unsignedInteger('video_credits')->default(0);
            $table->unsignedInteger('photo_enhance_credits')->default(0);
            $table->timestamps();
        });

        Schema::create('ai_coupons', function (Blueprint $table) {
            $table->id();
            $table->string('code', 40)->unique();
            $table->string('name')->nullable();
            $table->string('redeem_type')->default('single_use');
            $table->unsignedInteger('video_credits')->default(2);
            $table->unsignedInteger('photo_enhance_credits')->default(3);
            $table->unsignedInteger('max_redemptions')->default(1);
            $table->unsignedInteger('redeemed_count')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamp('expires_at')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });

        Schema::create('ai_coupon_redemptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ai_coupon_id')->constrained('ai_coupons')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->unsignedInteger('video_credits')->default(0);
            $table->unsignedInteger('photo_enhance_credits')->default(0);
            $table->timestamp('redeemed_at');
            $table->timestamps();

            $table->unique(['ai_coupon_id', 'user_id']);
        });

        Schema::create('ai_credit_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('ai_coupon_id')->nullable()->constrained('ai_coupons')->nullOnDelete();
            $table->foreignId('admin_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('type');
            $table->integer('video_delta')->default(0);
            $table->integer('photo_enhance_delta')->default(0);
            $table->string('description')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'created_at']);
            $table->index(['type', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ai_credit_transactions');
        Schema::dropIfExists('ai_coupon_redemptions');
        Schema::dropIfExists('ai_coupons');
        Schema::dropIfExists('ai_credit_balances');
    }
};

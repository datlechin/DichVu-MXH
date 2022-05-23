<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'amount', 'type', 'balance', 'description'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function type(): Attribute
    {
        return Attribute::make(
            get: fn($value) => match ($value) {
                'deposit' => 'Nạp tiền',
                'order' => 'Đơn dịch vụ',
                default => $value,
            },
        );
    }
}

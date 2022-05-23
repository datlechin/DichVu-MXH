<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;

    const DEPOSIT = '1';
    const ORDER = '2';

    protected $fillable = ['user_id', 'amount', 'type', 'balance', 'description'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function type(): Attribute
    {
        return Attribute::make(
            get: fn($value) => match ($value) {
                Transaction::DEPOSIT => 'Nạp tiền',
                Transaction::ORDER => 'Đơn dịch vụ',
                default => $value,
            },
        );
    }
}

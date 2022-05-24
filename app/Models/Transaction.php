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
    const ADD_MONEY = '3';
    const SUB_MONEY = '4';

    protected $fillable = ['user_id', 'amount', 'type', 'balance', 'description'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getTypeNameAttribute()
    {
        return match ($this->attributes['type']) {
            Transaction::DEPOSIT => 'Nạp tiền',
            Transaction::ORDER => 'Đơn dịch vụ',
            Transaction::ADD_MONEY => 'Cộng tiền',
            Transaction::SUB_MONEY => 'Trừ tiền',
            default => $this->attributes['type'],
        };
    }

    public function getAmountWithColorAttribute()
    {
        return match ($this->type) {
            Transaction::DEPOSIT, Transaction::ADD_MONEY => '<span class="text-success">+' . number_format($this->amount) . 'đ</span>',
            Transaction::ORDER, Transaction::SUB_MONEY => '<span class="text-danger">-' . number_format($this->amount) . 'đ</span>',
            default => $this->amount,
        };
    }
}

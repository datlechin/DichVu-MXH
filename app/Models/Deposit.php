<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Deposit extends Model
{
    use HasFactory;

    /**
     * Deposit statuses.
     */
    const PENDING = 0;
    const SUCCESS = 1;
    const FAILED = 2;
    const WRONG_AMOUNT = 3;

    /**
     * Deposit types
     */
    const BANK = 'bank';
    const WALLET = 'wallet';
    const CHARGE = 'charge';

    protected $fillable = ['user_id', 'type', 'status', 'description'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function charge(): HasOne
    {
        return $this->hasOne(Charge::class);
    }

    public function depositType(): string
    {
        return match ($this->type) {
            Deposit::BANK => 'Ngân hàng',
            Deposit::WALLET => 'Ví điện tử',
            Deposit::CHARGE => 'Nạp thẻ',
        };
    }


}

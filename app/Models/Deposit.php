<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function charge()
    {
        return $this->hasOne(Charge::class);
    }
}

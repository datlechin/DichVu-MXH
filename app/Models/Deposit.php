<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
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

    public function scopeSearch(Builder $query, ?string $request): Builder
    {
        return $query->where('description', 'like', "%{$request}%");
    }

    public function scopeDate(Builder $query, ?string $date): Builder
    {
        if ($date) return $query->whereDate('created_at', $date);

        return $query;
    }

    public function scopeStatus(Builder $query, ?int $status): Builder
    {
        if ($status) return $query->where('status', $status);

        return $query;
    }

    protected function type(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return match ($value) {
                    Deposit::BANK => 'Ngân hàng',
                    Deposit::WALLET => 'Ví điện tử',
                    Deposit::CHARGE => 'Thẻ cào',
                };
            },
        );
    }

    public function scopePending($query)
    {
        return $query->where('status', Deposit::PENDING);
    }
}

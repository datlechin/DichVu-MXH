<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Charge extends Model
{
    use HasFactory;

    protected $fillable = ['request_id', 'telco', 'amount', 'serial', 'pin'];

    public function deposit(): BelongsTo
    {
        return $this->belongsTo(Deposit::class);
    }
}

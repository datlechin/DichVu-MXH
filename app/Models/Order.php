<?php

namespace App\Models;

use App\Enums\OrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Order extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = ['user_id', 'package_id', 'input', 'quantity', 'total', 'note', 'status'];

    protected $casts = [
        'status' => OrderStatus::class
    ];

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }
}

<?php

namespace App\Models;

use App\Enums\OrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'package_id', 'input', 'quantity', 'total', 'note', 'status'];

    protected $casts = [
        'status' => OrderStatus::class
    ];

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }
}

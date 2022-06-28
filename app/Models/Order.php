<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Order extends Model
{
    use HasFactory, Notifiable;

    const PENDING = '0';

    const PROCESSING = '1';

    const COMPLETED = '2';

    const CANCELLED = '3';

    protected $fillable = ['user_id', 'package_id', 'input', 'quantity', 'total', 'note', 'status'];

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

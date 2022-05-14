<?php

namespace App\Models;

use App\Enums\PackageStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Package extends Model
{
    use HasFactory;

    protected $fillable = ['service_id', 'name', 'price', 'min_quantity', 'max_quantity', 'note', 'status'];

    protected $casts = [
        'status' => PackageStatus::class
    ];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}

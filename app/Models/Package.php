<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Package extends Model
{
    use HasFactory;

    const ACTIVE = '1';

    const INACTIVE = '0';

    protected $fillable = ['service_id', 'name', 'price', 'min_quantity', 'max_quantity', 'note', 'status'];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', Package::ACTIVE);
    }
}

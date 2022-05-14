<?php

namespace App\Models;

use App\Enums\CategoryStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['icon', 'name', 'slug', 'status'];

    protected $casts = [
        'status' => CategoryStatus::class,
    ];

    public function scopeActive($query)
    {
        return $query->where('status', CategoryStatus::Active);
    }

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }
}

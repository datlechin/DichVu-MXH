<?php

namespace App\Models;

use App\Enums\CategoryStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    const ACTIVE = '1';
    const INACTIVE = '0';

    protected $fillable = ['icon', 'name', 'slug', 'status'];

    public function scopeActive($query)
    {
        return $query->where('status', Category::ACTIVE);
    }

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }
}

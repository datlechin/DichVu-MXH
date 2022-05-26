<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    const ACTIVE = '1';
    const INACTIVE = '0';

    const SERVICE_TYPE = 'service';
    const TICKET_TYPE = 'ticket';

    protected $fillable = ['type', 'icon', 'name', 'slug', 'status'];

    public function scopeActive($query)
    {
        return $query->where('status', Category::ACTIVE);
    }

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }

    public function getTypeNameAttribute(): string
    {
        return match ($this->attributes['type']) {
            Category::SERVICE_TYPE => 'Dịch vụ',
            Category::TICKET_TYPE => 'Ticket',
        };
    }
}

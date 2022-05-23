<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Rappasoft\LaravelAuthenticationLog\Traits\AuthenticationLoggable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, AuthenticationLoggable;

    const MEMBER = 'member';
    const ADMIN = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'avatar',
        'balance'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
//        'role' => UserRole::class,
    ];

    protected function roleName(): Attribute
    {
        return Attribute::get(function () {
            return match ($this->role) {
                User::MEMBER => 'Thành viên',
                User::ADMIN => 'Quản trị viên',
                default => 'Không xác định'
            };
        });
    }

    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: fn($avatar) => asset($avatar ? 'storage/avatars/' . $avatar : 'assets/images/users/user-dummy-img.jpg')
        );
    }

    public function isAdmin(): bool
    {
        return $this->role === User::ADMIN;
    }

    public function scopeSearch(Builder $query, ?string $search): Builder
    {
        if ($search) {
            $query->where('name', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%")
                ->orWhere('phone', 'like', "%{$search}%");
        }

        return  $query;
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function deposits(): HasMany
    {
        return $this->hasMany(Deposit::class);
    }

    public function getAmountDepositedAttribute(): int
    {
        return $this->deposits()->where('status', Deposit::SUCCESS)->sum('amount');
    }

    public function getAmountSpentAttribute(): int
    {
        return $this->orders()->where('status', Order::COMPLETED)->sum('total');
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }
}

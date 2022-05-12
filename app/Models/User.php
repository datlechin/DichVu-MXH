<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

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
            get: fn ($avatar) => asset($avatar ? 'storage/avatars/' . $avatar : 'assets/images/users/user-dummy-img.jpg')
        );
    }
}

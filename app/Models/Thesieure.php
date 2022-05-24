<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thesieure extends Model
{
    use HasFactory;

    protected $fillable = ['deposit_id', 'code', 'amount', 'description', 'date'];
}

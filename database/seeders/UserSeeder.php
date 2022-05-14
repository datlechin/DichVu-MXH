<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Tài khoản Demo',
            'email' => 'demo@demo.com',
            'phone' => '0123456789',
            'password' => bcrypt('123456'),
            'role' => User::ADMIN,
        ]);
    }
}

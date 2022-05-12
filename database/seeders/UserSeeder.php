<?php

namespace Database\Seeders;

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
            'name' => 'Ngô Quốc Đạt',
            'email' => 'datlechin@gmail.com',
            'phone' => '0372124043',
            'password' => bcrypt('123456'),
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            // general
            ['key' => 'site_title', 'value' => 'Dịch vụ Mạng xã hội'],
            ['key' => 'site_name', 'value' => 'Dịch vụ MXH'],
            ['key' => 'site_description', 'value' => 'DVMXH'],
            ['key' => 'site_keywords', 'value' => 'dvmxh,dvfb'],
            ['key' => 'site_author', 'value' => 'Ngô Quốc Đạt'],
            ['key' => 'site_email', 'value' => 'datlechin@gmail.com'],
            // mail
            ['key' => 'mail_mailer', 'value' => 'smtp'],
            ['key' => 'mail_host', 'value' => 'smtp.gmail.com'],
            ['key' => 'mail_port', 'value' => '587'],
            ['key' => 'mail_username', 'value' => 'your@email.com'],
            ['key' => 'mail_password', 'value' => 'password'],
            ['key' => 'mail_encryption', 'value' => 'tls'],
            ['key' => 'mail_from_address', 'value' => 'datlechin@gmail.com'],
            // telegram
            ['key' => 'telegram_token', 'value' => 'token telegram'],
            ['key' => 'telegram_chat_id', 'value' => 'chat id'],
            // thesieure auto
            ['key' => 'tsr_cookie', 'value' => 'TCK=***'],
            ['key' => 'tsr_username', 'value' => 'datlechin'],
            ['key' => 'tsr_deposit_description', 'value' => 'Nạp tiền'],
            ['key' => 'tsr_deposit_limit', 'value' => '10000'],
            // nạp auto
            ['key' => 'charge_provider', 'value' => 'TSR'],
            ['key' => 'charge_provider', 'value' => 'TSR'],
            ['key' => 'charge_api_id', 'value' => '99999999'],
            ['key' => 'charge_api_key', 'value' => '...'],
            ['charge_note' => 'Ghi chú nạp thẻ cào']
        ]);
    }
}

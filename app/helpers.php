<?php

if (! function_exists('get_browser_name')) {
    function get_browser_name($user_agent)
    {
        $browser = 'Unknown';
        $browser_array = [
            '/firefox/i' => 'Firefox',
            '/safari/i' => 'Safari',
            '/chrome/i' => 'Chrome',
            '/edge/i' => 'Edge',
            '/opera/i' => 'Opera',
        ];
        foreach ($browser_array as $regex => $value) {
            if (preg_match($regex, $user_agent)) {
                $browser = $value;
            }
        }

        return $browser;
    }
}

if (! function_exists('get_device_name')) {
    function get_device_name($user_agent)
    {
        $device = 'Unknown';
        $device_array = [
            '/windows/i' => 'Windows',
            '/windows nt 10/i' => 'Windows 10',
            '/linux/i' => 'Linux',
            '/ubuntu/i' => 'Ubuntu',
            '/iphone/i' => 'iPhone',
            '/ipad/i' => 'iPad',
            '/android/i' => 'Android',
            '/android 10/i' => 'Android 10',
            '/android 12/i' => 'Android 12',
        ];
        foreach ($device_array as $regex => $value) {
            if (preg_match($regex, $user_agent)) {
                $device = $value;
            }
        }

        return $device;
    }
}

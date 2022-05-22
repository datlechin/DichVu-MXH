<?php

if (! function_exists('get_browser_name')) {
    function get_browser_name($user_agent)
    {
        $browser = 'Unknown';
        $browser_array = array(
            '/msie/i' => 'Internet Explorer',
            '/firefox/i' => 'Firefox',
            '/safari/i' => 'Safari',
            '/chrome/i' => 'Chrome',
            '/edge/i' => 'Edge',
            '/opera/i' => 'Opera',
            '/netscape/i' => 'Netscape',
            '/maxthon/i' => 'Maxthon',
            '/konqueror/i' => 'Konqueror',
            '/mobile/i' => 'Handheld Browser'
        );
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
        $device_array = array(
            '/windows nt 10/i' => 'Windows 10',
            '/linux/i' => 'Linux',
            '/ubuntu/i' => 'Ubuntu',
            '/iphone/i' => 'iPhone',
            '/ipad/i' => 'iPad',
            '/android/i' => 'Android',
        );
        foreach ($device_array as $regex => $value) {
            if (preg_match($regex, $user_agent)) {
                $device = $value;
            }
        }
        return $device;
    }
}
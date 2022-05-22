<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function general()
    {
        return view('admin.settings.general');
    }

    public function updateGeneral(Request $request)
    {
        return to_route('admin.settings.general')->with('success', 'Cập nhật cấu hình chung thành công');
    }

    public function email()
    {
        return view('admin.settings.email');
    }

    public function updateEmail(Request $request)
    {
        return to_route('admin.settings.email')->with('success', 'Cập nhật cấu hình email thành công');
    }
}

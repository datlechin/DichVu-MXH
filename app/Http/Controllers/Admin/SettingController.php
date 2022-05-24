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

    public function notifications()
    {
        return view('admin.settings.notifications');
    }

    public function deposit()
    {
        return view('admin.settings.deposit');
    }

    public function store(Request $request)
    {
        if ($request->has('tsr_enable')) {
            $request->merge(['tsr_enable' => 1]);
        } else {
            $request->merge(['tsr_enable' => 0]);
        }

        setting($request->except('_token'))->save();

        return back()->with('success', 'Cập nhật cài đặt thành công');
    }
}

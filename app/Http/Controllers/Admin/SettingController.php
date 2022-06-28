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
        $request->merge(['tsr_enabled' => $request->has('tsr_enabled') ? 1 : 0]);

        foreach ($request->file() as $key => $file) {
            if ($file) {
                $file->storeAs('public/images', $file->hashName());
                setting([$key => $file->hashName()])->save();
            }
        }

        setting($request->except('_token', 'site_logo', 'site_favicon'))->save();

        return back()->with('success', 'Cập nhật cài đặt thành công');
    }
}

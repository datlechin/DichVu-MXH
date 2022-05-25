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
                dd($file);
                $this->validate($request, [
                    $key => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                ]);

                if (!file_exists(public_path('/storage/images'))) {
                    mkdir(public_path('/storage/images'), 0777, true);
                }

                $fileName = time() . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('/storage/images'), $fileName);
                $request->merge([$key => '/storage/images/' . $fileName]);
            }
        }

        setting($request->except('_token'))->save();

        return back()->with('success', 'Cập nhật cài đặt thành công');
    }
}

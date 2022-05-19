<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    public function profile()
    {
        $user = Auth::user();

        return view('user.profile', compact('user'));
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:50',
            'phone' => 'required|numeric|digits_between:10,11',
        ]);

        Auth::user()->update([
            'name' => $request->name,
            'phone' => $request->phone,
        ]);

        return to_route('user.profile')->with('success', 'Cập nhật thông tin cá nhân thành công.');
    }

    public function updateAvatar(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = $request->user();

        $avatar = $request->file('avatar');
        $filename = 'user_' . $user->id . '.' . $avatar->getClientOriginalExtension();
        $image = Image::make($avatar)->resize(200, 200);

        if (!file_exists(public_path('/storage/avatars'))) {
            mkdir(public_path('/storage/avatars'), 0777, true);
        }

        $image->save(public_path('storage/avatars/' . $filename));

        $user->update(['avatar' => $filename]);

        return to_route('user.profile')->with('success', 'Cập nhật ảnh đại diện thành công.');
    }

    public function changePassword()
    {
        return view('user.change-password');
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'old_password' => 'required',
            'password' => 'required|string|min:6|confirmed|different:old_password',
        ]);

        if (!Hash::check($request->old_password, $user->password)) {
            return back()->withErrors(['old_password' => 'Mật khẩu cũ không đúng.']);
        }

        $user->update(['password' => bcrypt($request->password)]);

        return to_route('user.change-password')->with('success', 'Đổi mật khẩu thành công');
    }

    public function authLog()
    {
        $logs = Auth::user()->authentications()->paginate(10);

        return view('user.auth-log', compact('logs'));
    }
}

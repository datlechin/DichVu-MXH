<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
}

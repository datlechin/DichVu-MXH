<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class MoneyController extends Controller
{
    public function index()
    {
        return view('admin.money');
    }

    public function handle(Request $request)
    {
        $request->validate([
            'user' => 'required|string',
            'money' => 'required|numeric|min:0|max:100000000',
            'reason' => 'required|string',
            'type' => 'required|numeric|in:0,1',
        ]);

        $user = User::query()->where('email', $request->user)->orWhere('phone', $request->phone);

        if (! $user->exists()) {
            return back()
                ->withErrors(['user' => 'Không tìm thấy người dùng'])
                ->withInput();
        }

        $user = $user->first();
        $user->balance = $request->type == 1 ? $user->balance + $request->money : $user->balance - $request->money;
        $user->save();

        return to_route('admin.money')->with('success', 'Thực hiện thao tác cộng trừ tiền thành công');
    }
}

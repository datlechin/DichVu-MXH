<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        $user = User::query()->where('email', $request->get('user'))->orWhere('phone', $request->get('user'));

        if (! $user->exists()) {
            return back()
                ->withErrors(['user' => 'Không tìm thấy người dùng'])
                ->withInput();
        }

        $user = $user->first();

        DB::transaction(function () use ($user, $request) {
            $user->balance = $request->type == 1 ? $user->balance + $request->money : $user->balance - $request->money;
            $user->save();

            $user->transactions()->create([
                'type' => $request->type == 1 ? Transaction::ADD_MONEY : Transaction::SUB_MONEY,
                'amount' => $request->money,
                'balance' => $user->balance,
                'description' => $request->reason,
            ]);
        });

        return to_route('admin.money')->with('success', 'Thực hiện thao tác cộng trừ tiền thành công');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index()
    {
        $hours = now('Asia/Ho_Chi_Minh')->format('H');
        if ($hours >= 6 && $hours < 12) {
            $greeting = 'Good morning';
        } elseif ($hours >= 12 && $hours < 18) {
            $greeting = 'Good afternoon';
        } else {
            $greeting = 'Good evening';
        }

        $user = Auth::user();

        $users_count = User::query()->count();
        $balance = $user->balance;
        $amount_deposited = $user->deposits()->sum('amount');
        $amount_spent = $user->orders()->sum('total');
        $last_orders = $user->isAdmin() ? Order::query()->with('user')->latest()->limit(5)->get() : [];

        return view('home', compact('greeting', 'users_count', 'balance', 'amount_deposited', 'amount_spent', 'last_orders'));
    }
}

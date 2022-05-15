<?php

namespace App\Http\Controllers;

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

        $users_count = User::query()->count();
        $balance = Auth::user()->balance;
        $amount_deposited = Auth::user()->deposits()->sum('amount');
        $amount_spent = Auth::user()->orders()->sum('total');

        return view('home', compact('greeting', 'users_count', 'balance', 'amount_deposited', 'amount_spent'));
    }
}

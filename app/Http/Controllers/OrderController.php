<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function history()
    {
        $orders = Auth::user()
            ->orders()
            ->with('package')
            ->latest()
            ->paginate();

        return view('order.history', compact('orders'));
    }

    public function detail($id)
    {
        $order = Auth::user()
            ->orders()
            ->with('package')
            ->findOrFail($id);

        return view('order.detail', compact('order'));
    }
}

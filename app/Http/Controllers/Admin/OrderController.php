<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::query()->paginate();

        return view('admin.orders.index', compact('orders'));
    }

    public function edit(Order $order)
    {
        return view('admin.orders.edit', compact('order'));
    }

    public function update(UpdateOrderRequest $request, Order $order)
    {
        $user = $request->user();
        DB::transaction(function () use ($request, $order, $user) {
            $order->update($request->all());

            if ($request->status == Order::CANCELLED) {
                $user->update(['balance' => $user->balance + $order->total]);
            }
        });
        return to_route('admin.orders.index')->with('success', 'Cập nhật đơn hàng thành công');
    }
}

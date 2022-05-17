<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Category;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function index(Category $category, Service $service)
    {
        $user = Auth::user();
        $orders = $user->orders()->with('package')->latest()->paginate();

        return view('service.index', compact('service', 'orders'));
    }

    public function store(StoreOrderRequest $request, Category $category, Service $service)
    {
        $user = $request->user();
        $package = $service->packages()->find($request->package_id);
        $total = $package->price * $request->quantity;

        if ($user->balance < $total) {
            return back()->withErrors('Số dư của bạn không đủ để thực hiện giao dịch');
        }

        DB::transaction(function () use ($request, $user, $total) {
            Order::create([
                'user_id' => $user->id,
                'total' => $total,
            ] + $request->validated());

            $user->update(['balance' => $user->balance - $total]);
        });

        return back()->with('success', 'Tạo đơn ' . $service->name . ' với số lượng ' . number_format($request->quantity) . ' thành công');
    }
}

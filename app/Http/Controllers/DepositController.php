<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepositRequest;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class DepositController extends Controller
{
    public function index(Request $request)
    {
        $query = Deposit::query();

        if ($request->filled('find')) {
            $query->where('description', 'like', '%' . $request->find . '%');
        }

        if ($request->filled('date')) {
            $query->whereDate('created_at', $request->date);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $deposits = $query->latest()->paginate();

        return view('deposit.index', compact('deposits'));
    }

    public function store(DepositRequest $request)
    {
        $deposit = Deposit::create([
            'user_id' => Auth::id(),
            'type' => Deposit::CHARGE,
            'status' => Deposit::PENDING,
            'description' => 'Thẻ ' . Str::camel($request->telco) . ' ' . number_format($request->amount) . 'đ'
        ]);

        $request_id = Str::random(10);

        $deposit->charge()->create([
            'request_id' => $request_id,
            'telco' => $request->telco,
            'amount' => $request->amount,
            'serial' => $request->serial,
            'pin' => $request->pin,
        ]);

        return to_route('deposit')->with('success', 'Gửi thẻ lên thành công, vui lòng chờ duyệt');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepositRequest;
use App\Models\Deposit;
use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function index()
    {
        $query = Deposit::query();
        $deposits = $query->paginate();

        return view('deposit.index', compact('deposits'));
    }

    public function store(DepositRequest $request)
    {
        return to_route('deposit')->with('success', 'Gửi thẻ lên thành công, vui lòng chờ duyệt');
    }
}

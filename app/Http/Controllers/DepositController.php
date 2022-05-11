<?php

namespace App\Http\Controllers;

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

    public function store(Request $request)
    {
        
    }
}

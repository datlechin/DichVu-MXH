<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::query()
            ->with('user')
            ->latest()
            ->paginate();

        return view('admin.transactions.index', compact('transactions'));
    }
}

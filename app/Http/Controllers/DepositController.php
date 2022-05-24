<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepositRequest;
use App\Models\Deposit;
use App\Models\Transaction;
use App\Thesieure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DepositController extends Controller
{
    public function charge()
    {
        $deposits = Deposit::query()
            ->where('user_id', Auth::id())
            ->search(\request('search'))
            ->date(\request('date'))
            ->status(\request('status'))
            ->latest()
            ->paginate();

        return view('deposit.charge', compact('deposits'));
    }

    public function handleCharge(DepositRequest $request)
    {
        $deposit = Deposit::create([
            'user_id' => Auth::id(),
            'type' => Deposit::CHARGE,
            'amount' => $request->amount,
            'status' => Deposit::PENDING,
            'description' => 'Thẻ ' . Str::ucfirst($request->telco) . ' ' . number_format($request->amount) . 'đ'
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

    public function thesieure()
    {
        $deposits = Deposit::query()
            ->where('user_id', Auth::id())
            ->search(\request('search'))
            ->date(\request('date'))
            ->status(\request('status'))
            ->latest()
            ->paginate();

        return view('deposit.thesieure', compact('deposits'));
    }

    public function handleThesieure(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'amount' => 'required|numeric|min:' . setting('tsr_deposit_limit'),
            'code' => 'required|string'
        ], [], [
            'amount' => 'số tiền',
            'code' => 'mã giao dịch'
        ]);

        $description = setting('tsr_deposit_description') . ' ' . $user->id;

        $tsr = new Thesieure();
        $transaction = $tsr->findTransaction($request->code, $request->amount, '8059054');

        if (is_null($transaction)) return back()->withErrors(['code' => 'Mã giao dịch không tồn tại']);

        $thesieure = \App\Models\Thesieure::query()->where('code', $transaction->id);

        if ($thesieure->exists()) return back()->withErrors(['code' => 'Mã giao dịch này đã được nạp trước đó']);

        DB::transaction(function () use ($transaction, $user) {
            $description = 'Nạp ' . number_format($transaction->amount) . 'đ mã giao dịch #' . $transaction->id . ' từ Thesieure.com';

            $deposit = Deposit::create([
                'user_id' => $user->id,
                'type' => Deposit::THESIEURE,
                'amount' => $transaction->amount,
                'status' => Deposit::SUCCESS,
                'description' => $description
            ]);

            \App\Models\Thesieure::create([
                'deposit_id' => $deposit->id,
                'code' => $transaction->id,
                'amount' => $transaction->amount,
                'description' => $transaction->description,
                'date' => $transaction->date
            ]);

            $user->update(['balance' => $user->balance + $transaction->amount]);

            $user->transactions()->create([
                'type' => Transaction::DEPOSIT,
                'amount' => $transaction->amount,
                'balance' => $user->balance,
                'description' => $description
            ]);
        });

        return to_route('deposit.thesieure')->with('success', 'Nạp thành công ' . number_format($request->amount) . 'đ từ Thesieure.com');
    }
}

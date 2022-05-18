<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Deposit;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;

class DepositController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Renderable
     */
    public function index()
    {
        $deposits = Deposit::query()->paginate();

        return view('admin.deposits.index', compact('deposits'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Deposit $deposit
     * @return Renderable
     */
    public function edit(Deposit $deposit)
    {
        return view('admin.deposits.edit', compact('deposit'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Deposit $deposit
     * @return RedirectResponse
     */
    public function update(Request $request, Deposit $deposit)
    {
        return to_route('admin.deposits.index')->with('success', 'Cập nhật đơn nạp tiền thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Deposit $deposit
     * @return Response
     */
    public function destroy(Deposit $deposit)
    {
        //
    }
}

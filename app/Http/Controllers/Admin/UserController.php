<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Renderable
     */
    public function index()
    {
        $users = User::query()->search(request('search'))->paginate();

        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Renderable
     */
    public function edit(User $user)
    {
        return view('admin.users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());
        
        return to_route('admin.users.index')->with('success', 'Cập nhật thông tin người dùng thành công');
    }
}

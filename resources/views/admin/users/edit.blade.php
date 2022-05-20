@extends('layouts.master')

@section('title', __('Users'))

@section('content')
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header border-bottom-dashed">
                <div class="row g-4 align-items-center">
                    <div class="col-sm">
                        <h5 class="card-title mb-0">Chỉnh sửa thành viên</h5>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.users.update', $user->id) }}" method="post">
                    @csrf
                    @method('PUT')
                    <div class="mb-3">
                        <label for="name" class="form-label">Họ và tên</label>
                        <input type="text" id="name" name="name" class="form-control" value="{{ old('name', $user) }}">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" name="email" class="form-control" value="{{ old('email', $user) }}">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Số điện thoại</label>
                        <input type="number" id="phone" name="phone" class="form-control" value="{{ old('phone', $user) }}">
                    </div>
                    <div class="mb-3">
                        <label for="role" class="form-label">Vai trò</label>
                        <select name="role" id="role" class="form-select" data-choices data-choices-search-false>
                            <option value="{{ \App\Models\User::ADMIN }}" @checked(old('role', $user) == \App\Models\User::ADMIN)>Quản trị viên</option>
                            <option value="{{ \App\Models\User::MEMBER }}" @checked(old('role', $user) == \App\Models\User::MEMBER)>Thành viên</option>
                        </select>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-4">
                            <label for="balance" class="form-label">Số dư</label>
                            <input type="text" id="balance" name="balance" class="form-control" value="{{ number_format($user->balance) }}đ" disabled>
                        </div>
                        <div class="col-md-4">
                            <label for="amount_deposited" class="form-label">Số tiền đã nạp</label>
                            <input type="text" id="amount_deposited" class="form-control" value="{{ number_format($user->amount_deposited) }}đ" disabled>
                        </div>
                        <div class="col-md-4">
                            <label for="amount_spent" class="form-label">Số tiền đã dùng</label>
                            <input type="text" id="amount_spent" class="form-control" value="{{ number_format($user->amount_spent) }}đ" disabled>
                        </div>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

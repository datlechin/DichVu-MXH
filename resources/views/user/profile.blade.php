@extends('user.layout')

@section('title', __('User Profile'))

@section('user-content')
    <div class="tab-pane {{ request()->routeIs('user.profile') ? 'active' : '' }}">
        <form action="{{ route('user.profile') }}" method="post">
            @csrf
            <div class="mb-3">
                <label class="form-label">Số dư</label>
                <input type="text" class="form-control" value="{{ number_format($user->balance) }}đ" readonly>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Họ tên</label>
                <input type="text" id="name" name="name" class="form-control" value="{{ old('name', $user->name) }}">
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" value="{{ $user->email }}" readonly>
            </div>
            <div class="mb-3">
                <label class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" value="{{ old('phone', $user->phone) }}" name="phone">
            </div>
            <div class="mb-3">
                <label class="form-label">Vai trò</label>
                <input type="text" class="form-control" value="{{ $user->roleName }}" readonly>
            </div>
            <div class="mb-3">
                <label class="form-label">Đăng nhập gần đây</label>
                <input type="text" class="form-control" value="{{ $user->lastSuccessfulLoginAt() }}" disabled>
            </div>
            <div class="text-end">
                <button type="submit" class="btn btn-primary">{{ __('Update') }}</button>
            </div>
        </form>
    </div>
@endsection

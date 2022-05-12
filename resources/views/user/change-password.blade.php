@extends('user.layout')

@section('title', __('Change Password'))

@section('user-content')
    <div class="tab-pane {{ request()->routeIs('user.change-password') ? 'active' : '' }}">
        <form action="{{ route('user.change-password') }}" method="post">
            @csrf
            <div class="mb-3">
                <label for="old_password" class="form-label">{{ __('Old Password') }}</label>
                <input type="password" class="form-control" id="old_password" name="old_password" placeholder="{{ __('Enter current password') }}" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">{{ __('New Password') }}</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="{{ __('Enter new password') }}" />
            </div>
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">{{ __('Confirm Password') }}</label>
                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="{{ __('Confirm new password') }}" />
            </div>
            <div class="text-end">
                <button type="submit" class="btn btn-success">{{ __('Change Password') }}</button>
            </div>
        </form>
    </div>
@endsection

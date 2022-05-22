@extends('layouts.master')

@section('content')
    <div class="position-relative mx-n4 mt-n4">
        <div class="profile-wid-bg profile-setting-img">
            <img src="{{ asset('assets/images/profile-bg.jpg') }}" class="profile-wid-img" alt="" />
            <div class="overlay-content">
                <div class="text-end p-3">
                    <div class="p-0 ms-auto rounded-circle profile-photo-edit">
                        <input id="profile-foreground-img-file-input" type="file" class="profile-foreground-img-file-input" />
                        <label for="profile-foreground-img-file-input" class="profile-photo-edit btn btn-light">
                            <i class="ri-image-edit-line align-bottom me-1"></i> {{ __('Change Cover') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xxl-3">
            <div class="card mt-n5">
                <div class="card-body p-4">
                    <div class="text-center">
                        <div class="profile-user position-relative d-inline-block mx-auto mb-4">
                            <img src="{{ Auth::user()->avatar }}" class="rounded-circle avatar-xl img-thumbnail user-profile-image shadow" alt="user-profile-image" />
                            <form action="{{ route('user.avatar') }}" method="post" id="form-avatar" enctype="multipart/form-data">
                                @csrf
                                <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                    <input id="avatar" type="file" name="avatar" class="profile-img-file-input" />
                                    <label for="avatar" class="profile-photo-edit avatar-xs">
                                        <span class="avatar-title rounded-circle bg-light text-body shadow">
                                            <i class="ri-camera-fill"></i>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <h5 class="fs-16 mb-1">{{ Auth::user()->name }}</h5>
                        <p class="text-muted mb-3">{{ Auth::user()->email }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-9">
            <div class="card mt-xxl-n5">
                <div class="card-header">
                    <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0">
                        <li class="nav-item">
                            <a class="nav-link {{ request()->routeIs('user.profile') ? 'active' : '' }}" href="{{ route('user.profile') }}">
                                <i class="fas fa-home"></i>
                                {{ __('Personal Information') }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{ request()->routeIs('user.change-password') ? 'active' : '' }}" href="{{ route('user.change-password') }}">
                                <i class="far fa-user"></i>
                                {{ __('Change Password') }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{ request()->routeIs('user.auth-log') ? 'active' : '' }}" href="{{ route('user.auth-log') }}">
                                <i class="far fa-user"></i>
                                Nhật ký đăng nhập
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-body p-4">
                    <div class="tab-content">
                        @yield('user-content')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        document.querySelector('#form-avatar').addEventListener('change', function (e) {
            this.submit();
        });
    </script>
@endpush

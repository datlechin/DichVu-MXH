<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | {{ setting('site_name') }}</title>
    <meta name="description" content="{{ setting('site_description') }}">
    <meta name="keywords" content="{{ setting('site_keywords') }}">
    <meta name="author" content="{{ setting('site_author', 'Ngô Quốc Đạt') }}">
    <link rel="shortcut icon" href="{{ asset('storage/images/' . setting('site_favicon')) }}" type="image/x-icon">
    @include('layouts.css')
</head>
<body>
    <div id="layout-wrapper">
        @include('partials.topbar')
        @include('partials.sidebar')
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    {{ \Diglactic\Breadcrumbs\Breadcrumbs::render() }}
                    @yield('content')
                </div>
            </div>
            @include('partials.footer')
        </div>
    </div>
    <button class="btn btn-danger btn-icon" id="back-to-top">
        <i class="ri-arrow-up-line"></i>
    </button>
    @include('partials.toastr')
    @include('layouts.scripts')
</body>
</html>

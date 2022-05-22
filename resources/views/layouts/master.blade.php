<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | {{ config('app.name', 'Laravel') }}</title>
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
    <button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top">
        <i class="ri-arrow-up-line"></i>
    </button>
    @include('partials.toastr')
    @include('layouts.scripts')
</body>
</html>

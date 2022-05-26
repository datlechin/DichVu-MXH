<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | {{ setting('site_name') }}</title>
    <meta name="description" content="{{ setting('site_description') }}">
    <meta name="keywords" content="{{ setting('site_keywords') }}">
    <meta name="author" content="{{ setting('site_author') }}">
    <meta name="robots" content="index, follow">
    @include('layouts.css')
</head>
<body>
    @yield('content')
    @include('layouts.scripts')
</body>
</html>

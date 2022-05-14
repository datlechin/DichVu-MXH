<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'admin', 'as' => 'admin.'], function () {
    Route::resource('/users', UserController::class)->only('index');
    Route::resource('/categories', CategoryController::class)->only('index', 'store');
    Route::resource('/services', ServiceController::class)->only('index', 'store');
});

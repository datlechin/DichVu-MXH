<?php

use App\Http\Controllers\Admin\{
    CategoryController,
    DepositController,
    MoneyController,
    OrderController,
    PackageController,
    ServiceController,
    UserController
};
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'admin', 'as' => 'admin.'], function () {
    Route::resource('/users', UserController::class)->only('index', 'edit', 'update');
    Route::resource('/categories', CategoryController::class)->except('create', 'show', 'destroy');
    Route::resource('/services', ServiceController::class)->only('index', 'store', 'edit', 'update', 'destroy');
    Route::resource('/packages', PackageController::class)->except('create', 'show');
    Route::resource('/deposits', DepositController::class)->only('index', 'edit', 'update', 'destroy');
    Route::resource('/orders', OrderController::class)->only('index', 'edit', 'update', 'destroy');
    Route::get('/money', [MoneyController::class, 'index'])->name('money');
    Route::post('/money', [MoneyController::class, 'handle']);
});

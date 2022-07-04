<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DepositController;
use App\Http\Controllers\Admin\MoneyController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PackageController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\TicketController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'admin', 'as' => 'admin.'], function () {
    Route::resource('/users', UserController::class)->only('index', 'edit', 'update');
    Route::resource('/categories', CategoryController::class)->except('create', 'show');
    Route::resource('/services', ServiceController::class)->only('index', 'store', 'edit', 'update', 'destroy');
    Route::resource('/packages', PackageController::class)->except('create', 'show');
    Route::resource('/deposits', DepositController::class)->only('index', 'edit', 'update', 'destroy');
    Route::resource('/orders', OrderController::class)->only('index', 'edit', 'update', 'destroy');
    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');
    Route::resource('/tickets', TicketController::class)->only('index', 'edit', 'update', 'destroy');
    Route::get('/money', [MoneyController::class, 'index'])->name('money');
    Route::post('/money', [MoneyController::class, 'handle']);
    Route::group(['prefix' => 'settings', 'as' => 'settings.'], function () {
        Route::get('/general', [SettingController::class, 'general'])->name('general');
        Route::get('/notifications', [SettingController::class, 'notifications'])->name('notifications');
        Route::get('/deposit', [SettingController::class, 'deposit'])->name('deposit');
        Route::post('/store', [SettingController::class, 'store'])->name('store');
    });
});

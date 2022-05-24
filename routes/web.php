<?php

use App\Http\Controllers\DepositController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\UserController;
use App\Thesieure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('language/{lang}', [LanguageController::class, 'changeLanguage'])->name('language');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::group(['prefix' => 'deposit', 'as' => 'deposit.'], function () {
        Route::get('/charge', [DepositController::class, 'charge'])->name('charge');
        Route::post('/charge', [DepositController::class, 'handleCharge']);
        Route::get('/thesieure', [DepositController::class, 'thesieure'])->name('thesieure');
        Route::post('/thesieure', [DepositController::class, 'handleThesieure']);
    });
    Route::get('/service/{category:slug}/{service:slug}', [ServiceController::class, 'index'])->name('service');
    Route::post('/service/{category:slug}/{service:slug}', [ServiceController::class, 'store']);
    Route::get('/service/get-package-price', [ServiceController::class, 'getPackagePrice'])->name('service.get-package-price');

    Route::group(['prefix' => 'user', 'as' => 'user.'], function () {
        Route::get('/profile', [UserController::class, 'profile'])->name('profile');
        Route::post('/profile', [UserController::class, 'updateProfile']);
        Route::post('/avatar', [UserController::class, 'updateAvatar'])->name('avatar');
        Route::get('/change-password', [UserController::class, 'changePassword'])->name('change-password');
        Route::post('/change-password', [UserController::class, 'updatePassword']);
        Route::get('/auth-log', [UserController::class, 'authLog'])->name('auth-log');
        Route::get('/tran-log', [UserController::class, 'tranLog'])->name('tran-log');
    });

    Route::group(['prefix' => 'tools', 'as' => 'tools.'], function () {
        Route::get('/get-facebook-id', [ToolController::class, 'getFacebookId'])->name('get-facebook-id');
        Route::post('/get-facebook-id', [ToolController::class, 'postFacebookId']);
    });
});

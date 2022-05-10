<?php

use App\Http\Controllers\DepositController;
use App\Http\Controllers\LanguageController;
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
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/deposit', [DepositController::class, 'index'])->name('deposit');

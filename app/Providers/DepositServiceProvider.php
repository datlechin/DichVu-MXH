<?php

namespace App\Providers;

use App\Deposit;
use Illuminate\Support\ServiceProvider;

class DepositServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('deposit', function ($app) {
            return New Deposit();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

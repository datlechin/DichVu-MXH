<?php

namespace App\Providers;

use App\Thesieure;
use Illuminate\Support\ServiceProvider;

class TsrServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('thesieure', function ($app) {
            return New Thesieure();
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

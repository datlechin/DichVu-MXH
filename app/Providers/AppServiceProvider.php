<?php

namespace App\Providers;

use App\Enums\CategoryStatus;
use App\Models\Category;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $categories = Category::query()->active()->get();
        View::share('categories_sidebar', $categories);
        Paginator::useBootstrapFive();
    }
}

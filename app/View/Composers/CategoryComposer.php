<?php

namespace App\View\Composers;

use App\Models\Category;
use Illuminate\View\View;

class CategoryComposer
{
    /**
     * The category model implementation.
     *
     * @var Category
     */
    protected $categories;

    /**
     * Create a new category composer.
     *
     * @param Category $category
     * @return void
     */
    public function __construct(Category $category)
    {
        $this->categories = $category->query()->with('services', function ($query) {
            $query->active();
        })
            ->active()
            ->get();
    }

    /**
     * Bind data to the view.
     *
     * @param View $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('sidebarCategories', $this->categories);
    }
}

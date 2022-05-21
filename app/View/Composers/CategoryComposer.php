<?php

namespace App\View\Composers;

use App\Models\Category;
use Illuminate\View\View;

class CategoryComposer
{
    /**
     * The category model implementation.
     *
     * @var \App\Models\Category
     */
    protected $categories;

    /**
     * Create a new category composer.
     *
     * @param  \App\Models\Category  $category
     * @return void
     */
    public function __construct(Category $category)
    {
        $this->categories = $category->active()->get();
    }

    /**
     * Bind data to the view.
     *
     * @param  \Illuminate\View\View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('sidebarCategories', $this->categories);
    }
}

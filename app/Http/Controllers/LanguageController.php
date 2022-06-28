<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function changeLanguage($lang)
    {
        App::setLocale($lang);
        Session::put('lang', $lang);

        return back();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index(Service $service)
    {
        return view('service.index', compact('service'));
    }

    public function store(Request $request)
    {

    }
}

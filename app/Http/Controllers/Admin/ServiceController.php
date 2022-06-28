<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Models\Category;
use App\Models\Service;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Renderable
     */
    public function index()
    {
        $categories = Category::query()
            ->where('type', Category::SERVICE_TYPE)
            ->active()
            ->get();
        $services = Service::query()->with('category')->paginate();

        return view('admin.services.index', compact('categories', 'services'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ServiceRequest  $request
     * @return RedirectResponse
     */
    public function store(ServiceRequest $request)
    {
        Service::create($request->validated() + ['slug' => Str::slug($request->name)]);

        return to_route('admin.services.index')->with('success', 'Thêm mới dịch vụ thành công');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Service  $service
     * @return Renderable
     */
    public function edit(Service $service)
    {
        $categories = Category::query()->active()->get();

        return view('admin.services.edit', compact('service', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ServiceRequest  $request
     * @param  Service  $service
     * @return RedirectResponse
     */
    public function update(ServiceRequest $request, Service $service)
    {
        $service->update($request->validated() + ['slug' => Str::slug($request->name)]);

        return to_route('admin.services.index')->with('success', 'Cập nhật thông tin dịch vụ thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}

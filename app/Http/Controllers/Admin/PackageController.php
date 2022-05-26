<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PackageRequest;
use App\Models\Category;
use App\Models\Package;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackageController extends Controller
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
        $packages = Package::query()->paginate();

        return view('admin.packages.index', compact('packages', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PackageRequest $request
     * @return RedirectResponse
     */
    public function store(PackageRequest $request)
    {
        Package::create($request->validated());

        return to_route('admin.packages.index')->with('success', 'Thêm mới gói dịch vụ thành công');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Package $package
     * @return Renderable
     */
    public function edit(Package $package)
    {
        $categories = Category::query()->active()->get();

        return view('admin.packages.edit', compact('package', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PackageRequest $request
     * @param Package $package
     * @return RedirectResponse
     */
    public function update(PackageRequest $request, Package $package)
    {
        $package->update($request->validated());

        return to_route('admin.packages.index')->with('success', 'Cập nhật thông tin gói dịch vụ thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Package $package
     * @return Response
     */
    public function destroy(Package $package)
    {
        //
    }
}

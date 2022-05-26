@extends('layouts.master')

@section('title', __('Categories'))

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card" id="tasksList">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Chỉnh sửa danh mục</h5>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.categories.update', $category->id) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="type" class="form-label">Loại danh mục</label>
                            <select class="form-control" data-choices data-choices-search-false name="type" id="type">
                                <option value="{{ \App\Models\Category::SERVICE_TYPE }}" @selected(\App\Models\Category::SERVICE_TYPE == $category->type)>Dịch vụ</option>
                                <option value="{{ \App\Models\Category::TICKET_TYPE }}" @selected(\App\Models\Category::TICKET_TYPE == $category->type)>Ticket</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="icon" class="form-label">Icon</label>
                            <input type="text" id="icon" name="icon" class="form-control" placeholder="Ví dụ: mdi mdi-facebook" value="{{ old('icon', $category) }}">
                            <p class="text-muted my-2">Xem các icon tại đây <a href="https://materialdesignicons.com/" target="_blank">materialdesignicons.com</a></p>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Tên danh mục</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Nhập tên danh mục" value="{{ old('name', $category) }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Trạng thái</label>
                            <select name="status" class="form-select" data-choices data-choices-search-false>
                                <option value="{{ \App\Models\Category::ACTIVE }}" @selected(old('status', $category) == \App\Models\Category::ACTIVE)>Kích hoạt</option>
                                <option value="{{ \App\Models\Category::INACTIVE }}" @selected(old('status', $category) == \App\Models\Category::INACTIVE)>Vô hiệu hoá</option>
                            </select>
                        </div>
                        <div class="text-end">
                            <button type="submit" class="btn btn-primary">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

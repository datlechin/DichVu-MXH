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
                            <label for="icon" class="form-label">Icon</label>
                            <input type="text" id="icon" name="icon" class="form-control" placeholder="Ví dụ: mdi mdi-facebook" value="{{ old('icon', $category) }}">
                            <p class="text-muted my-2">Xem các icon tại đây <a href="https://materialdesignicons.com/" target="_blank">materialdesignicons.com</a></p>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Tên danh mục</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Nhập tên danh mục" value="{{ old('name', $category) }}">
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

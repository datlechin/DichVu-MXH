@extends('layouts.master')

@section('title', __('Services'))

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Chỉnh sửa gói dịch vụ</h5>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.packages.update', $package->id) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="service_id" class="form-label">Dịch vụ</label>
                            <select class="form-control" data-choices name="service_id" id="service_id">
                                <option value="">Chọn dịch vụ</option>
                                @foreach($categories as $category)
                                    <optgroup label="{{ $category->name }}">
                                        @foreach($category->services as $service)
                                            <option value="{{ $service->id }}" @selected(old('service_id', $package) == $service->id)>{{ $service->name }}</option>
                                        @endforeach
                                    </optgroup>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Tên gói dịch vụ</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Nhập tên gói dịch vụ" value="{{ old('name', $package) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Giá tiền</label>
                            <input type="number" id="price" name="price" class="form-control" placeholder="Nhập giá tiền gói dịch vụ" value="{{ old('price', $package) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="min_quantity" class="form-label">Số lượng tối thiểu</label>
                            <input type="number" id="min_quantity" name="min_quantity" class="form-control" placeholder="Nhập số lượng mua tối thiểu" value="{{ old('min_quantity', $package) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="max_quantity" class="form-label">Số lượng tối đa</label>
                            <input type="number" id="max_quantity" name="max_quantity" class="form-control" placeholder="Nhập số lượng mua tối đa" value="{{ old('max_quantity', $package) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="note">Ghi chú</label>
                            <textarea id="note" name="note" class="ckeditor-classic">{{ old('note', $package) }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Trạng thái</label>
                            <select name="status" class="form-select" data-choices data-choices-search-false>
                                <option value="{{ \App\Models\Package::ACTIVE }}" @selected(old('status', $package) == \App\Models\Package::ACTIVE)>Kích hoạt</option>
                                <option value="{{ \App\Models\Package::INACTIVE }}" @selected(old('status', $package) == \App\Models\Package::INACTIVE)>Vô hiệu hoá</option>
                            </select>
                        </div>
                        <div class="hstack gap-2 justify-content-end">
                            <a href="{{ route('admin.packages.index') }}" class="btn btn-light">Quay lại</a>
                            <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

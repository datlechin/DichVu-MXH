@extends('layouts.master')

@section('title', __('Services'))

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">{{ __('Services List') }}</h5>
                        <div class="flex-shrink-0">
                            <button class="btn btn-danger add-btn" data-bs-toggle="modal" data-bs-target="#createModal">
                                <i class="ri-add-line align-bottom me-1"></i> {{ __('Create Service') }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.services.update', $service->id) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="category_id" class="form-label">{{ __('Category') }}</label>
                            <select class="form-control" data-choices name="category_id" id="category_id">
                                <option value="">Chọn danh mục</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}" @selected(old('category_id', $service) == $category->id)>{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">{{ __('Service Name') }}</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Tên dịch vụ" value="{{ old('name', $service) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="label" class="form-label">{{ __('Label') }}</label>
                            <input type="text" id="label" name="label" class="form-control" placeholder="{{ __('Label') }}" value="{{ old('label', $service) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="placeholder" class="form-label">{{ __('Placeholder') }}</label>
                            <input type="text" id="placeholder" name="placeholder" class="form-control" placeholder="{{ __('Placeholder') }}" value="{{ old('placeholder', $service) }}" />
                        </div>
                        <div class="mb-3">
                            <label for="description">{{ __('Description') }}</label>
                            <textarea id="description" name="description" class="ckeditor-classic">{{ old('description', $service) }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Trạng thái</label>
                            <select name="status" class="form-select" data-choices data-choices-search-false>
                                <option value="{{ \App\Models\Service::ACTIVE }}" @selected(old('status', $service) == \App\Models\Service::ACTIVE)>Kích hoạt</option>
                                <option value="{{ \App\Models\Service::INACTIVE }}" @selected(old('status', $service) == \App\Models\Service::INACTIVE)>Vô hiệu hoá</option>
                            </select>
                        </div>
                        <div class="hstack gap-2 justify-content-end">
                            <a href="{{ route('admin.services.index') }}" class="btn btn-light">Quay lại</a>
                            <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

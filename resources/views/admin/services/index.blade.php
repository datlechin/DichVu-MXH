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
                    <div class="table-responsive table-card mb-4">
                        <table class="table align-middle table-nowrap mb-0" id="tasksTable">
                            <thead class="table-light text-muted">
                            <tr>
                                <th>ID</th>
                                <th>{{ __('Service Name') }}</th>
                                <th>{{ __('Category Name') }}</th>
                                <th>{{ __('Status') }}</th>
                                <th>{{ __('Action') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($services as $service)
                                <tr>
                                    <td>{{ $service->id }}</td>
                                    <td>{{ $service->category->name }}</td>
                                    <td>{{ $service->name }}</td>
                                    <td>
                                        @if($service->status === \App\Models\Service::ACTIVE)
                                            <span class="badge badge-soft-success text-uppercase">{{ __('Active') }}</span>
                                        @elseif($service->status === \App\Models\Service::INACTIVE)
                                            <span class="badge badge-soft-danger text-uppercase">{{ __('Inactive') }}</span>
                                        @endif
                                    </td>
                                    <td>
                                        <ul class="list-inline hstack gap-2 mb-0">
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Chỉnh sửa">
                                                <a href="{{ route('admin.services.edit', $service->id) }}" class="text-primary d-inline-block">
                                                    <i class="ri-pencil-fill fs-16"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Xoá">
                                                <a class="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                    <i class="ri-delete-bin-5-fill fs-16"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-end mt-2">
                        {{ $services->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade zoomIn" id="createModal" tabindex="-1" aria-labelledby="createModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0">
                <div class="modal-header p-3 bg-soft-info">
                    <h5 class="modal-title" id="createModal">{{ __('Create Service') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('admin.services.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="category_id" class="form-label">{{ __('Category') }}</label>
                            <select class="form-control" data-choices name="category_id" id="category_id">
                                <option value="">Chọn danh mục</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">{{ __('Service Name') }}</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="{{ __('Service Name') }}" required />
                        </div>
                        <div class="mb-3">
                            <label for="label" class="form-label">{{ __('Label') }}</label>
                            <input type="text" id="label" name="label" class="form-control" placeholder="{{ __('Label') }}" />
                        </div>
                        <div class="mb-3">
                            <label for="placeholder" class="form-label">{{ __('Placeholder') }}</label>
                            <input type="text" id="placeholder" name="placeholder" class="form-control" placeholder="{{ __('Placeholder') }}" />
                        </div>
                        <div class="mb-3">
                            <label for="description">{{ __('Description') }}</label>
                            <textarea id="description" name="description" class="ckeditor-classic"></textarea>
                        </div>
                        <div class="hstack gap-2 justify-content-end">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ __('Close') }}</button>
                            <button type="submit" class="btn btn-success">{{ __('Add Service') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

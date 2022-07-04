@extends('layouts.master')

@section('title', __('Categories'))

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card" id="tasksList">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">{{ __('Categories List') }}</h5>
                        <div class="flex-shrink-0">
                            <button class="btn btn-danger add-btn" data-bs-toggle="modal" data-bs-target="#createModal">
                                <i class="ri-add-line align-bottom me-1"></i> {{ __('Create Category') }}
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
                                <th>Loại danh mục</th>
                                <th>{{ __('Name') }}</th>
                                <th>{{ __('Status') }}</th>
                                <th>{{ __('Action') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($categories as $category)
                                <tr>
                                    <td>{{ $category->id }}</td>
                                    <td>{{ $category->type_name }}</td>
                                    <td>{{ $category->name }}</td>
                                    <td>
                                        @if($category->status == \App\Models\Category::ACTIVE)
                                            <span class="badge badge-soft-success text-uppercase">Hoạt đông</span>
                                        @elseif($category->status == \App\Models\Category::INACTIVE)
                                            <span class="badge badge-soft-danger text-uppercase">Đã tắt</span>
                                        @endif
                                    </td>
                                    <td>
                                        <ul class="list-inline hstack gap-2 mb-0">
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Chỉnh sửa">
                                                <a href="{{ route('admin.categories.edit', $category->id) }}" class="text-primary d-inline-block">
                                                    <i class="ri-pencil-fill fs-16"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <form action="{{ route('admin.categories.destroy', $category->id) }}" method="post" onsubmit="return confirm('Bạn có chắc chắn muốn xoá?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="text-danger btn d-inline-block">
                                                        <i class="ri-delete-bin-5-fill fs-16"></i>
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-end mt-2">
                        {{ $categories->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade zoomIn" id="createModal" tabindex="-1" aria-labelledby="createModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content border-0">
                <div class="modal-header p-3 bg-soft-info">
                    <h5 class="modal-title" id="createModal">{{ __('Create Category') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('admin.categories.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="type" class="form-label">Loại danh mục</label>
                            <select class="form-control" data-choices data-choices-search-false name="type" id="type">
                                <option value="{{ \App\Models\Category::SERVICE_TYPE }}">Dịch vụ</option>
                                <option value="{{ \App\Models\Category::TICKET_TYPE }}">Ticket</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="icon" class="form-label">{{ __('Category Icon') }}</label>
                            <input type="text" id="icon" name="icon" class="form-control" placeholder="Ví dụ: mdi mdi-facebook">
                            <p class="text-muted my-2">Xem các icon tại đây <a href="https://materialdesignicons.com/" target="_blank">materialdesignicons.com</a></p>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">{{ __('Category Name') }}</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="{{ __('Category Name') }}" required />
                        </div>
                        <div class="hstack gap-2 justify-content-end">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ __('Close') }}</button>
                            <button type="submit" class="btn btn-success">{{ __('Add Category') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

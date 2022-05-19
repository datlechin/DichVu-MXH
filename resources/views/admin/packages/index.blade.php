@extends('layouts.master')

@section('title', __('Service Packages'))

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card" id="tasksList">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">{{ __('Service Package List') }}</h5>
                        <div class="flex-shrink-0">
                            <button class="btn btn-danger add-btn" data-bs-toggle="modal" data-bs-target="#createModal">
                                <i class="ri-add-line align-bottom me-1"></i> {{ __('Create Service Package') }}
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
                                <th>{{ __('Package name') }}</th>
                                <th>{{ __('Price') }}</th>
                                <th>{{ __('Min/Max quantity') }}</th>
                                <th>{{ __('Status') }}</th>
                                <th>{{ __('Action') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($packages as $package)
                                <tr>
                                    <td>{{ $package->id }}</td>
                                    <td>{{ $package->service->name }}</td>
                                    <td>{{ $package->name }}</td>
                                    <td>{{ number_format($package->price) }}đ</td>
                                    <td><span class="fw-bold">{{ $package->min_quantity }}</span>/<span class="fw-bold">{{ $package->max_quantity }}</span></td>
                                    <td>
                                        @if($package->status === \App\Enums\PackageStatus::Active)
                                            <span class="badge badge-soft-success text-uppercase">{{ __('Active') }}</span>
                                        @elseif($package->status === \App\Enums\PackageStatus::Inactive)
                                            <span class="badge badge-soft-danger text-uppercase">{{ __('Inactive') }}</span>
                                        @elseif($package->status === \App\Enums\PackageStatus::Suspended)
                                            <span class="badge badge-soft-warning text-uppercase">{{ __('Suspended') }}</span>
                                        @endif
                                    </td>
                                    <td>
                                        <ul class="list-inline hstack gap-2 mb-0">
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="{{ __('View') }}">
                                                <a href="apps-ecommerce-order-details.html" class="text-primary d-inline-block">
                                                    <i class="ri-eye-fill fs-16"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="{{ __('Edit') }}">
                                                <a href="#showModal" data-bs-toggle="modal" class="text-primary d-inline-block edit-item-btn">
                                                    <i class="ri-pencil-fill fs-16"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="{{ __('Delete') }}">
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
                        {{ $packages->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade zoomIn" id="createModal" tabindex="-1" aria-labelledby="createModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0">
                <div class="modal-header p-3 bg-soft-info">
                    <h5 class="modal-title" id="createModal">{{ __('Create Service Package') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('admin.packages.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="service_id" class="form-label">{{ __('Service') }}</label>
                            <select class="form-control" id="service_id" data-choices data-choices-groups name="service_id">
                                <option value="">Chọn dịch vụ</option>
                                @foreach($categories as $category)
                                    <optgroup label="{{ $category->name }}">
                                        @foreach($category->services as $service)
                                            <option value="{{ $service->id }}">{{ $service->name }}</option>
                                        @endforeach
                                    </optgroup>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">{{ __('Service Package Name') }}</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="{{ __('Service Package Name') }}" value="{{ old('name') }}" />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">{{ __('Price') }}</label>
                            <input type="number" id="price" name="price" class="form-control" placeholder="{{ __('Enter service package price') }}" value="{{ old('price') }}" />
                        </div>
                        <div class="mb-3">
                            <label for="min_quantity" class="form-label">{{ __('Min Quantity') }}</label>
                            <input type="number" id="min_quantity" name="min_quantity" class="form-control" placeholder="{{ __('Minimum purchase quantity') }}" value="{{ old('min_quantity') }}" />
                        </div>
                        <div class="mb-3">
                            <label for="max_quantity" class="form-label">{{ __('Max Quantity') }}</label>
                            <input type="number" id="max_quantity" name="max_quantity" class="form-control" placeholder="{{ __('Maximum purchase quantity') }}" value="{{ old('max_quantity') }}" />
                        </div>
                        <div class="mb-3">
                            <label for="note">{{ __('Note') }}</label>
                            <textarea id="note" name="note" class="ckeditor-classic">{{ old('note') }}</textarea>
                        </div>
                        <div class="hstack gap-2 justify-content-end">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ __('Close') }}</button>
                            <button type="submit" class="btn btn-success">{{ __('Add Package') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@extends('layouts.master')

@section('title', 'Chi tiết đơn dịch vụ #' . $order->id)

@section('content')
    <div class="row">
        <div class="col-lg-9">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Thông tin chi tiết đơn #{{ $order->id }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-card">
                        <table class="table table-nowrap align-middle table-borderless mb-0">
                            <thead class="table-light text-muted">
                            <tr>
                                <th scope="col">Dịch vụ</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h5 class="fs-15">
                                                <i class="{{ $order->package->service->category->icon }}"></i>
                                                <a href="{{ route('service.index', [$order->package->service->category->slug, $order->package->service->slug]) }}" class="link-primary">
                                                    {{ $order->package->service->name }}
                                                </a>
                                            </h5>
                                            <p class="text-muted mb-0">Gói dịch vụ: <span class="fw-medium">{{ $order->package->name }}</span></p>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ $order->total == 0 ? 'Miễn phí' : number_format($order->total / $order->quantity) . 'đ' }}</td>
                                <td>{{ number_format($order->quantity) }}</td>
                                <td class="fw-medium">{{ number_format($order->total) }}đ</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('admin.orders.update', $order->id) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label class="form-label">{{ $order->package->service->label }}</label>
                            <input type="text" class="form-control" value="{{ $order->input }}" disabled />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Ghi chú</label>
                            <textarea class="form-control" disabled>{{ $order->note }}</textarea>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Đặt lúc</label>
                                    <input type="text" class="form-control" value="{{ $order->created_at }}" disabled />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Cập nhật lúc</label>
                                    <input type="text" class="form-control" value="{{ $order->updated_at }}" disabled />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex">
                        <h5 class="card-title flex-grow-1 mb-0">Thông tin người đặt</h5>
                        <div class="flex-shrink-0">
                            <a href="{{ route('admin.users.edit', $order->user->id) }}" class="link-secondary">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mb-0 vstack gap-3">
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="{{ $order->user->avatar }}" alt="" class="avatar-sm rounded shadow">
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">{{ $order->user->name }}</h6>
                                    <p class="text-muted mb-0">{{ $order->user->role }}</p>
                                </div>
                            </div>
                        </li>
                        <li><i class="ri-mail-line me-2 align-middle text-muted fs-16"></i>{{ $order->user->email }}</li>
                        <li><i class="ri-phone-line me-2 align-middle text-muted fs-16"></i>{{ $order->user->phone }}</li>
                        <li><i class="ri-money-dollar-box-line me-2 align-middle text-muted fs-16"></i>
                            <span class="text-danger">{{ number_format($order->user->balance) }}đ</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection

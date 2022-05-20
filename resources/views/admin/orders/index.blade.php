@extends('layouts.master')

@section('title', 'Đơn dịch vụ')

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Danh sách Đơn dịch vụ</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-card mb-4">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light text-muted">
                            <tr>
                                <th>ID</th>
                                <th>Người đặt</th>
                                <th>Dịch vụ</th>
                                <th>Thành tiền</th>
                                <th>Nội dung</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($orders as $order)
                                <tr>
                                    <td>{{ $order->id }}</td>
                                    <td>{{ $order->user->email }}</td>
                                    <td>{{ $order->package->service->name }} - {{ $order->package->name }}</td>
                                    <td>{{ number_format($order->total) }}đ</td>
                                    <td>{{ $order->note }}</td>
                                    <td>
                                        @if($order->status == \App\Models\Order::PENDING)
                                            <span class="badge badge-soft-warning text-uppercase">Đang xử lý</span>
                                        @elseif($order->status == \App\Models\Order::PROCESSING)
                                            <span class="badge badge-soft-success text-uppercase">Đang thực hiện</span>
                                        @elseif($order->status == \App\Models\Order::COMPLETED)
                                            <span class="badge badge-soft-success text-uppercase">Hoàn thành</span>
                                        @elseif($order->status == \App\Models\Order::CANCELLED)
                                            <span class="badge badge-soft-danger text-uppercase">Đã hủy</span>
                                        @endif
                                    </td>
                                    <td>
                                        <ul class="list-inline hstack gap-2 mb-0">
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Chỉnh sửa">
                                                <a href="{{ route('admin.orders.edit', $order->id) }}" class="text-primary d-inline-block">
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
                        {{ $orders->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@extends('layouts.master')

@section('title', 'Đơn dịch vụ đã đặt')

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Đơn dịch vụ đã đặt</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-card mb-4">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead class="table-light text-muted">
                            <tr>
                                <th>ID</th>
                                <th>Thời gian</th>
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
                                    <td>{{ $order->created_at }}</td>
                                    <td>
                                        <h6 class="mb-1">
                                            <a href="{{ route('service.index', [$order->package->service->category->slug, $order->package->service->slug]) }}" class="text-body">
                                                {{ $order->package->service->name }}
                                            </a>
                                        </h6>
                                        <p class="text-muted mb-0">{{ $order->package->name }}</p>
                                    </td>
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
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Xem">
                                                <a href="{{ route('order.detail', $order->id) }}" class="text-success d-inline-block">
                                                    <i class="ri-eye-fill fs-18"></i>
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

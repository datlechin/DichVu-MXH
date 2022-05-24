@extends('layouts.master')

@section('title', setting('site_title'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="h-100">
                <div class="row mb-3 pb-1">
                    <div class="col-12">
                        <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                            <div class="flex-grow-1">
                                <h4 class="fs-16 mb-1">{{ __($greeting, ['name' => Auth::user()->name]) }}</h4>
                                <p class="text-muted mb-0">Here's what's happening with your store today.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    @if(Auth::user()->isAdmin())
                        <div class="col-xl-3 col-md-6">
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                {{ __('Members') }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                            <span class="counter-value" data-target="{{ number_format($users_count) }}">0</span>
                                        </h4>
                                        <div class="avatar-sm flex-shrink-0">
                                    <span class="avatar-title bg-warning rounded fs-3">
                                        <i class="bx bx-user-circle"></i>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif

                    <div class="col-xl-3 col-md-6">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 overflow-hidden">
                                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                            {{ __('Balance') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end justify-content-between mt-4">
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                        <span class="counter-value" data-target="{{ $balance }}">0</span>đ
                                    </h4>
                                    <div class="avatar-sm flex-shrink-0">
                                    <span class="avatar-title bg-danger rounded fs-3">
                                        <i class="bx bx-wallet"></i>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 overflow-hidden">
                                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">{{ __('Amount Deposited') }}</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end justify-content-between mt-4">
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                        <span class="counter-value" data-target="{{ $amount_deposited }}">0</span>đ
                                    </h4>
                                    <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-info rounded fs-3">
                                    <i class="bx bx-shopping-bag"></i>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 overflow-hidden">
                                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                            {{ __('Amount Spend') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end justify-content-between mt-4">
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                        <span class="counter-value" data-target="{{ $amount_spent }}">0</span>đ
                                    </h4>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-success rounded fs-3">
                                            <i class="bx bx-dollar-circle"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @if(Auth::user()->isAdmin())
                    <div class="row">
                        <div class="col-xl-7">
                            <div class="card">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">Đơn dịch vụ gần đây</h4>
                                </div>

                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <table class="table table-borderless table-hover table-nowrap align-middle mb-0">
                                            <thead class="table-light">
                                            <tr class="text-muted">
                                                <th scope="col">Dịch vụ</th>
                                                <th scope="col">Số tiền</th>
                                                <th scope="col">Thời gian</th>
                                                <th scope="col">Người đặt</th>
                                                <th scope="col" style="width: 16%;">Trạng thái</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($last_orders as $order)
                                                <tr>
                                                    <td>{{ $order->package->service->name }}</td>
                                                    <td>
                                                        <div class="text-success">{{ number_format($order->total) }}đ</div>
                                                    </td>
                                                    <td>{{ $order->created_at }}</td>
                                                    <td>
                                                        <img src="{{ $order->user->avatar }}" alt="" class="avatar-xs rounded-circle me-2 shadow" />
                                                        <a href="javascript:()" class="text-body fw-medium">{{ $order->user->name }}</a>
                                                    </td>
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
                                                </tr>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection

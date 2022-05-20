<div class="col-lg-12">
    <div class="card">
        <div class="card-header border-0">
            <div class="d-flex align-items-center">
                <h5 class="card-title mb-0 flex-grow-1">Lịch sử đơn <span class="fw-bold">{{ $service->name }}</span></h5>
            </div>
        </div>
        <div class="card-body border border-dashed border-end-0 border-start-0">
            <form action="{{ route('service', [$service->category->slug, $service->slug]) }}" method="get">
                <div class="row g-3">
                    <div class="col-xxl-5 col-sm-6">
                        <div class="search-box">
                            <input type="text" class="form-control search" name="search" placeholder="Tìm theo ID đơn hàng, nội dung..." />
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-sm-6">
                        <div>
                            <input type="text" class="form-control" name="date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" id="demo-datepicker" placeholder="Thời gian" />
                        </div>
                    </div>
                    <div class="col-xxl-2 col-sm-4">
                        <div>
                            <select class="form-control" data-choices data-choices-search-false name="status">
                                <option value="">{{ __('Status') }}</option>
                                <option value="pending">{{ __('Pending') }}</option>
                                <option value="completed">{{ __('Completed') }}</option>
                                <option value="cancelled">{{ __('Cancelled') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-sm-4">
                        <button type="submit" class="btn btn-primary">
                            <i class="ri-search-2-fill me-1 align-bottom"></i>
                            {{ __('Search') }}
                        </button>
                        <a href="{{ route('service', [$service->category->slug, $service->slug]) }}" class="btn btn-danger">
                            <i class="ri-refresh-line me-1 align-bottom"></i>
                            {{ __('Reset') }}
                        </a>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-body">
            <div class="table-responsive table-card mb-1">
                <table class="table table-nowrap align-middle" id="orderTable">
                    <thead class="text-muted table-light">
                    <tr class="text-uppercase">
                        <th>ID</th>
                        <th>Thời gian</th>
                        <th>Gói dịch vụ</th>
                        <th>{{ $service->label }}</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody class="list form-check-all">
                    @foreach($orders as $order)
                        <tr>
                            <td>#{{ $order->id }}</td>
                            <td>{{ $order->created_at->format('d M, Y') }}, <small class="text-muted">{{ $order->created_at->format('H:i:s') }}</small></td>
                            <td><span class="fw-bold">{{ $order->package->name }}</span></td>
                            <td>{{ $order->input }}</td>
                            <td>{{ number_format($order->quantity) }}</td>
                            <td>{{ number_format($order->total) }}đ</td>
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
                @empty($orders)
                    <div class="noresult">
                        <div class="text-center">
                            <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style="width: 75px; height: 75px;"></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                        </div>
                    </div>
                @endempty
            </div>
            <div class="d-flex justify-content-end">
                {{ $orders->links() }}
            </div>
        </div>
    </div>
</div>

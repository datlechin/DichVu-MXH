@extends('layouts.master')

@section('title', 'Danh sách ticket')

@section('content')
    <div class="row">
        <div class="col-xxl-3 col-sm-6">
            <div class="card card-animate">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Tổng số Ticket</p>
                            <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value" data-target="{{ $tickets->count() }}">0</span></h2>
                            <p class="mb-0 text-muted">
                                <span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 17.32 % </span> với tháng trước
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                                <i class="ri-ticket-2-line"></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
            <div class="card card-animate">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Ticket chờ xử lý</p>
                            <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value" data-target="{{ $tickets->pending()->count() }}">0</span></h2>
                            <p class="mb-0 text-muted">
                                <span class="badge bg-light text-danger mb-0"> <i class="ri-arrow-down-line align-middle"></i> 0.96 % </span> với tháng trước
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                                <i class="mdi mdi-timer-sand"></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
            <div class="card card-animate">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Ticket đã đóng</p>
                            <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value" data-target="{{ $tickets->closed()->count() }}">0</span></h2>
                            <p class="mb-0 text-muted">
                                <span class="badge bg-light text-danger mb-0"> <i class="ri-arrow-down-line align-middle"></i> 3.87 % </span> với tháng trước
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                                <i class="ri-shopping-bag-line"></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-sm-6">
            <div class="card card-animate">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Ticket đã xoá</p>
                            <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value" data-target="{{ $tickets->withTrashed()->count() }}">0</span></h2>
                            <p class="mb-0 text-muted">
                                <span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 1.09 % </span> với tháng trước
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                                <i class="ri-delete-bin-line"></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Tickets</h5>
                    </div>
                </div>
                <div class="card-body border border-dashed border-end-0 border-start-0">
                    <form action="{{ route('admin.tickets.index') }}" method="get">
                        <div class="row g-3">
                            <div class="col-xxl-5 col-sm-12">
                                <div class="search-box">
                                    <input type="text" class="form-control search bg-light border-light" placeholder="Tìm kiếm thông tin ticket..." />
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </div>

                            <div class="col-xxl-3 col-sm-4">
                                <input type="text" class="form-control bg-light border-light" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" id="demo-datepicker" placeholder="Thời gian" />
                            </div>

                            <div class="col-xxl-3 col-sm-4">
                                <div class="input-light">
                                    <select class="form-control" data-choices data-choices-search-false name="choices-single-default" id="status">
                                        <option value="">Trạng thái</option>
                                        <option value="" selected>Tất cả</option>
                                        <option value="1">Đang mở</option>
                                        <option value="2">Đã đóng</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xxl-1 col-sm-4">
                                <button type="submit" class="btn btn-primary w-100">
                                    <i class="ri-search-2-fill me-1 align-bottom"></i>
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-card mb-2">
                        <table class="table align-middle table-nowrap mb-0">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tiêu đề</th>
                                <th>Người dùng</th>
                                <th>Tạo lúc</th>
                                <th>Trạng thái</th>
                                <th>Độ ưu tiên</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody class="list form-check-all" id="ticket-list-data">
                            @foreach($pagination as $ticket)
                                <tr>
                                    <td>
                                        <a href="javascript:void(0);" class="fw-medium link-primary">#{{ $ticket->id }}</a>
                                    </td>
                                    <td>{{ $ticket->title }}</td>
                                    <td>{{ $ticket->user->email }}</td>
                                    <td>{{ $ticket->created_at }}</td>
                                    <td>
                                        @if($ticket->status == \App\Models\Ticket::STATUS_OPEN)
                                            <span class="badge badge-soft-success text-uppercase">Đang mở</span>
                                        @else
                                            <span class="badge badge-soft-danger text-uppercase">Đã đóng</span>
                                        @endif
                                    </td>
                                    <td>
                                        @if($ticket->priority == \App\Models\Ticket::PRIORITY_HIGH)
                                            <span class="badge bg-danger text-uppercase">Cao</span>
                                        @elseif($ticket->priority == \App\Models\Ticket::PRIORITY_MEDIUM)
                                            <span class="badge bg-warning text-uppercase">Trung bình</span>
                                        @else
                                            <span class="badge bg-success text-uppercase">Thấp</span>
                                        @endif
                                    </td>
                                    <td>
                                        <a href="" class="btn btn-soft-secondary btn-sm">
                                            <i class="ri-more-fill align-middle"></i>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        @if($pagination->count() < 1)
                            <div class="noresult mt-3">
                                <div class="text-center">
                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width: 75px; height: 75px;"> </lord-icon>
                                    <h5 class="mt-2">Không tìm thấy dữ liệu để hiển thị</h5>
                                </div>
                            </div>
                        @endif
                    </div>
                    <div class="d-flex justify-content-end mt-2">
                        {{ $pagination->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

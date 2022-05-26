@extends('layouts.master')

@section('title', $ticket->title)

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card mt-n4 mx-n4 mb-n5">
                <div class="bg-soft-warning">
                    <div class="card-body pb-4 mb-5">
                        <div class="row">
                            <div class="col-md">
                                <div class="row align-items-center">
                                    <div class="col-md-auto">
                                        <div class="avatar-md mb-md-0 mb-4">
                                            <div class="avatar-title bg-white rounded-circle">
                                                <img src="{{ $ticket->user->avatar }}" alt="" class="avatar-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md">
                                        <h4 class="fw-semibold">#{{ $ticket->id }} - {{ $ticket->title }}</h4>
                                        <div class="hstack gap-3 flex-wrap">
                                            <div class="text-muted">
                                                <i class="ri-building-line align-bottom me-1"></i>
                                                {{ setting('site_name') }}
                                            </div>
                                            <div class="vr"></div>
                                            <div class="text-muted">Tạo lúc : <span class="fw-medium">{{ $ticket->created_at }}</span></div>
                                            <div class="vr"></div>
                                            @if($ticket->status == \App\Models\Ticket::STATUS_OPEN)
                                                <div class="badge rounded-pill bg-success fs-12">Đang mở</div>
                                            @elseif($ticket->status == \App\Models\Ticket::STATUS_CLOSED)
                                                <div class="badge rounded-pill bg-danger fs-12">Đã đóng</div>
                                            @endif
                                            @if($ticket->priority == \App\Models\Ticket::PRIORITY_HIGH)
                                                <div class="badge rounded-pill bg-danger fs-12">Cao</div>
                                            @elseif($ticket->priority == \App\Models\Ticket::PRIORITY_MEDIUM)
                                                <div class="badge rounded-pill bg-warning fs-12">Trung bình</div>
                                            @elseif($ticket->priority == \App\Models\Ticket::PRIORITY_LOW)
                                                <div class="badge rounded-pill bg-success fs-12">Thấp</div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xxl-9">
            <div class="card">
                <div class="card-body p-4">
                    {!! $ticket->content !!}
                </div>
                <div class="card-body p-4">
                    <h5 class="card-title mb-4">Trả lời</h5>
                    <div class="px-3 mx-n3">
                        <div class="d-flex mb-4">
                            <div class="flex-shrink-0">
                                <img src="http://velzon.laravel-material.themesbrand.com/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle shadow" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5 class="fs-13">Joseph Parker <small class="text-muted">20 Dec 2021 - 05:47AM</small></h5>
                                <p class="text-muted">I am getting message from customers that when they place order always get error message .</p>
                                <a href="javascript: void(0);" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i> Reply</a>
                            </div>
                        </div>
                    </div>
                    <form action="javascript:void(0);" class="mt-3">
                        <div class="row g-3">
                            <div class="col-lg-12">
                                <label for="content" class="form-label">Trả lời</label>
                                <textarea class="form-control bg-light border-light" id="content" rows="3" placeholder="Nhập câu trả lời"></textarea>
                            </div>
                            <div class="col-lg-12 text-end">
                                <a href="javascript:void(0);" class="btn btn-success">Trả lời</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Ticket Details</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-card">
                        <table class="table table-borderless align-middle mb-0">
                            <tbody>
                            <tr>
                                <td class="fw-medium">Ticket</td>
                                <td>#VLZ<span id="t-no">135</span></td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Client</td>
                                <td id="t-client">Themesbrand</td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Project</td>
                                <td>Velzon - Admin Dashboard</td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Assigned To:</td>
                                <td>
                                    <div class="avatar-group">
                                        <a href="javascript:void(0);" class="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="Erica Kernan">
                                            <img src="http://velzon.laravel-material.themesbrand.com/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="javascript:void(0);" class="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="Alexis Clarke">
                                            <img src="http://velzon.laravel-material.themesbrand.com/assets/images/users/avatar-10.jpg" alt="" class="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="javascript:void(0);" class="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" data-bs-original-title="James Price">
                                            <img src="http://velzon.laravel-material.themesbrand.com/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="javascript: void(0);" class="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" data-bs-original-title="Add Members">
                                            <div class="avatar-xs">
                                                <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                    +
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Status:</td>
                                <td>
                                    <select class="form-select" id="t-status" data-choices data-choices-search-false aria-label="Default select example">
                                        <option value>Stauts</option>
                                        <option value="New" selected>New</option>
                                        <option value="Open">Open</option>
                                        <option value="Inprogress">Inprogress</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Priority</td>
                                <td>
                                    <span class="badge bg-danger" id="t-priority">High</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Create Date</td>
                                <td id="c-date">20 Dec, 2021</td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Due Date</td>
                                <td id="d-date">29 Dec, 2021</td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Last Activity</td>
                                <td>14 min ago</td>
                            </tr>
                            <tr>
                                <td class="fw-medium">Labels</td>
                                <td class="hstack text-wrap gap-1">
                                    <span class="badge badge-soft-primary">Admin</span>
                                    <span class="badge badge-soft-primary">UI</span>
                                    <span class="badge badge-soft-primary">Dashboard</span>
                                    <span class="badge badge-soft-primary">Design</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

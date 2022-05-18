@extends('layouts.master')

@section('title', 'Tiền đã nạp')

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card" id="tasksList">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Danh sách nạp tiền</h5>
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
                                <th>Người nạp</th>
                                <th>Nạp lúc</th>
                                <th>Kiểu nạp</th>
                                <th>Số tiền</th>
                                <th>Cập nhật lúc</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($deposits as $deposit)
                                <tr>
                                    <td>{{ $deposit->id }}</td>
                                    <td>{{ $deposit->user->email }}</td>
                                    <td>{{ $deposit->created_at }}</td>
                                    <td>{{ $deposit->type }}</td>
                                    <td>{{ number_format($deposit->amount) }}đ</td>
                                    <td>{{ $deposit->status == \App\Models\Deposit::SUCCESS ? $deposit->updated_at : '' }}</td>
                                    <td>
                                        @if($deposit->status == \App\Models\Deposit::SUCCESS)
                                            <span class="badge badge-soft-success text-uppercase">Thành công</span>
                                        @elseif($deposit->status == \App\Models\Deposit::PENDING)
                                            <span class="badge badge-soft-warning text-uppercase">Đang chờ</span>
                                        @elseif($deposit->status == \App\Models\Deposit::FAILED)
                                            <span class="badge badge-soft-danger text-uppercase">Thất bại</span>
                                        @elseif($deposit->status == \App\Models\Deposit::WRONG_AMOUNT)
                                            <span class="badge badge-soft-danger text-uppercase">Sai mệnh giá</span>
                                        @endif
                                    </td>
                                    <td>
                                        <ul class="list-inline hstack gap-2 mb-0">
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="Chỉnh sửa">
                                                <a href="{{ route('admin.deposits.edit', $deposit->id) }}" class="text-primary d-inline-block">
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
                        {{ $deposits->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

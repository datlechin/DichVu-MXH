@extends('layouts.master')

@section('title', 'Nhật ký giao dịch')

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Danh sách Nhật ký giao dịch</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive table-card mb-4">
                        <table class="table align-middle table-nowrap mb-0" id="tasksTable">
                            <thead class="table-light text-muted">
                            <tr>
                                <th>ID</th>
                                <th>Thời gian</th>
                                <th>Người dùng</th>
                                <th>Giao dịch</th>
                                <th>Số tiền</th>
                                <th>Số dư cuối</th>
                                <th>Nội dung</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($transactions as $transaction)
                                <tr>
                                    <td>#{{ $transaction->id }}</td>
                                    <td>{{ $transaction->created_at }}</td>
                                    <td>{{ $transaction->user->email }}</td>
                                    <td>{{ $transaction->type }}</td>
                                    <td>{!! $transaction->amount_with_color !!}</td>
                                    <td>{{ number_format($transaction->balance) }}đ</td>
                                    <td>{{ $transaction->description }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-end mt-2">
                        {{ $transactions->links() }}
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

@extends('layouts.master')

@section('title', 'Chỉnh sửa đơn nạp tiền #' . $deposit->id)

@section('content')
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Thông tin đơn nạp tiền <span class="fw-bold">#{{ $deposit->id }}</span></h5>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.deposits.update', $deposit->id) }}" method="post">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label class="form-label">Người nạp</label>
                            <input type="text" class="form-control" value="{{ $deposit->user->name }} - {{ $deposit->user->email }}" disabled>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Kiểu nạp</label>
                            <input type="text" class="form-control" value="{{ $deposit->type }}" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="amount" class="form-label">Số tiền</label>
                            <input type="number" id="amount" name="amount" class="form-control" value="{{ $deposit->amount }}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Nội dung</label>
                            <input type="text" class="form-control" value="{{ $deposit->description }}" disabled>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Trạng thái</label>
                            <select name="status" class="form-select" data-choices data-choices-search-false>
                                <option value="{{ \App\Models\Deposit::PENDING }}" @selected(old('status', $deposit) == \App\Models\Deposit::PENDING)>Chờ xử lý</option>
                                <option value="{{ \App\Models\Deposit::SUCCESS }}" @selected(old('status', $deposit) == \App\Models\Deposit::SUCCESS)>Thành công</option>
                                <option value="{{ \App\Models\Deposit::FAILED }}" @selected(old('status', $deposit) == \App\Models\Deposit::FAILED)>Thất bại</option>
                                <option value="{{ \App\Models\Deposit::WRONG_AMOUNT }}" @selected(old('status', $deposit) == \App\Models\Deposit::WRONG_AMOUNT)>Sai mệnh giá</option>
                            </select>
                            <p class="text-muted">Nếu trạng thái là thành công, người dùng sẽ được cộng {{ $deposit->amount }} vào tài khoản</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <label class="created_at">Nạp lúc</label>
                                <input type="text" class="form-control" value="{{ $deposit->created_at }}" disabled>
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label class="updated_at">Cập nhật lúc</label>
                                <input type="text" class="form-control" value="{{ $deposit->updated_at }}" disabled>
                            </div>
                        </div>
                        <div class="text-end">
                            <button type="submit" class="btn btn-primary">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            @if($deposit->charge()->exists())
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0 flex-grow-1">Thông tin thẻ cào</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label">Request ID</label>
                            <input type="text" class="form-control" value="{{ $deposit->charge->request_id }}" disabled>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Loại thẻ</label>
                            <input type="text" class="form-control" value="{{ $deposit->charge->telco }}" disabled>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mệnh giá</label>
                            <input type="text" class="form-control" value="{{ number_format($deposit->charge->amount) }}đ" disabled>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Số serial</label>
                            <input type="text" class="form-control" value="{{ $deposit->charge->serial }}" disabled>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mã thẻ</label>
                            <input type="text" class="form-control" value="{{ $deposit->charge->pin }}" disabled>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
@endsection

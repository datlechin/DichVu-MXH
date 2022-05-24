@extends('deposit.index')

@section('title', 'Nạp tự động bằng Thesieure.com')

@section('content-deposit')
    <div class="tab-pane active">
        <form action="{{ route('deposit.thesieure') }}" method="post">
            @csrf
            <div class="mb-3">
                <label class="form-label">Tài khoản TSR</label>
                <input type="text" class="form-control" value="{{ setting('tsr_username') }}" disabled>
            </div>
            <div class="mb-3">
                <label class="form-label">Nội dung chuyển tiền</label>
                <input type="text" class="form-control" value="{{ setting('tsr_deposit_description') }} {{ Auth::id() }}" disabled>
            </div>
            <div class="mb-3">
                <label for="amount" class="form-label">Số tiền</label>
                <input type="number" class="form-control" id="amount" name="amount" placeholder="Nhập số tiền đã chuyển" value="{{ old('amount') }}">
            </div>
            <div class="mb-3">
                <label for="code" class="form-label">Mã giao dịch</label>
                <input type="text" class="form-control" id="code" name="code" placeholder="Nhập mã giao dịch trên web thesieure.com" value="{{ old('code') }}">
            </div>
            <div class="text-end">
                <button type="submit" class="btn btn-success">Kiểm tra</button>
            </div>
        </form>
    </div>
@endsection

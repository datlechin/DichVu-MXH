@extends('layouts.master')

@section('title', 'Cấu hình nạp tiền')

@section('content')
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Cấu hình nạp tự động</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
                        <label class="form-label text-muted text-uppercase fw-semibold">Nạp qua Thesieure.com</label>
                        <div class="mb-3">
                            <label for="tsr_cookie" class="form-label">Cookie</label>
                            <input type="text" id="tsr_cookie" name="tsr_cookie" class="form-control" value="{{ setting('tsr_cookie') }}">
                        </div>
                        <div class="mb-3">
                            <label for="tsr_username" class="form-label">Tài khoản</label>
                            <input type="text" id="tsr_username" name="tsr_username" class="form-control" value="{{ setting('tsr_username') }}">
                        </div>
                        <div class="mb-3">
                            <label for="tsr_deposit_description" class="form-label">Nội dung chuyển tiền</label>
                            <input type="text" id="tsr_deposit_description" name="tsr_deposit_description" class="form-control" value="{{ setting('tsr_deposit_description') }}">
                        </div>
                        <div class="mb-3">
                            <label for="tsr_deposit_limit" class="form-label">Số tiền nạp tối thiểu</label>
                            <input type="number" id="tsr_deposit_limit" name="tsr_deposit_limit" class="form-control" value="{{ setting('tsr_deposit_limit') }}">
                        </div>
                        <div class="mb-3">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" role="switch" id="tsr_enable" name="tsr_enable" @checked(setting('tsr_enable'))>
                                <label class="form-check-label" for="tsr_enable">Kích hoạt</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Ghi chú nạp tiền</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="charge_note">Ghi chú nạp thẻ cào</label>
                            <textarea class="ckeditor-classic" id="charge_note" name="charge_note" rows="5">{{ setting('charge_note') }}</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

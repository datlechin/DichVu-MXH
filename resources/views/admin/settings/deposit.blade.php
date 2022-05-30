@extends('layouts.master')

@section('title', 'Cấu hình nạp tiền')

@section('content')
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Tự động qua thesieure.com (chuyển tiền)</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
                        <p class="fw-bold fs-15">Xem hướng dẫn cấu hình <a href="https://github.com/datlechin/DichVu-MXH/wiki/Cấu-hình-nạp-tự-động-qua-thesieure.com" target="_blank">tại đây</a></p>
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
                                <input class="form-check-input" type="checkbox" role="switch" id="tsr_enabled" name="tsr_enabled" @checked(setting('tsr_enabled'))>
                                <label class="form-check-label" for="tsr_enabled">Kích hoạt</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Tích hợp nạp tự động</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="charge_provider" class="form-label">Bên tích hợp</label>
                            <select class="form-control" data-choices data-choices-search-false name="charge_provider" id="charge_provider">
                                <option value="TSR">Thesieure.com</option>
                                <option value="CARDVIP">Cardvip.vn</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="charge_api_id" class="form-label">API ID</label>
                            <input type="text" id="charge_api_id" name="charge_api_id" class="form-control" value="{{ setting('charge_api_id') }}" placeholder="Nếu không có nhập đại cái gì cũng được">
                        </div>
                        <div class="mb-3">
                            <label for="charge_api_key" class="form-label">API Key</label>
                            <input type="text" id="charge_api_key" name="charge_api_key" class="form-control" value="{{ setting('charge_api_key') }}" placeholder="Mã API Key">
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

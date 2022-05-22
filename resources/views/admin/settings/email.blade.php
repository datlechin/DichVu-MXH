@extends('layouts.master')

@section('title', 'Thiết lập email')

@section('content')
    <div class="col-lg-9">
        <div class="card">
            <div class="card-header align-items-center d-flex">
                <h4 class="card-title mb-0 flex-grow-1">Thiết lập email</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.settings.email') }}" method="post">
                    @csrf
                    <div class="mb-3">
                        <label for="mail_mailer">Mailer</label>
                        <select class="form-control" id="mail_mailer" name="mail_mailer" data-choices data-choices-search-false>
                            <option value="smtp">SMTP</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="mail_host">Host</label>
                        <input type="text" class="form-control" id="mail_host" name="mail_host" value="{{ config('mail.host') }}">
                    </div>
                    <div class="mb-3">
                        <label for="mail_port">Cổng</label>
                        <input type="text" class="form-control" id="mail_port" name="mail_port" value="{{ config('mail.port') }}">
                    </div>
                    <div class="mb-3">
                        <label for="mail_username">Tên tài khoản</label>
                        <input type="text" class="form-control" id="mail_username" name="mail_username" value="{{ config('mail.username') }}">
                    </div>
                    <div class="mb-3">
                        <label for="mail_password">Mật khẩu</label>
                        <input type="text" class="form-control" id="mail_password" name="mail_password" value="{{ config('mail.password') }}">
                    </div>
                    <div class="mb-3">
                        <label for="mail_encryption">Mã hoá</label>
                        <select class="form-control" id="mail_encryption" name="mail_encryption" data-choices data-choices-search-false>
                            <option value="tls">TLS</option>
                            <option value="ssl">SSL</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="mail_from_address">Địa chỉ email</label>
                        <input type="text" class="form-control" id="mail_from_address" name="mail_from_address" value="{{ config('mail.from.address') }}">
                    </div>
                    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    <button type="reset" class="btn btn-secondary">Gửi email test</button>
                </form>
            </div>
        </div>
    </div>
@endsection

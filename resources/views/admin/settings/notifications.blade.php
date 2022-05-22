@extends('layouts.master')

@section('title', 'Thiết lập email')

@section('content')
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Cấu hình email</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="mail_mailer">Mailer</label>
                            <select class="form-control" id="mail_mailer" name="mail_mailer" data-choices data-choices-search-false>
                                <option value="smtp" @selected(setting('mail_mailer') == 'smtp')>SMTP</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="mail_host">Host</label>
                            <input type="text" class="form-control" id="mail_host" name="mail_host" value="{{ setting('mail_host') }}">
                        </div>
                        <div class="mb-3">
                            <label for="mail_port">Cổng</label>
                            <input type="text" class="form-control" id="mail_port" name="mail_port" value="{{ setting('mail_port')  }}">
                        </div>
                        <div class="mb-3">
                            <label for="mail_username">Tên tài khoản</label>
                            <input type="text" class="form-control" id="mail_username" name="mail_username" value="{{ setting('mail_username') }}">
                        </div>
                        <div class="mb-3">
                            <label for="mail_password">Mật khẩu</label>
                            <input type="text" class="form-control" id="mail_password" name="mail_password" value="{{ setting('mail_password') }}">
                        </div>
                        <div class="mb-3">
                            <label for="mail_encryption">Mã hoá</label>
                            <select class="form-control" id="mail_encryption" name="mail_encryption" data-choices data-choices-search-false>
                                <option value="tls" @selected(setting('mail_encryption') == 'tls')>TLS</option>
                                <option value="ssl" @selected(setting('mail_encryption') == 'ssl')>SSL</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="mail_from_address">Địa chỉ email</label>
                            <input type="text" class="form-control" id="mail_from_address" name="mail_from_address" value="{{ setting('mail_from_address') }}">
                        </div>
                        <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Cấu hình Telegram</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="telegram_token">Token</label>
                            <input type="text" class="form-control" id="telegram_token" name="telegram_token" value="{{ setting('telegram_token') }}">
                        </div>
                        <div class="mb-3">
                            <label for="telegram_chat_id">Chat ID</label>
                            <input type="text" class="form-control" id="telegram_chat_id" name="telegram_chat_id" value="{{ setting('telegram_chat_id') }}">
                        </div>

                        <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

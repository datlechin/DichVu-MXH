@extends('layouts.master')

@section('title', 'Thiết lập email')

@section('content')
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Cấu hình nạp tiền</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.settings.store') }}" method="post">
                        @csrf
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

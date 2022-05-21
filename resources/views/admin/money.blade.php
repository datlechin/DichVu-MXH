@extends('layouts.master')

@section('title', 'Cộng trừ tiền')

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                        <h5 class="card-title mb-0 flex-grow-1">Cộng trừ tiền thành viên</h5>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.money') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="user" class="form-label">Người dùng</label>
                            <input type="text" id="user" name="user" class="form-control" placeholder="Nhập địa chỉ email hoặc số điện thoại người dùng" value="{{ old('user') }}">
                        </div>
                        <div class="mb-3">
                            <label for="money" class="form-label">Số tiền</label>
                            <input type="number" id="money" name="money" class="form-control" placeholder="Nhập số tiền cần cộng trừ" value="{{ old('money') }}">
                        </div>
                        <div class="mb-3">
                            <label for="reason" class="form-label">Lý do</label>
                            <textarea name="reason" id="reason" class="form-control" rows="3" placeholder="Nhập lý do cộng trừ tiền">{{ old('reason') }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="type" class="form-label">Loại</label>
                            <select name="type" id="type" class="form-control" data-choices data-choices-search-false>
                                <option value="1">Cộng tiền</option>
                                <option value="0">Trừ tiền</option>
                            </select>
                        </div>
                        <div class="text-end">
                            <button type="submit" class="btn btn-success">Thực hiện</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@extends('layouts.master')

@section('title', __('Deposit'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="h-100">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header align-items-center d-flex">
                                <h4 class="card-title mb-0 flex-grow-1">Nạp tiền bằng thẻ cào</h4>
                            </div>
                            <div class="card-body">
                                <form action="{{ route('deposit') }}" method="POST">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="telco" class="form-label">Nhà mạng</label>
                                        <select class="form-control" data-choices data-choices-search-false name="telco" id="telco">
                                            <option value="">Chọn loại thẻ</option>
                                            <option value="VIETTEL">Thẻ Viettel</option>
                                            <option value="MOBIFONE">Thẻ Mobiphone</option>
                                            <option value="VINAPHONE">Thẻ Vinaphone</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="amount" class="form-label">Mệnh giá</label>
                                        <select class="form-control" data-choices data-choices-search-false name="amount" id="amount">
                                            <option value="">Chọn mệnh giá</option>
                                            <option value="10000">10,000đ</option>
                                            <option value="20000">20,000đ</option>
                                            <option value="50000">50,000đ</option>
                                            <option value="100000">100,000đ</option>
                                            <option value="200000">200,000đ</option>
                                            <option value="500000">500,000đ</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="serial" class="form-label">Số serial</label>
                                        <input type="text" class="form-control" id="serial" name="serial" placeholder="Nhập số serial thẻ">
                                    </div>
                                    <div class="mb-3">
                                        <label for="pin" class="form-label">Mã thẻ</label>
                                        <input type="text" class="form-control" id="pin" name="pin" placeholder="Nhập mã thẻ">
                                    </div>
                                    <div class="text-end">
                                        <button type="submit" class="btn btn-primary">Nạp thẻ</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header align-items-center d-flex">
                                <h4 class="card-title mb-0 flex-grow-1">Nạp tiền bằng ví / ngân hàng</h4>
                            </div>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('deposit.history')
    </div>
@endsection

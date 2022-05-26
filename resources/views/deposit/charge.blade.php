@extends('deposit.index')

@section('title', 'Nạp thẻ cào')

@section('content-deposit')
    <div class="tab-pane active">
        <form action="{{ route('deposit.charge') }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="telco" class="form-label">Nhà mạng</label>
                <select class="form-control" data-choices data-choices-search-false name="telco" id="telco">
                    <option value="">Chọn loại thẻ</option>
                    <option value="VIETTEL" @selected(old('telco') === 'VIETTEL')>Thẻ Viettel</option>
                    <option value="MOBIFONE" @selected(old('telco') === 'MOBIFONE')>Thẻ Mobiphone</option>
                    <option value="VINAPHONE" @selected(old('telco') === 'VINAPHONE')>Thẻ Vinaphone</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="amount" class="form-label">Mệnh giá</label>
                <select class="form-control" data-choices data-choices-search-false name="amount" id="amount">
                    <option value="">Chọn mệnh giá</option>
                    <option value="10000" @selected(old('amount') === '10000')>10,000đ</option>
                    <option value="20000" @selected(old('amount') === '20000')>20,000đ</option>
                    <option value="50000" @selected(old('amount') === '50000')>50,000đ</option>
                    <option value="100000" @selected(old('amount') === '100000')>100,000đ</option>
                    <option value="200000" @selected(old('amount') === '200000')>200,000đ</option>
                    <option value="500000" @selected(old('amount') === '500000')>500,000đ</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="serial" class="form-label">Số serial</label>
                <input type="text" class="form-control" id="serial" name="serial" placeholder="Nhập số serial thẻ" value="{{ old('serial') }}">
            </div>
            <div class="mb-3">
                <label for="pin" class="form-label">Mã thẻ</label>
                <input type="text" class="form-control" id="pin" name="pin" placeholder="Nhập mã thẻ" value="{{ old('pin') }}">
            </div>
            <div class="text-end">
                <button type="submit" class="btn btn-primary">Nạp thẻ</button>
            </div>
        </form>
    </div>
@endsection

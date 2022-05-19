@extends('layouts.master')

@section('title', $service->name)

@section('content')
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Tạo đơn <span class="fw-bold">{{ $service->name }}</span> - <span class="fw-bold">{{ $service->category->name }}</span></h5>
                </div>
                <div class="card-body">
                    <form action="{{ route('service', [$service->category->slug, $service->slug]) }}" method="post">
                        @csrf
                        <div class="row mb-3">
                            <div class="col-lg-3">
                                <label for="{{ Str::slug($service->label) }}" class="form-label">{{ $service->label }}</label>
                            </div>
                            <div class="col-lg-9">
                                <input type="text" class="form-control" id="{{ Str::slug($service->label) }}" name="input" placeholder="{{ $service->placeholder }}" value="{{ old('input') }}">
                            </div>
                        </div>
                        @if($service->packages()->count() > 0)
                            <div class="row mb-3">
                                <div class="col-lg-3">
                                    <label class="form-label">{{ __('Service Packages') }}</label>
                                </div>
                                <div class="col-lg-9">
                                    @foreach($service->packages as $package)
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="radio" name="package_id" id="package_id_{{ $package->id }}" value="{{ $package->id }}" @checked(old('package_id') == $package->id)>
                                            <label class="form-check-label" for="package_id_{{ $package->id }}">
                                                {{ $package->name }}
                                                <span class="badge badge-label bg-secondary">
                                                <i class="bx bx-dollar"></i>
                                                {{ number_format($package->price) }}đ
                                            </span>
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endif
                        <div class="row mb-3">
                            <div class="col-lg-3">
                                <label for="quantity" class="form-label">{{ __('Quantity') }}</label>
                            </div>
                            <div class="col-lg-9">
                                <input type="number" class="form-control" id="quantity" name="quantity" placeholder="Nhập số lượng cần mua" value="{{ old('quantity') }}">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-3">
                                <label for="note" class="form-label">{{ __('Note') }}</label>
                            </div>
                            <div class="col-lg-9">
                                <textarea class="form-control" id="note" name="note" placeholder="Nhập ghi chú">{{ old('note') }}</textarea>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check card-radio">
                                <input type="radio" class="form-check-input" checked>
                                <label class="form-check-label">
                                    <span class="fs-20 float-end mt-2 text-wrap d-block fw-semibold" id="total">0đ</span>
                                    <span class="fs-14 mb-1 text-wrap d-block">Tổng thanh toán</span>
                                    <span class="text-muted fw-normal text-wrap d-block">Số dư của bạn: <span class="fw-bold text-danger">{{ number_format(Auth::user()->balance) }}đ</span></span>
                                </label>
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn-lg waves-effect waves-light">
                                <i class="fas fa-plus mr-1"></i> Tạo đơn hàng
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">{{ __('Note') }}</h5>
                </div>
                <div class="card-body"></div>
            </div>
        </div>
        @include('service.history')
    </div>
@endsection


@push('scripts')
    <script>
        $(document).ready(function () {
            let quantityInput = $('#quantity');
            let total = 0;
            let price = 0;
            let quantity = quantityInput.val();

            $('input[name="package_id"]').change(function () {
                let package_id = $(this).val();
                $.ajax({
                    url: '{{ route('service.get-package-price') }}?package_id=' + package_id,
                    type: 'GET',
                    success: function (data) {
                        price = data.price;
                        total = price * quantity;
                        $('#total').text(formatPrice(total));
                    }
                });
            });

            quantityInput.on('input', function () {
                quantity = $(this).val();
                total = price * quantity;
                $('#total').text(formatPrice(total));
            });
        });

        const formatPrice = (price) => {
            return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ';
        }
    </script>
@endpush

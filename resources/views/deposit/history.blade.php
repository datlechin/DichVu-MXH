<div class="col-lg-12">
    <div class="card">
        <div class="card-header border-0">
            <div class="d-flex align-items-center">
                <h5 class="card-title mb-0 flex-grow-1">{{ __('Deposit History') }}</h5>
            </div>
        </div>
        <div class="card-body border border-dashed border-end-0 border-start-0">
            <form action="{{ route('deposit') }}" method="get">
                <div class="row g-3">
                    <div class="col-xxl-4 col-sm-12">
                        <div class="search-box">
                            <input type="text" class="form-control search bg-light border-light" name="search" placeholder="{{ __('Enter transaction ID or card info') }}" value="{{ request('search') }}">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-sm-4">
                        <input type="text" class="form-control bg-light border-light" data-provider="flatpickr" data-date-format="Y-m-d" name="date" value="{{ request('date') }}" placeholder="Chọn ngày">
                    </div>

                    <div class="col-xxl-3 col-sm-4">
                        <div class="input-light">
                            <select class="form-control" data-choices data-choices-search-false name="status">
                                <option value="" @selected(request('status') == '')>{{ __('All') }}</option>
                                <option value="1" @selected(request('status') == '1')>{{ __('Success') }}</option>
                                <option value="0" @selected(request('status') == '0')>{{ __('Pending') }}</option>
                                <option value="2" @selected(request('status') == '2')>{{ __('Failed') }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-sm-4">
                        <button type="submit" class="btn btn-primary">
                            <i class="ri-search-2-line me-1 align-bottom"></i>
                            {{ __('Search') }}
                        </button>
                        <a href="{{ route('deposit') }}" class="btn btn-danger">
                            <i class="ri-refresh-line me-1 align-bottom"></i>
                            {{ __('Reset') }}
                        </a>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-body">
            <div class="table-responsive table-card mb-4">
                <table class="table align-middle table-nowrap mb-0">
                    <thead class="table-light text-muted">
                    <tr>
                        <td>ID</td>
                        <th>{{ __('Time') }}</th>
                        <th>{{ __('Deposit Type') }}</th>
                        <th>{{ __('Amount') }}</th>
                        <th>{{ __('Content') }}</th>
                        <th>{{ __('Status') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($deposits as $deposit)
                        <tr>
                            <td>#{{ $deposit->id }}</td>
                            <td>{{ $deposit->created_at }}</td>
                            <td>{{ $deposit->type }}</td>
                            <td>{{ number_format($deposit->amount) }}đ</td>
                            <td>{{ $deposit->description }}</td>
                            <td>
                                @if($deposit->status == \App\Models\Deposit::PENDING)
                                    <span class="badge badge-soft-warning text-uppercase">Chờ xử lý</span>
                                @elseif($deposit->status == \App\Models\Deposit::SUCCESS)
                                    <span class="badge badge-soft-success text-uppercase">Thành công</span>
                                @elseif($deposit->status == \App\Models\Deposit::FAILED)
                                    <span class="badge badge-soft-danger text-uppercase">Thất bại</span>
                                @elseif($deposit->status == \App\Models\Deposit::WRONG_AMOUNT)
                                    <span class="badge badge-soft-danger text-uppercase">Sai mệnh giá</span>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

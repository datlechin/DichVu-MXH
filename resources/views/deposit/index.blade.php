@extends('layouts.master')

@section('title', __('Deposit'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="h-100">
                <div class="row">
                    <div class="col-md-7">
                        <div class="card">
                            <div class="card-body">
                                <ul class="nav nav-tabs mb-3">
                                    <li class="nav-item">
                                        <a href="{{ route('deposit.thesieure') }}" class="nav-link @if(request()->routeIs('deposit.thesieure')) active @endif">
                                            Thesieure.com
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="{{ route('deposit.charge') }}" class="nav-link">
                                            Nạp thẻ cào
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content text-muted">
                                    @yield('content-deposit')
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card">
                            <div class="card-header align-items-center d-flex">
                                <h4 class="card-title mb-0 flex-grow-1">Ghi chú</h4>
                            </div>
                            <div class="card-body">
                                {!! setting('charge_note') !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('deposit.history')
    </div>
@endsection

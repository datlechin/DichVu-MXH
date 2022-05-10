@extends('layouts.master')

@section('title', __('Deposit'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="h-100">
                <div class="row">

                </div>
            </div>
        </div>
        @include('deposit.history')
    </div>
@endsection

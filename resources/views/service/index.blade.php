@extends('layouts.master')

@section('title', $service->name)

@section('content')
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">{{ __('Create Order') }}</h5>
                </div>
                <div class="card-body">
                    <form action="{{ route('service', $service->slug) }}" method="post">
                        @csrf
                        <div class="row mb-3">
                            <div class="col-lg-3">
                                <label for="{{ Str::slug($service->label) }}" class="form-label">{{ $service->label }}</label>
                            </div>
                            <div class="col-lg-9">
                                <input type="text" class="form-control" id="{{ Str::slug($service->label) }}" placeholder="{{ $service->placeholder }}">
                            </div>
                        </div>
                        <div class="text-end">
                            <button type="reset" class="btn btn-outline-secondary w-sm">{{ __('Reset') }}</button>
                            <button type="submit" class="btn btn-success w-sm">{{ __('Create New') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">{{ __('Notes') }}</h5>
                </div>
                <div class="card-body"></div>
            </div>
        </div>
    </div>
@endsection

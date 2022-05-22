@extends('layouts.master')

@section('title', 'Cấu hình chung')

@section('content')
    <div class="col-lg-9">
        <div class="card">
            <div class="card-header align-items-center d-flex">
                <h4 class="card-title mb-0 flex-grow-1">Cấu hình chung</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.settings.general') }}" method="post">
                    @csrf
                    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                </form>
            </div>
        </div>
    </div>
@endsection

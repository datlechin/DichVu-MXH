@extends('layouts.master')

@section('title', 'Lấy ID Facebook')

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-bottom-dashed">
                    <h5 class="card-title mb-0">Lấy ID Facebook</h5>
                </div>
                <div class="card-body">
                    <form action="{{ route('tools.get-facebook-id') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="url_facebook" class="form-label">URL Facebook</label>
                            <input type="url" id="url_facebook" name="url_facebook" class="form-control" placeholder="Nhập URL Facebook vào đây" value="{{ old('url_facebook') }}">
                        </div>
                        @if(session('facebook_id'))
                            <div class="alert alert-success">
                                ID của bạn là: <strong>{{ session('facebook_id') }}</strong>
                            </div>
                        @endif
                        <div class="text-end">
                            <button type="submit" class="btn btn-primary">Lấy ID</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

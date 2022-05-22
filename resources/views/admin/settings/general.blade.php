@extends('layouts.master')

@section('title', 'Cấu hình chung')

@section('content')
    <div class="col-lg-6">
        <div class="card">
            <div class="card-header align-items-center d-flex">
                <h4 class="card-title mb-0 flex-grow-1">Thông tin trang web</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.settings.store') }}" method="post">
                    @csrf
                    <div class="mb-3">
                        <label for="site_title">Tiêu đề trang web</label>
                        <input type="text" class="form-control" id="site_title" name="site_title" value="{{ setting('site_title') }}">
                        <small>Tiêu đề chung cho trang web, hiển thị trên Google và trình duyệt</small>
                    </div>
                    <div class="mb-3">
                        <label for="site_name">Tên trang web</label>
                        <input type="text" class="form-control" id="site_name" name="site_name" value="{{ setting('site_name') }}">
                    </div>
                    <div class="mb-3">
                        <label for="site_email">Email trang web</label>
                        <input type="text" class="form-control" id="site_email" name="site_email" value="{{ setting('site_email') }}">
                    </div>
                    <div class="mb-3">
                        <label for="site_description">Mô tả trang web</label>
                        <textarea class="form-control" id="site_description" name="site_description" rows="3">{{ setting('site_description') }}</textarea>
                        <small>Mô tả về trang web, sử dụng để SEO và công cụ tìm kiếm, tầm 100 ký tự</small>
                    </div>
                    <div class="mb-3">
                        <label for="site_keywords">Từ khóa trang web</label>
                        <input type="text" class="form-control" id="site_keywords" name="site_keywords" value="{{ setting('site_keywords') }}">
                        <small>Từ khóa chính cho trang web, sử dụng để SEO và công cụ tìm kiếm, cách nhau bằng dấu phẩy</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                </form>
            </div>
        </div>
    </div>
@endsection

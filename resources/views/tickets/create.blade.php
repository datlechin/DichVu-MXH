@extends('layouts.master')

@section('title', 'Gửi yêu cầu hỗ trợ')


@section('content')
    <form action="{{ route('ticket.create') }}" method="post">
        @csrf
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0 flex-grow-1">Thông tin yêu cầu hỗ trợ</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xxl-6">
                                <div class="mb-3">
                                    <label class="form-label">Họ tên</label>
                                    <input type="text" class="form-control" value="{{ Auth::user()->name }}" disabled>
                                </div>
                            </div>
                            <div class="col-xxl-6">
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="text" class="form-control" value="{{ Auth::user()->email }}" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6">
                                <div class="mb-3">
                                    <label class="form-label">Danh mục liên quan</label>
                                    <select class="form-control" data-choices data-choices-search-false name="category_id">
                                        @foreach($categories as $category)
                                            <option value="">Không</option>
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-xxl-6">
                                <div class="mb-3">
                                    <label class="form-label">Độ ưu tiên</label>
                                    <select class="form-control" data-choices data-choices-search-false name="priority">
                                        <option value="{{ \App\Models\Ticket::PRIORITY_LOW }}">Thấp</option>
                                        <option value="{{ \App\Models\Ticket::PRIORITY_MEDIUM }}" selected>Trung bình</option>
                                        <option value="{{ \App\Models\Ticket::PRIORITY_HIGH }}">Cao</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0 flex-grow-1">Nội dung</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="title" class="form-label">Tiêu đề</label>
                            <input type="text" class="form-control" id="title" name="title" placeholder="Tiêu đề" value="{{ old('title') }}">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Nội dung</label>
                            <textarea id="content" name="content" class="ckeditor-classic">{{ old('content') }}</textarea>
                        </div>
                        <div class="text-end">
                            <button type="reset" class="btn btn-light me-3">Đặt lại</button>
                            <button type="submit" class="btn btn-primary">Gửi ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection

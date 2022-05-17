@extends('layouts.master')

@section('title', __('Users'))

@section('content')
    <div class="col-lg-12">
        <div class="card" id="customerList">
            <div class="card-header border-bottom-dashed">

                <div class="row g-4 align-items-center">
                    <div class="col-sm">
                        <h5 class="card-title mb-0">{{ __('Users List') }}</h5>
                    </div>
                </div>
            </div>
            <div class="card-body border-bottom-dashed border-bottom">
                <form action="{{ route('admin.users.index') }}" method="get">
                    <div class="row g-3">
                        <div class="col-xl-6">
                            <div class="search-box">
                                <input type="text" class="form-control search" name="search" placeholder="{{ __('Search for email, phone, name...') }}" value="{{ request('search') }}">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="row g-3">
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" name="date" data-provider="flatpickr" data-date-format="Y-m-d" data-range-date="true" placeholder="{{ __('Select date') }}" value="{{ request('date') }}">
                                </div>
                                <div class="col-sm-4">
                                    <select class="form-control" data-plugin="choices" data-choices data-choices-search-false name="status">
                                        <option value="">{{ __('Status') }}</option>
                                    </select>
                                </div>

                                <div class="col-sm-4">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="ri-search-2-fill me-2 align-bottom"></i> {{ __('Search') }}
                                    </button>
                                    <a href="{{ route('admin.users.index') }}" class="btn btn-danger">
                                        <i class="ri-search-2-fill me-2 align-bottom"></i> {{ __('Reset') }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-body">
                <div>
                    <div class="table-responsive table-card mb-1">
                        <table class="table align-middle">
                            <thead class="table-light text-muted">
                            <tr>
                                <th>ID</th>
                                <td>{{ __('Name') }}</td>
                                <td>{{ __('Email') }}</td>
                                <td>{{ __('Phone') }}</td>
                                <td>{{ __('Joined at') }}</td>
                                <td>{{ __('Status') }}</td>
                                <td>{{ __('Action') }}</td>
                            </tr>
                            </thead>
                            <tbody class="list form-check-all">
                            @foreach($users as $user)
                                <tr>
                                    <td>{{ $user->id }}</td>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td>{{ $user->phone }}</td>
                                    <td>{{ $user->created_at }}</td>
                                    <td>
                                        <span class="badge badge-soft-success text-uppercase">{{ __('Active') }}</span>
                                    <td>
                                        <ul class="list-inline hstack gap-2 mb-0">
                                            <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="{{ __('Edit') }}">
                                                <a href="{{ route('admin.users.edit', $user->id) }}" class="text-primary d-inline-block">
                                                    <i class="ri-pencil-fill fs-16"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="" data-bs-original-title="{{ __('Delete') }}">
                                                <a class="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                    <i class="ri-delete-bin-5-fill fs-16"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        @empty($users)
                            <div class="noresult">
                                <div class="text-center">
                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                </div>
                            </div>
                        @endempty
                    </div>
                    <div class="d-flex justify-content-end">
                        {{ $users->links() }}
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection

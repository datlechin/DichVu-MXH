@extends('user.layout')

@section('title', __('User Profile'))

@section('user-content')
    <div class="tab-pane {{ request()->routeIs('user.auth-log') ? 'active' : '' }}">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Thời gian</th>
                    <th>IP</th>
                    <th>User Agent</th>
                </tr>
                </thead>
                <tbody>
                @foreach($logs as $log)
                    <tr>
                        <td>{{ $log->login_at }}</td>
                        <td>{{ $log->ip_address }}</td>
                        <td>{{ $log->user_agent }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection

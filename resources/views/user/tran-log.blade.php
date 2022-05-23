@extends('user.layout')

@section('title', 'Lịch sử thay đổi số dư')

@section('user-content')
    <div class="tab-pane active">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Thời gian</th>
                    <th>ID</th>
                    <th>Giao dịch</th>
                    <th>Số tiền</th>
                    <th>Số dư cuối</th>
                    <th>Nội dung</th>
                </tr>
                </thead>
                <tbody>
                @foreach($transactions as $transaction)
                    <tr>
                        <td>{{ $transaction->created_at }}</td>
                        <td>#{{ $transaction->id }}</td>
                        <td>{{ $transaction->type }}</td>
                        <td>
                            @if($transaction->type == \App\Models\Transaction::DEPOSIT)
                                <span class="text-success">+{{ number_format($transaction->amount) }}đ</span>
                            @else
                                <span class="text-danger">-{{ number_format($transaction->amount) }}đ</span>
                            @endif
                        </td>
                        <td>{{ number_format($transaction->balance) }}đ</td>
                        <td>{{ $transaction->description }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection

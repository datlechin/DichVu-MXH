@push('css')
    <link rel="stylesheet" href="{{ asset('assets/libs/toastify-js/toastify-js.min.css') }}">
@endpush

@push('scripts')
    <script src="{{ asset('assets/libs/toastify-js/toastify-js.min.js') }}"></script>
    <script>
        @foreach($errors->all() as $error)
        Toastify({
            text: "{{ $error }}",
            duration: 5000,
            close: true,
            style: {
                background: "#ff5a5f",
            }
        }).showToast();
        @endforeach
        @if(session('success'))
        Toastify({
            text: "{{ session('success') }}",
            duration: 5000,
            close: true,
            style: {
                background: "#45cb85",
            }
        }).showToast();
        @endif
    </script>
@endpush

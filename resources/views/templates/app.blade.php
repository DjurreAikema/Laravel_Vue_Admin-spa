<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" value="{{ csrf_token() }}" />

        <title>Laravel</title>

        <!-- Styles -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- js -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>
        @include('includes.nav')
        @include('includes.side')

        @yield('content')
    </body>
</html>

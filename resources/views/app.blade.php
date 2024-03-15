<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @trixassets
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{asset('dist/vendors/feather/feather.css')}}">
        <link rel="stylesheet" href="{{asset('dist/vendors/mdi/css/materialdesignicons.min.css')}}">
        <link rel="stylesheet" href="{{asset('dist/vendors/ti-icons/css/themify-icons.css')}}">
        <link rel="stylesheet" href="{{asset('dist/vendors/typicons/typicons.css')}}">
        <link rel="stylesheet" href="{{asset('dist/vendors/simple-line-icons/css/simple-line-icons.css')}}">
        <link rel="stylesheet" href="{{asset('dist/vendors/css/vendor.bundle.base.css')}}">
        <!-- endinject -->
        <!-- Plugin css for this page -->
        <link rel="stylesheet" href="{{asset('dist/vendors/datatables.net-bs4/dataTables.bootstrap4.css')}}">
        <!-- End plugin css for this page -->
        <!-- inject:css -->
        <link rel="stylesheet" href="{{asset('dist/css/vertical-layout-light/style.css')}}">
        <!-- endinject -->
        <link rel="shortcut icon" href="{{asset('dist/images/favicon.png')}}" />
        <title inertia>{{ config('app.name', 'Ingushetia.ru') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


        <!-- plugins:js -->
        <script src="{{asset('dist/vendors/js/vendor.bundle.base.js')}}"></script>
        <!-- endinject -->
        <!-- Plugin js for this page -->
        <script src="{{asset('dist/vendors/chart.js/Chart.min.js')}}"></script>
        <script src="{{asset('dist/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js')}}"></script>
        <script src="{{asset('dist/vendors/progressbar.js/progressbar.min.js')}}"></script>

        <!-- End plugin js for this page -->
        <!-- inject:js -->
        <script src="{{asset('dist/js/off-canvas.js')}}"></script>
        <script src="{{asset('dist/js/hoverable-collapse.js')}}"></script>
        <script src="{{asset('dist/js/template.js')}}"></script>
        <script src="{{asset('dist/js/settings.js')}}"></script>
        <script src="{{asset('dist/js/todolist.js')}}"></script>
        <!-- endinject -->
        <!-- Custom js for this page-->
        <script src="{{asset('dist/js/dashboard.js')}}"></script>
        <script src="{{asset('dist/js/Chart.roundedBarCharts.js')}}"></script>

    </body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="../js/assets/img/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="apple-touch-icon" href="../js/assets/img/favicon.png" />
    <meta name="description" content="1811construction">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>1811construction</title>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-K1P4QXD1SE"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-K1P4QXD1SE', {
            cookie_flags: 'SameSite=None;Secure'
        });
    </script>
    @vite('resources/css/app.css')
    @vite('resources/js/index.jsx')
</head>

<body>
    <div id="root"></div>
</body>

</html>

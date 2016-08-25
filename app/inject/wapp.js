'use strict';

onload = () => {
    const {shell} = require('electron');
    //const webview = document.getElementById('app');

    window.$ = window.jQuery = require('../../bower_components/jquery/dist/jquery.min.js');

    $(document).ready(function() {
        $(document).on('click', 'a[target="_blank"]', function(e) {
            shell.openExternal($(this).prop('href'));
            e.preventDefault();
        });
    });

    // Doesn't look to be firing
    /*webview.addEventListener('new-window', (e) => {
        console.log('clicked');
        const protocol = require('url').parse(e.url).protocol;
        if (protocol === 'http:' || protocol === 'https:') {
            shell.openExternal(e.url);
        }
    });*/
    /*window.open = (url) => {
     console.log('window.open clicked');
     shell.openExternal(url);
     };*/
};
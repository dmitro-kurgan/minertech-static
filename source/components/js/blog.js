var header = document.getElementsByClassName('header');
var headerLogo = document.getElementsByClassName('header_logo');
var headerMenuList = document.querySelectorAll('header > header_menu > li');
var cuurentMenuItem = document.getElementsByClassName('current-menu-item');
header[0].style.backgroundColor = "#000";
headerLogo[0].style.backgroundImage = "url('../images/logo-white.svg')";
cuurentMenuItem[0].style.color = "#fff";
header[0].className += " header--blog";

import './jquery.fullpage.min.js';

$(document).ready(function() {
    $('#fullpageBlog').fullpage({
        navigation: false,
        scrollBar: true,
        anchors: ['firstPage', 'secondPage'],
        loopBottom: true,
        loopTop: true,
        responsiveWidth: 992,
        responsiveHeight: 680,
        scrollingSpeed: 900,
        autoScrolling: false
    });
});
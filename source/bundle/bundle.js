import '../components/scss/style.scss';

import '../components/js/bootstrap.min.js';

// import '../components/js/send.js';
// import intlTelInput from '../components/libs/jquery.form-sender/intlTelInput.js';
// import FormSender from '../components/libs/jquery.form-sender/jquery.form-sender.js';

import '../components/js/jquery.fullpage.min.js';

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        scrollBar: true,
        anchors: ['firstPage', 'secondPage'],
        loopBottom: true,
        loopTop: true,
        responsiveWidth: 992,
        responsiveHeight: 680,
        scrollingSpeed: 900
    });
});
jQuery(document).ready(function($){
    $(window).scroll(function () {
		if (document.URL.indexOf('#secondPage') >= 0)  {	
			$('.header').addClass('fixed');
		}
		else {
			$('.header').removeClass('fixed');
		}
	});
});

function changeColorHeader() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 991px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('.nav-tabs1 > li > a').click(function(event) {
				event.preventDefault();
				var id = $('#tab-content2'),
				top = $(id).offset().top - 145;
				$('body, html').animate({scrollTop: top}, 600);
			});
			$('.nav-tabs2 > li > a').click(function(event) {
				event.preventDefault();
				var id = $('#tab-content1'),
				top = $(id).offset().top - 145;
				$('body, html').animate({scrollTop: top}, 600);
			});
		}	
	}
}
changeColorHeader();

import 'slick-carousel';

var SlickBanner = $(".slider-banner")
var SlickFor = $(".slider-for");
var SlickNav = $(".slider-nav");

SlickBanner.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	autoplay: true,
	pauseOnHover: false,
	autoplaySpeed: 2000,
	responsive: [
		{
		breakpoint: 768,
			settings: "unslick"
		}
	]
})

SlickFor.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
});

SlickNav.slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}
	]
});

function ShowMenu() {
	$('.header_hamburger, .close').click(function() {
		$('.header_menu').toggleClass('opened');
	});
}
ShowMenu();

// $(document).ready(function() {
// 	$('#scroll-down').click(function(event) {
// 		event.preventDefault();
// 		var id = $(this).attr('href'),
// 		top = $(id).offset().top;
// 		$('body, html').animate({scrollTop: top}, 600);
// 	});
// });

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#bannerText0').appendTo('#bannerImgOverlay0');
	}
	else {
		$('#bannerText0').appendTo('#bannerLeft0');
	}
}).trigger('resize');

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#bannerText1').appendTo('#bannerImgOverlay1');
	}
	else {
		$('#bannerText1').appendTo('#bannerLeft1');
	}
}).trigger('resize');

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#bannerText2').appendTo('#bannerImgOverlay2');
	}
	else {
		$('#bannerText2').appendTo('#bannerLeft2');
	}
}).trigger('resize');

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#bannerText3').appendTo('#bannerImgOverlay3');
	}
	else {
		$('#bannerText3').appendTo('#bannerLeft3');
	}
}).trigger('resize');

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#bannerText4').appendTo('#bannerImgOverlay4');
	}
	else {
		$('#bannerText4').appendTo('#bannerLeft4');
	}
}).trigger('resize');

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#bannerText5').appendTo('#bannerImgOverlay5');
	}
	else {
		$('#bannerText5').appendTo('#bannerLeft5');
	}
}).trigger('resize');

$(window).bind('resize', function () {
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('#fixed-panel').appendTo('#headerMenu');
		$('#bannerText6').appendTo('#bannerImgOverlay6');
	}
	else {
		$('#fixed-panel').appendTo('#bannerRight');
		$('#bannerText6').appendTo('#bannerLeft6');
	}
}).trigger('resize');

$('#overviewMain').click(function (e) {
  e.preventDefault()
  // $('#tab-content2 #tab1').removeClass('active');
  $('#nav-tabs li:eq(0) a').tab('show')
})


var remove = $('#headerMenu > ul > li > a').removeClass('current-menu-item');
var current = 'current-menu-item';
if(document.URL.indexOf('product.html') >= 0) {
	remove;
	$('#headerMenu > ul > li:eq(1) > a').addClass(current);
}
else if(document.URL.indexOf('blog.html') >= 0) {
	remove;
	$('#headerMenu > ul > li:eq(2) > a').addClass(current);
}
else if(document.URL.indexOf('article.html') >= 0) {
	remove;
	$('#headerMenu > ul > li:eq(2) > a').addClass(current);
}
else if(document.URL.indexOf('service.html') >= 0) {
	remove;
	$('#headerMenu > ul > li:last > a').addClass(current);
}
else {
	$('#headerMenu > ul > li:eq(0) > a').addClass(current);
}

import 'wowjs';

const WOW = require('wowjs');

window.wow = new WOW.WOW({

});

window.wow.init();
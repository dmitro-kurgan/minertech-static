// import './bootstrap.min.js';

import fancybox from './jquery.fancybox.min.js';

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

// $(function () {
// 	if(screen.height > 680 && screen.width > 992) {
// 	    var lastScrollTop = $(window).scrollTop(),
// 	        delta = 5,
// 	        eleH = $('#product').outerHeight(),
// 	        isScolling = false ;
// 	    $(window).scroll(function () {
// 	        if(isScolling)
// 	            return;
// 	        var nowScrollTop = $(this).scrollTop();
// 	        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
// 	            if (nowScrollTop <= eleH && nowScrollTop >= lastScrollTop) {
// 	                isScolling = true;
// 	                $('html,body').animate({
// 	                    scrollTop: $('body footer:first-of-type').offset().top
// 	                }, 600, function() {
// 	                    isScolling = false;
// 	                    lastScrollTop = $(window).scrollTop();
// 	                });
// 	                console.log('Scroll down');
// 	                $('.header').addClass('fixed');
// 	            } else if (nowScrollTop <= eleH && nowScrollTop < lastScrollTop) {
// 	                isScolling = true;
// 	                $('html,body').animate({
// 	                    scrollTop: 0
// 	                }, 600, function() {
// 	                    isScolling = false;
// 	                    lastScrollTop = $(window).scrollTop();
// 	                });
// 	                console.log('Scroll up');
// 	                $('.header').removeClass('fixed');
// 	            }
// 	            lastScrollTop = nowScrollTop;
// 	        }
// 	    });
// 	}
// });

// $('#overviewMain').click(function() {
// 	$('.nav-tabs1 > li').removeClass('active');
// 	$('.tab-pane').removeClass('active');
// 	$('.nav-tabs1 > li:first-child').addClass('active');
// 	$('.tab-pane:first-child').addClass('active');
// })
function changeColorHeader() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 991px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			var header = document.getElementById('header');
			var element = document.getElementById('service');

			var elementSourceBottom = element.getBoundingClientRect().bottom + window.pageYOffset - 145;

			window.onscroll = function() {
				if (element.classList.contains('pass') && window.pageYOffset < elementSourceBottom) {
					header.classList.remove('fixed');
				} else if (window.pageYOffset > elementSourceBottom) {
					header.classList.add('fixed');
					element.classList.add('pass');
				}
			};
		}	
	}
}
changeColorHeader();

// $(function () {
// 	if(screen.height > 680 && screen.width > 992) {
// 	    var lastScrollTop = $(window).scrollTop(),
// 	        delta = 5,
// 	        eleH = $('.service').outerHeight(),
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
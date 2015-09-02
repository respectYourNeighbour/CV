
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$(".navbar-default").addClass('navbar-shrink');
			$(".navbar-brand").addClass('navbar-brandShrink');
			
		}
		else {
			$(".navbar-default").removeClass('navbar-shrink');
			$(".navbar-brand").removeClass('navbar-brandShrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
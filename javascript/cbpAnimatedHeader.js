
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 150;

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

var makeShadow = function(num, color) {
  var value = '';
  for(var i = 1; i < num; i++) {
    value += i+'px '+i+'px 0px' +color;
    if(i != num - 1) {
      value += ', ';
    }
  }
  return value;
};
document.querySelector('.js-shadow').style.textShadow = makeShadow(200, '#252729');
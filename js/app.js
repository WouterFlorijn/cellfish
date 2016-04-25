(function($) {

	function cssVal(val) {
		return val.replace(/[^-\d\.]/g, '');
	}

	function scrollTo(elem, duration) {
		var body = $('body');
		var offset = cssVal(body.css('padding-top'));
		var elemTop = elem.offset().top;
		body.animate({ scrollTop: elemTop - offset }, duration, 'easeInOutQuad');
	}

	$(document).ready(function() {
		$(document).foundation();

		$('.cover-arrow').on('click', function() {
			scrollTo($('#hiw'), 600);
		});
	});

})($);

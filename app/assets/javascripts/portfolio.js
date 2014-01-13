$( document ).ready(function() {
	$(window).bind('scroll',function() {
		var vertPosition = $(window).scrollTop(); 
		var totalHeight = $('#sticky').offset().top; 
		var finalSize = totalHeight - vertPosition; 

		if( finalSize <= 0 ) {
            $('#sticky').css({
                'position': 'fixed',
                'top': 0
            });
            $('#content-container').css({
                'position': 'fixed',
                'top': 21
            })
            $('#screenshot').remove();
		} else {
            $('#sticky').css({
                'position': 'absolute'
            })
		}
	});
});
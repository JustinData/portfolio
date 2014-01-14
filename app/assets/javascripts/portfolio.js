$( document ).ready(function() {
	$(window).bind('scroll',function(e) {
		var vertPosition = $(window).scrollTop(); 
		var stickyHeight = $('#sticky').offset().top; 
		var stickyTop = stickyHeight - vertPosition; 

        var $cc = $('#content-container');
        var ccHeight = $cc.offset().top;
        var ccTop = ccHeight - vertPosition;



		if( stickyTop <= 0 ) {

            $('#sticky').css({
                'position': 'fixed',
                'top': 0
            });

            $("html, body").animate({scrollTop: ccHeight}, 1250);

		} else {
            $('#sticky').css({
                'position': 'absolute'
            })
		}

        if( ccTop <= 30 ) {
            $cc.css({
                'position': 'fixed',
                'top': 30
            });
            $('#screenshot').remove();
        }

        $(window).stellar();

        // var s1 = 50;
        // var s2 = 100;
        // var s3 = 200;

        // var pageY = e.pageY - ($(window).height() / 2);

        // $('#photo').css("background-position", ("1px " + s2 / $(window).height() * pageY -1) + "px");
	});
});
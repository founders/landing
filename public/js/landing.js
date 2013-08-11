$(function() {
	var nav = $('#main-nav'),
		win = $(window),
		fixed = false;
	var navTop = nav.offset().top + nav.position().top + nav.height();

	//Smooth animation when clicking links
	$('a').click(function() {
	    var elementClicked = $(this).attr("href");
	    var destination = $(elementClicked).offset().top;
	    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-15}, 500 );
	    return false;
	});

  	// Pins the navbar to the top of the page
	win.scroll(function () {
		if(win.scrollTop() > navTop) {
		  if(!fixed) {
		    nav.addClass('fixed');
		  }
		  fixed = true;
		}
		else {
		  if(fixed) {
		    nav.removeClass('fixed');
		  }
		  fixed = false;
		}
  	});
});

/* Template carousel */

$(document).ready(function () {

	/* Enable mobile swiping */

  	$("#carousel-mobile").swiperight(function() {
    	$(this).carousel("prev");
    	$(".fa-hand-o-up").css("display", "none");
  	});

  	$("#carousel-mobile").swipeleft(function() {
    	$(this).carousel("next");
    	$(".fa-hand-o-up").css("display", "none");
  	});

});
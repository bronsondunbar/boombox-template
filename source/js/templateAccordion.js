
/* Accordion */

$(document).ready(function () {

	$(".panel-heading").click(function (event) {
	  $(".panel-heading").removeClass("open");
	  $(this).addClass("open");
	});

});
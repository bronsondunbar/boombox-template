
/* Template navbar */

/* Navbar background scroll color animation */

$(document).ready(function () {

	$(".waypoint").waypoint(function() {

	 	$(".scroll-helper").hide();

	}, {

		offset: "1"

	});

	/* Navbar actions */

	$(".navbar-toggle").click(function (event) {
		var navbarContent = $(".navbar-content").css("width");

		if (navbarContent === "350px") {

		 	$(".navbar-content > div").fadeOut(300, function () {
		    	$(".navbar-content").velocity({
		      		"width" : "0px"
		    	}, 200);
		  	});

		} else if (navbarContent === "0px") {

		  	$(".navbar-content").velocity({
		    	"width" : "350px"
		  	}, 200, function () {
		    	$(".navbar-content > div").delay(500).fadeIn(300);
		  	});

		};

	});

  	$(".navbar-content-close-btn").click(function (event) {

    	$(".navbar-content > div").fadeOut(300, function () {
      		$(".navbar-content").velocity({
        		"width" : "0px"
      		}, 200);
    	});

  	});

  	navbarLevel = 0;

  	$(".navbar-content-item").click(function (event) {
    	event.preventDefault();

    	var linkRef = $(this).attr("href");
    	var linkRef = linkRef.replace('/','');

    	if (linkRef != "#") {

      		$(this).parents("ul").children("li").hide();
      		$(this).parents("li").next(".submenu").velocity({
        		left: 0
      		}, 200, 'linear');

      		navbarLevel ++;

      		var currentNavbarItem = $(this).text();
      		$(".breadcrumbs").html("<li>" + currentNavbarItem + "</li>");

      		var linkRef = linkRef.replace('-',' ');
      		$(".navbar-title").html(linkRef);

    	}
  	});

  	$(".navbar-content-sub-item").click(function (event) {
    	event.preventDefault();

    	var linkRef = $(this).attr("href");
    	var linkRef = linkRef.replace('/','');

    	if (linkRef != "#") {

      		$(this).parents("ul").children("li").hide();

      		$(this).parents("li").next(".submenu").velocity({
        		left: 0
      		}, 200, 'linear');

      		var currentNavbarItem = $(this).text();
      		$(".breadcrumbs").html($(".breadcrumbs").html() + "<li>" + currentNavbarItem + "</li>");

      		var linkRef = linkRef.replace('-',' ');
      		$(".navbar-title").html(linkRef);

    	}
  	});

  	$(".go-back").click(function (event) {
    	event.preventDefault();

    	var linkRef = $(this).attr("href");
    	var linkRef = linkRef.replace('/','');

    	if (navbarLevel == 1) {

      		$(this).closest("ul").velocity({
        		left: 400
      		}, 100, 'linear');
      		$(this).parents("ul").parents("ul").children("li").fadeIn();

      		navbarLevel --;

      		$(".breadcrumbs li:last-child").remove();

      		$(".navbar-title").html(linkRef);

    	} else {

      		$(this).parents("ul").parents("ul").children("li").fadeIn();
      		$(this).parents("ul").parents("ul").parents("ul").children("li").hide();

      		$(this).closest("ul").velocity({
        		left: 400
      		}, 100, 'linear');
      		$(this).parents("ul").parents("ul").children("li").fadeIn();

      		navbarLevel --;

      		$(".breadcrumbs li:last-child").remove();

      		var linkRef = linkRef.replace('-',' ');
      		$(".navbar-title").html(linkRef);

    	}
  	});

});
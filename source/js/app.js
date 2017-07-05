
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/jquery.mobile.1.4.5.js'
// @codekit-prepend 'lib/bootstrap.js'
// @codekit-prepend 'lib/velocity.js'
// @codekit-prepend 'lib/velocity.ui.js'

/* Navbar actions */

$(document).ready(function () {

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

/* Accordion actions */

$(".panel-heading").click(function (event) {
  $(".panel-heading").removeClass("open");
  $(this).addClass("open");
});

/* Swiping actions */

$(document).ready(function () {

  /* JQuery mobile hack */

  $("a").attr("data-ajax", "false");

  $("#carousel-mobile").swiperight(function() {
    $(this).carousel("prev");
    $(".fa-hand-o-up").css("display", "none");
  });

  $("#carousel-mobile").swipeleft(function() {
    $(this).carousel("next");
    $(".fa-hand-o-up").css("display", "none");
  });

});

/* Scroll animation */

$(document).scroll(function(){

    $('.showcase').each( function(i){
        
        var bottom_of_object = $(this).offset().top + 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if (bottom_of_window > bottom_of_object) {

            if (!$(this).hasClass('in-viewport')) {
              $(this).velocity('transition.slideUpIn', { stagger: 700 }).delay(2000);
              $(this).addClass('in-viewport');
            }

        }
        
    }); 

});
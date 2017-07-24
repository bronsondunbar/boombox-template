
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/jquery.mobile.1.4.5.js'
// @codekit-prepend 'lib/bootstrap.js'
// @codekit-prepend 'lib/velocity.js'
// @codekit-prepend 'lib/velocity.ui.js'
// @codekit-prepend 'lib/anime.min.js'
// @codekit-prepend 'lib/jquery.waypoints.js'

/* Navbar background scroll color animation */

$(document).ready(function () {

  $(".waypoint").waypoint(function() {

      $(".scroll-helper").hide();

  }, {
      offset: "1"
  });

});

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

  $("#carousel").swiperight(function() {
    $(this).carousel("prev");
  });

  $("#carousel").swipeleft(function() {
    $(this).carousel("next");
  });

});

/* Scroll animation */

$(document).scroll(function(){

    var screenResolution = $(window).width();

    if (screenResolution > 768) {

      $('.showcase').each( function(i){
        
        var bottom_of_object = $(this).offset().top + 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if (bottom_of_window > bottom_of_object) {

            if (!$(this).hasClass('in-viewport')) {
              $(this).velocity('transition.slideUpIn', { stagger: 700 }).delay(2000);
              $(this).addClass('in-viewport');

              if ($(this).hasClass("showcase-left")) {
                $(this).find('.showcase-media').velocity({right: "-50%"}, { stagger: 700 }, { queue: false }, 5000);
              } else if ($(this).hasClass("showcase-right")) {
                $(this).find('.showcase-media').velocity({left: "0%"}, { stagger: 700 }, { queue: false }, 5000);
              }
            }

        }
          
      });

    }

    $('#categories > svg > g > path').each( function(i){
        
        var bottom_of_object = $(this).offset().top + 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if (bottom_of_window > bottom_of_object) {

            if (!$(this).hasClass('wrapper')) {
              $(this).addClass('wrapper');
              $(this).css("display", "block");

              /* SVG animation using AnimeJS */

              var lineDrawing = anime.timeline({
                loop: true
              });

              lineDrawing.speed = .5;

              lineDrawing
                .add({
                  targets: '#categories .wrapper',
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: 'easeInOutSine',
                  duration: 1000*60,
                  direction: 'alternate',
                  offset: 0
                })
            }

        }
        
    }); 

});

/* Carousel lightbox */

$(".item-detail").on("click", function (event) {
  event.preventDefault();

  $("body").css("overflow-y", "hidden");

  var scrollPosition = $(window).scrollTop();
  var getColor = $(this).parent(".item").css("background-color");

  $(".item-details").css("background-color", getColor);

  if (scrollPosition == 0) {
    $(".item-details")
      .velocity({ left: 0 }, { queue: false }, 500)
      .velocity({ top: 0 }, { queue: false }, 500)
      .velocity({ opacity: 1 }, { queue: false }, 500)  
      .velocity({ width: "100%" }, { queue: false }, 500)
      .velocity({ height: "100vh" }, { queue: false }, 500);
  } else {
    $(".item-details")
      .velocity({ left: 0 }, { queue: false }, 500)
      .velocity({ top: scrollPosition }, { queue: false }, 500)
      .velocity({ opacity: 1 }, { queue: false }, 500)  
      .velocity({ width: "100%" }, { queue: false }, 500)
      .velocity({ height: "100vh" }, { queue: false }, 500);
  };

  var itemMedia = $(this).attr('data-source');

  if (itemMedia == undefined) {
    var itemMedia = $(this).next("img").attr('src');
  };

  var itemContent = $(this).closest(".item").find(".content").html();

  $(".item-details-media").html("<img src='" + itemMedia + "' class='img-responsive' />");
  $(".item-details-content").html(itemContent);

  
});

$(".item-details-close-btn").click(function (event) {
  event.preventDefault();

  $(".item-details")
    .velocity({ left: "104vh" }, { queue: false }, 500)
    .velocity({ top: "42vh" }, { queue: false }, 500)
    .velocity({ opacity: 0 }, { queue: false }, 500)  
    .velocity({ width: "1px" }, { queue: false }, 500)
    .velocity({ height: "1px" }, { queue: false }, 500);


  $("body").css("overflow-y", "visible");
});


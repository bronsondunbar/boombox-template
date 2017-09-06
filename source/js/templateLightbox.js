
/* Template lightbox */

$(document).ready(function () {

  /* Launch lightbox */

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

    $(".scroll-helper").hide();
    
  });

  /* Close lightbox */

  $(".item-details-close-btn").click(function (event) {
    event.preventDefault();

    var screenResolution = $(window).width();

    console.log(screenResolution)

    switch (screenResolution) {

      case 2560:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "97vh" }, { queue: false }, 1000)
          .velocity({ top: "57vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 1921:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "104vh" }, { queue: false }, 1000)
          .velocity({ top: "42vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 1920:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "104vh" }, { queue: false }, 1000)
          .velocity({ top: "42vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 1440:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "77vh" }, { queue: false }, 1000)
          .velocity({ top: "62vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 1024:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "41vh" }, { queue: false }, 1000)
          .velocity({ top: "66vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 768:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "41vh" }, { queue: false }, 1000)
          .velocity({ top: "66vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 736:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "41vh" }, { queue: false }, 1000)
          .velocity({ top: "66vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

      case 425:

        $(".item-details > iframe").velocity({opacity: "0"}, 100);

        $(".item-details")
          .velocity({ left: "22vh" }, { queue: false }, 1000)
          .velocity({ top: "74vh" }, { queue: false }, 1000)
          .velocity({ opacity: 0 }, { queue: false }, 1000)  
          .velocity({ width: "1px" }, { queue: false }, 1000)
          .velocity({ height: "1px" }, { queue: false }, 1000);

        $(".scroll-helper").show();

        $("body").css("overflow-y", "visible");

        break;

    }
  });

});
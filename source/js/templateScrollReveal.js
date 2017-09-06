
/* Template scroll reveal */

$(document).scroll(function(){

    /* Reveal posts as they come into view */

    var screenResolution = $(window).width();

    if (screenResolution > 768) {

      $(".showcase").each( function(i){
        
        var bottom_of_object = $(this).offset().top + 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if (bottom_of_window > bottom_of_object) {

            if (!$(this).hasClass("in-viewport")) {
              $(this).velocity("transition.slideUpIn", { stagger: 700 }).delay(2000);
              $(this).addClass("in-viewport");

              if ($(this).hasClass("showcase-left")) {
                $(this).find(".showcase-media").velocity({right: "-50%"}, { stagger: 700 }, { queue: false }, 5000);
              } else if ($(this).hasClass("showcase-right")) {
                $(this).find(".showcase-media").velocity({left: "0%"}, { stagger: 700 }, { queue: false }, 5000);
              }
            }

        }
          
      });

    }

    $("#categories > svg > g").each( function(i){
        
        var bottom_of_object = $(this).offset().top + 300;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if (bottom_of_window > bottom_of_object) {

            if (!$(this).hasClass("wrapper")) {
              $(this).addClass("wrapper");
              $(this).css("display", "block");

              /* SVG animation using AnimeJS */

                var lineAnimation = anime({
                  targets: "#categories .wrapper polygon",
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: "easeInOutSine",
                  duration: 5000,
                  delay: function(el, i) { return i * 250 },
                  direction: "alternate",
                  loop: true
                });
            }

        }
        
    }); 

});
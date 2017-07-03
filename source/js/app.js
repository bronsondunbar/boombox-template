
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/bootstrap.js'

$(document).ready(function () {

  $(".navbar-toggle").click(function (event) {
    var navbarContent = $(".navbar-content").css("width");

    if (navbarContent === "350px") {

      $(".navbar-content > div").fadeOut(300, function () {
        $(".navbar-content").animate({
          width : "0"
        }, 300);
      });

    } else if (navbarContent === "0px") {

      $(".navbar-content").animate({
        "width" : "350px"
      }, 300, function () {
        $(".navbar-content > div").delay(500).fadeIn(300);
      });

    };
    
  });

  $(".navbar-content-close-btn").click(function (event) {

    $(".navbar-content > div").fadeOut(300, function () {
      $(".navbar-content").animate({
        width : "0"
      }, 300);
    });

  });

  $(".panel-heading").click(function (event) {
    $(".panel-heading").removeClass("open");
    $(this).addClass("open");
  });
});
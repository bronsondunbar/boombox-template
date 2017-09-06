
/* Template Font Awesome animations */

$(document).ready(function () {

  /* Animate Font Awesome icons when hovering */

  $(document).ready(function () {

    $(".caption").mouseenter(function () {
      $(this).find(".fa").addClass("faa-burst animated");
    });

    $(".caption").mouseleave(function () {
      $(this).find(".fa").removeClass("faa-burst animated");
    });

  });

});
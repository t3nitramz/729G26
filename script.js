$(document).ready(function() {
  let scroll_counter = 0
  let position = $(window).scrollTop();
  let viewport_counter = 0
  $("#lightSlider").lightSlider({
    item: 1,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,
    loop: true,
    adaptiveWidth: true,
    auto: true,
    mode: 'fade',
    speed: 5000,
    pause: 10000,
  });

  $(window).scroll(function() {

    if (scroll_counter > 20){
      let new_position = $(window).scrollTop();
      console.log(new_position, position);
      var viewportHeight = $(window).height();
      if (new_position > position) {
        viewport_counter ++;
        $('html, body').animate({
                scrollTop: viewport_counter * viewportHeight,
            }, 1000);
        scroll_counter = 0;

      }
      else if (new_position < position) {
        viewport_counter --;
        $('html, body').animate({
                scrollTop: viewport_counter * viewportHeight,
            }, 1000);
        scroll_counter = 0;
      }
    }
    position = $(window).scrollTop();
    scroll_counter ++;
  });
  //$(".viewport").hide();
  //$("#viewport1").show();
  /*$(window).scroll(function() {

    if (scroll_counter > 20) {
      console.log("wallah")
      $( "#viewport1" ).hide();
      $( "#viewport2" ).show();
      $( "#viewport2" ).css("top", 0);
      $("#lightSlider").hide();
    };

    scroll_counter ++;

  });
  */
})

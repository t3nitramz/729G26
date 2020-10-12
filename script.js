$(document).ready(function() {
  let index = 1
  let cart_counter = 0
  let cart_dict = {"Samsung1": 0, "Samsung2": 0, "Vive1": 0, "Vive2": 0}
  let position = $(window).scrollTop();
  $("#cart_button").hide();
  $("#cart").hide();
  $("#hide_button").hide();
  $(".hover_container").hide();
  $(".container").hide();
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

  function scrollToAnchor(id){
    $('html,body').animate({scrollTop: $(id).offset().top
    }, 1000);
  }

  function createCartList(){
    $("#product_list").html("");
    for (let key in cart_dict){
      if (cart_dict[key] > 0) {
        $("#product_list").append("<div><div class='cart_item'>" + key +
        ":     " + cart_dict[key] + "</div><button id='" + key +
        "'class='remove' type='button'>-</button><button id='" + key +
        "'class='add' type='button'>+</button></div>")}}
    }
  $(window). scroll(function() {
    let temp_position = $(window).scrollTop();
    if (position < temp_position)
      {$('#topNav').fadeOut();}
    else
      {$('#topNav').fadeIn();}
    position = $(window).scrollTop();
    let window_height = $(window).height();;
    $('.page_indicator').attr('src', 'Images/unchecked.png')
    if (temp_position < (0.5*window_height)) {
      $('#indicator1').attr('src', 'Images/checked.png')
    }
    else if (temp_position < (1.5*window_height)) {
      $('#indicator2').attr('src', 'Images/checked.png')
    }
    else if (temp_position < (2.5*window_height)) {
      $('#indicator3').attr('src', 'Images/checked.png')
    };
  });

  $(".picture").click(function() {
    $(this).animate({
      width: '80vw', borderWidth: '20vw'});
    index++;
    $(this).css('z-index', index);
    $('.hover_container').hide(); /* recent change*/
    $(this).children().show();
    expanded = true;
  });

  $(".x").click(function(escape) {
    expanded = false;
    $(this).parent().animate({width: '50vw', borderWidth: '0vw'}, 500);
    escape.stopPropagation();
  });

  $('.show').click(function() {
    $("#cart").animate({width: "30vw"});
    $("#cart").show();
    $("#cart_button").show();
    $("#cart").css("cursor", "default");
    $("#cart").promise().done(function(){
    $("#cart").children().show();
    });
  });

  $("#hide_button").click(function(escape) {
    $("#cart").children().hide();
    $(this).parent().animate({width: '5px'});
    escape.stopPropagation();
    $("#cart").css("cursor", "pointer");
  });

  $('body').on('click', '.add', function() {
    cart_dict[this.id]++;
    createCartList();
  });

  $('body').on('click', '.remove', function() {
    cart_dict[this.id]--;
    createCartList();
  });

  $('.thumbnail').click(function() {
    first_class = $(this).attr('class').split(' ')[0];
    picture_name = "." + first_class + ".big_image"
    image_source = $(this).attr('src')
    $(picture_name).attr('src', image_source)
  });

  $(".big_image").hover(function(){
    picture = "." + $(this).attr('class').split(' ')[0] + "." + $(this).attr('class').split(' ')[1];
    product_descr = picture + ".hover_container";
    $(product_descr).show();
    }, function(){
    $(product_descr).hide();
  });

  $(".number2").click(function() {
    scrollToAnchor("#viewport2");
  });
  $(".number3").click(function() {
    scrollToAnchor("#viewport3");
  });
  $(".number1").click(function() {
    scrollToAnchor("#viewport1");
  });
  $(".second_right").click(function() {
    scrollToAnchor(".footRow");
  });
});

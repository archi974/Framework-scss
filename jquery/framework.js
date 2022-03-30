$(document).ready(() => {
  $("#disabled").click( () => {
    $('.btn').prop('disabled', $("#disabled").prop("checked"));
  });

  if($(window).width() <= 1800){
    $('.visible-xl').css("visibility", "visible");
    $('.visible-xl').show();

  } if($(window).width() <= 1024){
    $('.visible-lg').css("visibility", "visible");
    $('.visible-lg').show();

  } if($(window).width() <= 768){
    $('.visible-md').css("visibility", "visible");
    $('.visible-md').show();

  } if($(window).width() <= 576){
    $('.visible-sm').css("visibility", "visible");
    $('.visible-sm').show();
  }
  

});
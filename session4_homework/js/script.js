// fade in h1 and photos
$(document).ready(function(){
  $("h1, section1img, header").fadeIn(5000);
  })
  $("header").click(function(){
    $("header").css("background-color", "lightgray");
  })
  $("#section1img").click(function(){
    $(this).fadeToggle(1000);
});

// fade in h1 and photos
$(document).ready(function(){
  $("img, h1, header").fadeIn(3000);
  $("header").click(function(){
    $("header").css("background-color", "lightgray");
  });
});

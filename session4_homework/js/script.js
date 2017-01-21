// fade in h1 and photos
$(document).ready(function(){
  $("img, h1, header").fadeIn(5000);
  $("header").click(function(){
    $("header").css("background-color", "lightgray");
  });
});
// click to hide cactus photo
$(document).ready(function(){
    $("#section1img").click(function(){
        $(this).fadeToggle(1000);
    });
});

// fade in h1 and photos, click to change header color
$(document).ready(function(){
  $("h1, img, header").fadeIn(5000);
  $("header").click(function(){
    $("header").css("background-color", "lightgray");
});

$(document).ready(function() { 
$(".menu-bar").click(function(){
    $(".nav div.menu, .overlay").toggle(500);
	$('body').css('overflow', 'hidden');
});
$(".menu .fa-bars").click(function(){
    $(".nav div.menu, .overlay").toggle(500);
	$('body').css('overflow', 'visible');
});
 $(".title").click(function(){
    $(".widgetBox").slideToggle(500);
  });


})



 
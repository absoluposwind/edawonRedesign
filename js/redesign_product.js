document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);

$("document").ready(function(){

    const $nav_list = $(".header .nav .nav-wrap ul li");
    $(".content2 .item-about ul li input").eq(0).addClass("on")

    
    $($nav_list).mouseover(function(){
        $(this).find("a").css("color", "#00b33f");
        $(this).find(".sub-menu ul li a").css("color", "black");
    }).mouseout(function(){
        $(this).find("a").css("color", "");
    })

    $(".header .nav .nav-wrap ul li .sub-menu ul li").mouseover(function(){
        $(this).css("background-color", "#e7e7e7");
    }).mouseout(function(){
        $(this).css("background-color", "");
    })

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 202){
            $(".nav").addClass("on")
        }else{
            $(".nav").removeClass("on")
        }
    })
})

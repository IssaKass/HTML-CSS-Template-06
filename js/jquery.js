$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $("nav").toggleClass("open-nav");
        $("body").toggleClass("full-screen");
        $(".overlay").toggleClass("overlay-shown");
    })
    $("nav .close").click(function(){
        $("nav").toggleClass("open-nav");
        $("body").toggleClass("full-screen");
        $(".overlay").toggleClass("overlay-shown")
    })
    $("nav ul a").click(function(){
        $("nav ul a").removeClass("active");
        $(this).toggleClass("active");
        $("nav").toggleClass("open-nav");
        $("body").toggleClass("full-screen");
        $(".overlay").toggleClass("overlay-shown");
    })
})
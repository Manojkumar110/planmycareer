$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"white"});
            $(".nav-item .nav-link").css({"color":"#9a9a9a"})   
        }
        else{
            $(".navbar").css({"background-color":"black"});
            $(".nav-item .nav-link").css({"color":"white"})   
        }

    })
})
$(document).ready(function(){
    //navbar js
    $("#home_logo").mouseenter(function(){
        $(".about_frc").css("background-color","hsl(0, 0%, 27%)");
        $(".about_us").css("background-color","hsl(0, 0%, 27%)");
        $(".members").css("background-color","hsl(0, 0%, 27%)");
        $(".contact_us").css("background-color","hsl(0, 0%, 27%)");
        $(".changeeng").css("background-color","hsl(0, 0%, 27%)");
        $(".space").css("background-color","hsl(0, 0%, 27%)");
        $(".animated_7130").css("background-color","hsl(0, 0%, 27%)");
    })
    $("#home_logo").mouseleave(function() {
        $(".about_frc").css("background-color","rgb(230, 230, 230)");
        $(".about_us").css("background-color","rgb(230, 230, 230)");
        $(".members").css("background-color","rgb(230, 230, 230)");
        $(".contact_us").css("background-color","rgb(230, 230, 230)");
        $(".changeeng").css("background-color","rgb(230, 230, 230)");
        $(".space").css("background-color","rgb(230, 230, 230)");
        $(".animated_7130").css("background-color","rgb(230, 230, 230)");
    })
    $(".navtext").mouseenter(function(){
        $(".cover").css("opacity","0.9");
        $(".cover").css("z-index","5");
    })
    $(".navtext").mouseleave(function(){
        $(".menu_txt").mouseenter(function(){
            $(".cover").css("opacity","0.9");
            $(".cover").css("z-index","5");
        })
        $(".menu_txt").mouseleave(function(){
            $(".cover").css("opacity","0");
            $(".cover").css("z-index","-100");
        })
        $(".space").mouseenter(function(){
            $(".cover").css("opacity" , "0");
            $(".cover").css("z-index","-100");
        })
        $(".logo").mouseenter(function(){
            $(".cover").css("opacity" , "0");
            $(".cover").css("z-index","-100");
        })
        $(".space2").mouseenter(function(){
            $(".cover").css("opacity" , "0");
            $(".cover").css("z-index","-100");
        })
        $(".space3").mouseenter(function(){
            $(".cover").css("opacity" , "0");
            $(".cover").css("z-index","-100");
        })
    })
    $(".about_frc").mouseenter(function(){
        $(".about_frc > .navbar_text").css("color","hsl(0, 0%, 3%)");
    })
    $(".about_us").mouseenter(function(){
        $(".about_us > .navbar_text").css("color","hsl(0, 0%, 3%)");
    })
    $(".members").mouseenter(function(){
        $(".members > .navbar_text").css("color","hsl(0, 0%, 3%)");
    })
    $(".contact_us").mouseenter(function(){
        $(".contact_us > .navbar_text").css("color","hsl(0, 0%, 3%)");
    })
    $(".changeeng").mouseenter(function(){
        $(".changeeng > .navbar_text").css("color","hsl(0, 0%, 3%)");
    })
    $(".about_frc").mouseleave(function(){
        $(".about_frc > .navbar_text").css("color","hsl(0, 0%, 60%)");
    })
    $(".about_us").mouseleave(function(){
        $(".about_us > .navbar_text").css("color","hsl(0, 0%, 60%)");
    })
    $(".members").mouseleave(function(){
        $(".members > .navbar_text").css("color","hsl(0, 0%, 60%)");
    })
    $(".contact_us").mouseleave(function(){
        $(".contact_us > .navbar_text").css("color","hsl(0, 0%, 60%)");
    })
    $(".changeeng").mouseleave(function(){
        $(".changeeng > .navbar_text").css("color","hsl(0, 0%, 60%)");
    })

    $("body").mouseleave(function(){
        $(".cover").css("opacity" , "0");   
        $(".memmenu_txt").css("visibility","hidden");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
    })

    $(".header").mouseleave(function() {
        $(".cover").css("opacity" , "0");   
        $(".memmenu_txt").css("visibility","hidden");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
    })
    
    $(".about_frc").mouseenter(function(){
        $(".frcmenu_txt").css("visibility","visible");
        $(".usmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
        $(".frcmenu").css("z-index","5");
    })
    $(".about_frc").mouseleave(function(){
        $(".frcmenu_txt").mouseenter(function(){
            $(".frcmenu_txt").css("visibility","visible");
            $(".usmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
            $(".frcmenu").css("z-index","5");
        })
        $(".frcmenu_txt").mouseleave(function(){
            $(".frcmenu_txt").css("visibility","hidden");
            $(".frcmenu").css("z-index","-100");
        })
        $(".space2").mouseenter(function(){
            $(".frcmenu_txt").css("visibility" , "hidden");
            $(".frcmenu").css("z-index","-100");
        })
        $(".logo").mouseenter(function(){
            $(".frcmenu_txt").css("visibility" , "hidden");
            $(".frcmenu").css("z-index","-100");
        })
    })
    
    $(".about_us").mouseenter(function(){
        $(".usmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
        $(".usmenu").css("z-index","5");
    })
    $(".about_us").mouseleave(function(){
        $(".usmenu_txt").mouseenter(function(){
            $(".usmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
            $(".usmenu").css("z-index","5");
        })
        $(".usmenu_txt").mouseleave(function(){
            $(".usmenu_txt").css("visibility","hidden");
            $(".usmenu").css("z-index","-100");
        })
    })
    $(".members").mouseenter(function(){
        $(".memmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
        $(".memmenu").css("z-index","5");
    })

    $(".members").mouseleave(function(){
        $(".memmenu_txt").mouseenter(function(){
            $(".memmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".usmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
            $(".memmenu").css("z-index","5");
        })
        $(".memmenu_txt").mouseleave(function(){
            $(".memmenu_txt").css("visibility","hidden");
            $(".memmenu").css("z-index","-100");
        })
    })

    $(".contact_us").mouseenter(function(){
        $(".conmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
        $(".conmenu").css("z-index","5");
    })

    $(".contact_us").mouseleave(function(){
        $(".conmenu_txt").mouseenter(function(){
            $(".conmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".usmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
            $(".conmenu").css("z-index","5");
        })
        $(".conmenu_txt").mouseleave(function(){
            $(".conmenu_txt").css("visibility","hidden");
            $(".conmenu").css("z-index","-100");
        })
    })

    $(".changeeng").mouseenter(function(){
        $(".engmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu").css("z-index","5");
    })

    $(".changeeng").mouseleave(function(){
        $(".engmenu_txt").mouseenter(function(){
            $(".engmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".usmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu").css("z-index","5");
        })
        $(".engmenu_txt").mouseleave(function(){
            $(".engmenu_txt").css("visibility","hidden");
            $(".engmenu").css("z-index","-100");
        })
        $(".space3").mouseenter(function(){
            $(".engmenu_txt").css("visibility" , "hidden");
            $(".engmenu").css("z-index","-100");
        })
        $(".space").mouseenter(function(){
            $(".engmenu_txt").css("visibility" , "hidden");
            $(".engmenu").css("z-index","-100");
        })
        
     })
     var cover_layer = $('.cover').css("opacity");
     console.log(cover_layer);

     //content
     $(".article_pic").mouseenter(function(){
        $(this).css("clip-path" , "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)");   
        console.log("AAAA");
    })
    $(".article_pic").mouseleave(function(){
        $(this).css("clip-path" , "polygon(100% 0%,95% 50%,90% 100%,0% 100%,0% 0%)");
    })

     $(window).scroll(function(){
        //orgin scroll value
        var origin = $(window).scrollTop();
        var truevalue = origin + window.innerHeight;
        console.log(truevalue);
        //loop pic Parallax
        var value = $(window).scrollTop() * 0.7;
        if(value > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)){
            value = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        }
        // $(".loop1").css("top" , value + 'px');
        // $(".loop2").css("top" , value + 'px');
        // $(".loop3").css("top" , value + 'px');
        // $(".loop4").css("top" , value + 'px');
        // $(".loop5").css("top" , value + 'px');
        //navbar shrink js
        console.log("orgin:"+origin);
        if(origin >= window.innerHeight * 0.92){
            $(".logo").css("height" , 3.625 +"rem");
            $(".about_frc").css("height" , 3.625 +"rem");
            $(".about_us").css("height" , 3.625 +"rem");
            $(".members").css("height" , 3.625 +"rem");
            $(".contact_us").css("height" , 3.625 +"rem");
            $(".changeeng").css("height" , 3.625 +"rem");
            $(".space").css("height" , 3.625 +"rem");
            $(".animated_7130").css("height" , 3.625 +"rem");
            $(".n7").css("font-size" , 55 +"px");
            $(".n1").css("font-size" , 55 +"px");
            $(".n3").css("font-size" , 55 +"px");
            $(".n0").css("font-size" , 55 +"px");
            $("#home_logo").css("height" , 3.5 +"rem");
            $("#home_logo").css("width" , 3.5 +"rem");
            $("#navbar").css("grid-template-rows", 0.8 + "fr" , 2 + "fr")
            $(".cover").css("background-image", "linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(0, 0%, 0%) 0%)")
        }
        else{
            $(".logo").css("height" , 5.625 +"rem");
            $(".about_frc").css("height" , 5.625 +"rem");
            $(".about_us").css("height" , 5.625 +"rem");
            $(".members").css("height" , 5.625 +"rem");
            $(".contact_us").css("height" , 5.625 +"rem");
            $(".changeeng").css("height" , 5.625 +"rem");
            $(".space").css("height" , 5.625 +"rem");
            $(".animated_7130").css("height" , 5.625 +"rem");
            $(".n7").css("font-size" , 70 +"px");
            $(".n1").css("font-size" , 70 +"px");
            $(".n3").css("font-size" ,70 +"px");
            $(".n0").css("font-size" , 70 +"px");
            $("#home_logo").css("height" , 5 +"rem");
            $("#home_logo").css("width" , 5 +"rem");
            $("#navbar").css("grid-template-rows", 1 + "fr" , 2 + "fr");
            $(".cover").css("background-image", "linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 0%,hsl(0, 0%, 0%) 0%)");
        }
        //scroll animation
        var scroll_animation_value = $(window).scrollTop() * 3;
        if(scroll_animation_value > Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)){
            scroll_animation_value = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        }
        $(".scroll_ani_pic").css("left" , scroll_animation_value + "px");
        $(".scroll_ani_pic_2").css("right" , scroll_animation_value + "px");
        document.documentElement.style.setProperty("--scrollSize",scroll_animation_value+"px");

        //logo container
        if(truevalue > window.innerHeight * 1.05){
            $(".first_logo").css("opacity","1");
            $(".mingdaologo").css("opacity","1");
            $(".logo7130").css("opacity","1");
            $(".first_logo").css("padding-top", 0 + "px");
            $(".mingdaologo").css("padding-right", 5 + "vw");
            $(".logo7130").css("padding-left", 5 + "vw");
        }
        else{
            $(".first_logo").css("opacity","0");
            $(".mingdaologo").css("opacity","0");
            $(".logo7130").css("opacity","0");
            $(".first_logo").css("padding-top", 20 + "vh");
            $(".mingdaologo").css("padding-right", 50 + "vw");
            $(".logo7130").css("padding-left", 50 + "vw");
        }
        
        
     })
});
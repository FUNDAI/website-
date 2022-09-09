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
    })
    $(".navtext").mouseleave(function(){
        $(".menu_txt").mouseenter(function(){
            $(".cover").css("opacity","0.9");
        })
        $(".menu_txt").mouseleave(function(){
            $(".cover").css("opacity","0")
        })
        $(".space").mouseenter(function(){
            $(".cover").css("opacity" , "0")
        })
        $(".logo").mouseenter(function(){
            $(".cover").css("opacity" , "0")
        })
        $(".space2").mouseenter(function(){
            $(".cover").css("opacity" , "0")
        })
        $(".space3").mouseenter(function(){
            $(".cover").css("opacity" , "0")
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
    })
    $(".about_frc").mouseleave(function(){
        $(".frcmenu_txt").mouseenter(function(){
            $(".frcmenu_txt").css("visibility","visible");
            $(".usmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
        })
        $(".frcmenu_txt").mouseleave(function(){
            $(".frcmenu_txt").css("visibility","hidden");
        })
        $(".space2").mouseenter(function(){
            $(".frcmenu_txt").css("visibility" , "hidden");
        })
        $(".logo").mouseenter(function(){
            $(".frcmenu_txt").css("visibility" , "hidden");
        })
    })
    
    $(".about_us").mouseenter(function(){
        $(".usmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
    })
    $(".about_us").mouseleave(function(){
        $(".usmenu_txt").mouseenter(function(){
            $(".usmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
        })
        $(".usmenu_txt").mouseleave(function(){
            $(".usmenu_txt").css("visibility","hidden");
        })
    })
    $(".members").mouseenter(function(){
        $(".memmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
    })

    $(".members").mouseleave(function(){
        $(".memmenu_txt").mouseenter(function(){
            $(".memmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".usmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
        })
        $(".memmenu_txt").mouseleave(function(){
            $(".memmenu_txt").css("visibility","hidden");
        })
    })

    $(".contact_us").mouseenter(function(){
        $(".conmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".engmenu_txt").css("visibility","hidden");
    })

    $(".contact_us").mouseleave(function(){
        $(".conmenu_txt").mouseenter(function(){
            $(".conmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".usmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".engmenu_txt").css("visibility","hidden");
        })
        $(".conmenu_txt").mouseleave(function(){
            $(".conmenu_txt").css("visibility","hidden");
        })
    })

    $(".changeeng").mouseenter(function(){
        $(".engmenu_txt").css("visibility","visible");
        $(".frcmenu_txt").css("visibility","hidden");
        $(".usmenu_txt").css("visibility","hidden");
        $(".memmenu_txt").css("visibility","hidden");
        $(".conmenu_txt").css("visibility","hidden");
    })

    $(".changeeng").mouseleave(function(){
        $(".engmenu_txt").mouseenter(function(){
            $(".engmenu_txt").css("visibility","visible");
            $(".frcmenu_txt").css("visibility","hidden");
            $(".usmenu_txt").css("visibility","hidden");
            $(".memmenu_txt").css("visibility","hidden");
            $(".conmenu_txt").css("visibility","hidden");
        })
        $(".engmenu_txt").mouseleave(function(){
            $(".engmenu_txt").css("visibility","hidden");
        })
        $(".space3").mouseenter(function(){
            $(".engmenu_txt").css("visibility" , "hidden");
        })
        $(".space").mouseenter(function(){
            $(".engmenu_txt").css("visibility" , "hidden");
        })

        

     })
     $(window).scroll(function(){
        //loop pic Parallax
        var value = $(window).scrollTop() * 0.7;
        if(value > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)){
            value = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        }
        $(".loop1").css("top" , value + 'px');
        $(".loop2").css("top" , value + 'px');
        $(".loop3").css("top" , value + 'px');
        $(".loop4").css("top" , value + 'px');
        $(".loop5").css("top" , value + 'px');
        //navbar shrink js
        var origin = $(window).scrollTop();
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
            $(".cover").css("background-image", "linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(0, 0%, 0%) 20%)")
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
            $(".cover").css("background-image", "linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 29%,hsl(0, 0%, 0%) 31%)");
        }
        //scroll animation
        var scroll_animation_value = $(window).scrollTop() * 3;
        if(scroll_animation_value > Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)){
            scroll_animation_value = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        }
        console.log(scroll_animation_value);
        $(".scroll_ani_pic").css("left" , scroll_animation_value + "px");
        $(".scroll_ani_pic_2").css("right" , scroll_animation_value + "px");
        document.documentElement.style.setProperty("--scrollSize",scroll_animation_value+"px");
        // if(origin > 120){
        //     //$(".scroll_animation").css("background-color" , "#3db5ff");
        //     //$(".scroll_animation").css("background-image" , "linear-gradient(to right,#3db5ff" + gradient_percentage + "% , hsl(0, 0%, 100%) 50% , #3db5ff" + 100 - gradient_percentage + "% )");
        //     // $(".scroll_animation").css("background-image" , "linear-gradient(to right,#3db5ff 0% , hsl(0, 0%, 100%) 50% , #3db5ff 100% )");
        //     //document.documentElement.style.setProperty("--scrollSize",scroll_animation_value+"px")
        // }
        // else {
        //     //$(".scroll_animation").css("background-color" , "white");
        //     //$(".scroll_animation").css("background-image" , "none");
        // }
     })
});
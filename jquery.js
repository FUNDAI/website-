window.addEventListener("scroll",function(){
    let Parallax = document.getElementById("rolltxt");
    var value = window.scrollY;
    if(value > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)){
        value = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    }
    Parallax.style.top = value * 0.6 + "px";
})  
// $(".preload").load(function(){
//     $(".preload").delay.fadeOut("slow");
// })
$(window).on("load", function(){
    $(".loaded").hide().delay(6700).fadeIn("slow");
    $(".preload").delay(6500).fadeOut("slow");
})

$(document).ready(function(){
    //navbar js
    

    var $first_logo = $(".first_logo");
    var $mingdaologo = $(".mingdaologo");
    var $logo7130 = $(".logo7130");
    var $first_article  = $(".first_article");
    var $article_pic  = $(".article_pic");
    var $mask  = $(".mask");
    var $article_title = $(".article_title");
    var $title_background  = $(".title_background");
    var $first_article2  = $(".first_article2");
    var $paragraph_area  = $(".paragraph_area");
    var $lead_link  = $(".lead_link");
    var $scroll_ani_pic = $(".scroll_ani_pic");
    var $scroll_ani_pic_2 = $(".scroll_ani_pic_2");
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
        $(".cover").css("opacity","0.9").css("z-index","5");
    })
    $(".navtext").mouseleave(function(){
        $(".menu_txt").mouseenter(function(){
            $(".cover").css("opacity","0.9").css("z-index","5");
        })
        $(".menu_txt").mouseleave(function(){
            $(".cover").css("opacity","0").css("z-index","-100");
        })
        $(".space").mouseenter(function(){
            $(".cover").css("opacity" , "0").css("z-index","-100");
        })
        $(".logo").mouseenter(function(){
            $(".cover").css("opacity" , "0").css("z-index","-100");
        })
        $(".space2").mouseenter(function(){
            $(".cover").css("opacity" , "0").css("z-index","-100");
        })
        $(".space3").mouseenter(function(){
            $(".cover").css("opacity" , "0").css("z-index","-100");
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
            $(this).css("visibility","visible");
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

     //content
     $(".article_pic").mouseenter(function(){
        $(this).css("clip-path" , "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)"); 
        $(".mask").mouseenter(function(){
            $(".article_pic").css("clip-path" , "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)"); 
        })
    })

    $(".pic_link").mouseenter(function(){
        $(".article_pic").css("clip-path" , "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)"); 
        $(".mask").mouseenter(function(){
            $(".article_pic").css("clip-path" , "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)"); 
        })
    })

    $(".article_pic").mouseleave(function(){
        $(this).css("clip-path" , "polygon(100% 0%,95% 50%,90% 100%,0% 100%,0% 0%)");
        $(".mask").mouseleave(function(){
            $(".article_pic").css("clip-path" , "polygon(100% 0%,95% 50%,90% 100%,0% 100%,0% 0%)");
        })  
    })

    $(".pic_link").mouseleave(function(){
        $(".article_pic").css("clip-path" , "polygon(100% 0%,95% 50%,90% 100%,0% 100%,0% 0%)");
        $(".mask").mouseleave(function(){
            $(".article_pic").css("clip-path" , "polygon(100% 0%,95% 50%,90% 100%,0% 100%,0% 0%)");
        })  
    })

    $(".first_article").mouseenter(function(){
        $(".mask").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");  
        $(".paragraph_area").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");
    })
    $(".first_article").mouseleave(function(){
        $(".mask").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px"); 
        $(".paragraph_area").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".first_article2").mouseenter(function(){
        $(".paragraph_area").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");
        $(".mask").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");  
    })
    $(".first_article2").mouseleave(function(){
        $(".mask").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px 0px 0px"); 
        $(".paragraph_area").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".lead_link").mouseenter(function(){
        $(this).css("box-shadow" , "hsl(200, 89%, 24% , 0.4) -10px 0px 50px 2px");
        $(".arrow").css("clip-path"," polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)");
        $(".arrow2").css("clip-path"," polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)");
    })
    $(".lead_link").mouseleave(function(){
       $(this).css("box-shadow" , "hsl(200, 89%, 24% , 0.4) 0px 0px");
       $(".arrow").css("clip-path","polygon(0 0, 0 3% ,0 5% , 0 10% , 0 20% , 0% 100%, 100% 50%)");
       $(".arrow2").css("clip-path"," polygon(0 0, 0 3% ,0 5% , 0 10% , 0 20% , 0% 100%, 100% 50%)");
    })

    $(".article_pic2").mouseenter(function(){
        $(this).css("clip-path" , "polygon(100% 0%, 25% 0%, 0% 50%, 25% 100%, 100% 100%)"); 
        $(".mask2").mouseenter(function(){
            $(".article_pic2").css("clip-path" , "polygon(100% 0%, 25% 0%, 0% 50%, 25% 100%, 100% 100%)"); 
        })
    })

    $(".pic_link2").mouseenter(function(){
        $(".article_pic2").css("clip-path" , "polygon(100% 0%, 25% 0%, 0% 50%, 25% 100%, 100% 100%)"); 
        $(".mask2").mouseenter(function(){
            $(".article_pic2").css("clip-path" , "polygon(100% 0%, 25% 0%, 0% 50%, 25% 100%, 100% 100%)"); 
        })
    })
    
    $(".article_pic2").mouseleave(function(){
        $(this).css("clip-path" , "polygon(0% 0%,5% 50%,10% 100%,100% 100%,100% 0%)");
        $(".mask2").mouseleave(function(){
            $(".article_pic2").css("clip-path" , "polygon(0% 0%,5% 50%,10% 100%,100% 100%,100% 0%)");
        })  
    })

    $(".pic_link2").mouseleave(function(){
        $(".article_pic2").css("clip-path" , "polygon(0% 0%,5% 50%,10% 100%,100% 100%,100% 0%)");
        $(".mask2").mouseleave(function(){
            $(".article_pic2").css("clip-path" , "polygon(0% 0%,5% 50%,10% 100%,100% 100%,100% 0%)");
        })  
    })

    // 2
    $(".k7130_article").mouseenter(function(){
        $(".mask2").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");  
        $(".paragraph_area2").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");
    })
    $(".k7130_article").mouseleave(function(){
        $(".mask2").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px"); 
        $(".paragraph_area2").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".k7130_article2").mouseenter(function(){
        $(".paragraph_area2").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");
        $(".mask2").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");  
    })
    $(".k7130_article2").mouseleave(function(){
        $(".mask2").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px 0px 0px"); 
        $(".paragraph_area2").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".lead_link2").mouseenter(function(){
        $(this).css("box-shadow" , "hsl(125, 89%, 24% , 0.4) 10px 0px 50px 2px");
        $(".arrow_2").css("clip-path"," polygon(100% 20%, 40% 20%, 40% 0%, 0% 50%, 40% 100%, 40% 80%, 100% 80%)");
        $(".arrow2_2").css("clip-path"," polygon(100% 20%, 40% 20%, 40% 0%, 0% 50%, 40% 100%, 40% 80%, 100% 80%)");
    })
    $(".lead_link2").mouseleave(function(){
       $(this).css("box-shadow" , "hsl(125, 89%, 24% , 0.4) 0px 0px");
       $(".arrow_2").css("clip-path","polygon(100% 0, 100% 3% ,100% 5% , 100% 10% , 100% 20% , 100% 100%, 0% 50%)");
       $(".arrow2_2").css("clip-path"," polygon(100% 0, 100% 3% ,100% 5% , 100% 10% , 100% 20% , 100% 100%, 0% 50%)");
    })
    // 3
    $(".mem_article").mouseenter(function(){
        $(".mask3").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");  
        $(".paragraph_area3").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");
    })
    $(".mem_article").mouseleave(function(){
        $(".mask3").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px"); 
        $(".paragraph_area3").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".mem_article2").mouseenter(function(){
        $(".paragraph_area3").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");
        $(".mask3").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");  
    })
    $(".mem_article2").mouseleave(function(){
        $(".mask3").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px 0px 0px"); 
        $(".paragraph_area3").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".lead_link3").mouseenter(function(){
        $(this).css("box-shadow" , "hsl(277, 89%, 24% , 0.4) -10px 0px 50px 2px");
        $(".arrow_3").css("clip-path"," polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)");
        $(".arrow2_3").css("clip-path"," polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)");
    })
    $(".lead_link3").mouseleave(function(){
        $(this).css("box-shadow" , "hsl(277, 89%, 24% , 0.4) 0px 0px");
        $(".arrow_3").css("clip-path","polygon(0 0, 0 3% ,0 5% , 0 10% , 0 20% , 0% 100%, 100% 50%)");
        $(".arrow2_3").css("clip-path"," polygon(0 0, 0 3% ,0 5% , 0 10% , 0 20% , 0% 100%, 100% 50%)");
     })
    //  4
    $(".contact_article").mouseenter(function(){
        $(".mask4").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");  
        $(".paragraph_area4").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");
    })
    $(".contact_article").mouseleave(function(){
        $(".mask4").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px"); 
        $(".paragraph_area4").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".contact_article2").mouseenter(function(){
        $(".paragraph_area4").css("box-shadow" , "rgb(100 100 111 / 20%) -20px 20px 29px 10px");
        $(".mask4").css("box-shadow" , "rgb(100 100 111 / 20%) 20px 20px 29px 10px");  
    })
    $(".contact_article2").mouseleave(function(){
        $(".mask4").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px 0px 0px"); 
        $(".paragraph_area4").css("box-shadow" , "rgb(100 100 111 / 20%) 0px 0px ");
    })
    $(".lead_link4").mouseenter(function(){
        $(this).css("box-shadow" , "hsl(36, 89%, 24% , 0.4) 10px 0px 50px 2px");
        $(".arrow_4").css("clip-path"," polygon(100% 20%, 40% 20%, 40% 0%, 0% 50%, 40% 100%, 40% 80%, 100% 80%)");
        $(".arrow2_4").css("clip-path"," polygon(100% 20%, 40% 20%, 40% 0%, 0% 50%, 40% 100%, 40% 80%, 100% 80%)");
    })
    $(".lead_link4").mouseleave(function(){
       $(this).css("box-shadow" , "hsl(36, 89%, 24% , 0.4) 0px 0px");
       $(".arrow_4").css("clip-path","polygon(100% 0, 100% 3% ,100% 5% , 100% 10% , 100% 20% , 100% 100%, 0% 50%)");
       $(".arrow2_4").css("clip-path"," polygon(100% 0, 100% 3% ,100% 5% , 100% 10% , 100% 20% , 100% 100%, 0% 50%)");
    })

     $(window).scroll(function(){
        //orgin scroll value
        var origin = $(window).scrollTop();
        var truevalue = origin + window.innerHeight;
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
        var scroll_animation_value = $(window).scrollTop()*1.5;
        if(scroll_animation_value > Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)){
            scroll_animation_value = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        }
        $scroll_ani_pic.css("left" , scroll_animation_value + "px");
        $scroll_ani_pic_2.css("right" , scroll_animation_value + "px");
        document.documentElement.style.setProperty("--scrollSize",scroll_animation_value+"px");

        //logo container

        if(truevalue > window.innerHeight * 1.05){
            $first_logo.css("opacity","1").css("padding-top", 0 + "px");
            $mingdaologo.css("opacity","1").css("padding-right", 8 + "vw");
            $logo7130.css("opacity","1").css("padding-left", 8 + "vw");
        }
        else{
            $first_logo.css("opacity","0").css("padding-top", 20 + "vh");
            $mingdaologo.css("opacity","0").css("padding-right", 30 + "vw");
            $logo7130.css("opacity","0").css("padding-left", 30 + "vw");
        }
        
        //article_first
        
        if(truevalue > window.innerHeight + window.innerHeight * 0.1){
            $first_article.css("right", 0 + "vw");
            $article_pic.css("right", 0 + "vw");
            $mask.css("right", 0 + "vw");
            $article_title.css("right", 0 + "vw");
            $title_background.css("right", 0 + "vw");
            $first_article2.css("left", 0 + "vw");
            $paragraph_area.css("left", 0 + "vw");
            $lead_link.css("opacity", 1);
        }
        else{
            $(".first_article").css("right", 50 + "vw");
            $(".article_pic").css("right", 50 + "vw");
            $(".mask").css("right", 50 + "vw");
            $(".article_title").css("right", 170 + "vw");
            $(".title_background").css("right", 200 + "vw");
            $(".first_article2").css("left", 50 + "vw");
            $(".paragraph_area").css("left", 50 + "vw");
            $(".lead_link").css("opacity", 0);
        }
        var value2 = window.innerHeight * 1.1 + window.innerWidth * 0.4;
        if(truevalue > value2){
            $(".k7130_article").css("right", 0 + "vw");
            $(".article_pic2").css("left", 0 + "vw");
            $(".mask2").css("left", 0 + "vw");
            $(".article_title2").css("left", 0 + "vw");
            $(".title_background2").css("left", 0 + "vw");
            $(".k7130_article2").css("left", 0 + "vw");
            $(".paragraph_area2").css("right", 0 + "vw");
            $(".lead_link2").css("opacity", 1);
        }
        else{
            $(".k7130_article").css("right", 50 + "vw");
            $(".article_pic2").css("left", 50 + "vw");
            $(".mask2").css("left", 50 + "vw");
            $(".article_title2").css("left", 170 + "vw");
            $(".title_background2").css("left", 200 + "vw");
            $(".k7130_article2").css("left", 50 + "vw");
            $(".paragraph_area2").css("right", 50 + "vw");
            $(".lead_link2").css("opacity", 0);
        }
        var value3 = value2 + window.innerWidth * 0.4;
        if(truevalue > value3){
            $(".mem_article").css("right", 0 + "vw");
            $(".article_pic3").css("right", 0 + "vw");
            $(".mask3").css("right", 0 + "vw");
            $(".article_title3").css("right", 0 + "vw");
            $(".title_background3").css("right", 0 + "vw");
            $(".mem_article2").css("left", 0 + "vw");
            $(".paragraph_area3").css("left", 0 + "vw");
            $(".lead_link3").css("opacity", 1);
        }
        else{
            $(".mem_article3").css("right", 50 + "vw");
            $(".article_pic3").css("right", 50 + "vw");
            $(".mask3").css("right", 50 + "vw");
            $(".article_title3").css("right", 170 + "vw");
            $(".title_background3").css("right", 200 + "vw");
            $(".mem_article2").css("left", 50 + "vw");
            $(".paragraph_area3").css("left", 50 + "vw");
            $(".lead_link3").css("opacity", 0);
        }
        var value4 = value3 + window.innerWidth * 0.4;
        if(truevalue > value4){
            $(".contact_article").css("right", 0 + "vw");
            $(".article_pic4").css("left", 0 + "vw");
            $(".mask4").css("left", 0 + "vw");
            $(".article_title4").css("left", 0 + "vw");
            $(".title_background4").css("left", 0 + "vw");
            $(".contact_article2").css("left", 0 + "vw");
            $(".paragraph_area4").css("right", 0 + "vw");
            $(".lead_link4").css("opacity", 1);
        }
        else{
            $(".contact_article").css("right", 50 + "vw");
            $(".article_pic4").css("left", 50 + "vw");
            $(".mask4").css("left", 50 + "vw");
            $(".article_title4").css("left", 170 + "vw");
            $(".title_background4").css("left", 200 + "vw");
            $(".contact_article2").css("left", 50 + "vw");
            $(".paragraph_area4").css("right", 50 + "vw");
            $(".lead_link4").css("opacity", 0);
        }
        
     })
});
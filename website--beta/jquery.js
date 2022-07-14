$(document).ready(function(){
    $("#home_logo").mouseenter(function(){
        $(".logo").fadeTo("fast",0.5);
        $(".about_frc").fadeTo("fast",0.5);
        $(".about_us").fadeTo("fast",0.5);
        $(".members").fadeTo("fast",0.5);
        $(".contact_us").fadeTo("fast",0.5);
        $(".changeeng").fadeTo("fast",0.5);
        $(".space").fadeTo("fast",0.5);
        $(".animated_7130").fadeTo("fast",0.5);
        $(".logo").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".about_frc").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".about_us").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".members").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".contact_us").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".changeeng").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".space").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".animated_7130").css("background-image","linear-gradient(to bottom, hsla(170, 65%, 50%, 0.75) 0%,hsla(170, 65%, 40%, 0.75) 100%)");
        $(".logo").fadeTo("fast",1);
        $(".about_frc").fadeTo("fast",1);
        $(".about_us").fadeTo("fast",1);
        $(".members").fadeTo("fast",1);
        $(".contact_us").fadeTo("fast",1);
        $(".changeeng").fadeTo("fast",1);
        $(".space").fadeTo("fast",1);
        $(".animated_7130").fadeTo("fast",1);
    })
    $("#home_logo").mouseleave(function(){
        $(".logo").fadeTo("fast",0.5);
        $(".about_frc").fadeTo("fast",0.5);
        $(".about_us").fadeTo("fast",0.5);
        $(".members").fadeTo("fast",0.5);
        $(".contact_us").fadeTo("fast",0.5);
        $(".changeeng").fadeTo("fast",0.5);
        $(".space").fadeTo("fast",0.5);
        $(".animated_7130").fadeTo("fast",0.5);
        $(".logo").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".about_frc").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".about_us").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".members").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".contact_us").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".changeeng").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".space").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".animated_7130").css("background-image","linear-gradient(to bottom, hsl(193, 65%, 40%) 0%,hsl(193, 65%, 20%) 100%)");
        $(".logo").fadeTo("fast",1);
        $(".about_frc").fadeTo("fast",1);
        $(".about_us").fadeTo("fast",1);
        $(".members").fadeTo("fast",1);
        $(".contact_us").fadeTo("fast",1);
        $(".changeeng").fadeTo("fast",1);
        $(".space").fadeTo("fast",1);
        $(".animated_7130").fadeTo("fast",1);
    })
    $(".navtext").mouseenter(function(){
        $(".cover").css("visibility","visible");
    })
    $(".navtext").mouseleave(function(){
        $(".menu_txt").mouseenter(function(){
            $(".cover").css("visibility","visible");
        })
        $(".menu_txt").mouseleave(function(){
            $(".cover").css("visibility","hidden")
        })
    })
    $(".about_frc").mouseenter(function(){
        $(".about_frc > .navbar_text").css("color","hsl(0, 0%,95%)");
    })
    $(".about_us").mouseenter(function(){
        $(".about_us > .navbar_text").css("color","hsl(0, 0%,95%)");
    })
    $(".members").mouseenter(function(){
        $(".members > .navbar_text").css("color","hsl(0, 0%,95%)");
    })
    $(".contact_us").mouseenter(function(){
        $(".contact_us > .navbar_text").css("color","hsl(0, 0%,95%)");
    })
    $(".changeeng").mouseenter(function(){
        $(".changeeng > .navbar_text").css("color","hsl(0, 0%,95%)");
    })
    $(".about_frc").mouseleave(function(){
        $(".about_frc > .navbar_text").css("color","hsl(0, 0%, 65%)");
    })
    $(".about_us").mouseleave(function(){
        $(".about_us > .navbar_text").css("color","hsl(0, 0%, 65%)");
    })
    $(".members").mouseleave(function(){
        $(".members > .navbar_text").css("color","hsl(0, 0%, 65%)");
    })
    $(".contact_us").mouseleave(function(){
        $(".contact_us > .navbar_text").css("color","hsl(0, 0%, 65%)");
    })
    $(".changeeng").mouseleave(function(){
        $(".changeeng > .navbar_text").css("color","hsl(0, 0%, 65%)");
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
    })
});
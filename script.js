function changeImage()
{
    var im = document.getElementById("home_logo");
    image = im.style.backgroundImage = "url('logo1.png')";
    
}
function changeImageback()
{
    var im = document.getElementById("home_logo");
    image = im.style.backgroundImage = "url('logo.png')";
}
/*function changecolor(){
    var im = document.getElementById("navbar");
    image = im.style.backgroundImage = "linear-gradient(to right, hsla(24, 65%, 50%, 0.5) 0%,hsla(17, 79%, 70%, 0.75) 100%)";

}
function changecolorback(){
    var im = document.getElementById("navbar");
    image = im.style.backgroundImage = "linear-gradient(to bottom, hsl(202, 93%, 44%) 0%,hsl(249, 93%, 44%) 100%)";

}
*/


window.addEventListener("scroll",function(){
    let Parallax = document.getElementById("rolltxt");
    var value = window.scrollY;
    if(value > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)){
        value = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    }
    Parallax.style.top = value * 0.7 + "px";
})  
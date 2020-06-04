$(document).ready(function(){
    if ("ontouchstart" in document.documentElement)
        $('body').addClass("touchDevice");
    else
        $('body').addClass("noTouchDevice");
});
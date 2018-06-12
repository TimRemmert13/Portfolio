$(document).ready(function(){
    $(".burger").click(function() {
        $(this).toggleClass("is-active");
        $(".menu-mobile").toggle();
    });
});


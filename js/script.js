var currentColor;

$(document).ready(function(){
    

    //Make all panels disappear when one is clicked
    //$(".theButton").on("click", function () {
    //    $(".theButton").addClass("disappear");
    //});


    $(".theButton").on("click", function () {
        currentColor = $(this).css("background-color");
        $(".theButton").not(this).fadeTo("slow", .2);
        $(this).fadeTo("slow", 1);
        $(".superButton").css("background-color", currentColor);
    });


    /* This is another way to do the above
    $(".theButton").on("click", function () {
        $(this).parent().siblings().fadeTo("slow", .2);
        $(this).parent().fadeTo("slow", 1);
    });
    */


    $(".superButton").on("click", function() {
            $(".theButton").fadeTo("slow", 1);
            $(this).removeAttr("style");
    });

    
    //Make hovered button black
    //$(".theButton").hover(function () {
    //  $(this).addClass("colorBlack")}, function(){
    //      $(this).removeClass("colorBlack")
    //});


    //Tried to make it highlight the hovered color, but revert if opacity is already .2
    //$(".theButton").hover(function () {
    //    $(this).fadeTo("slow", 1)}, function(){
    //        $(this).fadeTo("slow", .2);
    //});

   });
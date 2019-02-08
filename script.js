
$("#friends").click(function(){
    $(".text").css("color","purple");
});
$(".text").click(function(){
    $(".button1").text("look at me");
});
$(".button1").click(function(){
    if($(".button1").text()=== "Click Me!") {
        $("#friends").css("display","block");
    }
    else {
        $(".button2").css("display","block");
    }
});
$(".button2").click(function(){
    $(".food").css("display","block");
});
$(".food").click(function(){
    $("body").css("background","pink");
});



var square=["x1","x2","x3","x4","x5","x6","x7","x8","x9"]
var started=false;

$(".square").click(function(){
    var choosePlayer1=$(this).attr("name")
    $("."+choosePlayer1).addClass("show")

    setTimeout(function(){
        var numberRandom=Math.floor(Math.random()*9)
        var choosePlayer2=square[numberRandom]
        while(choosePlayer2===choosePlayer1){
        numberRandom=Math.floor(Math.random()*9)
        choosePlayer2=square[numberRandom]
    }
    alert(numberRandom)
    $(".x"+numberRandom).addClass("show")
        
    },700);
})
$(".square4").click(function(){
    $(".x4").addClass("show")
    setTimeout(player2,700)
})
$(".square5").click(function(){
    $(".x5").addClass("show")
    setTimeout(player2,700)
})
$(".square6").click(function(){
    $(".x6").addClass("show")
    setTimeout(player2,700)
})
$(".square7").click(function(){
    $(".x7").addClass("show")
    setTimeout(player2,700)
})
$(".square8").click(function(){
    $(".x8").addClass("show")
    setTimeout(player2,700)
})
$(".square9").click(function(){
    $(".x9").addClass("show")
    setTimeout(player2,700)
})
var player2=function(){
    var numberRandom=Math.floor(Math.random()*9)
    var choosePlayer2=square[numberRandom]
    while(choosePlayer2===choosePlayer1){
    numberRandom=Math.floor(Math.random()*9)
    choosePlayer2=square[numberRandom]
}
alert(numberRandom)
$(".x"+numberRandom).addClass("show")
    
}
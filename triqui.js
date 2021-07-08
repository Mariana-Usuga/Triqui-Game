


var square=[["x1","x2","x3"],["x4","x5","x6"],["x7","x8","x9"]];
var started=false;

$(".square").click(function(){
    var choosePlayer1=$(this).attr("id")
    $("."+choosePlayer1).addClass("show")

    for(q=0; q<square.length; q++){
        for(w=0; w<square.length; w++){
            if(square[q][w]===choosePlayer1){
            square[q][w]="x"
            break;
        }
    }
}
    if(started===false){
        first(square)
        started=true;
    }
    else{
        player2(square)
}

} )

function first(square){
    var randomNumber = Math.floor(Math.random() * 3);
    var randomNumber2 = Math.floor(Math.random() * 3);
    var randomChoose=square[randomNumber][randomNumber2];
    while(randomChoose==="x"){
    randomNumber = Math.floor(Math.random() * 3);
    randomNumber2 = Math.floor(Math.random() * 3);
    randomChoose=square[randomNumber][randomNumber2];
    }
    setTimeout(function(){
        $("."+randomChoose)[0].innerHTML="O"
        $("."+randomChoose).addClass("show")
                randomChoose="o"
                console.log(square)
    }, 2000)
}

function player2(square){
    var ganaste=false;
        if(square[0][0]==="x" && square[0][1]==="x" && square[0][2]==="x"){
            alert("ganaste")
            ganaste=true;
        }
        else if(square[1][0]==="x" && square[1][1]==="x" && square[1][2]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        else if(square[2][0]==="x" && square[2][1]==="x" && square[2][2]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        /*----columnas----*/
        else if(square[0][0]==="x" && square[1][0]==="x" && square[2][0]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        else if(square[0][1]==="x" && square[1][1]==="x" && square[2][1]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        else if(square[0][2]==="x" && square[1][2]==="x" && square[2][2]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        else if(square[0][0]==="x" && square[1][1]==="x" && square[2][2]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        else if(square[0][2]==="x" && square[1][1]==="x" && square[2][0]==="x"){
            console.log("ganaste")
            ganaste=true;
        }
        else if(ganaste===false){
            /*--------Filas---------*/
            var i=0;
            while(i<3){
            
            if(square[i][0]!=="x" && square[i][1]==="x" && square[i][2]==="x"){
                setTimeout(function(){
                    alert("workinggggg")
                    $("."+square[i][0])[0].innerHTML="O"
                    $("."+square[i][0]).addClass("show")
                    square[i][0]="o";    
                }, 3000)
                break;
            }
            else if(square[i][0]==="x" && square[i][1]!=="x" && square[i][2]==="x"){
                alert("workingggg")
                $("."+square[i][1])[0].innerHTML="O"
                $("."+square[i][1]).addClass("show")
                square[i][1]="o"
                break;
            }
            else if(square[i][0]==="x" && square[i][1]==="x" && square[i][2]!=="x"){
                alert("workingggg")
                $("."+square[i][2])[0].innerHTML="O"
                $("."+square[i][2]).addClass("show")
                square[i][2]="o"
                break;
                }
                else{
                    /*----------Columnas---------*/
                    alert("workingggg col")
                    if(square[0][i]!=="x" && square[1][i]==="x" && square[2][i]==="x"){
                        $("."+square[0][i])[0].innerHTML="O"
                        $("."+square[0][i]).addClass("show")
                        square[0][i]="o"
                    }
                    else if(square[0][i]==="x" && square[1][i]!=="x" && square[2][j]==="x"){
                        $("."+square[1][i])[0].innerHTML="O"
                        $("."+square[1][i]).addClass("show")
                        square[1][i]="o"
                    }
                    else if(square[0][i]==="x" && square[1][i]==="x" && square[2][i]!=="x"){
                        $("."+square[2][i])[0].innerHTML="O"
                        $("."+square[2][i]).addClass("show")
                        square[2][i]="o"
                    }
                    first(square);
                }
                i++;
        }
    }
}
    
//button
function startGame(){
    mode = "startgame"
    window.location.href = "game.html"
}

function startGameRule(){
    window.location.href = "gamerule.html"
}
//chessboard
var chess = document.getElementById('chess');
var context = chess.getContext('2d');

var img= new Image();
img.src="img/chessbackground.jpg";
img.onload=function(){
    context.drawImage(img,0,0,450,450);
    drawChessboard();
}

function drawChessboard(){
    for(var i=0; i<15; i++){
        context.moveTo(15,15+i*30);
        context.lineTo(435,15+i*30);
        context.stroke();
        context.moveTo(15+i*30,15);
        context.lineTo(15+i*30,435);
        context.stroke();
    }
}

//chess style on the board

var setChess = function(i,j,chesscolor){
    context.beginPath();
    context.arc(15+i*30, 15+j*30,13,0,2*Math.PI);
    context.closePath();
    var gradient=context.createRadialGradient(15+i*30+2,15+j*30-2,15,15+i*30,15+j*30,0);
    if(chesscolor){
        gradient.addColorStop(0, "#0a0a0a");
        gradient.addColorStop(1, "#636766");
    }
    else{
        gradient.addColorStop(0, "#D1D1D1");
        gradient.addColorStop(1, "#F9F9F9");
    }
    context.fillStyle=gradient;
    context.fill();
}
//click to set chess
var chesscolor=true;

var chessBoard=[];
for (var i=0;i<15;i++){
    chessBoard[i]=[];
    for(var j=0;j<15;j++){
        chessBoard[i][j]=0;
    }
}

chess.onclick=function(getCoordinate){

    if(over){
        return;
    }

    var x=getCoordinate.offsetX;
    var y=getCoordinate.offsetY;
    var i=Math.floor(x/30);
    var j=Math.floor(y/30);
    if(chessBoard[i][j]==0){
        setChess(i,j,chesscolor);
        if(chesscolor){
            chessBoard[i][j]=1;
            for(var k=0;k<count;k++){
                if(wins[i][j][k]){
                    blackWin[k]++;//if there is one chess on the line, +1
                    whiteWin[k]=6;//make sure white can not win
                    if(blackWin[k]==5){
                        window.alert("Black win the game!")
                        over=true;
                    }
                }
            }
        }
        else{
            chessBoard[i][j]=2;
            for(var k=0;k<count;k++){
                if(wins[i][j][k]){
                    blackWin[k]=6;//make sure black can not win
                    whiteWin[k]++;//if there is one chess on the line, +1
                    if(whiteWin[k]==5){
                        window.alert("White win the game!")
                        over=true;
                    }
                }
            }
        }
        chesscolor=!chesscolor;

    }
}

//check if the game is over
var wins =[];
var count=0;

for(var i=0;i<15;i++){
    wins[i]=[];
    for(var j=0;j<15;j++){
        wins[i][j]=[];
    }
}
//horizontal win
for(var i=0;i<15;i++){
    for(var j=0;j<11;j++){
        for(var k=0;k<5;k++){
            wins[i][j+k][count]=true;
        }
        count++;
    }
}
//vertical win
for(var i=0;i<15;i++){
    for(var j=0;j<11;j++){
        for(var k=0;k<5;k++){
            wins[j+k][i][count]=true;
        }
        count++;
    }
}
//slash win
for(var i=0;i<11;i++){
    for(var j=0;j<11;j++){
        for(var k=0;k<5;k++){
            wins[i+k][j+k][count]=true;
        }
        count++;
    }
}
//backslash win
for(var i=0;i<11;i++){
    for(var j=14;j>3;j--){
        for(var k=0;k<5;k++){
            wins[i+k][j-k][count]=true;
        }
        count++;
    }
}
//check if the game over
var over=false;
var blackWin=[];
var whiteWin=[];
for(var i=0;i<count;i++){
    blackWin[i]=0;
    whiteWin[i]=0;
}
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

var chess = function(i,j,chesscolor){
    context.beginPath();
    context.arc(15+i*30, 15+j*30,0,2*Math.PI);
    context.closePath();
    var gradient=context.createRadialGradient(15+i*30+2,15+j*30-2,15,15+i*30,15+j*30,0);
    if(chesscolor){
        gradient.addColorStop(0, "#0a0a0a");
        gradient.addColorStop(1, "#636766");
    }
    else{
        gradient.addColorStop(0, "#D1D1D1");
        gtadient.addColorStop(1, "#F9F9F9");
    }
    context.fillStyle=gradient;
    context.fill();
}

//click to set chess
var chesscolor=true;
var click = document.getElementById('click');
var context = click.getContext('2d');
click.onclick=function(getCoordinate){
    var x=getCoordinate.offsetX;
    var y=getCoordinate.offsetY;
    var i=Math.floor(x/30);
    var j=Math.floor(y/30);
    chess(i,j,chesscolor);
    chesscolor=!chesscolor;
}
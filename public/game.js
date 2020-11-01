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
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();
    }
}
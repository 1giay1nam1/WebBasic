// alert(Math.floor((Math.random()*10)));
function $(id){
   return document.getElementById(id);
}
window.onload = function() {
function checkPlayer(){
    var playerOne = $('player1').value;
    var playerTwo = $('player2').value;
    var pointOne = $('point-player1').value;
    var pointOne = $('point-player2').value;
    if(playerOne > 1){
        console.log(Math.floor(Math.random()*10));
        pointOne +=Math.random();
    }else if(playerOne ===1){
        pointOne = 0;
    }else if(playerTwo>1){
        console.log(Math.floor(Math.random()*10));
        pointTwo +=Math.random();
    }else{
        pointTwo=0;
    }
}


    $('submit').onclick= checkPlayer();
}
var originalBoard;
const huPlayer ='O';
const machinePlayer ='X';
const winCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[1,4,7],
[0,3,6],
[2,5,8]
]

const cells = document.querySelectorAll('.cell');
//console.log(cells);
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  originalBoard =Array.from(Array(9).keys());//make an array using array keys [0-9]
  console.log(originalBoard);
  for (var i=0; i<cells.length; i++){
    cells[i].innerText ='';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click',turnClick,false)
  }
}
  function turnClick(square){
    if (typeof originalBoard[square.target.id] == 'number'){
    turn(square.target.id, huPlayer);
    if(!checkTie()) turn(bestSpot(),machinePlayer);
    }
  }

  function turn(squareId, player){ //player is current player
    originalBoard[squareId]=player;
    console.log("winComos.entries() ", winCombos.entries());
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(originalBoard,player);
    if (gameWon) gameOver(gameWon);
  }

 function declareWinner(who){
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText =who;

 }

  function emptySquares(){
    return originalBoard.filter( s=> typeof s ==='number')
  }

  function bestSpot(){
    //return emptySquares()[0];
    return minimax(originalBoard,machinePlayer).index;
  }

  function checkTie(){
    //if no empty squares and nobody won(checkWin function checking winner for every move), it is a tie.
    if (emptySquares().length === 0){
      for (let i=0; i< cells.length; i++){
        cells[i].style.backgroundColor = 'green';
        cells[i].removeEventListener('click', turnClick,false);
      }
      declareWinner("Tie Game");
      return true;
    }
    return false;
  }


  function checkWin(board,player){
    //find all the places on the board that already been played in.
    let plays = board.reduce((a,e,i) =>
      (e === player) ? a.concat(i) : a, [])
    let gameWon = null;
    for (let[index,win] of winCombos.entries()){
      if(win.every(elem => plays.indexOf(elem) > -1)){
        gameWon = {index: index, player: player};
        break;
      }
    }
    return gameWon;
  }//a:accumulator-the result;e:element in the board array; i: index

  function gameOver(gameWon){
    for (let index of winCombos[gameWon.index]){
      document.getElementById(index).style.backgroundColor = gameWon.player === huPlayer ? "blue" : "red";
    }
    for (let i=0; i<cells.length; i++){
      cells[i].removeEventListener('click',turnClick,false);
    }
    declareWinner(gameWon.player === huPlayer ? "You win!" : "You lose!");
  }

  function minimax(newBoard,player){
    var availSpots = emptySquares(newBoard);

    if (checkWin(newBoard,player)){
      return {score: -10};
    }else if (checkWin(newBoard,machinePlayer)){
      return {score: 10};
    }else if (availSpots.length===0){
      return {score:0};
    }

    var moves =[];
    for (var i=0; i< availSpots.length; i++){
      var move ={};
      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;

      if (player === machinePlayer) {
        var result = minimax(newBoard, huPlayer);
        move.score = result.score;
      } else {
        var result = minimax(newBoard, machinePlayer);
        move.score = result.score;
      }
      newBoard[availSpots[i]] = move.index;
        moves.push(move);
      }

      var bestMove;
      if(player === machinePlayer){
        var bestScore = -10000;
        for (var i=0; i<moves.length; i++){
          if (moves[i].score > bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }

      } else {
        var bestScore = 10000;
        for (var i=0; i< moves.length; i++){
          if (moves[i].score < bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
    return moves[bestMove];

}
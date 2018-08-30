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
console.log(cells);
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

  function turnClick(square){
    turn(square.target.id, huPlayer);
  }


  function turn(squareId, player){ //player is current player
    originalBoard[squareId]=player;
    console.log("winComos.entries() ", winCombos.entries());
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(originalBoard,player);
    if (gameWon) gameOver(gameWon);
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
  }
}
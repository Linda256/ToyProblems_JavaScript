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
    console.log(square.target.id);
  }
}
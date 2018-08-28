/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
//method 1: naive solution for 3 rounds
var input = ["paper", "rock", "scissors"];

var rockPaperScissors1 = function(){
  let result = [];
    for (let i=0;i<input.length;i++){
      for (let j=0;j<input.length;j++){
        for (let k=0; k<input.length;k++){
          let game = [];
          game.push(input[i]);
          game.push(input[j]);
          game.push(input[k]);
          result.push(game);
        }
      }
    }
 return result;
}

//method 2: recursion solution
var rockPaperScissors2 = function (rounds) {
  // TODO: your solution here

  var plays = ['rock', 'paper', 'scissors'];
  var rounds = rounds || 3;
  var combos = [];

  var generateCombos = function (roundsToGo, playedSoFar) {
    playedSoFar = playedSoFar || [];

    if (roundsToGo === 0) {
      combos.push(playedSoFar);
      return;
    }

    for (var i = 0; i < plays.length; i++) {
      var currentPlay = plays[i];
      generateCombos(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }

  };

  generateCombos(rounds);
  return combos;
};

// method 4: recursion solution
  var rockPaperScissors3 = function(n, game){

  n = n || 3;
  game = game || [];
  result = [];

  var plays = ['rock', 'paper', 'scissors'];
  // Base case
  if(game.length === n){
    return [game];
  }

  for(var i = 0; i < 3; i++){
    result = result.concat(rockPaperScissors3(n, game.concat(plays[i])));
  }
  return result;
}

console.log(rockPaperScissors3(5));



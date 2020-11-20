
// Get user input by button press
// Show user input on screen
// get random computer input  ----done
// show computer input on screen
// get winner
// show winner
// get number of loops from button press
// loop for number of times  ----done

// Rock = 0, Paper = 1; Scissors = 2

class RPS {
  constructor(gts){
    this.gamesToPlay = gts;
  }

set numGames(num){
    this.gamesToPlay = num;
}

  get numGames() {
    return this.gamesToPlay;
  }



}

// Needs Button from user
function numberOfGames (){
  return 3;
}

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}

// needs button from user
function getPlayerInteger() {
  return 1;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
      return 1;
    }

    else if (playerSelection === 0 && pcomputerSelection === 1){
      return 0;
    }

    else if (playerSelection === computerSelection){
      return 0;
    }

    else if (playerSelection === computerSelection){
      return 0;
    }
}

function rpsGame() {

  
let rpsGame = new RPS(numberOfGames())

let i = 1;

while (i < rpsGame.numGames()){

let rand = getRndInteger();
let plyr = getPlayerInteger();

let winner = playRound(plyr, rand);

  if(winner === 0){
    return "Tie";
  }

  else if (winner === 1){
    return "You Lost";
    rpsGame.numGames(i);
  }

  else if (winner === 2){
    return "You Win";
    game.numGames(i);
  }
  i++;
}
}


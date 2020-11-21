function numToMove(num){
  if (num === 0){
    num = "Rock";
  }

  else if (num === 1){
    num = "Paper";
  }

  else if (num === 2){
    num = "Scissors";
  }
  return num;
}

function cpuRand(){
    return Math.floor(Math.random() * 2);
  }

function playRound (playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return "Tied";
    }

  else if (playerSelection === "Paper" && computerSelection === "Rock"){
    return "Win"
    }

  else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    return "Lose"
    }

  else if (playerSelection === "Rock" && computerSelection === "Paper"){
    return "Lose"
    }

  else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    return "Win"
    }

  else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return "Win"
    }

  else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    return "Lose"
    }

  }

function rpsGame(){

  let numRounds = prompt("Number of Rounds?");

  let scorePlayer = 0;
  let scoreCPU = 0;

  for (round = 0; round < numRounds; round++) {
  console.log("Round ", round+1, " of", numRounds)
  let cpuMove = cpuRand();
  cpuMove = numToMove(cpuMove)

  let playerMove = prompt("Choose Rock, Paper or Scissors");
  playerMove = numToMove(playerMove)
  console.log("Your Chose ", playerMove);
  console.log("Robot Chose ", cpuMove);

  let winner = playRound(playerMove, cpuMove);
  console.log("You ", winner);

  if (winner === "Win"){
    scorePlayer++;
  }
  else if (winner === "Lose"){
    scoreCPU++;
  }
  
  if(winner === "Tied"){
    round--;
    }

  console.log("The Score is ", scorePlayer, scoreCPU);
  
  }
  if (scorePlayer < scoreCPU){
    return "You Lose!";
  }

  else if (scorePlayer > scoreCPU){
    return "You Win!";
  }
}

console.log(rpsGame());
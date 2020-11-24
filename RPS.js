function numToMove(num){
  if (num < 49){
    num = "Rock";
  }

  else if ((num >= 50) && (num <=100)){
    num = "Paper";
 }

  else if (num > 100){
    num = "Scissors";
  }
  return num;
}

function cpuRand(){
  return Math.floor(Math.random() * 150);
}

let displayScore = function(counter, cpuScore, playerScore){


console.log(" Player Score ", playerScore, "Robot Score ", cpuScore);
const playerScoreDisplay = document.querySelector("#playerScore");
playerScoreDisplay.textContent = playerScore;

const cpuScoreDisplay = document.querySelector("#cpuScore");
cpuScoreDisplay.textContent = cpuScore;



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

function rpsGame(playerMove){

  const roundDisplay = document.querySelector("#round");
  roundDisplay.textContent = counter;

  const playerImage = document.querySelector("#playerChoice");
  playerImage.textContent = playerMove;


  
    let cpuMove = cpuRand();
  cpuMove = numToMove(cpuMove)
    
  const cpuImage = document.querySelector("#cpuChoice");
  cpuImage.textContent = cpuMove;

    console.log("Your Chose ", playerMove);
    console.log("Robot Chose ", cpuMove);
    let winner = playRound(playerMove, cpuMove);
    console.log("You ", winner);

    console.log("End of Round ", counter);
    if (winner === "Win"){
      playerScore++;
    counter++;
    const winImage = document.querySelector("#winner");
    winImage.textContent = playerMove;

    }
    else if (winner === "Lose"){
      cpuScore++;
    counter++;
    const winImage = document.querySelector("#winner");
    winImage.textContent = cpuMove;

    }

    if(winner === "Tied"){
    const winImage = document.querySelector("#winner");
    winImage.textContent = "Tie";
    }

  }	  

let resetScore = function(counter){
if (counter > 5){
  return true;
}
}
let counter = 1;
let playerScore = 0;
let cpuScore = 0;


const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', () => {
console.log("Round", counter)
playerMove = "Rock";
rpsGame(playerMove);
displayScore(counter, cpuScore, playerScore);
end = resetScore(counter);
if (end == true){
  counter = 1;
  playerScore = 0;
  cpuScore = 0;
}
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
console.log("Round", counter)
playerMove = "Paper";
rpsGame(playerMove);
displayScore(counter, cpuScore, playerScore);
end = resetScore(counter);
if (end == true){
  counter = 1;
  playerScore = 0;
  cpuScore = 0;
}
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', () => {
console.log("Round", counter)
playerMove = "Scissors";
rpsGame(playerMove);
displayScore(counter, cpuScore, playerScore);
end = resetScore(counter);
if (end == true){

  counter = 1;
  playerScore = 0;
  cpuScore = 0;
}
});
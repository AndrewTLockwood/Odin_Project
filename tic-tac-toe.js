
let boxNum = {};
let firstPlayer = true;
let winPlayer = 0;
let count = 0;
let winning = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7]
];
  

let playerOneNums = [];
let playerTwoNums = [];


function endGame () {
    if (count == 9){
        document.getElementById("score").innerHTML = "Tie Game!";  
    }

    if (winPlayer == 1){
        document.getElementById("score").innerHTML = "Player One Wins"; 
    }

    else if (winPlayer == 2){
        document.getElementById("score").innerHTML = "Player Two Wins";
    }

}

function playGame () {
 
    console.log(firstPlayer);

    for (let i = 1; i < 10; i++) {
        const button = document.querySelector('#btn' + i); 
        button.addEventListener("click", e => { 
            if (boxNum[i] == "t") {
                console.log("full");
            }
            else {
                console.log(i);
                if (firstPlayer == true){
                    document.getElementById("btn" + i).innerHTML += '<div class="IconX">x</div>'; 
                    playerOneNums.push(i);
                    for (let i = 0; i< 8; i++){
                        let checker = winning[i].every(v => playerOneNums.includes(v));
                          if (checker == true){
                            console.log("Win", winning[i]);
                            winPlayer = 1;
                          }
                      }
                    console.log("player One ", playerOneNums);
                    count = count + 1;
                    console.log("turn", count);
                    endGame();
                    firstPlayer = false;
                }
                else {
                    document.getElementById("btn" + i).innerHTML += '<div class="IconO">o</div>'; 
                    playerTwoNums.push(i);
                    for (let i = 0; i< 8; i++){
                        let checker = winning[i].every(v => playerTwoNums.includes(v));
                          if (checker == true){
                            console.log("Win", winning[i]);
                            winPlayer = 2;
                          }
                      }
                    console.log("player Two ", playerTwoNums);
                    count = count + 1;
                    console.log("turn", count)
                    endGame();
                    firstPlayer = true;
                }
                boxNum[i] = "t";}
        });
    }

}

playGame();


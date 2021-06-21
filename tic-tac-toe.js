
const game = () => {
    let boxNum = [];
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

    const setBoxNum = (i, t) => {
        boxNum[i] = t;
    }
    const getBoxNum = () => boxNum;
    const getFirstPlayer = () => firstPlayer;
    const setFirstPlayer = (firstTrue) => {
        firstPlayer = firstTrue;
    }
    const setWinPlayer = (win) => {
        winPlayer = win;
    }
    const getWinPlayer = () => winPlayer;
    const setCount = (c) => { 
        count = c;
    }
    const getCount = () => count;
    const getWinning = () => winning;




    return {getBoxNum, setBoxNum, getWinPlayer, setWinPlayer, getCount, setCount, getFirstPlayer, setFirstPlayer, getWinning}
};

const player = (playerArray) => {
    const setNums = i => {
        playerArray.push(i);
    }
    const getNums = () => playerArray;

    return {getNums, setNums}
};


function endGame ( count, winPlayer) {
    if (count == 9){
        document.getElementById("score").innerHTML = "Tie Game!";  
    }

    if (winPlayer == 1){
        document.getElementById("score").innerHTML = "Player One Wins"; 
        console.log(button);
    }

    else if (winPlayer == 2){
        document.getElementById("score").innerHTML = "Player Two Wins";
    }


}

function playGame () {

    const newGame = game();
  //  console.log(newGame.getFirstPlayer());

    console.log(newGame.getWinning());

    let playerOne = player(new Array());
    let playerTwo = player(new Array());

    for (let i = 1; i < 10; i++) {
        const button = document.querySelector('#btn' + i); 
        button.addEventListener("click", e => { 
            if (newGame.getBoxNum()[i] == "t") {
                console.log("full");
            }
            else {
            //    console.log(i);
                if (newGame.getFirstPlayer() == true){
                    button.className = "IconX";
                    button.innerHTML = "x";
             //       document.getElementById("btn" + i).
                    playerOne.setNums(i);
                    for (let i = 0; i< 8; i++){
                        let checker = newGame.getWinning()[i].every(v => playerOne.getNums().includes(v));
                          if (checker == true){
                            console.log("Win", newGame.getWinning()[i]);
                            newGame.setWinPlayer(1);
                          }
                      }
                    console.log("player One ", playerOne.getNums());
                    newGame.setCount(newGame.getCount() + 1);
              //      console.log(newGame.getCount());
                    console.log("turn", newGame.getCount());
                    endGame(button, newGame.getCount(), newGame.getWinPlayer());
                    newGame.setFirstPlayer(false);
                    console.log(newGame.getFirstPlayer());

                }
                else {
                    document.getElementById("btn" + i).innerHTML += '<div class="IconO">o</div>'; 
                    playerTwo.setNums(i);
                    for (let i = 0; i< 8; i++){
                        let checker = newGame.getWinning()[i].every(v => playerTwo.getNums().includes(v));
                          if (checker == true){
                            console.log("Win", newGame.getWinning()[i]);
                            newGame.setWinPlayer(2);
                          }
                      }
                    console.log("player Two ", playerTwo.getNums());
                    newGame.setCount(newGame.getCount() + 1);
                    console.log("turn", newGame.getCount());
                    endGame(newGame.getCount(), newGame.getWinPlayer());
                    newGame.setFirstPlayer(true);
                    console.log(newGame.getFirstPlayer());
                }
                newGame.setBoxNum(i, "t");}
        });
    }

}

playGame();


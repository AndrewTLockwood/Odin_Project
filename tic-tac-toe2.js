const game = () => {

    const button = [];
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

    const getWinning = () => winning;
    let getCount = () => count;
    let setCount = (c) => {count = c;}

    let getButton = () => button;
    let getSquare = (i) => button[i];
    let setButton = (arrayItem) => {
        button.push(arrayItem);
    }

    return {getCount, setCount, getButton, setButton, getSquare, getWinning}

}

const player = (playerArray) => {
    
    let winner = false;
    let turn = false;

    const setWinner = (win) => {
        winner = win;
    }
    const getWinner = () => winner;
    const setNums = i => {
        playerArray.push(i);
    }
    const resetArray = () => {
        playerArray = [];
    }
    const getNums = () => playerArray;
    const getTurn = () => turn;
    const setTurn = (t) => {
        turn = t;
    }

    return {setWinner, getWinner, getNums, setNums, setTurn, getTurn, resetArray}
};


function setGame () {

    const newGame = game();

    for (let i = 0; i < 9; i++){
         newGame.setButton(document.querySelector('#btn' + (i+1)));
    }

    return newGame;
}

function pushSquareEvent (newGame, i, playerOne, playerTwo) {

    if (playerOne.getTurn() == true){
        newGame.getSquare(i).className = "IconX";
        newGame.getSquare(i).innerHTML = "X";
        playerOne.setNums(i+1);
        console.log("player One ", playerOne.getNums());

        for (let i = 0; i< 8; i++){
            let checker = newGame.getWinning()[i].every(v => playerOne.getNums().includes(v));
              if (checker == true){
                    playerOne.setWinner(true);
              }

        playerOne.setTurn(false);
        playerTwo.setTurn(true);
        }
    }
    else if (playerTwo.getTurn() == true){
        newGame.getSquare(i).className = "IconO";
        newGame.getSquare(i).innerHTML = "o";
        playerTwo.setNums(i+1);
        console.log("player two ", playerTwo.getNums());

        for (let i = 0; i< 8; i++){
            let checker = newGame.getWinning()[i].every(v => playerTwo.getNums().includes(v));
              if (checker == true){
                    playerTwo.setWinner(true);
              }

        playerTwo.setTurn(false);
        playerOne.setTurn(true);

        }
    }

    newGame.setCount(newGame.getCount() + 1);
    console.log(newGame.getCount());

    return newGame;
}

function endGame (newGame, player1, player2) {

    if (player1.getWinner() == true){
        newGame.setCount(0);
        document.getElementById("score").innerHTML = "Player One Wins!";  
        setTimeout(() => { 
            for (let i = 0; i < 9; i++){
                newGame.getSquare(i).className = "IconX";
                newGame.getSquare(i).innerHTML = " ";}
         }, 1000); 
        setTimeout(() => { 
            for (let i = 0; i < 9; i++){
                newGame.getSquare(i).className = "boxSquare";
                newGame.getSquare(i).innerHTML = " ";}
                document.getElementById("score").innerHTML = "Begin";  
         }, 5000); 
         console.log(player1.getWinner(), player2.getWinner());
         player1.resetArray();
         player2.resetArray();
         player1.setWinner(false);
         player2.setWinner(false);
    }

    else if (player2.getWinner() == true){
        newGame.setCount(0);
        document.getElementById("score").innerHTML = "Player Two Wins!";  
        setTimeout(() => { 
            for (let i = 0; i < 9; i++){
                newGame.getSquare(i).className = "IconO";
                newGame.getSquare(i).innerHTML = " ";}
         }, 1000);
        setTimeout(() => { 
            for (let i = 0; i < 9; i++){
                newGame.getSquare(i).className = "boxSquare";
                newGame.getSquare(i).innerHTML = " ";}
                document.getElementById("score").innerHTML = "Begin";  
         }, 5000); 
         console.log(player1.getWinner(), player2.getWinner());
         player2.resetArray();
         player1.resetArray();
         player2.setWinner(false);
         player1.setWinner(false);
    }

    else if (newGame.getCount() >= 9){
        document.getElementById("score").innerHTML = "Tie Game!";  
        setTimeout(() => { 
            for (let i = 0; i < 9; i++){
                newGame.getSquare(i).className = "boxSquare";
                newGame.getSquare(i).innerHTML = " ";}
                document.getElementById("score").innerHTML = "Begin";  
         }, 5000); 
         player2.resetArray();
         player1.resetArray();
         newGame.setCount(0);
        }
        
    return {newGame, player1, player2};
}

function playGame () {

    let playerOne = player(new Array());
    let playerTwo = player(new Array());
    let newGame = setGame();
    playerOne.setTurn(true);
    console.log(newGame.getButton());
    for (let i = 0; i < 9; i++){
        newGame.getSquare(i).addEventListener("click", function() { 
            pushSquareEvent(newGame, i, playerOne, playerTwo);
            endGame(newGame, playerOne, playerTwo);
        });
    }


}


playGame();
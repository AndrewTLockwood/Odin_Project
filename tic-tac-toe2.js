const game = () => {

    const button = [];
    let count = 0;

    let getCount = () => count;
    let setCount = (c) => {count = c;}

    let getButton = () => button;
    let getSquare = (i) => button[i];
    let setButton = (arrayItem) => {
        button.push(arrayItem);
    }

    return {getCount, setCount, getButton, setButton, getSquare}

}

const player = (playerArray) => {
    
    const setNums = i => {
        playerArray.push(i);
    }
    const getNums = () => playerArray;

    return {getNums, setNums}
};


function setGame () {

    const newGame = game();

    for (let i = 0; i < 9; i++){
         newGame.setButton(document.querySelector('#btn' + (i+1)));
    }

  //  console.log(newGame.getButton());
    return newGame;
}

function pushSquareEvent (newGame, i) {
    newGame.getSquare(i).className = "IconX";
    newGame.getSquare(i).innerHTML = "x";
    newGame.setCount(newGame.getCount() + 1);

    return newGame;
}

function endGame (newGame) {
    console.log(newGame.getCount());
    if (newGame.getCount() > 4){
        for (let i = 0; i < 9; i++){
            newGame.getSquare(i).className = "boxSquare";
            newGame.getSquare(i).innerHTML = " ";
    }
    newGame.setCount(0);
}
    return newGame;
}

function playGame () {

    let playerOne = player(new Array());
    let playerTwo = player(new Array());
    let newGame = setGame();
    console.log(newGame.getButton());
    for (let i = 0; i < 9; i++){
        newGame.getSquare(i).addEventListener("click", function() { 
            pushSquareEvent(newGame, i);
            endGame(newGame);
        //    console.log(newGame.getButton());
        });
    }
   // buttonEvent(newGame);


}


playGame();

let boxNum = {};
let firstPlayer = true;


let playerOneScore = 0;
let PlayerTwoScore = 0;


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
                    firstPlayer = false;
                }
                else {
                    document.getElementById("btn" + i).innerHTML += '<div class="IconO">o</div>'; 
                    firstPlayer = true;
                }
                boxNum[i] = "t";}
        });
    }

    if (firstPlayer == true){
        firstPlayer = false;
    }

    if (firstPlayer == false){
        firstPlayer = true;
    }

}

playGame();


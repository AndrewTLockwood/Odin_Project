console.log("Calculator");

let previousNum = 0;
let currentNum = "";

let Calculate = function (currentNum, previousNum){
    return (currentNum + previousNum);
}

const digitListen = function (){
const digitButton = document.querySelector('#digitButton');
  digitButton.addEventListener("click", e => {
      console.log(e);
      currentNum = currentNum + "7";
      console.log(currentNum);
  });
}

digitListen();
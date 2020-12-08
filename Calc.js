console.log("Calculator");

let previousNum = "";
let currentNum = "";

let firstNum = 0;
let secondNum = 0;
let result = 0;

let numData = function() {
  console.log("First: ", firstNum);
  console.log("Second: ", secondNum);
  console.log("Result: ", result);
}


let Calculate = function (currentNum, previousNum){
    return (currentNum + previousNum);
}

const digitListen = function (){
  const digitButton = document.querySelector('#digitButton');
  digitButton.addEventListener("click", e => {
      console.log(e);
      currentNum = currentNum + "7";
      document.getElementById("numbers").innerHTML = currentNum;
      console.log(currentNum);
  });
}

const funcListen = function(){
  const addButton = document.querySelector('#addButton'); 
  addButton.addEventListener("click", e => { 
    console.log(e);
    if (result == 0){ 
      firstNum = result;
      previousNum = currentNum + "+"; 
    }
    else {
      firstNum = Number(currentNum);
      previousNum = currentNum + "+"; 
    }
    currentNum = ""; 
    document.getElementById("twoNumber").innerHTML = previousNum;
  });

  const equalButton = document.querySelector('#equalButton'); 
    equalButton.addEventListener("click", e => { 
      console.log(e); 
      secondNum = Number(currentNum);
      result = firstNum + secondNum;
      previousNum = previousNum + currentNum;
      document.getElementById("twoNumber").innerHTML = previousNum;
      document.getElementById("numbers").innerHTML = result;
      currentNum = "";
      previousNum = "";
      firstNum = 0;
      secondNum = 0;
      numData();
    });

    const resetButton = document.querySelector('#resetButton'); 
    resetButton.addEventListener("click", e => { 
      console.log(e); 
      currentNum = "";
      previousNum = "";
      firstNum = 0;
      secondNum = 0;
      result = 0;
      document.getElementById("twoNumber").innerHTML = "0";
      document.getElementById("numbers").innerHTML = "0";
      numData();
    });
}

digitListen();
funcListen();
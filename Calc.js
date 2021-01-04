console.log("Calculator");

let twoNum = "";
let currentNum = "";

let firstNum = 0;
let secondNum = 0;
let result = 0;
let mode = "";

let numData = function() {
  console.log("twonum: ", twoNum);
  console.log("currentNum: ", currentNum);
  console.log("First: ", firstNum);
  console.log("Second: ", secondNum);
  console.log("Result: ", result);
}


let Calculate = function (currentNum, previousNum){
    return (currentNum + previousNum);
}

const digitListen = function (){
  const digitButton = document.getElementsByClassName("digiKey");
  for (let i=0; i < digitButton.length; i++){
    digitButton[i].addEventListener("click", function(index) {
      let numKey = index.target.getAttribute("name");
      if (result != 0){
        currentNum = numKey;
        twoNum = result;
        result = 0;
        document.getElementById("twoNumber").innerHTML = twoNum;
      }
      else{
      currentNum = currentNum + numKey;}
      document.getElementById("numbers").innerHTML = currentNum;
  });
}
}

const funcListen = function(){

  const funcButton = document.getElementsByClassName("function");
  for (let i=0; i < funcButton.length; i++){
    funcButton[i].addEventListener("click", function(index) {
      let funcKey = index.target.getAttribute("name");
      twoNum = currentNum+ funcKey;
      mode = funcKey;
      console.log(mode);
      document.getElementById("twoNumber").innerHTML = twoNum;
      firstNum = Number(currentNum);
      currentNum = "";
    });
  }

  const equalButton = document.querySelector('#equal'); 
    equalButton.addEventListener("click", e => { 
      secondNum = Number(currentNum);
      twoNum = twoNum + currentNum;
      document.getElementById("twoNumber").innerHTML = twoNum;
      if (mode == "+"){result = firstNum + secondNum;}
        else if (mode == "-"){result = firstNum - secondNum;}
          else if (mode == "*"){result = firstNum * secondNum;}
            else if (mode == "/"){result = firstNum / secondNum;}
      currentNum = "";
      currentNum = result.toString();
      document.getElementById("numbers").innerHTML = currentNum;
      numData();
    });


    const resetButton = document.querySelector('#reset'); 
    resetButton.addEventListener("click", e => { 
      console.log(e); 
      currentNum = "";
      previousNum = "";
      firstNum = 0;
      secondNum = 0;
      result = 0;
      document.getElementById("twoNumber").innerHTML = "0";
      document.getElementById("numbers").innerHTML = "0";
    });
}


digitListen();
funcListen();
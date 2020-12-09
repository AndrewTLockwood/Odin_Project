console.log("Calculator");

let resultNum = "";
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
  const digitButton = document.getElementsByClassName("digiKey");
  for (let i=0; i < digitButton.length; i++){
    digitButton[i].addEventListener("click", function(index) {
      let numKey = index.target.getAttribute("name");
      currentNum = currentNum + numKey;
      document.getElementById("twoNumber").innerHTML = currentNum;
   //   currentNum = currentNum + "7";
  //    document.getElementById("twoNumber").innerHTML = currentNum;
  //    if (firstNum != 0){
  //      secondNum = Number()
  //    }
  });
}
}

const funcListen = function(){

  const funcButton = document.getElementsByClassName("function");
  for (let i=0; i < funcButton.length; i++){
    funcButton[i].addEventListener("click", function(index) {
      let funcKey = index.target.getAttribute("name");
      currentNum = currentNum + funcKey;
      document.getElementById("twoNumber").innerHTML = currentNum;

    });
  }
 /* funcButton.addEventListener("click", e => { 
   console.log(e);
  });

  const equalButton = document.querySelector('#equalButton'); 
    equalButton.addEventListener("click", e => { 
   //   console.log(e); 
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

  }
  */

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
      numData();
    });
}


digitListen();
funcListen();
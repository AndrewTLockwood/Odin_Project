

const grid = document.querySelector("#gameBox");
const gameBox = document.getElementById('gameBox');
//const gridItems = document.querySelectorAll('#pixelBox');

let removeBox = function() {
  while (gameBox.firstChild) {
    gameBox.removeChild(gameBox.firstChild);
  }
}

let paintIt = function(){
  const gridItems = document.querySelectorAll('#pixelBox');
  console.log(gridItems);
  [].forEach.call(gridItems, function(item){
   // console.log(item);
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#404040';
      //console.log(e);
    });
  });

}



let boxStyleSmall = ' height: 25px; width: 28px; background-color: #bfbfbf;'
let boxStyleMedium = 'height: 12.5px; width: 14px; background-color: #bfbfbf;'
let boxStyleLarge = 'height: 6.25px; width: 7px; background-color: #bfbfbf;'

let smallBox = 352;
let mediumBox = 1408;
let largeBox = 5632;

let currentSize = "m";

let generateGrid = function(size, sbox, styleB) {

  removeBox();

  console.log(gameBox);
  gameBox.classList.remove("medium");
  gameBox.classList.remove("small");
  gameBox.classList.remove("large");


  gameBox.classList.add(sbox);

  for (i = 0; i < size; i++){
    const div = document.createElement('div');
  //  gameBox.classList.add('small')
    div.setAttribute("style", styleB);
    div.id = 'pixelBox';
    gameBox.appendChild(div);
  //  console.log(div);
  }
}

let reSize = function (){
  const sizeButton = document.querySelector('#size');
  sizeButton.addEventListener("click", e => {
    if (currentSize == "m"){
      currentSize = "l";
      document.getElementById("size").innerHTML = "Large";
      generateGrid(largeBox, "large", boxStyleLarge);
      paintIt();
    }
    else if (currentSize == "l"){
      currentSize = "s";
      document.getElementById("size").innerHTML = "Small";
      generateGrid(smallBox, "small", boxStyleSmall);
      paintIt();
    }
    else if (currentSize == "s"){
      currentSize = "m";
      document.getElementById("size").innerHTML = "Medium";
      generateGrid(mediumBox, "medium", boxStyleMedium);
      paintIt();
    }
  });

}

  let reset = function (){
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener("click", e => {
    generateGrid(mediumBox, "medium" , boxStyleMedium);
    paintIt();
  });

}


generateGrid(mediumBox, "medium" , boxStyleMedium);
paintIt();
reSize();
reset();






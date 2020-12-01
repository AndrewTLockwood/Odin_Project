

const grid = document.querySelector("#gameBox");




let boxStyleSmall = ' height: 25px; width: 28px; background-color: #bfbfbf;'
let boxStyleMedium = 'height: 12.5px; width: 14px; background-color: #bfbfbf;'
let boxStyleLarge = 'height: 6.25px; width: 7px; background-color: #bfbfbf;'

let smallBox = 352;
let mediumBox = 1408;
let largeBox = 5632;

let currentSize = "m";

let generateGrid = function(size = 1408, sbox = 'medium', styleB = boxStyleMedium) {
  const gameBox = document.getElementById('gameBox');

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

let paintIt = function(){
  const gridItems = document.querySelectorAll('#pixelBox');
  [].forEach.call(gridItems, function(item){
   // console.log(item);
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#404040';
    });
  });

}

let reSize = function (){
  const sizeButton = document.querySelector('#size');
  sizeButton.addEventListener("click", e => {
    if (currentSize == "m"){
      currentSize = "l";
      generateGrid(largeBox, "large", boxStyleLarge);

    }
    else if (currentSize == "l"){
      currentSize = "s";
      generateGrid(smallBox, "small", boxStyleSmall);
    }
    else if (currentSize == "s"){
      currentSize = "m";
      generateGrid(mediumBox, "medium", boxStyleMedium);
    }
  });


}


generateGrid();
paintIt();
reSize();






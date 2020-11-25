

const grid = document.querySelector("#gameBox");



let boxStyle = ' height: 25px; width: 28px; background-color: pink;'


let generateGrid = function(size = 352) {
  const gameBox = document.getElementById('gameBox');

  console.log(gameBox);
  gameBox.classList.add('small')

  for (i = 0; i < size; i++){
    const div = document.createElement('div');
  //  gameBox.classList.add('small')
    div.setAttribute("style", boxStyle);
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
      e.target.style.backgroundColor = '#707070';
    });
  });

}


generateGrid();
paintIt();






const grid = document.querySelector("#gameBox");

let Columns = 25;
let Rows = 25;


document.getElementById("gameBox").style.gridTemplateColumns = "repeat(" + Columns + ", 1fr)";
document.getElementById("gameBox").style.gridTemplateRows = "repeat(" + Rows + ", 1fr)";


let boxStyle = 'margin-top: 15px; margin-bottom: 15px; margin-left: 15px; margin-right: 15px; height: 25px; width: 25px; background-color: black;'

const box1 = document.createElement('div');
box1.setAttribute("style", boxStyle);

const box2 = document.createElement('div');
box2.setAttribute("style", boxStyle);

const box3 = document.createElement('div');
box3.setAttribute("style", boxStyle);

const box4 = document.createElement('div');
box4.setAttribute("style", boxStyle);

const box5 = document.createElement('div');
box5.setAttribute("style", boxStyle);

const box6 = document.createElement('div');
box6.setAttribute("style", boxStyle);

const box7 = document.createElement('div');
box7.setAttribute("style", boxStyle);

const box8 = document.createElement('div');
box8.setAttribute("style", boxStyle);

const box9 = document.createElement('div');
box9.setAttribute("style", boxStyle);

grid.appendChild(box1);
grid.appendChild(box2);
grid.appendChild(box3);
grid.appendChild(box4);
grid.appendChild(box5);
grid.appendChild(box6);
grid.appendChild(box7);
grid.appendChild(box8);
grid.appendChild(box9);








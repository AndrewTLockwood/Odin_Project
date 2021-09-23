import './style.css';
import menu from './menu.js';
import about from './about.js';
import nav from './nav.js';


document.body.appendChild(nav());
const base = document.createElement('div');
base.classList.add("base");
document.body.appendChild(base);



/*
document.addEventListener("name-of-event", function(e) {
    console.log(e.detail); // Prints "Example of an event"
  });

  */

const menuBtn1 = document.getElementById("btn1");

menuBtn1.addEventListener("click", function() {
  console.log("menu");
  base.replaceChildren();
  base.appendChild(menu());
});

const menuBtn2 = document.getElementById("btn2");

menuBtn2.addEventListener("click", function() {
  console.log("about");
  base.replaceChildren();
  base.appendChild(about());
});

import './style.css';
import menu from './menu.js';
import nav from './nav.js';


document.body.appendChild(nav());


/*
document.addEventListener("name-of-event", function(e) {
    console.log(e.detail); // Prints "Example of an event"
  });

  */

const menuBtn = document.getElementById("btn1");
menuBtn.addEventListener("click", function() {
    console.log("dsf");
});

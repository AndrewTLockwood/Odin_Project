export default function nav() {
    const element = document.createElement('div');
  
    // use your function!

    element.classList.add('nav');

    const btn1 = document.createElement('div');
    btn1.innerHTML = "menu";
    btn1.classList.add('navItem');
    btn1.id="btn1";
    element.appendChild(btn1);

    const btn2 = document.createElement('div');
    btn2.innerHTML = "about";
    btn2.classList.add('navItem');
    element.appendChild(btn2);

    const btn3 = document.createElement('div');
    btn3.innerHTML = "other";
    btn3.classList.add('navItem');
    element.appendChild(btn3);

    return element;
  }
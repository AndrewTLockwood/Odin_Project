export default function menu() {
    const element = document.createElement('div');
        element.classList.add("menu");
      //  element.innerHTML = "element";
  
    const menu1 = document.createElement('div');
        menu1.classList.add("menuItem");
   //     menu1.innerHTML = "menu1";
    //    console.log("meni1")

        element.appendChild(menu1);

    return element;
  }




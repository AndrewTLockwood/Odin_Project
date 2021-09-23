export default function about() {
    const element = document.createElement('div');
        element.classList.add("about");
      //  element.innerHTML = "element";
  
    const menu1 = document.createElement('div');
        menu1.classList.add("menuItem");
   //     menu1.innerHTML = "menu1";
    //    console.log("meni1")

        element.appendChild(menu1);

    return element;
  }
// list of books on top
// create book object
// add books from menu
// number of books -- DONE
// zoom book
// add book art
// delete book


let bookNumber = 0;


const addBooks = function(newBook){
  //  const newBook = document.getElementById("newBook");
    newBook.style.display = "block";
    bookNumber++;
}

const Use = function(){

    const bookList = document.querySelector('#bookList');
    bookList.addEventListener("click", e => {
        console.log(e);
    });

    const bookAdd = document.querySelector('#bookAdd');
    bookAdd.addEventListener("click", e => {
        console.log(e);
        const newBook = document.getElementById("newBook");
        addBooks(newBook);
        if (bookNumber == 1){
            document.getElementById("bookNum").innerHTML = bookNumber + " Book";
        }
        else {
        document.getElementById("bookNum").innerHTML = bookNumber + " Books";
        }
    });

    window.onclick = function(event) {
        if (event.target == newBook) {
          newBook.style.display = "none";
        }

}
}


Use();

// list of books on top
// create book object
// add books from menu
// number of books -- DONE
// zoom book
// add book art
// delete book




let bookNumber = 0;


const Use = function(){

    const bookList = document.querySelector('#bookList');
    bookList.addEventListener("click", e => {
        console.log(e);
        const showBookList = document.getElementById("showBookList");
        showBookList.style.display = "block";
    });

    const bookAdd = document.querySelector('#bookAdd');
    bookAdd.addEventListener("click", e => {
        console.log(e);
        const newBook = document.getElementById("newBook");
        newBook.style.display = "flex";
    });

    const addButton = document.getElementById("addButton");
        addButton.addEventListener("click", e => {
            console.log(e);
            bookNumber++;
            if (bookNumber == 1){
                document.getElementById("bookNum").innerHTML = bookNumber + " Book";
            }
            else {
            document.getElementById("bookNum").innerHTML = bookNumber + " Books";
            }
            newBook.style.display = "none";
        });

    window.onclick = function(event) {
        if (event.target == newBook) {
          newBook.style.display = "none";
        }
        else if (event.target == showBookList) {
            showBookList.style.display = "none";
        }

    }
}


Use();

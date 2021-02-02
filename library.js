// list of books on top
// create book object -- DONE
// add books from menu
// number of books -- DONE
// zoom book
// add book art
// delete book



class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const newBookBlock = document.getElementById('books');


let Books = [];

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

            let author = document.getElementById("author").value;
            var title = document.getElementById("title").value;
            var pages = document.getElementById("pages").value;

            const bookBook = new Book(author,title, pages, "yes");
            Books.push(bookBook);

            const div = document.createElement('div');
            div.classList.add("bookRender")
            newBookBlock.appendChild(div);
            div.id = author + title;

            console.log(div.id);
            bookNumber++;
            
            render();

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

const render = function() {

    for(let i = 0; i < Books.length; i++){
        console.log(Books[i].title, Books[i].author, Books[i].pages, Books[i].read);

    }
}


Use();
render();

// Beginning of Javascript Focus on Odin Project


// Objects
const newObject = {
    property: "stuff",
    other: 345,
}

console.log(newObject.other);

function Player(name, marker) {
    this.name = name
    this.marker = marker
}


const player = new Player("andrew", "x")
//console.log(player.name)

function book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this. pages = pages;
    this.read = read;
    }

    this.showInfo = function(){
        console.log(title, "by ", author, ",",  pages, "pages ", read);
}




let theHobbit = new book ("The Hobbit", "J.R.R. Tolkien", 295, "not read")

console.log(theHobbit.showInfo())




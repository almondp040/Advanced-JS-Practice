//Create a book class with a title, author and year
class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year

        if (typeof this.title === "string" && typeof this.author === "string" && typeof this.year === "number") {
            console.log("Valid Title and Author Detected"); 
        } else {console.log("Invalid values detected!")}
    }

    bookInfo (){
        const script = `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
        console.log(script)
        return script
    }
}
const newBook = new Book("Moby Dick", "George Clooney", 1984)
newBook.bookInfo()
//Title and author should be strings, year should be a number DONE 

//Create a subclass called Ebook that extends book
class Ebook extends Book {
    constructor(title, author, year, fileSize){
        super(title, author, year)
        this.fileSize = fileSize
    }

    download (){
        const script = `Title: ${this.title} File Size: ${this.fileSize}`
        console.log(script)
        return script; 
    }
}
//Ebook will have an additional property called fileSize, with a method called download() that returns a string with the title of the ebook and its fileSize

const newEbook = new Ebook("Harry Potter", "Bob Ross", 2002, "100gb"); 
newEbook.download()

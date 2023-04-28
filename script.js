//
//

class Book {
    constructor(title, author, editor, price, tags) {
        this.title = title
        this.author = author
        this.editor = editor
        this.price = price
        this.tags = tags
    }

    idFixer(book) {
        book.id = Math.floor(Math.random() * 1000000)
    }
}

class Tags {
    constructor(tag) {
        this.tag = tag
    }
}

class Bookstore {
    constructor(name) {
        this.name = name;
        this.catalog = this.catalogGenerator()
    }

    catalogGenerator() {
        let catalog = [
        ]
    }

    addBook() {}

    editBook() {}

    removeBook() {}

    printBook() {}

    findBook() {}

    findAuthor() {}

    listBooks() {}

    listBooksByTag() {}
}


const bookstore = new Bookstore("Erika's Shelf")

console.log(bookstore)
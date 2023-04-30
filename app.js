const Catalog = require('./catalog.json')

const readline = require('readline')
let rl = readline.createInterface(process.stdin, process.stdout)
class Book {
    constructor(title, author, editor, price, tags) {
        this.title = title
        this.author = author
        this.editor = editor
        this.price = price
        this.tags = tags
    }
}

function addBook() {}
function editBook() {}
function removeBook() {}
function printBook() {}
function findBook() {}
function findAuthor() {}
function listBooks() {}
function listBooksByTag() {}
}
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this._state = 100
        this.type = null
    }

    fix() {
        return this.state = this.state * 1.5
    }

    set state(newState) {
        if (newState < 0) {
            this._statestate = 0
        } else if (newState > 100) {
            this._state = 100
        } else {
            this._state = newState
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic"
    }
}

class DetectiveBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective"
    }
}

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName)
        if (!book) return null
        this.books = this.books.filter((item) => item.name !== bookName)
        return book
  }
}
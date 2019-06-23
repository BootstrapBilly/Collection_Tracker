const books = [];

module.exports = class {

    constructor(year, condition){

        this.year = year;
        this.condition = condition;

    }

    addBook(){

        books.push(this);

    }

    getBooks(){

        return books;
    }
}
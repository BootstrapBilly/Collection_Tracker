const Book = require("../models/book");

exports.getHomePage = (request, response) => {

    response.render("home.ejs", {pageTitle : "home"});

}

exports.postRequestHandler = (request, response) => {

    const book = new Book(request.body.bookYear, request.body.bookCondition);
    book.addBook();

    console.log(book.getBooks());
    

    response.redirect("/");

}
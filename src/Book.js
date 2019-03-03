"use strict";
exports.__esModule = true;
var Utility_1 = require("./Utility");
var ut = new Utility_1.Utility();
var Book = /** @class */ (function () {
    //The constructor creates a new book with the given year and condition
    function Book(year, condition) {
        this.year = year;
        this.condition = condition;
    }
    //Mutator methods to set the left and right child of a book
    Book.prototype.setLeft = function (book) { this.leftChild = book; };
    Book.prototype.setRight = function (book) { this.rightChild = book; };
    //Accessor methods to get the year and condition of the book
    Book.prototype.getYear = function () { return this.year; };
    ;
    Book.prototype.getCondition = function () { return this.condition; };
    ;
    /*
    -------------   find() ------------------
    
    This method searches the shelf/collection of books
    */
    Book.prototype.find = function (searchYear) {
        /*Run the compare method from the compareNumbers class and see if we get a match, remember two equal numbers returns a 0*/
        if (ut.compare(this.year, searchYear) == 0) {
            //if a 0 is returned, it means the numbers match and we have found the book we are looking for so return it
            return this;
        }
        /*If we have not found the book we are looking for, check to see if the year of the current book is bigger or smaller than the year we are looking for */
        //If the current book's date is a bigger number than the one we are looking for, check the date of the left child
        else if (ut.compare(this.year, searchYear) == 1) {
            if (this.leftChild == null) {
                return null;
            }
            else {
                return this.leftChild.find(searchYear);
            }
        }
        else {
            if (this.rightChild == null) {
                return null;
            }
            else {
                return this.rightChild.find(searchYear);
            }
        }
    };
    /*
    -------------   insert() ------------------
    
    This method inserts a new book into the shelf/collection
    */
    Book.prototype.insert = function (insertionYear, condition) {
        if (ut.compare(this.year, insertionYear) == 0) {
            return;
        }
        else if (ut.compare(this.year, insertionYear) == 1) {
            if (this.leftChild == null) {
                this.leftChild = new Book(insertionYear, condition);
            }
            else {
                this.leftChild.insert(insertionYear, condition);
            }
        }
        else {
            if (this.rightChild == null) {
                this.rightChild = new Book(insertionYear, condition);
            }
            else {
                this.rightChild.insert(insertionYear, condition);
            }
        }
    };
    /*
-------------   logBooks() ------------------

This method logs all of the books into the console
*/
    Book.prototype.logBooks = function () {
        if (this.leftChild != null) {
            this.leftChild.logBooks();
        }
        if (this.rightChild != null) {
            this.rightChild.logBooks();
        }
        console.log("Year : " + this.year + " Condition : " + this.condition);
    };
    return Book;
}());
exports.Book = Book;

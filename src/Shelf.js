"use strict";
exports.__esModule = true;
var Utility_1 = require("./Utility");
var ut = new Utility_1.Utility();
var Book_1 = require("./Book");
var Shelf = /** @class */ (function () {
    function Shelf() {
        this.root = null;
    }
    Shelf.prototype.find = function (year) {
        return this.root.find(year);
    };
    Shelf.prototype.add = function (year, condition) {
        if (this.root == null) {
            this.root = new Book_1.Book(year, condition);
        }
        else {
            this.root.insert(year, condition);
        }
    };
    Shelf.prototype.buyOrNot = function (year, condition) {
        if (this.find(year) == null) {
            return true;
        }
        else if (ut.check(this.find(year).getCondition(), condition)) {
            return true;
        }
        else {
            return false;
        }
    };
    return Shelf;
}());
exports.Shelf = Shelf;

import { Utility } from './Utility';
let ut = new Utility();

export class Book {

    //All of these fields are private 
    private year: number;
    private condition: string;
    private leftChild: Book;
    private rightChild: Book;

    //The constructor creates a new book with the given year and condition
    constructor(year: number, condition: string){

        this.year = year;
        this.condition = condition;

    }

    //Mutator methods to set the left and right child of a book
    setLeft(book:Book){this.leftChild = book;}
    setRight(book:Book){this.rightChild = book;}

    //Accessor methods to get the year and condition of the book
    getYear(){return this.year};
    getCondition(){return this.condition};

    /*
    -------------   find() ------------------
    
    This method searches the shelf/collection of books 
    */
    find(searchYear:number){

    /*Run the compare method from the compareNumbers class and see if we get a match, remember two equal numbers returns a 0*/

    if(ut.compare(this.year, searchYear) == 0) {
        //if a 0 is returned, it means the numbers match and we have found the book we are looking for so return it
        return this;
    }
    /*If we have not found the book we are looking for, check to see if the year of the current book is bigger or smaller than the year we are looking for */

    //If the current book's date is a bigger number than the one we are looking for, check the date of the left child

    else if (ut.compare(this.year, searchYear) == 1){

        if(this.leftChild == null) {

            return null;
        }
        else {
            return this.leftChild.find(searchYear);
        }
    }

    else {

        if(this.rightChild == null){
            
            return null;
        }
        else {

            return this.rightChild.find(searchYear);
        }
    }
}

    /*
    -------------   insert() ------------------
    
    This method inserts a new book into the shelf/collection
    */

    insert(insertionYear:number, condition:string){

        if(ut.compare(this.year, insertionYear) == 0){

            return;

        }

        else if(ut.compare(this.year, insertionYear) == 1) {

            if(this.leftChild == null) {

                this.leftChild = new Book(insertionYear, condition);

            }

            else {
                this.leftChild.insert(insertionYear, condition);
            }
        }

        else {

            if(this.rightChild == null){

                this.rightChild = new Book(insertionYear, condition);

            }

            else{

                this.rightChild.insert(insertionYear, condition);

            }
        }
    }

        /*
    -------------   logBooks() ------------------
    
    This method logs all of the books into the console
    */

    logBooks(){

        if(this.leftChild != null){

            this.leftChild.logBooks();

        }

        if(this.rightChild != null){

            this.rightChild.logBooks();

        }

        console.log(`Year : ${this.year} Condition : ${this.condition}`);

    }
}
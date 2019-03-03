import { Utility } from './Utility';
let ut = new Utility();

import { Book } from './Book';

export class Shelf {

    //this is a private field which acts as the root of the tree/collection
    private root: Book;

    constructor(){

        this.root = null;

    }

    find(year:number){

        return this.root.find(year);

    }

    add(year:number, condition:string){

        if(this.root == null){
            
            this.root = new Book(year,condition);

        }

        else {

            this.root.insert(year,condition);

        }
    }

    buyOrNot(year:number, condition:string):boolean{

        if(this.find(year) == null){

            return true;
        }

        else if(ut.check(this.find(year).getCondition(), condition)){

            return true;
        }

        else{

            return false;
        }
    }
}
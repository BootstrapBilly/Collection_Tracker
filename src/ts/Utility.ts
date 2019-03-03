/* A helper class for the buyOrNot method in Shelf class, contains two methods;

compare and checkCondition  */

export class Utility {

    //compare method
    compare(a:number,b:number):number{
    
    //if the first number is bigger, return 1
    if(a > b) {
        return 1;
    }
    
    //if the second number is bigger, return -1
    else if(b > a){
        return -1;
    }

    //otherwise if they are equal, return 0
    else {
        return 0;
    }
    }

    //compare method
        check(myBookCondition:string, otherBookCondition: string):boolean{

        if(myBookCondition == "Bad" && (otherBookCondition == "Fair" || otherBookCondition == "Good")){
            return true;
        }

        else if(myBookCondition == "Fair" && (otherBookCondition == "Good")){

            return true;
        }

        else{
            return false;
        }

    }
}
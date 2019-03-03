import { Shelf } from './Shelf';
import { Utility } from './Utility';
let ut = new Utility();

class Test {

    failed:boolean = false;

   //test equal integers
   testEqualsInt(result:number, expected:number):void{

       if(result == expected) {
       
           console.log("The expected value " + expected +
           " matches the result " + result);
           
       } else {
           this.failed = true;
           console.log("ERROR : The expected value does not match the result");
       }
   }
   //test equal booleans
    testEqualsBool(result:boolean, expected:boolean):void{

       if(result == expected) {
       
           console.log("The expected value " + expected +
           " matches the result " + result);
           
       } else {
           this.failed = true;
           console.log("ERROR : The expected value does not match the result");
       }
   }
   //test equal nulls
    testEqualsNull(result:object, expected:object):void{

       if(result == expected) {
           
           console.log("The expected value " + expected +
           " matches the result " + result);
           
       } else {
           this.failed = true;
           console.log("ERROR : The expected value does not match the result");
       }
   }

   //I put the tests inside the constructor so I could execute the console logs

   constructor(){
       //create the collection
       let collection = new Shelf();

       //fill it with some books
       collection.add(1966, "Fair");
       collection.add(1970, "Fair");
       collection.add(1972, "Good");
       collection.add(1979, "Bad");
       collection.add(1981, "Fair");
       collection.add(1983, "Good");
       collection.add(1985, "Good");
       collection.add(1990, "Fair");
       collection.add(1991, "Bad");
       collection.add(1995, "Good");

   //------------------------Tests----------------------------//
   
       //                      compareInts          
       //                      Testing
       //                      Starts
       //                      Here
   console.log("\n-----Test compareInts -----");
   console.log("\nThis returns -1 if the second parameter is bigger" +
   " than first,\n1 if the second param is smaller and 0 if they are equal");
   
   //Compare to an item that is bigger  
   console.log("\n(1,2) Second param is smaller, -1 expected");
   const biggerCI = ut.compare(1,2);  
   this.testEqualsInt(biggerCI,-1); 
   //Compare to an item that is smaller  
   console.log("\n(2,1) Second param is bigger, 1 expected");
   const smallerCI = ut.compare(2,1);  
   this.testEqualsInt(smallerCI,1);
   //Compare equal parameters  
   console.log("\n(1,1) Params are equal, 0 expected");
   const equalCI = ut.compare(1,1);  
   this.testEqualsInt(equalCI,0);
   
           //                  CheckCondition          
       //                      Testing
       //                      Starts
       //                      Here
       console.log("\n-----Test CheckCondition -----");
       console.log("\nThis returns true if the book we want to buy" +
       " is in better condition than ours,\nand false if its worse or false " +
       "if they are in equal condition\n1st Param = our book, 2nd = Book to buy");
       
       //Bad vs Fair condition 
       console.log("\n(Bad,Fair)Fair > Bad, true expected");
       const bvf= ut.check("Bad","Fair");
       this.testEqualsBool(bvf, true);
       //Bad vs Good condition 
       console.log("\n(Bad,Good)Good > Bad, true expected");
       const bvg= ut.check("Bad","Good");
       this.testEqualsBool(bvg, true);
       //Fair vs Good condition 
       console.log("\n(Fair,Good)Good > Fair, true expected");
       const fvg = ut.check("Fair","Good");
       this.testEqualsBool(fvg, true);
       
       //Bad vs Bad condition 
       console.log("\n(Bad,Bad)Bad = Bad, false expected");
       const bvb = ut.check("Bad","Bad");
       this.testEqualsBool(bvb, false);
       //Fair vs Fair condition 
       console.log("\n(Fair,Fair)Fair = Fair, false expected");
       const fvf = ut.check("Fair","Fair");
       this.testEqualsBool(fvf, false);
       //Good vs Good condition 
       console.log("\n(Good,Good)Good = Good, false expected");
       const gvg = ut.check("Good","Good");
       this.testEqualsBool(gvg, false);
       
       //Fair vs Bad condition 
       console.log("\n(Fair,Bad)Fair > Bad, false expected");
       const fvb = ut.check("Fair","Bad");
       this.testEqualsBool(fvb, false);      
       //Good vs Bad condition 
       console.log("\n(Good,Bad)Good > Bad, false expected");
       const gvb = ut.check("Good","Bad");
       this.testEqualsBool(gvb, false);
       //Good vs Fair condition 
       console.log("\n(Good,Fair)Good > Fair, false expected");
       const gvf = ut.check("Good","Fair");
       this.testEqualsBool(gvf, false);

       //                      Find          
       //                      Testing
       //                      Starts
       //                      Here
     console.log("\n-----Test find() -----");
     console.log("\nThis returns the book object if found" +
     "\nOr null if the book was not found");
     
     //Find the first book on the shelf
     console.log("\nFind the first book on the shelf");
     const first = collection.find(1966);
     this.testEqualsInt(first.getYear(),1966);
     
     //Find the last book on the shelf
     console.log("\nFind the last book on the shelf");
     const last = collection.find(1995);
     this.testEqualsInt(last.getYear(),1995);
     
     //Try to find a book that isn't on the shelf
     console.log("\nTry to find a book that isn't on the shelf(9001,null expected)");
     const notonshelf = collection.find(9001);
     this.testEqualsNull(notonshelf,null);
     
     //shelf does not have dupilcates, they go in the bin and best condition
     //is kept on shelf, no duplicate tests needed

       //                      BuyOrNot          
       //                      Testing
       //                      Starts
       //                      Here
       console.log("\n-----Test BuyOrNot() -----");
       console.log("\nThis returns true if we do not have the book," +
       "\nTrue if we have it, but in worse condition" +
       "\nOr false if we do have it in equal or better condition");
       
       //A book that we do not have
       console.log("\nA book that we do not have");
       const dontHave = collection.buyOrNot(2015, "Good");
       this.testEqualsBool(dontHave, true);
       
       //A book that we do have but in worse condition
       console.log("\nA book that we do have but in worse condition");
       const haveButWorse = collection.buyOrNot(1966, "Good");
       this.testEqualsBool(haveButWorse, true);
       
       //A book that we do have and in better condition
       console.log("\nA book that we do have and in better condition");
       const haveButBetter = collection.buyOrNot(1966, "Bad");
       this.testEqualsBool(haveButBetter, false);
       
       if(this.failed){
           console.log("\nOne or more tests failed");
         }
         else {
          console.log("\nAll tests passed");   
         }
   }
   
}

let test = new Test();

console.log("test");
// //====================================================== Typed text at the top =========================================//

                                                            //Removed, was very buggy

// //Import typed.js library
// import Typed from 'typed.js';

// //Collection typed into the UI
// const collection = new Typed("#collection",{
//     strings: ["Collection"],
//     //typing speed, higher number = more time to type
//     typeSpeed:60,
//     showCursor: false,
//     //Once typing has been complete, run the second function
//     onComplete: (self) => {runTracker()},
//    });

// //Tracker typed into the UI
// function runTracker(){
//    const tracker = new Typed("#tracker",{
//     strings: ["Tracker"],
//     typeSpeed:100,
//     showCursor: false,
//    });
// }

//=============================================== Opening and closing the menu =========================================//

//grab the buttons to open and close the menus, add event listeners to them which run the functions below to open and close the menus
document.getElementById("menu-open").addEventListener("click", openMenu);
document.getElementById("menu-close").addEventListener("click", closeMenu);
 
//Open menu function called on click of the open menu button
function openMenu (){

    document.getElementById("myNav").style.width = "100%";
    
}

//close menu function called on click of the close menu button
function closeMenu (){

    document.getElementById("myNav").style.width = "0%";

}
//=============================================== Showing the input box =========================================//

//grab the input box and store it in a variable called inputBox
const inputBox = document.getElementById("input-box");
//grab the dropdown box and store it in a variable called dropdown box
const dropdownBox = document.getElementById("dropdown-box");

//grab the find book link and store it in a variable, 
//then add an event listener which runs the show input box function
const findBook = document.querySelector("#find-book");
findBook.addEventListener("click",showInputBox);

//grab the add book link and store it in a variable, 
//then add an event listener which runs the show input box function
const addBook = document.querySelector("#add-book")
addBook.addEventListener("click", showInputBoxAdd);

//show input box function, sets the visibility of the input box and closes the menu after a link has been clicked
function showInputBox(){
    
    closeInput();

    inputBox.setAttribute("id", "input-box");
    inputBox.style.visibility = "visible";
    closeMenu();

}

//show input box function, sets the visibility of the input box and closes the menu after a link has been clicked
function showInputBoxAdd(){

    closeInput();

    inputBox.setAttribute("id", "input-box-add");
    inputBox.style.visibility = "visible";
    dropdownBox.style.visibility = "visible";
    closeMenu();

}

//======================================= Closing the input box  ==================================//

function closeInput() {

    inputBox.style.visibility = "hidden";
    dropdownBox.style.visibility = "hidden";
    
}

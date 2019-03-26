//ToDo - Insert input boxes dynamically into the dom rather than make them visible from the html page



//=============================================== Opening and closing the menu =========================================//

//grab the buttons to open and close the menus, add event listeners to them which run the functions below to open and close the menus
document.getElementById("menu-open").addEventListener("click", openNavMenu);
document.getElementById("menu-close").addEventListener("click", closeNavMenu);
 
//Open menu function called on click of the open menu button
function openNavMenu (){

    document.getElementById("myNav").style.width = "100%";
    
}

//close menu function called on click of the close menu button
function closeNavMenu (){

    document.getElementById("myNav").style.width = "0%";

}
//=============================================== Showing the input box =========================================//

//grab the input box and store it in a variable called inputBox
const inputBox = document.getElementById("input-box");
//grab the dropdown box and store it in a variable called dropdown box
const dropdownBox = document.getElementById("dropdown-box");
//grab the submit box and store it in a variable called submit box
const submitBox = document.getElementById("submit-button");
//grab the form-container and store it in a variable called formContainer
const formContainer = document.getElementById("form-container");

//grab the find book link and store it in a variable, 
//then add an event listener which runs the show input box function
const findBook = document.querySelector("#find-book");
findBook.addEventListener("click", showFindBookMenu);

//grab the add book link and store it in a variable, 
//then add an event listener which runs the show input box function
const addBook = document.querySelector("#add-book")
addBook.addEventListener("click", showAddBookMenu);

//show find book menu, sets the visibility of the input menu and closes the menu after a link has been clicked
function showFindBookMenu(){
    
    closeInputMenu();

    inputBox.setAttribute("id", "input-box");
    inputBox.style.visibility = "visible";
    submitBox.style.visibility = "visible";
    dropdownBox.remove();
    closeNavMenu();

}

//show add book menu, sets the visibility input menu and closes the menu after a link has been clicked
function showAddBookMenu(){

    closeInputMenu();

    inputBox.setAttribute("id", "input-box-add");
    inputBox.style.visibility = "visible";
    dropdownBox.style.visibility = "visible";
    formContainer.insertBefore(dropdownBox, submitBox);
    submitBox.style.visibility = "visible";
    closeNavMenu();

}

//show add book menu, sets the visibility input menu and closes the menu after a link has been clicked
function showShouldIBuyMenu(){

    closeInputMenu();

    inputBox.setAttribute("id", "input-box-add");
    inputBox.style.visibility = "visible";
    dropdownBox.style.visibility = "visible";
    formContainer.insertBefore(dropdownBox, submitBox);
    submitBox.style.visibility = "visible";
    closeNavMenu();

}

//======================================= Closing the input box  ==================================//

//grab the submit button and store it in submit variable
const submit = document.getElementById("submit-button");
//add an event listener to it
submit.addEventListener("click", closeInputMenu);

function closeInputMenu() {

    inputBox.style.visibility = "hidden";
    dropdownBox.style.visibility = "hidden";
    submit.style.visibility = "hidden";
    inputBox.value = "";
}

//========================================= Should I Buy it  ======================================//

//grab the should i buy it button and store it in buyit variable
const buyIt = document.getElementById("should-i-buy-it");
//add an event listener to it
buyIt.addEventListener("click", showShouldIBuyMenu);
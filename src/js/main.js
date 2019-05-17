
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
//=============================================== Create the form to be dynamically inserted =========================================//

//-------------Container for the form------------------------------
let formContainer = document.createElement("div");
formContainer.className = "container my-3";
formContainer.setAttribute("id", "form-container");

//------------Input box "Enter year"------------------------------
let yearInputAdd = document.createElement("input");
yearInputAdd.className = "form-control d-inline";
yearInputAdd.setAttribute("id", "input-box-add");
yearInputAdd.setAttribute("type", "number");
yearInputAdd.setAttribute("placeholder", "Enter year");

//------------Input box "big version" "Enter year"------------------------------
let yearInputBig = document.createElement("input");
yearInputBig.className = "form-control d-inline";
yearInputBig.setAttribute("id", "input-box-big");
yearInputBig.setAttribute("type", "number");
yearInputBig.setAttribute("placeholder", "Enter year");

//-----------------Dropdown box------------------------------------
let dropDownBox = document.createElement("select");
dropDownBox.className = "form-control d-inline";
dropDownBox.setAttribute("id", "dropdown-box");
dropDownBox.appendChild(new Option("Poor", "poor"));
dropDownBox.appendChild(new Option("Fair", "fair"));
dropDownBox.appendChild(new Option("Good", "good"));

//-----------------Submit button box------------------------------------
let submitButton = document.createElement("input");
submitButton.className = "form-control d-inline";
submitButton.setAttribute("id", "submit-button");
submitButton.setAttribute("value", "Submit");

let displayContainer = document.getElementById("display-container");

//=============================================== Event listeners for the nav links =========================================//

//grab the find book link and store it in a variable, 
//then add an event listener which runs the show input box function
const findBook = document.querySelector("#find-book");
findBook.addEventListener("click", showFindBookMenu);

//grab the add book link and store it in a variable, 
//then add an event listener which runs the show input box function
const addBook = document.querySelector("#add-book")
addBook.addEventListener("click", showAddBookMenu);

//grab the should i buy it button and store it in buyit variable
const buyIt = document.getElementById("should-i-buy-it");
//add an event listener to it
buyIt.addEventListener("click", showShouldIBuyMenu);


//========================================= Nav link functions  ======================================//

//show find book menu, sets the visibility of the input menu and closes the menu after a link has been clicked
function showFindBookMenu(){
    
    closeInputMenu();
    closeNavMenu();
}

//show add book menu, sets the visibility input menu and closes the menu after a link has been clicked
function showAddBookMenu(){

    

    //append the 3 elements to the container
    formContainer.appendChild(yearInputBig);
    formContainer.appendChild(dropDownBox);
    formContainer.appendChild(submitButton);

    document.getElementsByTagName("BODY")[0].insertBefore(formContainer, displayContainer);

    closeNavMenu();
}

//show add book menu, sets the visibility input menu and closes the menu after a link has been clicked
function showShouldIBuyMenu(){


}

//=============================================== Submit button =========================================//

// //grab the submit button and store it in submit variable
// const submit = document.getElementById("submit-button");
// //add an event listener to it
// submit.addEventListener("click", closeInputMenu);


function closeInputMenu() {

    document.getElementsByTagName("BODY")[0].removeChild(formContainer);

}
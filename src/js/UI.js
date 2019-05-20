import { Shelf } from './Shelf';
let shelf = new Shelf();

shelf.add(2019, "fair");

console.log(shelf.find(2019));
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
let yearInput = document.createElement("input");
yearInput.className = "form-control d-inline";
yearInput.setAttribute("id", "input-box");
yearInput.setAttribute("type", "number");
yearInput.setAttribute("placeholder", "Enter year");

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
let submitButtonFind = document.createElement("input");
submitButtonFind.className = "form-control d-inline";
submitButtonFind.setAttribute("id", "submit-button-find");
submitButtonFind.setAttribute("value", "Submit");

//-----------------Submit button box------------------------------------
let submitButtonAdd = document.createElement("input");
submitButtonAdd.className = "form-control d-inline";
submitButtonAdd.setAttribute("id", "submit-button-add");
submitButtonAdd.setAttribute("value", "Submit");

//=============================================== Event listeners for the nav links =========================================//

//grab the find book link and store it in a variable, 
//then add an event listener which runs the show input box function
const findBook = document.querySelector("#find-book");
findBook.addEventListener("click", insertFindBookMenu);

//grab the add book link and store it in a variable, 
//then add an event listener which runs the show input box function
const addBook = document.querySelector("#add-book")
addBook.addEventListener("click", insertAddBookMenu);

//grab the should i buy it button and store it in buyit variable
const buyIt = document.getElementById("should-i-buy-it");
//add an event listener to it
buyIt.addEventListener("click", insertShouldIbuyMenu);


//========================================= Nav link functions to insert the input menu  ======================================//

//Insert the find book input menu into the dom
function insertFindBookMenu(){
    
    //Firstly call the close input function which removes all other input menus
    removeInputMenu();

        //append the 2 elements to the input form container
        formContainer.appendChild(yearInput);
        formContainer.appendChild(submitButtonFind);

        if(document.body.contains(displayContainer)){
        //append the form container to the body
        document.getElementsByTagName("BODY")[0].insertBefore(formContainer, displayContainer);
        } else {
            document.getElementsByTagName("BODY")[0].insertBefore(formContainer, null);
        }
    
    removeDisplayArea();

    //close the navigation menu
    closeNavMenu();
}

//show add book menu, sets the visibility input menu and closes the menu after a link has been clicked
function insertAddBookMenu(){

    //Firstly call the close input function which removes all other input menus
    removeInputMenu();

    //append the 3 elements to the container
    formContainer.appendChild(yearInputBig);
    formContainer.appendChild(dropDownBox);
    formContainer.appendChild(submitButtonAdd);

    if(document.body.contains(displayContainer)){
        //append the form container to the body
        document.getElementsByTagName("BODY")[0].insertBefore(formContainer, displayContainer);
        } else {
            document.getElementsByTagName("BODY")[0].insertBefore(formContainer, null);
        }

    removeDisplayArea();
    //close the navigation menu
    closeNavMenu();
}

//show add book menu, sets the visibility input menu and closes the menu after a link has been clicked
function insertShouldIbuyMenu(){

    //Firstly call the close input function which removes all other input menus
    removeInputMenu();

        //append the 3 elements to the container
        formContainer.appendChild(yearInputBig);
        formContainer.appendChild(dropDownBox);
        formContainer.appendChild(submitButtonAdd);

        if(document.body.contains(displayContainer)){
            //append the form container to the body
            document.getElementsByTagName("BODY")[0].insertBefore(formContainer, displayContainer);
            } else {
                document.getElementsByTagName("BODY")[0].insertBefore(formContainer, null);
            }

        //close the navigation menu
        closeNavMenu();
}

//=============================================== Remove input menu function =========================================//

function removeInputMenu() {

    //only run the function if there is an input menu present in the dom
    if(document.body.contains(formContainer)){
    
    //While the form container still has child elements - submit button ect
    while(formContainer.firstChild) {

        //remove them so the form container is empty
        formContainer.removeChild(formContainer.firstChild);

    }

    //remove the form container itself
    document.getElementsByTagName("BODY")[0].removeChild(formContainer);
}

}

//=============================================== Submit button find=========================================//

//add an event listener to the dynamically inserted submit button
 submitButtonFind.addEventListener("click", showDisplayArea);

 //=============================================== Create display display area  =========================================//

//-------------Container for the DA ------------------------------
let displayContainer = document.createElement("div");
displayContainer.className = "container-fluid mx-auto";
displayContainer.setAttribute("id", "display-container");

//-------------BR to make it work ------------------------------
let lineBreak = document.createElement("br");

//-------------Img Container for the DA ------------------------------
let imgDisplayContainer = document.createElement("div");
imgDisplayContainer.className = "container";

//-------------Img of book ------------------------------
let bookImage = document.createElement("img");
bookImage.setAttribute("width", "300px");
bookImage.setAttribute("height", "400px");
bookImage.className = "mx-auto d-block";




//-------------Container for the condition ------------------------------
let conditionContainer = document.createElement("div");
conditionContainer.className = "text-center";

//-------------Text for the condition ------------------------------
let conditionText = document.createElement("p");


//=============================================== Show display area function =========================================//

function showDisplayArea(e){

    displayContainer.appendChild(lineBreak);
    displayContainer.appendChild(imgDisplayContainer);

    imgDisplayContainer.appendChild(bookImage);
    
    let imgPath = `img/${e.target.previousSibling.value}.jpg`;
    let missingPath = "img/overlayimg.svg";

    if(shelf.find(e.target.previousSibling.value) === null){

    bookImage.setAttribute("src", missingPath);
    conditionText.innerHTML = `<span style="color: red;">${e.target.previousSibling.value} is missing from your collection</span>`;

    } else {

        bookImage.setAttribute("src", imgPath);

        if (shelf.find(e.target.previousSibling.value).condition === "good"){

        conditionText.innerHTML = `${e.target.previousSibling.value} is in <span style="color : green;">${shelf.find(e.target.previousSibling.value).condition}</span> condition`;

        } else if (shelf.find(e.target.previousSibling.value).condition === "fair"){

            conditionText.innerHTML = `${e.target.previousSibling.value} is in <span style="color : sienna;">${shelf.find(e.target.previousSibling.value).condition}</span> condition`;

        } else {

            conditionText.innerHTML = `${e.target.previousSibling.value} is in <span style="color : red;">${shelf.find(e.target.previousSibling.value).condition}</span> condition`;

        }
    }


    displayContainer.appendChild(conditionContainer);

    conditionContainer.appendChild(conditionText);

    document.getElementsByTagName("BODY")[0].insertBefore(displayContainer, null);

    removeInputMenu();

}

//=============================================== Submit button Add =========================================//

//add an event listener to the dynamically inserted submit button
submitButtonAdd.addEventListener("click", insertBook);

//=============================================== Insert book function =========================================//
function insertBook(e){

    shelf.add(e.target.previousSibling.previousSibling.value, e.target.previousSibling.value);
    
    removeInputMenu();
}

//=============================================== Remove Display Area function =========================================//

function removeDisplayArea() {

    //only run the function if there is an display area present in the dom
    if(document.body.contains(displayContainer)){
    
    //While the form container still has child elements - submit button ect
    while(displayContainer.firstChild) {

        //remove them so the form container is empty
        displayContainer.removeChild(displayContainer.firstChild);

    }

    //remove the form container itself
    document.getElementsByTagName("BODY")[0].removeChild(displayContainer);
}

}
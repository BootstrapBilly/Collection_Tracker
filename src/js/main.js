
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
let submitButton = document.createElement("input");
submitButton.className = "form-control d-inline";
submitButton.setAttribute("id", "submit-button");
submitButton.setAttribute("value", "Submit");

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
        formContainer.appendChild(submitButton);

        if(document.body.contains(displayContainer)){
        //append the form container to the body
        document.getElementsByTagName("BODY")[0].insertBefore(formContainer, displayContainer);
        } else {
            document.getElementsByTagName("BODY")[0].insertBefore(formContainer, null);
        }
    
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
    formContainer.appendChild(submitButton);

    if(document.body.contains(displayContainer)){
        //append the form container to the body
        document.getElementsByTagName("BODY")[0].insertBefore(formContainer, displayContainer);
        } else {
            document.getElementsByTagName("BODY")[0].insertBefore(formContainer, null);
        }
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
        formContainer.appendChild(submitButton);

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

//=============================================== Submit button =========================================//

//add an event listener to the dynamically inserted submit button
 submitButton.addEventListener("click", showDisplayArea);

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
conditionText.innerHTML = "Condition : <span> Good </span>";

//=============================================== Show display area function =========================================//

function showDisplayArea(e){

    

    displayContainer.appendChild(lineBreak);
    displayContainer.appendChild(imgDisplayContainer);

    imgDisplayContainer.appendChild(bookImage);

    
    
    console.log(e.target.previousSibling.value);
     let imgPath = `/dist/img/${e.target.previousSibling.value}.jpg`;
     bookImage.setAttribute("src", imgPath);

    imgDisplayContainer.appendChild(conditionContainer);

    conditionContainer.appendChild(conditionText);

    document.getElementsByTagName("BODY")[0].insertBefore(displayContainer, null);

    //removeInputMenu();
}
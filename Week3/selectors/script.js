
var nameSpan = document.querySelector("#name");
function setName(element){
    //console.log(element.value);
    nameSpan.innerText = element.value;
}


var foodToOrder = "Pizza";

function pickFood(element) {
    console.log("the food is " + element.value);
    foodToOrder = element.value;
}

function order() {
    alert("Ordering a " + foodToOrder);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}

var h3 = document.querySelector("h3");
h3.innerText = "Thank you Lord";


existingImage = document.querySelector("#cafe");

function switchImg(){
    existingImage.src = "./images/linux.png"
}

//Will make setActive to toggle the button
function setActive(element) {
    // element.style.backgroundColor = "#222222";
    // element.style.color = "#ffffff";
    if(element.classList.includes("dark-mode")){
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    }
    else{
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}


}


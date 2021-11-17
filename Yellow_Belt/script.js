
/* Ramon Darwin Garcia */
/* JavaScript file for Yellow Belt */

// function to increment the shopping cart quantities
function increaseQuantity(element){
   
   var score = document.getElementById(element);
   var number = score.innerHTML;
   number++;
   score.innerHTML = number;
}


// function to display alert message whenc clicking linux icon
function message(){
    alert("This game is supported on Linux");
}

//function to change the image when clicking the arrow functions
function leftArrow() {
    var image_id = document.getElementById('stonepunk');
    image_id.src = "./images/pixel-ninjas-2.png";
}

function rightArrow(){
    var image_id = document.getElementById('stonepunk');
    image_id.src = "./images/stonepunk.png";
}


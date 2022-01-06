let mousedownID = -1; //Global ID of mouse down interval

function mousedown(event) {
  if (mousedownID == -1)
    //Prevent multimple loops!
    mousedownID = setInterval(whilemousedown, 100 /*execute every 100ms*/);
}

function mouseup(event) {
  if (mousedownID != -1) {
    //Only stop if exists
    clearInterval(mousedownID);
    mousedownID = -1;
    counter = 0;
  }
}

// function call counter
let counter = Number();

function whilemousedown() {
  counter += 1;
  if (counter === 70) {
    console.log("10 sec!");
  }
}

//Select element of logo
let element = document.querySelector(".logo");

//Assign events
element.addEventListener("mousedown", mousedown);
element.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
element.addEventListener("mouseout", mouseup);

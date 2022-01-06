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
    logoDiv.classList.add("hidden");
    haroldDiv.classList.remove("hidden");
  }
}

//Select elements of logo & harold
let logoDiv = document.querySelector(".logo");
let haroldDiv = document.querySelector(".harold");

//Assign events
logoDiv.addEventListener("mousedown", mousedown);
logoDiv.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
logoDiv.addEventListener("mouseout", mouseup);

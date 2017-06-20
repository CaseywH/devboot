var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  //mode button in
  setupModeButtons();
  setUpSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add click listener to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      //compare to pickedColor
      if (pickedColor === clickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  resetButton.textContent = "New Colors";
  //change colorDisplayto match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
reset();
});


for (var i = 0; i < squares.length; i++) {

  //add click listener to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    //compare to pickedColor
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}


function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  var arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}


function randomColor() {
  // pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  // green from 0-255
  var g = Math.floor(Math.random() * 256);
  //blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  //generate 3 new colors
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  //pick 1 new color
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  // hid bottom 3 divs
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    //generate 6 new colors
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //pick 1 new color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // hid bottom 3 divs
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplayto match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor =colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});


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

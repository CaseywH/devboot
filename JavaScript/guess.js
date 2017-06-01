var secretNumber = 4;
var guess = Number(prompt("guess a number"));


if (guess === secretNumber) {
  alert("you got it right");
} else {
  alert("WRONG");
  if (guess < secretNumber) {
    alert("too low");
  } else {
    alert("too high");
  }
}


var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener("click", function() {
//   //if white make it purple
//   if (isPurple){
//   document.body.style.background = "white";
//
// } else {
//   document.body.style.background = "purple";
//
// }
// isPurple = !isPurple;
// });

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});

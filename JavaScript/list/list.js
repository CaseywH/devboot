var todos = [];

var input = prompt("What do you want to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
  } else if (input === "new") {
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
  } else if (input === "delete") {
    var index = prompt("enter index of todo to delete");
    todos.splice(index, 1);
  }
  input = prompt("What do you want to do?");
}
console.log("OK, you quit the app");

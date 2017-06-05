var todos = [];

var input = prompt("What do you want to do?");

while (input != "qut") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
  }
}
console.log("OK, you quit the app");

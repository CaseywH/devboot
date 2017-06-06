var todos = [];

var input = prompt("What do you want to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What do you want to do?");
}
console.log("OK, you quit the app");


function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter new Todo");
  todos.push(newTodo);
  console.log("added todo");
}

function deleteTodo() {
  var index = prompt("enter index of todo to delete");
  todos.splice(index, 1);
  console.log("deleted todo");
}

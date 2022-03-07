var submit = document.getElementById("submit");
var todoItem = document.getElementById("todo-item");
var todolist = document.getElementById("todo-list");
var save = document.getElementById("save");

var saveIndex;

var temp = [];

function display() {
  todoItem.value = "";
  todolist.innerHTML = "";
  temp.forEach((element, index) => {
    todolist.innerHTML += `<div class='list-item'>
  <p class='w-full text-grey-darkest col-10'>${element}</p>
  <button onclick='edit(${index})' class='edit btn btn-warning '>Edit</button>
  <button onclick='deleteTodo(${index})' class='btn btn-danger '>Delete</button>
  </div>`;
  });
}

submit.addEventListener("click" ,function(event) {
  event.preventDefault();

  let item = todoItem.value;
  if (item.length > 0) {
    temp.push(item);
  } else {
    window.alert("Field Empty!, Enter Todo Task");
  }

  display();
});

function edit(index) {
  todoItem.value = temp[index];
  saveIndex = index;
  save.style.display = "block";
  submit.style.display = "none";
}

function update() {
  // todoItem.value = "";
  save.style.display = "none";
  submit.style.display = "block";

  temp[saveIndex] = todoItem.value;
  console.log(temp[saveIndex]);

  display();
}

function deleteTodo(index) {
  temp.splice(index, 1);
  display();
  console.log(temp);
}

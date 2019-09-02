const todoForm = document.querySelector(".js-todo");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("ul");

let todoList = [];
const TODO_S = "toDos";


function todoClear(event) {
    const listClear = event.target.parentNode;
    todoUl.removeChild(listClear);
    todoList = todoList.filter( (todo) => todo.id !== parseInt(listClear.id));
    todosave();
}


function todosave() {
    localStorage.setItem(TODO_S, JSON.stringify(todoList));
}

function paintlist(todoText) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const id = todoUl.childElementCount+1;
    li.id = id;
    li.innerText = todoText;
    const todoLi = todoUl.appendChild(li);
    const todoButton = todoLi.appendChild(delBtn);
    const todoSet = {
        todoText,
        id
    } 
    todoList[id-1] = todoSet;
    todosave(todoList);
    delBtn.addEventListener("click", todoClear);
}

function todosubmit(event) {
    event.preventDefault();
    const todoText = todoInput.value;
    paintlist(todoText)
    todoInput.value = "";
}


function init() {
    todoForm.addEventListener("submit", todosubmit);
    const todoStorage = localStorage.getItem(TODO_S);
    if(todoStorage !== null) {
        JSON.parse(todoStorage).forEach(function(todo) {
            paintlist(todo.todoText);
        })
    } 
}

init();
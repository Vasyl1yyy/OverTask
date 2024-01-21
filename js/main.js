const todo = document.querySelector('.todo');
const btn = todo.querySelector('.input-btn');
const input = todo.querySelector('.input-text');
const list = todo.querySelector('.list');

btn.addEventListener('click', (event) => {
  const text = input.value;
  if (text !== '') {
    addTodoList(text);
    saveTodoList(text);
    input.value = '';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    if (input.value !== '') {
      addTodoList(input.value);
      saveTodoList(input.value);
      input.value = '';
    }
  }
});

const addTodoList = (text) => {
  const todoList =
    '<div class="todo-list"><p>' +
    text +
    '</p><button class="list-btn">Delete</button></div>';
  list.innerHTML += todoList;
};

document.addEventListener('click', (event) => {
  const todobtn = list.querySelectorAll('.list-btn');
  const todolist = list.querySelectorAll('.todo-list');

  if (event.target.classList == 'list-btn') {
    event.target.classList.toggle('del');
    for (let i = 0; i < todolist.length; i++) {
      if (todobtn[i].classList.length == 2) {
        todolist[i].parentNode.removeChild(todolist[i]);
        console.log(todolist[i].querySelector('p').innerHTML);
        for (let j = 0; j < todoLists.add; j++) {
          if (todoLists[j] == todolist[i].querySelector('p').innerHTML) {
            console.log(todoLists[j]);
            delete todoLists[j];
          }
        }
        localStorage.setItem('todoList', JSON.stringify(todoLists));
      }
    }
  }
});

let todoLists = {
  add: 0,
};

const saveTodoList = (text) => {
  todoLists[todoLists['add']] = text;
  todoLists['add'] += 1;
  localStorage.setItem('todoList', JSON.stringify(todoLists));
};

if (localStorage.getItem('todoList') !== null) {
  todoLists = JSON.parse(localStorage.getItem('todoList'));
  for (let i = 0; i < todoLists['add']; i++) {
    if (todoLists[i]) {
      addTodoList(todoLists[i]);
    }
  }
}

const todo = document.querySelector('.todo');
const btn = document.querySelector('.input-btn');
const input = document.querySelector('.input-text');
const list = document.querySelector('.list');
const inputTag = document.querySelector('.input-tag');

btn.addEventListener('click', (event) => {
  const text = input.value;
  if (text !== '' && inputTag.value !== '') {
    addTodoList(text, inputTag.value);
    saveTodoList(text, inputTag.value);

    blockAddTask.style.display = 'none';
    input.value = '';
    inputTag.value = '';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    if (input.value !== '' && inputTag.value !== '') {
      addTodoList(input.value, inputTag.value);
      saveTodoList(input.value, inputTag.value);

      blockAddTask.style.display = 'none';
      input.value = '';
      inputTag.value = '';
    }
  }
});

const addTodoList = (text, tag) => {
  const todoList =
    '<li class="todo-list"><h2>' +
    text +
    '</h2><p class="tag">#' +
    tag +
    '</p><button class="list-btn">Delete</button></li>';
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
        for (let j = 0; j < todoLists.add; j++) {
          if (todoLists[j]) {
            if (todoLists[j][0] == todolist[i].querySelector('h2').innerHTML) {
              delete todoLists[j];
            }
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

const saveTodoList = (text, tag) => {
  todoLists[todoLists['add']] = [text, tag];
  todoLists['add'] += 1;
  localStorage.setItem('todoList', JSON.stringify(todoLists));
};

if (localStorage.getItem('todoList') !== null) {
  todoLists = JSON.parse(localStorage.getItem('todoList'));
  for (let i = 0; i < todoLists['add']; i++) {
    if (todoLists[i]) {
      addTodoList(todoLists[i][0], todoLists[i][1]);
    }
  }
}

const text = {
  0: [1, 2],
};

const btnAdd = document.querySelector('.add');
const blockAddTask = document.querySelector('.todo-add');
const btnClose = document.querySelector('.close');

btnAdd.addEventListener('click', (event) => {
  blockAddTask.style.display = 'flex';
});

btnClose.addEventListener('click', (event) => {
  blockAddTask.style.display = 'none';
});

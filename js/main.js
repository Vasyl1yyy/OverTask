const todo = document.querySelector('.todo');
const btn = todo.querySelector('.input-btn');
const input = todo.querySelector('.input-text');
const list = todo.querySelector('.list');

btn.addEventListener('click', (event) => {
  if (input.value !== '') {
    addTodoList(input.value);
    input.value = '';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    if (input.value !== '') {
      addTodoList(input.value);
      input.value = '';
    }
  }
});

const addTodoList = (text) => {
  const todoList =
    '<div class="todo-list"><p>' +
    text +
    '</p><button class="list-btn">X</button></div>';
  list.innerHTML += todoList;
  localStorage.setItem('text', text);
};

document.addEventListener('click', (event) => {
  const todobtn = list.querySelectorAll('.list-btn');
  const todolist = list.querySelectorAll('.todo-list');

  if (event.target.classList == 'list-btn') {
    event.target.classList.toggle('del');
    for (let i = 0; i < todolist.length; i++) {
      if (todobtn[i].classList.length == 2) {
        todolist[i].remove();
      }
    }
  }
});

// Збереження даних в Local Storage

// Отримання даних з Local Storage
const text = localStorage.getItem('text');

console.log(text);

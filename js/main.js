const todo = document.querySelector('.todo');
const btn = todo.querySelector('.input-btn');
const input = todo.querySelector('.input-text');
const list = todo.querySelector('.list');

btn.addEventListener('click', (event) => {
  if (input.value !== '') {
    console.log(input.value);
    addTodoList(input.value);
    input.value = '';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    if (input.value !== '') {
      console.log(input.value);

      input.value = '';
    }
  }
});

const addTodoList = (text) => {
  const todoList =
    '<div class="todo-list"><p>' +
    text +
    '</p><button class="list-btn">X</button></div>';
  todo.querySelector('.list').innerHTML += todoList;
};

document.addEventListener('click', (event) => {
  if (event.target.classList == 'list-btn') {
    list.removeChild('.todo-list');
  }
});

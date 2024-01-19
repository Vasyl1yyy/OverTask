const todo = document.querySelector('.todo');
const btn = todo.querySelector('.input-btn');
const input = todo.querySelector('.input-text');

btn.addEventListener('click', (event) => {
  console.log(input.value);

  input.value = '';
});

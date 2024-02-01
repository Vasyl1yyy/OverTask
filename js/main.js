const habitBlock = document.querySelector('.habit');
const taskBlock = document.querySelector('.task');

const habitBtn = document.querySelector('#habit-btn');
const taskBtn = document.querySelector('#task-btn');

habitBtn.addEventListener('click', () => {
  taskBlock.style.display = 'none';
  habitBlock.style.display = 'block';
});

taskBtn.addEventListener('click', () => {
  taskBlock.style.display = 'block';
  habitBlock.style.display = 'none';
});

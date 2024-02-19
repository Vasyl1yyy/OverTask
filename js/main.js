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

const btnAdd = document.querySelector('.add');
const btnAddHabit = document.querySelector('.add-habit-block');

const todoAdd = document.querySelector('.todo-add');
const todoAddClose = document.querySelector('.todo-add-close');

const addBlock = document.querySelector('.add-block');
const addBlockHabit = document.querySelector('.add-block-habit');
const addBlockTask = document.querySelector('.add-block-task');

const habitAdd = document.querySelector('.habit-add');
const habitAddClose = document.querySelector('.habit-add-close');

btnAdd.addEventListener('click', () => {
  addBlock.style.display = 'flex';
});

btnAddHabit.addEventListener('click', () => {
  habitAdd.style.display = 'flex';
});

const addTaskBlock = () => (todoAdd.style.display = 'flex');

addBlockTask.addEventListener('click', () => {
  todoAdd.style.display = 'flex';
  addBlock.style.display = 'none';
});

addBlockHabit.addEventListener('click', () => {
  habitAdd.style.display = 'flex';
  addBlock.style.display = 'none';
});

todoAddClose.addEventListener('click', () => {
  todoAdd.style.display = 'none';
});

habitAddClose.addEventListener('click', () => {
  habitAdd.style.display = 'none';
});

const inputTaskText = document.querySelector('.input-task-text');
const selectTask = document.querySelector('.dif-select');
const inputTaskTag = document.querySelector('.input-tag');
const inputTaskDate = document.querySelector('.date');
const btnTaskAdd = document.querySelector('.input-task-btn');
const list = document.querySelector('.list');

btnTaskAdd.addEventListener('click', () => {
  if (inputTaskText.value !== '') {
    todoAdd.style.display = 'none';
    addTaskList(
      inputTaskText.value,
      inputTaskTag.value,
      inputTaskDate.value,
      selectTask.value
    );
    inputTaskText.value = '';
    inputTaskTag.value = '';
    inputTaskDate.value = '';
    selectTask.value = 'hard';
  }
});

const doneDel = () => {
  event.target.classList.toggle('done-del');
};

const taskDelete = (el) => {
  el.parentNode.remove();
};

const addTaskList = (text, tag, date, color) => {
  const taskList = `<li class="list-task">
  <div onclick="doneDel()" class="done"></div>
  <div class="difficulty-color ${color}"></div>
  <h3 class="text-task">${text}</h3>
  <div class="date-tag">
    <div class="tag-block">
      <h4 class="tag-text">${tag}</h4>
    </div>
    <h4 class="date-text">${date}</h4>
  </div>
  <button onclick="taskDelete(this)" class="delete">
    <ion-icon name="trash" class="delete-icon"></ion-icon>
  </button>
</li>`;
  list.innerHTML += taskList;
};

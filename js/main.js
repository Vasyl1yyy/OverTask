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
    stats();
  }
});

const doneDel = () => {
  event.target.classList.toggle('done-del');
  filterTask(list.children);
};

const taskDelete = (el) => {
  el.parentNode.remove();
  filterTask(list.children);
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

const colorTask = document.querySelector('.color-task');
const statsTaskPer = document.querySelector('.stats-task-per');

const colorAll = document.querySelector('.color-all');
const statsAllPer = document.querySelector('.stats-all-per');
let statsTask = 0;

const stats = () => {
  let perTask = 0;
  if (list.children.length - 1 !== 0) {
    perTask = (statsTask / (list.children.length - 1)) * 100;
  }
  colorTask.style.strokeDashoffset = 440 - (440 * perTask) / 100;
  statsTaskPer.innerText = Math.round(perTask) + '%';

  let perAll = 0;
  perAll = (perTask + 80) / 2;
  colorAll.style.strokeDashoffset = 440 - (440 * perAll) / 100;
  statsAllPer.innerText = Math.round(perAll) + '%';
};

const filterTask = (lists) => {
  let filterList = [];

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children[0].classList == 'add-task-btn')
      filterList.push(lists[i]);
  }

  statsTask = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children[0].classList.length == 2) {
      filterList.push(lists[i]);
      statsTask++;
    }
  }

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children[0].classList == 'done') filterList.push(lists[i]);
  }

  list.innerHTML = '';

  for (let i = 0; i < filterList.length; i++) {
    list.innerHTML += filterList[i].outerHTML;
  }
  stats();
};

filterTask(list.children);

// Task
const taskBtn = document.querySelector('#task-btn');
const taskBlock = document.querySelector('.task');
const list = document.querySelector('.list');
const todoInput = document.querySelector('.input');

const todoAdd = document.querySelector('.todo-add');
const btnTaskAdd = document.querySelector('.input-task-btn');

const addBlockTask = document.querySelector('.add-block-task');
const inputTaskText = document.querySelector('.input-task-text');
const selectTask = document.querySelector('.dif-select');
const inputTaskTag = document.querySelector('.input-tag');
const inputTaskDate = document.querySelector('.date');

const todoAddClose = document.querySelector('.todo-add-close');

// Habit
const habitBtn = document.querySelector('#habit-btn');
const habitBlock = document.querySelector('.habit');
const habitInput = document.querySelector('.habit-add-input');
const listHabit = document.querySelector('.list-habit');

const addBlockHabit = document.querySelector('.add-block-habit');
const habitAdd = document.querySelector('.habit-add');

const inputHabitText = document.querySelector('.input-text');
const selectHabit = document.querySelector('.color-select');

const btnHabitAdd = document.querySelector('.input-btn');
const habitAddClose = document.querySelector('.habit-add-close');

// add
const btnAdd = document.querySelector('.add');
const addBlock = document.querySelector('.add-block');

// stats
const colorTask = document.querySelector('.color-task');
const statsTaskPer = document.querySelector('.stats-task-per');

const colorHabit = document.querySelector('.color-habit');
const statsHabitPer = document.querySelector('.stats-habit-per');

const colorAll = document.querySelector('.color-all');
const statsAllPer = document.querySelector('.stats-all-per');

let statsTask = 0;
let statsHabit = 0;

const animeBlockAdd = (el, el2) => {
  el.style.display = 'flex';
  setTimeout(() => {
    el.style.opacity = '1';
    el2.style.transform = 'scale(1)';
  }, 10);
};

const animeBlockClose = (el, el2) => {
  el.style.opacity = '0';
  el2.style.transform = 'scale(0)';
  setTimeout(() => {
    el.style.display = 'none';
  }, 150);
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
  <button onclick="Delete(this)" class="delete">
    <ion-icon name="trash" class="delete-icon"></ion-icon>
  </button>
</li>`;
  list.innerHTML += taskList;
};

const addHabitList = (text, color) => {
  const habitList = `<li class="lists-habits">
  <ion-icon onclick="Delete(this)" name="trash" class="delete"></ion-icon>
  <button onclick="doneHabit()" class="btn-add-habit ${color}">${text}
  </button>
</li>`;
  listHabit.innerHTML += habitList;
};

const stats = () => {
  let perTask = 0;
  if (list.children.length - 1 !== 0) {
    perTask = (statsTask / (list.children.length - 1)) * 100;
  }
  colorTask.style.strokeDashoffset = 440 - (440 * perTask) / 100;
  statsTaskPer.innerText = Math.round(perTask) + '%';

  let perHabit = 0;
  if (listHabit.children.length - 1 !== 0) {
    perHabit = (statsHabit / (listHabit.children.length - 1)) * 100;
  }
  colorHabit.style.strokeDashoffset = 440 - (440 * perHabit) / 100;
  statsHabitPer.innerText = Math.round(perHabit) + '%';

  let perAll = 0;
  perAll = (perTask + perHabit) / 2;
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

const filterHabit = (lists) => {
  let filterList = [];

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children[0].classList == 'add-habit-block')
      filterList.push(lists[i]);
  }

  statsHabit = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children[1].classList.length == 3) {
      filterList.push(lists[i]);
      statsHabit++;
    }
  }

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children[1].classList.length == 2) filterList.push(lists[i]);
  }

  listHabit.innerHTML = '';

  for (let i = 0; i < filterList.length; i++) {
    listHabit.innerHTML += filterList[i].outerHTML;
  }
  stats();
};

const addHabitBlock = () => {
  animeBlockAdd(habitAdd, habitInput);
};

const addTaskBlock = () => {
  animeBlockAdd(todoAdd, todoInput);
};

const doneDel = () => {
  event.target.classList.toggle('done-del');
  filterTask(list.children);
};

const doneHabit = () => {
  event.target.classList.toggle('btn-done-habit');
  filterHabit(listHabit.children);
};

const Delete = (el) => {
  el.parentNode.remove();
  filterTask(list.children);
};

filterHabit(listHabit.children);
filterTask(list.children);

habitBtn.addEventListener('click', () => {
  taskBlock.style.display = 'none';
  habitBlock.style.display = 'block';
});

taskBtn.addEventListener('click', () => {
  taskBlock.style.display = 'block';
  habitBlock.style.display = 'none';
});

btnAdd.addEventListener('click', () => {
  animeBlockAdd(addBlock);
});

addBlockTask.addEventListener('click', () => {
  addBlock.style.display = 'none';
  animeBlockAdd(todoAdd, todoInput);
});

addBlockHabit.addEventListener('click', () => {
  addBlock.style.display = 'none';
  animeBlockAdd(habitAdd, habitInput);
});

todoAddClose.addEventListener('click', () => {
  animeBlockClose(todoAdd, todoInput);
});

habitAddClose.addEventListener('click', () => {
  animeBlockClose(habitAdd, habitInput);
});

btnTaskAdd.addEventListener('click', () => {
  if (inputTaskText.value !== '') {
    todoInput.style.transform = 'scale(0)';
    setTimeout(() => {
      todoAdd.style.display = 'none';
    }, 150);
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

btnHabitAdd.addEventListener('click', () => {
  if (inputHabitText.value !== '') {
    habitAdd.style.opacity = '0';
    habitInput.style.transform = 'scale(0)';
    setTimeout(() => {
      habitAdd.style.display = 'none';
    }, 150);
    addHabitList(inputHabitText.value, selectHabit.value);
    inputHabitText.value = '';
    selectHabit.value = 'green';
    stats();
  }
});

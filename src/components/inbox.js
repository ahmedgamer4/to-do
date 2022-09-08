class Task {
  constructor(task, date='No Date') {
    this.task = task;
    this.date = date;
    this.tasksList = [];
  }
} 

function makeInbox() {
  const container = document.createElement('div');
  container.classList.add('inbox');

  const title = document.createElement('h1');
  title.classList.add('inbox_title');
  title.textContent = 'Inbox';

  const tasksPlace = document.createElement('div');
  tasksPlace.classList.add('tasks-palce');

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.placeholder = 'Write a task';

  const add_btn = document.createElement('button');
  add_btn.textContent = 'Add';
  add_btn.classList.add('add-btn');

  container.appendChild(title);
  container.appendChild(tasksPlace);
  container.appendChild(input)
  container.appendChild(add_btn);

  return container;
}

function addTask() {
  
}

function loadInbox() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(makeInbox());
}

export default loadInbox;
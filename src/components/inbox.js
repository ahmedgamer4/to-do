class Task {
  constructor(task, description='', priority='normal', date='No Date') {
    this.task = task;
    this.date = date;
    this.description = description;
    this.priority = priority;
    this.complete = false;
  }
} 

function makeInbox() {
  const container = document.createElement('div');
  container.classList.add('inbox');

  const title = document.createElement('h1');
  title.classList.add('inbox_title');
  title.textContent = 'Inbox';

  const tasksPlace = document.createElement('div');
  tasksPlace.classList.add('tasks-place');

  const add_btn = document.createElement('button');
  add_btn.textContent = 'Add';
  add_btn.classList.add('add-btn');

  const popup = document.getElementById('popup');
  add_btn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  container.appendChild(title);
  container.appendChild(tasksPlace);
  // container.appendChild(input);
  container.appendChild(add_btn);

  return container;
}

function addTask() {
  const task_title = document.getElementById('title').value;
  const details = document.getElementById('details').value;
  const task = new Task(task_title, details);

  console.log(task);
  return task;
}

function loadInbox() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(makeInbox());
}

export { addTask, loadInbox} ;
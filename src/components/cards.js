function TasksList(){
  this.tasksList = [];
}

TasksList.prototype.checkExist = (task) => {
  for (item of this.tasksList) {
    if (task === item) {
      return true;
    }
  }
}

TasksList.prototype.addTask = function (task) {
  if (task !== '' || this.checkExist(task) == false) {
    this.tasksList.push(task);
  }
}

TasksList.prototype.looponlist = function () {
  const tasksPlace = document.querySelector('.tasks-place');
  tasksPlace.textContent = '';

  for (let item of this.tasksList) {
    const task_container = document.createElement('div');
    task_container.classList.add('task');

    const title = document.createElement('div');
    title.classList.add('task-title');
    title.textContent = item.task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');

    const left = document.createElement('div');
    left.classList.add('task-left');
    left.appendChild(checkbox);
    left.appendChild(title);


    const details = document.createElement('div');
    details.classList.add('task-details');
    details.textContent = item.description;

    task_container.appendChild(left);

    tasksPlace.appendChild(task_container);

    checkbox.onchange = e => {
      this.tasksList.splice(this.tasksList.indexOf(item), 1);
      this.looponlist();
    }
  }
}


export default TasksList;
import TasksList from "./cards";
import { makeInbox, Task, addTask } from "./inbox";

let projects = [];

const add_project = document.querySelector('.add-project');
const projects_place = document.querySelector('.projects-place');
 
export const addProject = () => {
  let name = document.getElementById('input-project').value;

  if (name == "" || projects.includes(name)) {
    return;
  }
  projects.push(name);

  const project = document.createElement('button');
  project.classList.add('project');
  project.textContent = name;

  projects_place.appendChild(project);
}

export function makeProject(name) {
  const container = document.createElement('div');
  container.classList.add('inbox');

  const title = document.createElement('h1');
  title.classList.add('inbox_title');
  title.textContent = name;

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


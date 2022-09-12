import TasksList from './components/cards'
import {loadInbox, addTask, changePhase, Task} from './components/inbox';
import { addProject, makeProject } from './components/project-methods';


const tasksPlace = document.querySelector('.tasks-place');
const inbox_btn = document.getElementById('inbox-side-btn');
const projects = document.querySelectorAll('.project');
const mainDiv= document.querySelector('main');
const project_btn = document.querySelector('.add-project');
const popup = document.getElementById('popup');
const close_btn = document.getElementById('close');
close_btn.addEventListener('click', () => {
  popup.classList.add('hidden');
});


let tasklist = new TasksList();


function main() {
  tasklist.addTask(addTask(tasklist));
  tasklist.looponlist();
  popup.classList.add('hidden');
}

const submit = document.querySelector('.submit');

submit.onclick = main;
inbox_btn.onclick = () => {
  loadInbox();
  tasklist.looponlist();
}

projects.forEach(project => {project.addEventListener('click', e => {
  project_tasklist = new TasksList();
  let name = e.target.textContent;
  mainDiv.textContent = '';
  makeProject(name);
})});

project_btn.onclick = addProject;

loadInbox();

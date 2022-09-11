import TasksList from './cards'
import {loadInbox, addTask, changePhase} from './components/inbox';


const tasksPlace = document.querySelector('.tasks-place');
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

loadInbox();

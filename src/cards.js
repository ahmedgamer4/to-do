function createTask(name, description='') {
  const card = document.createElement('div');
  card.classList.add('card');  

  const finish_btn = document.createElement('button');
  finish_btn.classList.add('finish-btn');

  const p = document.createElement('p');
  p.classList.add('task-des');
  p.textContent = name;

  card.appendChild(finish_btn);
  card.appendChild(p);

  return card;
}

function loadTask() {
  const main = document.querySelector('main');
  main.appendChild(createTask());
}

export default loadTask;
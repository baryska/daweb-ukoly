'use strict';

console.log('funguju!');

const tasks = [
  'Běhat',
  'Trénovat Javascript',
  'Přečíst si knížku',
  'Dát si Nutellu']


const updateTasks = () => {
  const listElm = document.querySelector('.todo__tasks')
  listElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    listElm.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
}
updateTasks()

const user = () => {
  let userValue = document.querySelector('.new-task');
  if (userValue.value !== "") {
    tasks.push(userValue.value);
    updateTasks();
    userValue.value = "";
  } else {
    userValue.value = "";
  }
}

const btnElm = document.querySelector('.btn-add')
btnElm.addEventListener('click', user)


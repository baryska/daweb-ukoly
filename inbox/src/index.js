import './index.html';
import './style.css';
import Handlebars from 'handlebars';

const message = {
  sender: 'Milan Kouhoutek',
  subject: 'Nabídka spolupráce',
  date: 'po 13. března',
  time: '8:45',
};

const messageTemplate = Handlebars.compile(document.querySelector('#inbox_template').innerHTML);

const renderMessage = (inbox) => {
  const messageElm = document.createElement('div')
  messageElm.innerHTML = messageTemplate(inbox)
  return messageElm.children[0]
}


const inboxElm = document.querySelector('h1');
inboxElm.appendChild(renderMessage(message))
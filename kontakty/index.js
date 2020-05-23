'use strict';

const contact = [
  {
    name: "Jan",
    surname: "Procházka",
    email: "jan@prochazka.cz",
    phone: "0420 123 456 789"
  },

  {
    name: "Lenka",
    surname: "Vodičková",
    email: "lenka@vodickova.cz",
    phone: "0420 234 567 891"
  },

  {
    name: "Ivan",
    surname: "Šmíd",
    email: "ivan@smid.cz",
    phone: "0420 345 678 912"
  }
]

const contactTemplate = Handlebars.compile(
  document.querySelector('#contact_template').innerHTML)

const renderContact = (contacts) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = contactTemplate(contacts);
  return helperELm.children[0];
};

console.log(renderContact(contact[0]))

for (let i = 0; i < contact.length; i++) {
  const contactElm = document.querySelector('.contact_head')
  contactElm.appendChild(renderContact(contact[i]))
}

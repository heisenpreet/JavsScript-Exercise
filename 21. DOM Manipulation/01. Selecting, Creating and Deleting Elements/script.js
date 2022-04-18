//CASE 1 SELECTING ELEMENTS
//CASE 2 CREATING AND INSERTING ELEMENTS
//CASE 3 DELETE THE ELEMETS

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////
/////////////////////////////////////

//CASE 1 SELECTING ELEMENTS

//////////////////////////////////////
//////////////////////////////////////
console.log(document.documentElement);
//Selectes the entire html document

console.log(document.head);
console.log(document.body);

document.querySelector('.header');
// selects first element which matches the class name

const allSection = document.querySelectorAll('.section');
//selects all the elemsts with the class name

const allButtons = document.getElementsByTagName('button');
//selects all the buttons in button tag

console.log(allButtons); //its not a node list but a html collection
//HTML collections are updated ,

const btn = document.getElementsByClassName('btn');
// also returns an html collection

/////////////////////////////////////
/////////////////////////////////////

//CASE 2 CREATING AND INSERTING ELEMENTS

//////////////////////////////////////
//////////////////////////////////////

const message = document.createElement('div');
//creates an dom element but its not on the html page yet, its not on dom

message.classList.add('cookie-message');
// message.textContent = `We use cookies for imporved funtionality and analytics`;
message.innerHTML = `We use cookies for imporved funtionality and analytics <button class="btn btn--close-cookie"Got it</button>  `;

//Inserting the above created element

const header = document.querySelector('.header');

header.prepend(message); // adds the element as the first child of header

header.append(message); // adds the element as the last child of header
//IMPORTANT the element can be present at one place
// PREPEND AND APPEND CAN ALSO BE USED TO MOVE THE ELEMENT FROM ONE PLACE TO ANOTHER PLACE

// THE DOM ELEMENTS ARE UNIQUE THUS CAN BE PRESENT AT ONE PLACE ONLY , THUS TO HAVE MULTIPLE COPIES OF AN DOM ELEMENT

header.prepend(message);

header.append(message.cloneNode(true)); // we clone the domelement , true here means all the child elements are alos be cloned

header.before(message); // adds the elemt as sibling , before the header
header.after(message); // adds the elemt as sibling , after the header

/////////////////////////////////////
/////////////////////////////////////
//CASE 3 DELETE THE ELEMETS
/////////////////////////////////////
/////////////////////////////////////

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

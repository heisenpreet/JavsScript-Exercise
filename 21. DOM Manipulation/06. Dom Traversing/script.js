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
///////////////////////////////////////
///////////////////////////////////////
//CASE 2 DOM TRAVERSING - WALKING THROUGH THE DOM
// SELECTING THE ELEMENTS RELATIVE TO THE OTHER ELEMENTS ,
// HELPFUL WHEN WE DONT KNOW THE STRUCTURE OF THE ELEMENT
///////////////////////////////////////
///////////////////////////////////////

const h1 = document.querySelector('h1');

//CASE 1 - Going downwards:: child

console.log(h1.querySelectorAll('.highlight'));
//IMPORTANT only the child elements of h1 with class highlight will be selected , elements with class highlight in other elements will not be selcted

console.log(h1.childNodes); //returns all the child els , even comments
console.log(h1.children); //returns only direct childers

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// CASE 2 - Going upwards:: parents

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest();
//returns the closed parent of h1
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//querySelector finds child elments
//closest() finds the parents

//CASE 3 - Going sideways :siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children); //returns all the siblings

[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

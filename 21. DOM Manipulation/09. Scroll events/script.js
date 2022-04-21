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
//Scroll event , stikcy navbar

//scroll events compermise the performance
///////////////////////////////////////
///////////////////////////////////////

const initialCoords = document
  .querySelector('.section1')
  .getBoundingClientRect(); //returns the cooridtiantes of section 1

console.log(initialCoords);

//scroll event is only aviable on window and not document
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY); //current y positon

  if (window.scrollY > initialCoords.top) this.nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

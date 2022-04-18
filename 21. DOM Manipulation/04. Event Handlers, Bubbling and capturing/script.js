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
//CASE 1 Mouse enter events
///////////////////////////////////////
///////////////////////////////////////

const h1 = document.querySelector('h1');

const alerth1 = function (e) {
  //mouseenter works as an hover of css

  alert('you are readfnig');
};
h1.addEventListener('mouseenter', alerth1);

//adding events directly to an element
h1.onmouseenter = function (e) {
  //mouseenter works as an hover of css
  // alert('you are readfnig');
};

///////////////////////////////////////
///////////////////////////////////////
//CASE 2 removing eventlisten
///////////////////////////////////////
///////////////////////////////////////

//this will remove the eventlistner which makes the funtion work only once
h1.removeEventListener('mouseenter', alerth1);

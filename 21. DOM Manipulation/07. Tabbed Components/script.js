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
//CASE 1 TABBED COMPONENTS
///////////////////////////////////////
///////////////////////////////////////

const tabs = document.querySelectorAll('.operations__tab'); //buttons
const tabsContainer = document.querySelector('.operations__tab-container'); //container of buttons
const tabsContent = document.querySelectorAll('.operations__content'); //content box

//using event delegation

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //this will ensure that whichever elemnt of button we click, we get the button selected and not just the child element of the button

  //Guard Clause:-   when clicked is null , the funtion will end with the return
  if (!clicked) return;

  //1.remove the active class from all the elemensts(tabs , content)
  //2. add the active class to the element we want active

  //tabs functainality
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //content funcatanilty
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

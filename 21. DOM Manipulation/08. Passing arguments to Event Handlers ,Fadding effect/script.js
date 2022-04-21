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
//CASE 1 fadding navigation links
///////////////////////////////////////
///////////////////////////////////////

//using event delegation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    //seraching for parenet of e.taget
    const siblings = link.closest('.nav').querySelectorAll('nav__link'); //first selected the parenet of e.target with closest then through there selcted all the child elements which contained the class nav__link
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (el != link) el.style.opacity = this; //selcting all except the e.target
    });
    logo.style.opacity = this;
  }
};

//when mouse hover
nav.addEventListener('mouseover', handleHover.bind(0.5));

//when mouse hover stops
nav.addEventListener('mouseout', handleHover.bind(1));

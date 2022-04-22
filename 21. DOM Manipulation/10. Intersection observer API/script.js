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
//CASE1 Intersection observer API
///////////////////////////////////////
///////////////////////////////////////
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect();
console.log(navHeight);

const obsCallback = function (entries, observer) {
  entries.forEach(element => {
    console.log(element);
    if (!element.isIntersection) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  });
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //-90px
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

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
/////////////////////////////
/////////////////////////////
//CASE 1 CHANGING THE VALUES OF STYLES
/////////////////////////////
/////////////////////////////

console.log(getComputedStyle(overlay).height);
// returns all the properties of overlay , from those all we select to see only the color

overlay.style.height =
  Number.parseFloat(getComputedStyle(overlay).height, 10) + 40 + 'px';

/////////////////////////////
/////////////////////////////
//CASE 2 CHANGING VALUES OF CSS VARIABLES ::ROOT COLORS
/////////////////////////////
/////////////////////////////

document.documentElement.style.setProperty('--color-primary', 'red');
//changes the value of property ('propetyname', value)

/////////////////////////////
/////////////////////////////
//CASE 3 ATTRIBUTES
/////////////////////////////
/////////////////////////////

const logo = document.querySelector('.nav__logo');
//reading attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));

//setting the arrtibutes
logo.alt = 'beautiful minimalist logo';
console.log(logo.alt);

//making and setting attrubutes
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.getAttribute('href'));

/////////////////////////////
/////////////////////////////
//CASE 4 Data set ATTRIBUTES
/////////////////////////////
/////////////////////////////

console.log(logo.dataset.versionNumber);

/////////////////////////////
/////////////////////////////
//CASE 5 classes
/////////////////////////////
/////////////////////////////

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//dont use , it overrights
logo.className = 'jonas';

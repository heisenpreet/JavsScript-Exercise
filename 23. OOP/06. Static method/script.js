'use strict';
//////////////////////////////////
//CASE Static methods are connected with the object it self and not the prototypes , for exaample

/**
 *  Array.from(document.querySelectorAll('.h1'));
 * this will return an array
 * [1,3,45,5].form  , this wont work
 */

class PersonCL {
  constructor(fulltName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //static method

  static hey = function () {
    console.log('Hey there 👋');
    console.log(this);
  };
}

const jessica = new PersonCL('jessica Davis', 1996);
console.log(jessica);

PersonCL.hey();

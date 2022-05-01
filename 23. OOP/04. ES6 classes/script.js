'use strict';

//////////////////////////////////
//CASE ES6 CLASSES

//class expression
// const PersonCL=class{

// }

//class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  } //automatically goes into prototype property
}

const jessica = new PersonCL('jessica', 1996);
console.log(jessica);

console.log(jessica.__proto__ === PersonCL.prototype); //returns true

//creating prototype manually
PersonCL.prototype.greet = function () {
  console.log(`hey ${this.firstName}`);
};
jessica.greet();

//IMPORTANT
/**
 * 1. Classes are Not hoisted
 * 2. Classes are first class citizens
 * 3. Classes are executed in strict mode
 *
 */
//example
/**
 *
 */

class Cars {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  set speed(speed) {
    this._speed = speed + 10;
  }
  get speed() {
    return this._speed;
  }
}
const bens = new Cars('bens', 100);
console.log(bens);
console.log(bens.speed);

//example

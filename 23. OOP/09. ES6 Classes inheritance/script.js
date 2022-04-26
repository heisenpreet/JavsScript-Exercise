'use strict';

////////////////////////////////
//ES6 class inhertance

class PersonCL {
  constructor(fulltName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
//ES6 class inhertance
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); //this is the constructor fx of the parent class, IMPORTANT needs to happen first
    this.course = course;
  }

  introduce() {
    console.log(`my name is ${this.fullName} and i study ${this.course}`);
  }

  //methods which appear first in the prototype chain overwrite the mehtods below it IMPORTANT
}
const Martha = new StudentCL('Martha Jonas', 2021, 'computer science');

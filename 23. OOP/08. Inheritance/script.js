'use strict';
/////////////////////////////////////////
//⭐ Inheritance Between "classes":Constructor Functions
/////////////////////////////////////////

const Person = function (Firstname, birthYear) {
  this.Firstname = Firstname;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (Firstname, birthYear, course) {
  Person.call(this, Firstname, birthYear); //bind wont work
  this.course = course;
};

//creating the protoptype chain, LINKING PROTOTYPE
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
  console.log(`My name is ${this.Firstname} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

//because of inhertance
mike.calcAge();

console.log(mike.__proto__.__proto__);

///example

const car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

car.prototype.accelarte = function () {
  this.speed += 20;
  this.charge -= 10;
  console.log(`the speed is ${this.speed} and charge is ${this.charge}`);
};
const EV = function (maker, speed, charge) {
  car.call(this, maker, speed);
  this.charge = charge;
};

//linking the prototypes
EV.prototype = Object.create(car.prototype);
EV.prototype.constructor = EV;

const tesla = new EV('tesla', 100, 23);
console.log(tesla);
tesla.accelarte();

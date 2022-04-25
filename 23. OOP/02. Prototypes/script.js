'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const harry = new Person('Harry', 1995);

console.log(harry);

///////////////////////////////////////
//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

harry.calcAge();

//IMPORTANT
//harry doesn't contain the calcAge method but with help of prototype we have the access to it

console.log(Person.prototype.isPrototypeOf(harry)); //returns true
console.log(Person.prototype.isPrototypeOf(Person)); //return false

//ANSWER : prototype is linked with the instances and not the object  prototypeOFLinkedObject

//CASE properties on protoptypes

Person.prototype.species = 'Homo Sapiens';
console.log(harry.species);

//checking for properties
console.log(harry.hasOwnProperty('firstName')); //true
console.log(harry.hasOwnProperty('species')); //false

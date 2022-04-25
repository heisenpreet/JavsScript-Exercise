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

console.log(harry.__proto__);
console.log(harry.__proto__.__proto__);
console.log(harry.__proto__.__proto__.__proto__); //null , this chain stops her
//IMPORTANT a prototype also has a protoype

console.dir(Person.prototype.constructor); // the constructor points back to the person object unlike the prototypes

//every function is an object thus it has a protype also

const arr = [3, 4, 5, 6, 3, 3, 7];
console.log(arr.__proto__); //shows all filter methods
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//CASE creating our own prototype methods
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1'); //html elements are also object

console.dir(x => x + 1); //functions too have prototypes such , apply bind and call

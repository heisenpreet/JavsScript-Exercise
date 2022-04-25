'use strict';

//constructor fx
//arrow fx doesn't work

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Instance methods //IMPORTANT bad practice as the no. of methods can increase //INFINATE COPIES PROBLEM
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const harry = new Person('Harry', 1995);
//constructor fx are called using the new keyword

/* 
1.  New{} is created,
2.  Funtion is called, this={},
3.  {} linked to prototype,
4.  funtion automatically return {}

*/
console.log(harry);

const marry = new Person('marry', 2017);
const jack = new Person('jack', 1975);

console.log(marry, jack);

///////////////////////////////////////

console.log(harry instanceof Person); //returns true

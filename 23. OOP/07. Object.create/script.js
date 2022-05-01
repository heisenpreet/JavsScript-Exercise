'use strict';

///////////////////////////
//Object create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Sarah', 1979);
steven.calcAge();

const StudentProto = Object.create(PersonProto); //inheritance
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName.birthYear);
  this.course = course;
};
const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer Science');

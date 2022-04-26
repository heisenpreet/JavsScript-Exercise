'use strict';
//////////////////////////////////
//CASE ES6 class getters and setters

class PersonCL {
  constructor(fulltName, birthYear) {
    this.fullName = fullName; //here it will not set the value but rather call the setter below 
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  },

//getters and setters are useful for data validation

        get age(){
            return 2037-this.birthYear;
        }

        set fullName(name){
            console.log(name);
            if(name.includes(' ')) this._fullName=name; //creating a new variable to clear the conflit because the constructor and the setter both are setting the same property
            else alert(`${name} is not a full name!`);
        }

        get fullName(){
            return this._fullName;
        }

}

const jessica = new PersonCL('jessica Davis', 1996);
console.log(jessica);


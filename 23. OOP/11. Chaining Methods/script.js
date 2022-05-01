'use strict';

//chaining methods of class

class accounts {
  deposit(val) {
    this.movements.push(val);
    return this; //return is important and essential to make the chaining work
  }
}

accont1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(500);

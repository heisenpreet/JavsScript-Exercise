'use strict';
////////////////////////////////////
//encapsulation: keeping some of the data private and secure

//Public field
//private class field
//public methods
//private methods
//static version

class Account {
  //1) public fields (instance), without any const or let
  locale = navigator.language;

  //2) Private fields
  #movements = [];

  #pin; //feilds cant be defined in constructor without being declared outside of crustor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;

    console.log(`Thanks for opening an account ${owner}`);
  }

  //public methods or public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }

  //private methods

  #approveLoan(val) {
    return true;
  }

  //static

  static helper(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'Eur', 1111);
console.log(acc1);

'use strict';

class Car {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  set speed(speed) {
    this.speedkmph = speed + ' kmph';
  }
}

class EV extends Car {
  constructor(maker, speed, charge) {
    super(maker, speed);
    this.charge = charge;
  }
  acclerate() {
    this.speed = Number(this.speedkmph.slice(0, 3)) + 10;
  }
}
const tesla = new EV('tesla', 100, 20);
console.log(tesla);
tesla.acclerate();
console.log(tesla);

/*NEWTOPIC
create a counter function with increment and get value functionality
*/

// CASE 1:

const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      return (count += val);
    },
    getValue: () => {
      return count;
    },
  };
};
const counter = privateCounter();
console.log(counter);
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

// CASE 2

const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passengers`);
  };
};

const booker = secureBooking();

booker();

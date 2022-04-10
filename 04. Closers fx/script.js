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

//booker is globaL fx and should not have access to the passangerscount variale which is secure variable of fx1

// The passngercount can be accessed!! but how because booker fx is just a copy , and not a child fx of securebooking fx

// closer remembers its roots! A closer enables any fucntion exceess to all its variable enivroment in which it was created , even after the parent fx is dead

// a fx keeps a backpack of all its variables ,whereever it goes , it has its backpack

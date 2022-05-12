/*NEWTOPIC
wRITE A FX WHICH HELP ACHIEVE multiphy(a)(b) and returns the product of a & b
// */

// CASE 1

const multiply = function (a) {
  return (b) => {
    return a * b;
  };
};
console.log(multiply(2)(4));

//ANSWER: HERE FX MULTIPLY HAS A INNER FX WITH ARGUMENT b , THUS WHEN WE CALL THE FX , THE FIRST VALUE IS TAKEN AS a AND THE SECOND VALUE OF 4 IS TAKEN AS b

//------------------------------------------------------------------------------

//CASE 2 CHANGING THE ABOVE FX WITH AN ARROW FX

const mul = (a) => (b) => a * b;

console.log(mul(3)(4));

//ANSWER THE SAME FUNTIONALITY IS ACHIEVED WITH THE HELP OF ARROW FX

//CASE 3

const multi = (a) => (b) => a * b;

const number1staySameForAll = multi(4);

console.log(number1staySameForAll(5));

//ANSWER HERE CURRYING IS IMPORTANT AS WHEN ONE ARGUMENT STAYS SAME FOR ALL OUR COMPUATATION

//------------------------------------------------------------------------------

// B) WHAT IS CURRYING FX ? CREATE A CURRYING FX.

const curry = function (fn) {
  var arity = fn.length;
  console.log("arity", arity);
  return function (...args) {
    if (args.length >= arity) {
      console.log(`enough arguments`);
      return fn(...args);
    }
  };
};
const carriedSum = curry((a, b, c, d) => a + b + c + d);

console.log(carriedSum(1, 5, 3, 2));

/*ANSWER : LINE 52 CALLS THE FX AT LINE 50
            CURRY FX IS CALLED AT LINE 40 BY CARRIEDSUM FX
            HERE IN CURRY FX , FN HOLDS THE TOTAL NUBER OF PARAMETERS OR ARITY WHICH ARE a,b,c,d 
            IF THE NUMBER OF ARITY IS EQUAL TO NUMBER OF ARGUMENTTS PASSED 
            WE RETURN AN FX WITH ALL THOSE ARGUMNETS(1,5,3,2) BACK TO LINE 50 , 
            IN LINE 50 THEN THE SUM IS CARRIED OUT 

*/

//------------------------------------------------------------------------------

//CASE 4 :: ADVANCING THE ABOVE FN

const currying = function (fn) {
  var arities = fn.length;
  return (f1 = (...args) => {
    if (args.length >= arities) {
      console.log(`${arities} = ${args.length}`);
      return fn(...args);
    } else {
      console.log(`${arities} = ${args.length}`);
      return (...moreArgs) => {
        var allArgs = args.concat(moreArgs);
        return f1(...allArgs);
      };
    }
  });
};

const currymultiphy = currying((a, b, c, d) => a * b * c * d);

const partiallycurrymultiphy = currymultiphy(3, 4);
console.log(partiallycurrymultiphy(1, 2));

//ANSWER IN CURRYING FUNCTION THE EXCUTION DOESN NOT START AT LAST LINE !! IMPORTANT

/*  ON LINE 83 , THE CURRY MULTIPHY FUNCTION WILL CALL THE CURRYING FX AND IT WILL HOLD IN ITSELF THE ENTIRE F1 FUNCTION AND WAIT FOR ARGUMENTS TO COME 

THEN AT LINE 84 PARTUCALLYCURRYIUGMULTIPHY FX WILL CALL THE CURRYMULTPHY FX WITH TWO ARGUMENTTS AND HOLD WHATEVER IS PASSED TO IT AS THE RETURN FX

FINALLY THE LINE 86 WILL ONLY CALL THE FX AT LINE 85 WHICH IS HOLDING THE FX EXPERSIONS AND CARRY THE FUNATNALITY .. THIS IS POSSOBLT BECAUSE OF CURRYING

IMPORTANT ON LINE 71 WE HAVE RECURISVE FX
 */

//------------------------------------------------------------------------------

//CASE 5 :: BUT WHY DO WE NEED CURRY FX AND WHAT CAN CURRIED FX DO?

const curryfx = function (fn) {
  var arityies = fn.length;
  return (f1 = (...argument) => {
    if (argument.length >= arityies) {
      return fn(...argument);
    } else {
      return (...restOfargs) => {
        var newArgs = argument.concat(restOfargs);
        return f1(...newArgs);
      };
    }
  });
};
// const additon = curryfx((a, b) => a * b);
// const firstValue = additon(2);
// console.log(firstValue(2));

const get = curryfx((arr, inde) => arr[inde]);
const objectarity = get([3, 4, 5]);
console.log(objectarity(1));

const getobj = curryfx((obj, prop) => obj.prop);

const passingObj = getobj({ name: "harry", age: 56, place: "delhi" });
console.log(passingObj("place"));
//needs fixing




const menu = Object.freeze([
  {
    name: "apples",
    count: 50,
    price: 234,
  },
  {
    name: "oranges",
    count: 32,
    price: 212,
  },
  {
    name: "burgers",
    count: 20,
    price: 324,
  },
]);

const shopping = Object.freeze({
  oranges: false,

  colddrinks: true,

  chocolate: true,

  sugar: true,
});

const needMore = (state, limit, more) => {
  return limit[more]
    ? [...state, { name: more, count: 20, price: 321 }]
    : state;
};
//currying
const add =
  (a) =>
  (b) =>
  (...c) => {
    c.forEach((e) => (a = needMore(a, b, e)));
    return a;
  };

const add2 = add(menu)(shopping);
console.log(add2("colddrinks", "chocolate", "oranges")); //with currying
console.log(add2("sugar"));

//without currying-not ideal
let addss = menu;
for (let item in shopping) {
  addss = needMore(addss, shopping, item);
}

console.log(addss);

console.log(menu);

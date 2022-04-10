/*
NEWTOPIC 
1. Write a Fx which implement Range Functionality
range(1, 50)
1,2,3,4,,5...50
*/

//CASE 1 :  BASIC LEVEL RANGE FX

const range = function (start, end) {
  const rangeArr = [];

  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
};

console.log(range(-5, 15));

//CASE 2 ADVANCE LEVEL RANGE FX

const rangeAdv = function (start, end) {
  return [...Array(end).keys()].map((el) => el + start);
};
console.log(rangeAdv(1, 50));

//ANSWER: Array(50) is operator which creates an array of object with size 50.
//          with .keys() method we get all the keys assigned to those 50 elements
//.........[...Array(50).keys] we spread the keys inside an array , they start from 0 to 49
// ..... we map throgh this array and add 1 to eeach element

//IMPORTANT THIS RANGE METHOD IS ADAVNCE BECAUSE IT WORKS WITH LESS CODE AND CAN BUILD RANGE WHEN IF THE START AND END POINT ARE DIFFERNT , FOR EG RANGEADV(20, 5) HERE WE GET 20 21 22 23 . THUS IT IS MORE VERSATILE

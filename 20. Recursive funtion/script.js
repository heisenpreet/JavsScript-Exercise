/*
NEWTOPIC 
1. Write a recursive function add first n numbers of an array
2. Write a recursive function which returns an array with countdown to n
3. Write a recursive function which returns an array in a range of given two numbers
*/

//CASE 1

const sum = function (arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
};
console.log(sum([1, 2, 1], 2));

//CASE 2 . Write a recursive function which returns an array with countdown to n
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n); //CHANGING THE UNSHIFT TO PUSH WILL MAKE IT COUNTUP TO N AS PUSH ADDS ELEMENT AT BOTTOM AND UNSHIFT AT THE TOP
    return countArray;
  }
}
console.log(countdown(5));

//CASE 3. Write a recursive function which returns an array in a range of given two numbers

const RangeNum = function (start, end) {
  if (start - end === 0) {
    return [start];
  } else {
    const arr = RangeNum(start, end - 1);
    arr.push(end);
    return arr;
  }
};
console.log(RangeNum(3, 9));

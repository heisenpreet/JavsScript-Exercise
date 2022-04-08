/*
NEWTOPIC 
1. WRITE AN FX WHICH GETS AN ARRAY AND AN ELEMENT AND RETURNS AN ARRAY WITH THIS ARRAY AT THE END OF THE ARRAY 
*/

const arr = [1, 2, 3, 4];

const newArr = (arr, el) => {
  return [...arr, el];
};
console.log(newArr(arr, 5));

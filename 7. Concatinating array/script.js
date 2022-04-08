/*
NEWTOPIC 
1.WRITE AN FX TO CONCAT TWO OR MORE ARRAY
*/

const arrConcat = (...arr) => {
  return [...arr].flat();
};

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

console.log(arrConcat(arr1, arr2, arr3));
console.log(arr1);

//IMPORTANT PUSH OPERATION MUTATES THE ORIGINAL ARRAY , THUS USING THE SPREAD OR REST OPERATER IS BETTER APPORARDCH

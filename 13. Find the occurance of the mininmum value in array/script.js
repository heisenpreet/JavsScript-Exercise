/*
NEWTOPIC 
1. Find the occurance of the minimum value in the list

*/
const arr = [3, 4, 5, 7, 2, 6, 8, 4, 5, 7, 3, 6, 3, 6, 3, 78, 2, 2];

//CASE 1  USING THE BASIC METHOD
const minOccurance = function (arr) {
  let min = arr[0];
  let occ = 0;
  arr.forEach((element, key, ar) => {
    if (element < min) {
      min = element;
      occ = 0;
      console.log(element);
    }
    if (element === min) {
      occ++;
    }
  });
  console.log(occ);
};

minOccurance(arr);

//CASE 2            USING THE ADVANCE METHOD

const minOcc = (arr) => {
  const min = Math.min(...arr);
  const occ = arr.filter((el) => el === min);
  return occ.length;
};
console.log(minOcc(arr));

//ANSWER  We first find the minimum value using the math.min mth and has to use the spread operator to pass an array to this mth

//          then we loop over the array and filter out values equal to the minimum value found in the pervious step and store this filtered array into an new array

//          FINALLY WE RETURN THE LENGTH OF THE FILTERED ARRAY

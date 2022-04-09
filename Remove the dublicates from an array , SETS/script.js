/*
NEWTOPIC 
1.REMOVE ALL THE DUBLICATE ELEMENTS FROM AN ARRAY
*/

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const newArr = [...new Set(arr)];

console.log(arr);
console.log(newArr);

//ANSWER 1. FIRST COMVERT THE ARRAY INTO A SET
//          newArr= set(arr);
//      2. SECOND WE CONVERT THE SET INTO AN ARRAY WITH SPREAD OPERATOR
//          newArr=[...set(arr)];

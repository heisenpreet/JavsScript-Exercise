/*
NEWTOPIC 
1. Write a function to generate a random number between a given range 
*/

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - (min - 1)) + 1);

console.log(randomNum(1, 6));

// IMPORTANT math.floor works with negatrive values too unlike math.truce

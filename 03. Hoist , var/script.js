/*NEWTOPIC
A) What will be console.log here ?
*/

//CASE 1
console.log(foo);
foo = 1;

// ANSWER The output here will show an error and foo is not defeined

//CASE 2

console.log(foo1);
var foo1 = 1;

// ANSWER The output here will show undefined WHY? becoze js will interpret the code as its in case 3

//CASE 3

var foo2;
console.log(foo2);
foo2 = 1;

// ANSWER The output here will be undefined as well as we have used the variable before decalring an value for it

//CASE 3
foo3 = 1;
console.log(foo3);
var foo3;

// ANSWER The output here will be 3 as all var variables are defeined in the global scope

//CASE 4

var foo4;
foo4 = 4;
console.log(foo4); // IMPORTANT TO JS THERE IS NO DIFFERNECE BETWEEN CASE 3 AND CASE 4

// IMPORTANT ALL VAR VARIABLES ARE EXCEUTE AT THE TOP OF THE CODE , THIS IS CALLED HOISTING ,

//  THE SAME BEHAVIOR IS DONE BY Function KEYWORD

//CASE 5

foo5();
function foo5() {}

// ANSWER WE WILL NOT GET ANY ERROR FOR ABOVE CASE THE LINR 44 FX IS EXECUTED BEFORE THE LINE 43

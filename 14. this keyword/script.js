/*
NEWTOPIC 
1.What will be the output of CASE 1 ?
2. What will be the output of CASE 2 ?
3. output of CASE 3?
4. Output of CASE 4 and how to solve it?
*/

//CASE 1
function getItem() {
  console.log(this);
}
getItem();

//ANSWER: Here the this keyword will point to the global window object
//IMPORTANT THIS always points to the global window when used inside a function keyword

//CASE 2
const item = {
  title: "ball",

  getItem1() {
    console.log(this);
  },
};
item.getItem1();

//ANSWER: Here the this keyword will point to the object item{}

//CASE 3
class Item {
  title = "bat";
  getItem2() {
    console.log(this);
  }
}
const items = new Item();
items.getItem2();
//ANSWER: here the this keyword will point to the class Item through the instance

//CASE 4:

class Items {
  title = "rocks";
  getitems() {
    function someFx() {
      console.log(this);
    }
    someFx();
  }
}
const itemss = new Items();
itemss.getitems();
//ANSWER HERE THE LOG WILL OUTPUT UNDEFINED becasue this inside a funtion keyword points to global

//IMPORTANT: SOLUTION TO THIS IS USING ARROW FX

class Itemss {
  title = "frogs";
  getFrongs() {
    const someFx = () => {
      console.log(this);
    };
    someFx();
  }
}
const frogs = new Itemss();
frogs.getFrongs();

//ANSWER             1 SOME PROBLEM WITH THIS KEYWORD INSIDE A FUNCTION KEYWORD ARRISE WHEN WE SOME ANY METHOD LIKE MAP(), FILTER(), THUS USING ARROW FX IS A GOOD PRACTICE\\

//                    2 Inside function keyword we alwasys have refernce to global object

//                     3.Inside object we have reference to the object itself

//                      4 Inside classes we have reference to the instance of the class

//                      5. and inside a function keyword nested inside an funtion or object or class , this will point to undefined

/*
NEWTOPIC 
1.FIND METHOD ON AN ARRAY OF OBJECTS
*/

const accounts = [
  {
    id: 1,
    name: "Harry",
    place: "delhi",
    movements: [56, 645, 23143, 5234, 24, 626, 234, 0, 43],
    isActive: true,
  },
  {
    id: 2,
    name: "carry",
    place: "mumbai",
    movements: [56, 645, 23143, 5234, 24, 626, 234, 0, 43],
    isActive: true,
  },
  {
    id: 3,
    name: "marry",
    place: "assam",
    movements: [56, 645, 23143, 5234, 24, 626, 234, 0, 43],
    isActive: false,
  },
  {
    id: 4,
    name: "sherry",
    place: "pune",
    movements: [56, 645, 23143, 5234, 24, 626, 234, 0, 43],
    isActive: true,
  },
];
//CASE 1 FIND MTH
const findAcc = accounts.find((acc) => acc.name === "marry");

console.log(findAcc);

//IMPORTANT FIND MTH RETURNS THE FIRST ELEMENT WHICH SATISFY ITS CONDITION , UNLIKE FILTER METHOD WHICH RETURNS ALL THE ELEMENTS WHICH SATISFY THE CONDTION

//CASE 2 SOME MTH

const isNameExist = (arr, name) => arr.some((arr) => arr.name === name);

console.log(isNameExist(accounts, "sherry"));

//IMPORTANT Unlike find mth some method returns only a bollen value of true and false based on the condition passed

//CASE 3 find index mth

const isInTheArray = (arr, name) => arr.findIndex((el) => el.name === name);
console.log(isInTheArray(accounts, "marsry"));

//IMPORTANT findIndex will retune and negative value if the element is not found

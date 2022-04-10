/*
NEWTOPIC 
.
1. Write an fx to sort the array.
2. Sort arry of objects of author;s last name

*/

//CASE 1
const arr = [3, 42, 25, 62, 2, 1, 3, 2];

const sorted = (arr) => {
  arr.sort((a, b) => a - b);
};
sorted(arr);
console.log(arr);

//IMPORTANT sort mth mutates the original array

//CASE 2

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzzane Collins" },
];

books.forEach((book) => {
  console.log(book.name);
});

//after sorting

books.sort((book1, book2) => {
  const lastname1 = book1.author.split(" ")[1];
  const lastname2 = book2.author.split(" ")[1];

  return lastname1 < lastname2 ? -1 : 1;
});

books.forEach((books) => {
  console.log(books.name);
});

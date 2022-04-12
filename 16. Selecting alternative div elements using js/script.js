/*
NEWTOPIC 
1. Coloring all the even rows of the div pink and all odd rows red
*/
[...document.querySelectorAll(".heading")].forEach((row, key) => {
  if (key % 2 === 0) {
    row.style.backgroundColor = "pink";
  } else {
    row.style.backgroundColor = "red";
  }
});

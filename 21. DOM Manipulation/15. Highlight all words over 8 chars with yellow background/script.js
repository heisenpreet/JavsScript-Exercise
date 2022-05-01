/*
NEWTOPIC 
1. Highlight all words longer than 8 words with a yellow background color
*/
//CASE 1

const $paragraph = document.querySelector("p");

$paragraph.innerHTML = $paragraph.innerHTML
  .split(" ")
  .map((word) => {
    return word.length > 8
      ? `<span style="background-color:yellow;">${word}</span>`
      : word;
  })
  .join(" ");

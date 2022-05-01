/*
NEWTOPIC 
1. Split each new sentence into a new line in the paragarapg text. A sentance can be assumed to be a string seperated by a period(.)
*/
//CASE 1

const $paragarph = document.querySelector("p");
const p = $paragarph.innerText.split(".").join("<br>");
console.log(p);
$paragarph.innerHTML = $paragarph.innerText
  .split(/\.[^.|<]/gm)
  .join(".<br><br>");

//resource using regex from regexr.com

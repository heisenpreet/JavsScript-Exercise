/*
NEWTOPIC 
1. Append a anchor element with link www.google.com at the end of the paragraph
*/
//CASE 1

const link = document.createElement("a");
link.href = "www.google.com";
link.target = "_blank";
link.innerHTML = "link to google";
document.body.appendChild(link);

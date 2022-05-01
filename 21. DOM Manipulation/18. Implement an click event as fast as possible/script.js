/*
NEWTOPIC 
1.Add an click event on item of list element as fast as possible
*/
//CASE 1      using event deligation

document.querySelector(".todo-app").addEventListener("click", function (e) {
  if (e.target.classList.contains("items")) {
    console.log(e.target.innerText);
  }
});

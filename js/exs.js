//ex pp9
function unicorn() {
  let image = document.getElementById("unicorn");
  let heading = document.getElementById("mainheading");

  console.log(image);
  console.log(heading);
}

//ex pp12
function todos() {
  let doneTodos = document.querySelectorAll(".done");
  console.log(doneTodos);

  let checkbox = document.querySelector("input[type='checkbox']");
  console.log(checkbox);
}

//pp15
function changeTaste() {
  //seleccionar
  let mySpan = document.querySelector("span");
  
  if(mySpan.innerText == 'Yammi'){
    mySpan.innerText = 'Yack'
  }else{
    mySpan.innerText = 'Yammi'
  }

}

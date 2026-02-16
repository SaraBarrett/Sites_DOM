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

  if (mySpan.innerText == "Yammi") {
    mySpan.innerText = "Yack";
  } else {
    mySpan.innerText = "Yammi";
  }
}

//pp22
function changeStyle() {
  //seleccionar
  let myContainer = document.querySelector("#container");
  myContainer.style.textAlign = "center";

  let myImage = document.querySelector("img");
  myImage.style.width = "150px";
  myImage.style.borderRadius = "50%";
}

function makeRandom() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let mySpan = document.getElementsByTagName("span");
  let i = 0;
  for (let element of mySpan) {
    element.style.backgroundColor = colors[i];
    i++;
  }
}

//pp26
function changeOrder() {
  let myLis = document.querySelectorAll("li");

  for (let li of myLis) {
    if (li.classList.contains("highlight")) {
      li.classList.remove("highlight");
    } else {
      li.classList.add("highlight");
    }
  }
}

function calc() {
  //1. seleccionar nr1 (no elemento seleccionam o atributo value (.value))
  //2. seleccionar operação (no elemento seleccionam o atributo value (.value))
  //3. seleccionar nr2 (no elemento seleccionam o atributo value (.value))
  //4. criar uma variável total, e nessa variável usar os valores seleccionados para calcular
  //5. selecionar o span do total, e manipular o innerText para que no texto aparece o total do cálculo que efectuámos
}

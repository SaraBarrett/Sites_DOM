//elementos seleccionados
let eventsBtn = document.querySelector("#btn-events");
let eventsBtn2 = document.querySelector("#btn-events2");
let myAnimalsForm = document.querySelector("#zoo-animals");
let animalsList = document.querySelector("#animals-list");
let myShoppingForm = document.querySelector("#myShoppingList");
let myShoppingItems = document.querySelector("#shopping-items");
let myLoginBtn = document.querySelector("#login-btn");

//funções que queremos reutilizar

function hello() {
  this.style.backgroundColor = "green";
  alert("hello");
}

function goodbye() {
  alert("goodbye");
}

//eventos
eventsBtn.addEventListener("mouseover", hello);
//eventsBtn.addEventListener('mouseover', goodbye);
eventsBtn2.addEventListener("click", hello);

window.addEventListener("keydown", function (event) {
  //event -> mais info sobre o evento activado
  //event.key -> tecla onde cliquei
  if (event.key == "m") {
    this.alert("tecla clickada");
  }
});

myAnimalsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let myFormData = new FormData(this);
  let animal = myFormData.get("animal");

  //criar elemento na lista
  let myLi = document.createElement("li");
  myLi.innerText = animal;

  //anexá-lo à lista
  animalsList.appendChild(myLi);

  this.reset();
});

myShoppingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let myFormData = new FormData(this);
  let product = myFormData.get("product");
  let qt = myFormData.get("qt");

  let myLi = document.createElement("li");
  myLi.innerText = qt + "-" + product;
  myShoppingItems.appendChild(myLi);

  this.reset();
});

myLoginBtn.addEventListener("click", function () {

  //getItem -> verifica se tem no localStorage um user
  if (localStorage.getItem("user")) {
    alert("olá " + localStorage.getItem("user"));
  } else {
    let userName = prompt("qual é o teu nome?");

    //armazena um novo item no localStorage
    localStorage.setItem("user", userName);
  }
});

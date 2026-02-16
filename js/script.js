function selectors() {
  //alert('olá selectores!');

  //selector pelo id
  let myImage = document.getElementById("banner");
  console.log(myImage);

  //selector pela tag
  let h1 = document.getElementsByTagName("h1");
  console.log(h1[0]);

  //seleccionar com o query selector
  let myH1Wqueryselector = document.querySelector("h1");
  console.log(myH1Wqueryselector);

  //selector pela class
  let div = document.getElementsByClassName("toctitle");
  console.log(div[0]);

  //selector query selector com class
  let myDivQuerySelector = document.querySelector(".toctitle");
  console.log(myDivQuerySelector);
}

function translateLang() {
  //seleccionar
  let myH1 = document.querySelector("h1");

  //manipular o texto: propriedade innerText ou textContent
  if (myH1.innerText == "Galinhas Sedosas") {
    myH1.innerText = "Silkie Chickens";
    myH1.style.backgroundColor = "white";
  } else {
    myH1.innerText = "Galinhas Sedosas";
    myH1.style.backgroundColor = "green";
  }
}

//manipular atributos
function changeImage() {
  //seleccionar imagem
  let myImage = document.getElementById("banner");

  //manipular o atributo src da imagem

  if (
    myImage.src ==
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
  ) {
    myImage.src =
      "https://elearning.cesae.pt/pluginfile.php/1/core_admin/logo/0x150/1674568226/Cesae.Full.png";
  } else {
    myImage.src =
      "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
  }
}

function changeLis() {
  //seleccionar
  let myLis = document.querySelectorAll(".toclevel-1");

  //manipular
  for (let element of myLis) {
    element.style.backgroundColor = "violet";
  }
}

//modo nocturno /dia usando o classlist
function changeMode() {
  let myPage = document.querySelector("body");

  
  if (myPage.classList.contains("day")) {
    //remover a class
    myPage.classList.remove("day");
    //adicionar a class
    myPage.classList.add("night");
  } else {
    //remover a class
    myPage.classList.remove("night");
    //adicionar a class
    myPage.classList.add("day");
  }
}


//criar elementos
function loginButton(){
  //criar elemento
  let myP =document.createElement('p');

  //dar texto ao elemento criado
  myP.innerText = 'olá Pessoa logada!';


 //indicar onde o novo elemento se vai posicionar (de quem é filho)
 let myParent = document.getElementById('login-message');

 myParent.appendChild(myP);

}
function selectors(){
    //alert('olá selectores!');

    //selector pelo id
    let myImage = document.getElementById('banner');
    console.log(myImage);

    //selector pela tag
    let h1 = document.getElementsByTagName('h1');
    console.log(h1[0]);

    //seleccionar com o query selector
    let myH1Wqueryselector = document.querySelector('h1');
    console.log(myH1Wqueryselector);

    //selector pela class
    let div = document.getElementsByClassName('toctitle');
    console.log(div[0])

    //selector query selector com class
    let myDivQuerySelector = document.querySelector('.toctitle');
    console.log(myDivQuerySelector);


}
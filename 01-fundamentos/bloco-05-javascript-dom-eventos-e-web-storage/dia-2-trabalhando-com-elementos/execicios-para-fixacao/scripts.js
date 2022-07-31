const body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
//Exercicio 1
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1)
//Exercicio 2
let tag = document.createElement('main');
tag.classList.add('main-content');
body.appendChild(tag);
const body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
//Exercicio 1
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1)
//Exercicio 2
let main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main);
//Exercicio 3
let section = document.createElement('section');
section.classList.add('center-content');
main.appendChild(section);
//Exercicio 4
let p = document.createElement('p');
p.innerText = 'Algum texto';
section.appendChild(p);

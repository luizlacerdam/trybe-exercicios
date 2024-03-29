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
//Exercicio 5
let sectionLeft = document.createElement('section');
sectionLeft.classList.add('left-content');
main.appendChild(sectionLeft);
//Exercicio 6
let sectionRight = document.createElement('section');
sectionRight.classList.add('right-content');
main.appendChild(sectionRight);
//Exercicio 7
let imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.classList.add('small-image');
sectionLeft.appendChild(imagem);
//Exercicio 8
let lista = document.createElement('ul');
sectionRight.appendChild(lista);

for (let index = 1; index <= 10; index++) {
    let itemLista = document.createElement('li');
    itemLista.innerText = index;
    lista.appendChild(itemLista);
}
//Exercicio 9
for (let index = 0; index < 3; index++) {
    let h3 = document.createElement('h3');
    h3.innerText = 'Tag ' + index;
    main.appendChild(h3); 
}
//Exercicio 10
h1.classList.add("title");
//Exercicio 11
const tags = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
    tags[i].classList.add('description');
}
//Exercicio 12
const mainPai = document.getElementsByClassName('main-content')[0];
const sectionEsquerda = document.getElementsByClassName('left-content')[0];
mainPai.removeChild(sectionEsquerda);
//Exercicio 13
sectionDireita = document.getElementsByClassName('right-content')[0];
sectionDireita.style.marginRight = 'auto';
//Exercicio 14
const sectionCenter = document.getElementsByClassName('center-content')[0];
sectionCenter.parentElement.style.backgroundColor = 'green';
//Exercicio 15
const uls = document.getElementsByTagName('ul')[0];
for (let i = 0; i < 2; i++) {
    uls.removeChild(uls.lastElementChild);
}

//Exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem Vinda, ' + info.personagem + '.');

//Exercicio 2
info.recorrente = 'Sim';

console.log(info.recorrente);

//Exercicio 3
for (const key in info) {
    console.log(key);
}
const valorCusto = 100;
const valorVenda = 200;
let imposto = 1.2;

if (valorCusto < 0 || valorVenda < 0) {
    return console.log('Custo ou venda negativos.');
}

let valorCustoTotal = valorCusto * imposto;
let lucro = valorVenda - valorCustoTotal;

console.log(lucro);
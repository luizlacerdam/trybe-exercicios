// requisito 1
function factorial(n) {
  let num = [];
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    num.push(i)
  }
  for (let h = 0; h < num.length; h += 1) {
    result *= num[h];
  }
  return `Esse é o fatorial ${result}.`;
}
console.log(factorial(5));

// requisito 2
function longestWord(string) {
  let palavras = string.split(' ');
  let maiorPalavra;
  for (let i = 0; i < palavras.length; i += 1) {
    if (i == 0) {
      maiorPalavra = palavras[i];
    } else {
      if (palavras[i].length > maiorPalavra.length) {
        maiorPalavra = palavras[i]
      }
    }

  }
  return maiorPalavra;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// requisito 3

const BTN_CLICK = document.getElementById('btn-click');
const CLICKS = document.getElementById('clicks');
let clickCount = 0;

function clicks() {
  BTN_CLICK.addEventListener('click', () => {
    clickCount += 1;
    CLICKS.innerText = clickCount;
  });
}
clicks();

// requisito 4
// função 1

function substituaX(nome) {
  const frase = 'Tryber x aqui!';
  let palavras = frase.split(' ');
  palavras[1] = nome;

  return palavras.join(' ');
}

// função 2

function minhasSkills(retorno) {
  const skill = ['HTML', 'JS', 'CSS'];

  return `${retorno}\nMinhas três principais habilidades são:\n- ${skill[0]}\n- ${skill[1]}\n- ${skill[2]}
  `;
}
console.log(minhasSkills(substituaX('Bebeto')));
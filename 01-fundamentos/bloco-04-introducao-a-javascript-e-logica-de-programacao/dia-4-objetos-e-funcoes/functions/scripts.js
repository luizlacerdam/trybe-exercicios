//Exercicio 1
function isPalindromo (string) {
    let palindromo = false;

    for (let i = 0; i < (string.length - 1) / 2; i += 1) {
        if (string[i] == string[string.length - i - 1]) {
            palindromo = true;
        } else {
            palindromo = false;
        }
    }
    return palindromo;
}

console.log(isPalindromo('reger'));
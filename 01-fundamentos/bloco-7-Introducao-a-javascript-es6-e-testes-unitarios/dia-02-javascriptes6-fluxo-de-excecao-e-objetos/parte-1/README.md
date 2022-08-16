1. Crie erros personalizados.
- Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
- Utilize o throw new Error e o bloco try/catch.
- Evite funções que tenham muitas responsabilidades distintas.
- Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.
- Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Para isso você pode utilizar a função isNan().
- Adicione o texto do erro no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
- Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.
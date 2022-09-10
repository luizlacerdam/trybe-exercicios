## Callback
1. Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
- A função getUser, ao ser chamada com o parâmetro userFullName, deve retornar: "Olá! Meu nome é Ivan Ivanovich"
- A função getUser, ao ser chamada com o parâmetro userNationality, deve retornar: "Ivan é Russo"
2. No código acima você tem a função getUser modificada, que agora funciona de modo assíncrono. Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
- A função getUser, ao ser chamada com o parâmetro userFullName, deve imprimir na tela: "Olá! Meu nome é Ivan Ivanovich"
- A função getUser, ao ser chamada com o parâmetro userNationality, deve imprimir na tela: "Ivan é Russo"
- Obs.: Analise o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality). Há momentos em que o nome da pessoa é impresso primeiro e outros em que a nacionalidade da pessoa é impressa primeiro!

## Lidando com erros em operações assíncronas
1. A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado. Com base nisso, você deve realizar as seguintes ações:
- Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry;
- Retorne essa callback na função getCountry, de forma que trate a mensagem de erro.
1. A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos.
4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:
- A função sendMarsTemperature imprima no console o seguinte texto: "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e
- A mensagem deve ser impressa no console depois de no máximo 5 segundos.
5. Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações. No código abaixo, temos as funções temperatureInFahrenheit e greet. Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:
- A função sendMarsTemperature receba uma callback;
- A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.
6. Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.
7. Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokemon!
- No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle.
- Complete a função handlePokemonSearch de modo que:
-  Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.
-  Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.
8. Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.
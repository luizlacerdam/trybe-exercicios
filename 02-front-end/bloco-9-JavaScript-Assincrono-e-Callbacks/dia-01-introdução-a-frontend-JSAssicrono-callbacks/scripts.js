// exercicio 1
// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };
//   console.log('Returned planet: ', mars);
// };
// // Imprime Marte depois de 4 segundos
// setTimeout(getPlanet, 4000)

// exercicio 2
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// function sendMarsTemperature(temperaturaAtual) {
//   return temperaturaAtual;
// }
// setTimeout(() => console.log('A temperatuda de Marte é ' + sendMarsTemperature(getMarsTemperature()) + ' graus celsius'), messageDelay());
// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// exercicio 3
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// // Definição da função sendMarsTemperature...
// function sendMarsTemperature(callback) {
//   const currentTemperature = getMarsTemperature();
//   setTimeout(() => callback(currentTemperature), messageDelay());
// } 
// sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

// exercicio 4
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (onSuccess, onError) => {
//   const currentTemperature = getMarsTemperature();
//   const messageSuccessfullySent = Math.random() <= 0.6;
//   setTimeout(() => {
//       if(messageSuccessfullySent) onSuccess(currentTemperature)
//       else onError('Robot is busy');
//   }, messageDelay());
// }
// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// exercicio 5
// const pokemons = [
//   {
//     name: 'Bulbasaur',
//     type: 'Grama',
//     ability: 'Raio Solar',
//   },
//   {
//     name: 'Charmander',
//     type: 'Fogo',
//     ability: 'Lança Chamas',
//   },
//   {
//     name: 'Squirtle',
//     type: 'Água',
//     ability: 'Jato de Água',
//   },
// ];

// function getPokemonDetails(selectedPokemon, callback) {
//   const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

//   setTimeout(() => {
//     if (foundPokemon === undefined) {
//       return callback(new Error('Não temos esse pokémon para você :('), null);
//     }

//     const { name, type, ability } = foundPokemon;

//     const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// }

// const handlePokemonSearch = (error, message) => {
//   // Implemente a callback de tratamento de erro
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(message);
//   }
// };

// getPokemonDetails('Squirtle' , handlePokemonSearch);

// exercicio 6
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
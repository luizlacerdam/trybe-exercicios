# Exercício de fixação
1. Crie um novo projeto utilizando o comando npx create-react-app nome-app. Substitua o nome-app pelo que você desejar para seu app.

2. Na pasta src, acesse App.js e altere todo o conteúdo do arquivo, de modo que ele fique assim:

```import React from 'react';
class App extends React.Component {
  render() {
    return ();
  }
}
export default App;
```
3. Na pasta src, crie um arquivo chamado About.js. Em seguida, acesse o arquivo About.js e crie um componente que retorne um <h1> com o seu nome e um parágrafo <p> que contenha uma breve descrição sobre você.

4. Agora, vamos criar uma lista das habilidades que você já aprendeu no curso dentro do componente About.
- Adicione um <h2> com o título “Minhas Habilidades”
- Adicione uma lista não ordenada com suas habilidades.

5. Importe seu componente em App.js, de modo que ele seja renderizado na tela quando a aplicação for iniciada.

6. Execute sua aplicação com o comando npm start e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício, você terá feito o seu primeiro componente React de classe. Parabéns!
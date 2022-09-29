# Exercício 1
1. Crie uma aplicação que renderiza os dados de uma pessoa aleatória, que são obtidos por meio do retorno de uma API.

- A API utilizada será a randomuser no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results.

- Lembre-se que o seu componente deve fazer a requisição para a API por meio do método componentDidMount.

- Enquanto os dados não são entregues, uma div deve ser renderizada com o conteúdo Carregando…

- Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.

- Caso a idade do usuário seja maior que 50, o componente não deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.

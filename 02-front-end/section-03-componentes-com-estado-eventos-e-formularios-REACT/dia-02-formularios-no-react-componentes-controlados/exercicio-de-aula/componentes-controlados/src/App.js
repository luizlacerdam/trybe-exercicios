import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      nome: '',
    }
  }
  handleChange = (event) => {
    this.setState({
      nome: event.target.value,
    });
  }
  render() {
    return (
      <form>
        <label>
          Qual seu nome??
          <input name='nome' type="text" value={ this.state.nome } onChange={ this.handleChange }/>
        </label>
        <label>
          Deseja compartilha seu nome?
          <input name='anonimo' type="checkbox" />
        </label>
        <label>
          <select name="acomodacao" id="">
            <option value="apartamento">Apartamento</option>
            <option value="chale">Chale</option>
            <option value="bangalo">Bangalo</option>
          </select>
        </label>
        <label>
          Escreva seu comentario:
          <textarea name="comentario" id="" cols="30" rows="10"></textarea>
        </label>
      </form>
    );
  }
}
export default App;

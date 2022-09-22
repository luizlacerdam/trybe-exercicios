import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.greeting = this.greeting.bind(this);
    this.state = {
      Hi: 0,
      Hello: 0,
      Howdy: 0,
    };
  }
  
  greeting(event) {
    const nomeBotao = event.target.innerText;
    this.setState((estadoAnterior) => ({
      [nomeBotao]: estadoAnterior[nomeBotao] + 1,
    }));
    console.log(event.target.innerText)
  }
  render() {
    return (
    <div className="App">
      <p>
        <button onClick={ this.greeting }>Hi</button>
        <span> { this.state.Hi }</span>
      </p>
      <p>
        <button onClick={ this.greeting }>Hello</button>
        <span> { this.state.Hello }</span>
      </p>
      <p>
        <button onClick={ this.greeting }>Howdy</button>
        <span> { this.state.Howdy }</span>
      </p>
    </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Hi: 0,
      Hello: 0,
      Howdy: 0,
    };
  }
  countClick(event) {
    const nomeBotao = event.target.innerText;
    this.setState((estadoAnterior) => (
    {
      [nomeBotao]: estadoAnterior[nomeBotao] + 1,
    }
    ));
    console.log()
  }

  changeColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  greeting = (event) => {
    this.countClick(event);
    console.log(event.target.innerText)
  }
  render() {
    const { Hi, Hello, Howdy } = this.state;
    return (
    <div className="App">
      <p>
        <button onClick={ this.greeting } style={ { backgroundColor: this.changeColor(Hi) } }>Hi</button>
        <span> { this.state.Hi }</span>
      </p>
      <p>
        <button onClick={ this.greeting } style={ { backgroundColor: this.changeColor(Hello) } }>Hello</button>
        <span> { this.state.Hello }</span>
      </p>
      <p>
        <button onClick={ this.greeting } style={ { backgroundColor: this.changeColor(Howdy) }  }>Howdy</button>
        <span> { this.state.Howdy }</span>
      </p>
    </div>
    );
  }
}

export default App;

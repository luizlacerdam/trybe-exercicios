import React from 'react';
import './App.css';

function greeting(event) {
  console.log(event.target.innerText)
}

class App extends React.Component {
  render() {
    return (

    <div className="App">
      <p><button onClick={greeting}>Hi!</button></p>
      <p><button onClick={greeting}>Hello!</button></p>
      <p><button onClick={greeting}>Howdy!</button></p>
    </div>
    );
  }
}

export default App;

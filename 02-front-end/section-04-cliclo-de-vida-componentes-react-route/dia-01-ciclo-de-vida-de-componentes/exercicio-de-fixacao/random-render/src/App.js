import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      storage: [],
    }
  }
  fetchPerson = async () => {
    const URL = 'https://api.randomuser.me/';
    const request = await fetch(URL);
    const result = await request.json();
    this.setState(() => ({
      storage: [result],
    }));
  }

  componentDidMount() {
    this.fetchPerson();
  }

  render() {
    const { storage } = this.state;
    console.log(storage);
    return (
      <>
      <h1>RANDOM PERSON</h1>
      
      </>
    );
  }
}

export default App;

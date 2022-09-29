import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      storage: [],
      load: false,
    }
  }
  fetchPerson = async () => {
    const URL = 'https://api.randomuser.me/';
    const request = await fetch(URL);
    const result = await request.json();
    this.setState(() => ({
      storage: [result],
      load: true,
    }));
  }

  componentDidMount() {
    this.fetchPerson();
  }

  render() {
    const { storage, load } = this.state;
    return (
      <>
        
      </>
    );
  }
}

export default App;

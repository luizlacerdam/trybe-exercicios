import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <switch>
        <Route path="/users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning"/> } />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </switch>
      <Link to="/">Home</ Link>
      <Link to="/about">About</ Link>
      <Link to="/users" >Users</ Link>
      </BrowserRouter>
    );
  }
}

export default App;

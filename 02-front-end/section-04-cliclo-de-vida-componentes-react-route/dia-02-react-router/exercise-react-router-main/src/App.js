import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import StrictAcess from './components/StrictAcess';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning"/> } />
        <Route path="/about" component={About} />
        <Route path="/strict-access" 
        render={ () => (
          <StrictAcess user={ { username: 'joao', password: '1234' } } />
          )} 
        />
        <Route exact path="/" component={Home} />
      </Switch>
      <Link to="/">Home</ Link>
      <Link to="/about">About</ Link>
      <Link to="/users" >Users</ Link>
      <Link to="/strict-access" >Strict Access</ Link>
      </BrowserRouter>
    );
  }
}

export default App;

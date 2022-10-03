import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;
    if (!(username === 'joao' && password === '123')) {
      window.alert('Access denied')
      return <Redirect to="/" />
    }
    return (
      <div>
        <p>Welcome { username }</p>
      </div>
    );
  }
}

export default StrictAcess;

import './App.css';
import React from 'react';
import { fetchGot } from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    search: '',
  }
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchGot('Jon Snow'))

  }
  render() {
    const { name, dispatch } = this.props
    
    return (
    <div className="App">

      <label htmlFor="search-field">
        <input id="search-field" type="text" />
      </label>
      <button onClick={() => {}} type='button'>Procurar</button>
      <p>{name}</p>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  name: state.data.name,
})

export default connect(mapStateToProps)(App);

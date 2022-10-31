import './App.css';
import React from 'react';
import { fetchGot } from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    searchInput: '',
  }
  componentDidMount() {
    // const { dispatch } = this.props;

    // dispatch(fetchGot('Jon Snow'))

  }

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      searchInput: value,
    })
  }
  render() {
    const { name, dispatch, culture, isLoading } = this.props
    const {searchInput} = this.state;
    return (
    <div className="App">

      <label htmlFor="search-field">
        <input id="search-field" type="text" onChange={ this.handleInput } value={searchInput}/>
      </label>
      <button onClick={() => dispatch(fetchGot(searchInput))} type='button'>Procurar</button>
      {isLoading ? <p>Loading...</p> : (
      <div>
        <p>{name}</p>
        <p>{culture}</p>
      </div>)
      }
    </div>
  )}
}

const mapStateToProps = (state) => ({
  name: state.data.name,
  culture: state.data.culture,
})

export default connect(mapStateToProps)(App);

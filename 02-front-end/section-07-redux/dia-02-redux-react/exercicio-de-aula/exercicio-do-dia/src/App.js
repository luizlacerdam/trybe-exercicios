import { connect } from 'react-redux';
import { actionCreator } from './actions';
import './App.css';


function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>{countState}</h2>
     <button onClick={ () => dispatch(actionCreator(1)) }>Increment 1</button>
     <button onClick={ () => dispatch(actionCreator(5)) }>Increment 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ countState: state.count })

export default connect(mapStateToProps)(App);

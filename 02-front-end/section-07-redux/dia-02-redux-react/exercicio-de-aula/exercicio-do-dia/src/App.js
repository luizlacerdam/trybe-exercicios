import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const { countState } = props;
  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>{countState}</h2>
     <button>Increment</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ countState: state.count })

export default connect(mapStateToProps)(App);

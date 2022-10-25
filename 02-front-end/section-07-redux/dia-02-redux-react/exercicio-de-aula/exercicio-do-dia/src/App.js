import React from 'react';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
    const { dispatch, countState, clicksCount } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    };

    return (
      <div>
        <h1>Counter</h1>
        <h2>{countState}</h2>
        <button onClick={() => dispatchAll()}>Increment 1</button>
        <button onClick={() => dispatchAll(5)}>Increment 5</button>
        <h3>Click's count: {clicksCount}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCount: state.clicks,
});

export default connect(mapStateToProps)(App);

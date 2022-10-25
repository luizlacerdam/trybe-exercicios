const INIT_STATE = { count: 0 };

const counterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { count: state.count + action.payload };
  
    default:
      return state;
  }
};

export default counterReducer;
const INIT_STATE = { count: 0 };

const counterReducer = (state = INIT_STATE, action) => {
  switch (action.typ) {
    case 'INCREMENT_COUNTER':
      return { count: state.count + 1};
  
    default:
      return state;
  }
};

export default counterReducer;
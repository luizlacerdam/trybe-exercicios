const INIT_STATE = {
    data: {name: '',
    culture: '',
    born: '',
    titles:[''],
    },
    isLoading: false,
    error: '',
}

function gotReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case 'REQUEST_DATA':
            return {...state, isLoading: true};
        case 'GET_DATA':
            return {...state, data: action.payload, isLoading: false};
        case 'FAILED_REQUEST':
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
} 

export default gotReducer;
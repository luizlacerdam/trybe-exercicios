const GET_DATA = 'GET_DATA';
const REQUEST_DATA = 'REQUEST_DATA';
const FAILED_REQUEST = 'FAILED_REQUEST';

function requestData() {
    return {type: REQUEST_DATA}
}

function getData(json) {
    return {
        type: GET_DATA, 
        payload: json[0],
    }
}

function failedRequest(error) {
    return { 
      type: FAILED_REQUEST, 
      payload: error,
    };
}

export function fetchGot(name) {
    return (dispatch) => {
        dispatch(requestData());
        return fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
        .then((response) => response.json())
        .then((json) => dispatch(getData(json)))
        .catch((error) => dispatch(failedRequest(error)))
    }
}
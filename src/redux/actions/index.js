// Coloque aqui suas actions
const formuser = 'FORMSUSER';
const newAction = (state) => ({ type: formuser, state });

const getCurrance = 'currance';
const REQUEST_CURRANCE = 'REQUEST_CURRANCE';
const FAILED_REQUEST = 'FAILED_REQUEST';

const Getgasto = 'gasto';

const remover = 'remove';

function getcurrance(json) {
  return { type: getCurrance, state: json };
}

function requestcRURRANCE() {
  return { type: REQUEST_CURRANCE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, state: error };
}

export function getCUYrrance(payload) {
  return { type: Getgasto, payload };
}

export function fetchCurrance() {
  return (dispatch) => {
    dispatch(requestcRURRANCE());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getcurrance(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}

export function fetchCURrance3(payload) {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    payload.exchangeRates = data;
    dispatch(getCUYrrance(payload));
  };
}

export function remov(state) {
  return { type: remover, state };
}
export default newAction;

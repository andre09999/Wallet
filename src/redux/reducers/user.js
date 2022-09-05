const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FORMSUSER':
    return {
      ...state,
      email: action.state.email,
    };
  default:
    return state;
  }
}

if (window.Cypress) {
  window.user = user;
}
export default user;

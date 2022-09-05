// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE1 = {
  currencies: '',
  expenses: [],
};

function wallet(state = INITIAL_STATE1, action) {
  switch (action.type) {
  case 'currance':
    return {
      ...state,
      loading: action.state,
      currencies: Object.keys(action.state).filter((key) => (key !== 'USDT')),
    };
  case 'gasto':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],

    };
  case 'remove':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.state),
    };
  default:
    return state;
  }
}

if (window.Cypress) {
  window.wallet = wallet;
}

export default wallet;

import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ user, wallet });

if (window.Cypress) {
  window.rootReducer = rootReducer;
}

export default rootReducer;

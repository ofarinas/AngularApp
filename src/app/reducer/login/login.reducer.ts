import {UserAction} from "../../model/UserAction";
import {AppState} from "../../model/appState";
import {Debt} from "../../model/Debt";


function validateLogin(state: AppState) {
  if (state.user.email === 'adminSamay' && state.user.password === 'adminSamay') {
    return true;
  }
  return localStorage.getItem(state.user.email) === state.user.password;
}

export function login(state: AppState, action: UserAction) {
  console.log('state', state);
  console.log('action', action);
  state.user = action.payload.user;
  state.login = validateLogin(state);
  if (state.login) {
    state.debts = getDebts();
    action.payload.router.navigate(['task']);
  }
  return state
}

function getDebts() {
  return !!JSON.parse(localStorage.getItem('debts')) ? JSON.parse(localStorage.getItem('debts')) : [];
}

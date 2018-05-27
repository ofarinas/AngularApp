import {UserAction} from "../model/UserAction";
import {AppState} from "../model/appState";


function validateLogin(state: AppState) {
  if (state.user.email === 'adminSamay' && state.user.password === 'adminSamay') { return true; }
    return localStorage.getItem(state.user.email) === state.user.password;
 }

export function login(state: AppState, action: UserAction) {
  console.log('state', state);
  console.log('action', action);
  state.user = action.payload.user;
  state.login = validateLogin(state);
  if (state.login) {
    action.payload.router.navigate(['task']);
  }
  return state
}

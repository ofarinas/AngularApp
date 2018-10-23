import {UserAction} from "../../model/UserAction";
import {AppState} from "../../model/appState";

export function login(state: AppState, action: UserAction) {
  console.log('state', state);
  console.log('action', action);
  state.login = action.payload;
  if (state.login) {
    state.persons = getPersons();
    action.payload.router.navigate(['task']);
  }
  return state
}

function getPersons() {
  return !!JSON.parse(localStorage.getItem('persons')) ? JSON.parse(localStorage.getItem('persons')) : [];
}

// counter.ts
import {AppState} from "../model/appState";
import {UserAction} from "../model/UserAction";
import {login} from "./login/login.reducer";
import {addPerson} from "./addPerson/addPerson";

export const LOGIN = 'LOGIN';
export const ADD_PERSON = 'ADD_PERSON';
export const initialState: AppState = new AppState();

export function reducer(state = initialState, action: UserAction) {
 // log(state, action);
  switch (action.type) {
    case LOGIN:
      return login(state, action);
    case ADD_PERSON:
      return addPerson(state, action);
    default:
      return state;
  }
}

function log(state, action) {
  log('action:', action);
  log('state', state);
}

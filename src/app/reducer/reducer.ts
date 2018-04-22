// counter.ts
import {AppState} from "../model/appState";
import {UserAction} from "../model/UserAction";
import {User} from "../model/login";

export const LOGIN = 'LOGIN';
export const initialState: AppState = new AppState();

export function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN:
      return login(state, action);
    default:
      return state;
  }
}

function login(state: AppState, action: UserAction) {
  console.log('state', state);
  console.log('action', action);
  state.user = new User();
  state.user = action.payload;
  state.user.login = true;
  return state
}

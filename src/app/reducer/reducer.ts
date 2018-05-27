// counter.ts
import {AppState} from "../model/appState";
import {UserAction} from "../model/UserAction";
import {User} from "../model/login";
import {login} from "./login.reducer";

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

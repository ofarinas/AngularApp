import {UserAction} from "../../model/UserAction";
import {AppState} from "../../model/appState";

export function login(state: AppState, action: UserAction) {
  console.log('action', action);
  state.login = action.payload;
  return state
}

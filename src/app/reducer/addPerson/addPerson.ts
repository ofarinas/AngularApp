import {AppState} from "../../model/appState";
import {UserAction} from "../../model/UserAction";

export function addPerson(state: AppState, userAction: UserAction) {
  console.log(userAction);
  console.log(state.persons);
  console.log('debt', userAction.payload);
  state.persons.push(userAction.payload);
  console.log(state);
  return state;
}

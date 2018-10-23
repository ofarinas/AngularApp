import {AppState} from "../../model/appState";
import {UserAction} from "../../model/UserAction";
import {http} from "../../service/httpServiceInjector";

export async function addPerson(state: AppState, userAction: UserAction) {
  console.log(userAction);
  state = await state;
  console.log('person', userAction.payload);
  const response = await appPerson(userAction.payload);
  console.log('response', response);
  if (!response) console.log('it was an error to add a person');
  state.persons.push(userAction.payload);
  console.log(state);
  return state;
}

async function appPerson(person) {
  return await <any>http.post('http://localhost:3000/addPerson', <any>person).toPromise();
}

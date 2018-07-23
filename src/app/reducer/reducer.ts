// counter.ts
import {AppState} from "../model/appState";
import {UserAction} from "../model/UserAction";
import {login} from "./login/login.reducer";
import {addPerson} from "./addPerson/addPerson";

export const LOGIN = 'LOGIN';
export const ADD_PERSON = 'ADD_PERSON';
export const SET_INDEX = 'SET_INDEX';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';
export const initialState: AppState = new AppState();


export function reducer(state = initialState, action: UserAction) {
  // log(state, action);
  switch (action.type) {
    case LOGIN:
      return login(state, action);
    case ADD_PERSON:
      return addPerson(state, action);
    case SET_INDEX:
      return setIndex(state, action);
    case REMOVE_PERSON:
      return removePerson(state, action);
    case EDIT_PERSON:
      return editPerson(state, action);
    default:
      return state;
  }
}

function log(state, action) {
  log('action:', action);
  log('state', state);
}

function editPerson(state, action) {
  state.persons[action.payload.index] = action.payload.person;
  state.index = null;
  return state;
}

function setIndex(state: AppState, action: UserAction) {
  console.log('index', action.payload);
  state.index = action.payload;
  return state;
}


function removePerson(state: AppState, action: UserAction) {
  console.log('index', action.payload);
  state.persons.splice(action.payload, 1);
  state.index = null;
  return state;
}

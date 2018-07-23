import {User} from "./login";
import {Person} from "./Person";

export class AppState {
  login: boolean;
  user: User;
  persons: Person[] = [];
  index: number
}

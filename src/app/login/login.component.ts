import {User} from "../model/login";
import {Store} from "@ngrx/store";
import {AppState} from "../model/appState";
import {Component} from "@angular/core";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;

  constructor(private store: Store<AppState>) {
    this.user = new User();
  }

  login() {
    console.log('hallo');
    this.store.dispatch({type: "LOGIN", payload: this.user})
  }

}

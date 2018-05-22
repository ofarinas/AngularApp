import {User} from "../model/login";
import {Store} from "@ngrx/store";
import {AppState} from "../model/appState";
import {Component} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;

  constructor(private store: Store<AppState>, private router: Router) {
    this.user = new User();
  }

  login() {
    console.log('hallo');
    this.store.dispatch({type: "LOGIN", payload: {user: this.user, router: this.router}});
  }

}

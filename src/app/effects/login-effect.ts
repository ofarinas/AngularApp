import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';
import {LOGIN, LOGIN_SUCCESSFUL} from '../reducer/reducer';
import {Router} from '@angular/router';
import {UserAction} from '../model/UserAction';

@Injectable()
export class LoginEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(LOGIN),
    mergeMap((action: any) =>
      this.http.post('http://localhost:3000/login', action.payload.user)
        .pipe(
          tap(data => this.routeToTask(data)),
          map(data => (<UserAction>{type: LOGIN_SUCCESSFUL, payload: data})),
          catchError(() => of({type: 'LOGIN_FAILED'}))
        )
    )
  );

  private routeToTask(data) {
    if (data) this.router.navigate(['task'])
  }

  constructor(private http: HttpClient, private actions$: Actions, public router: Router) {
  }
}

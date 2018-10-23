import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType('TEST_TYPE'),
    mergeMap((action: any) =>
      this.http.get('http://localhost:3000/login', action.payload)
        .pipe(tap(data => console.log(data)),
          map(data => ({type: 'LOGIN_SUCCESSFUL', payload: data})),
          catchError(() => of({type: 'LOGIN_FAILED'}))
        )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {
  }
}

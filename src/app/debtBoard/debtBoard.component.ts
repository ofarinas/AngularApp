import {Component} from "@angular/core";
import {AppState} from "../model/appState";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Person} from "../model/Person";

@Component({selector: 'task', templateUrl: 'debtBoard.component.html'})
export class DebtBoardComponent {
  public persons: Person[];
  public personsArray: string[];

  public constructor(private store: Store<AppState>) {
    this.store.subscribe(item => {
      this.persons = item['reducer'].persons;
    })
  }

}

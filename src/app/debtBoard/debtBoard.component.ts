import {Component} from "@angular/core";
import {Debt} from "../model/Debt";
import {AppState} from "../model/appState";
import {Store} from "@ngrx/store";

@Component({selector: 'task', templateUrl: 'debtBoard.component.html'})
export class DebtBoardComponent {
  public debts: Debt[];



  public constructor(private store: Store<AppState>) {
    this.store.subscribe(item => this.debts = item.debts)
  }

}

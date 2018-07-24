import {Component} from "@angular/core";
import {AppState} from "../model/appState";
import {Store} from "@ngrx/store";
import {Person} from "../model/Person";

declare var jquery: any;
declare var $: any;

@Component({selector: 'task', templateUrl: 'debtBoard.component.html'})
export class DebtBoardComponent {
  public persons: Person[];
  public search: string;

  public constructor(private store: Store<AppState>) {
    this.store.subscribe(item => {
      this.persons = item['reducer'].persons;
    })
  }

  showDeleteDialog(index): void {
    this.store.dispatch({type: 'SET_INDEX', payload: index});
    $('#deleteModal').modal('show');
  }

  showEditDialog(index): void {
    this.store.dispatch({type: 'SET_INDEX', payload: index});
    $('#editModal').modal('show');
  }

}


import {Component} from "@angular/core";
import {AppState} from "../model/appState";
import {Store} from "@ngrx/store";

@Component({
  selector: 'removePerson',
  templateUrl: './removePerson.component.html'
})


export class RemovePersonComponent {
  public indexPerson: number;
  public name: string;


  public constructor(private store: Store<AppState>) {
    this.store.subscribe(item => {
      this.indexPerson = item['reducer'].index;
      console.log('index', this.indexPerson);
      if (this.checkIndex(item)) this.name = item['reducer'].persons[this.indexPerson].name;
    })
  }

  private checkIndex(item) {
    return this.indexPerson >= 0 && item['reducer'].persons[this.indexPerson];
  }

  removePerson() {
    this.store.dispatch({type: "REMOVE_PERSON", payload: this.indexPerson});
  }
}

import {Component} from "@angular/core";
import {Person} from "../model/Person";
import {AppState} from "../model/appState";
import {Store} from "@ngrx/store";

@Component({
  selector: 'editPerson',
  templateUrl: './editPerson.component.html'
})


export class EditPersonComponent {

  public person: Person;
  public index: number;

  public constructor(private store: Store<AppState>) {
    this.person = new Person();
    this.store.subscribe(item => {
      this.index = item['reducer'].index;
      if (this.checkIndex(item))
        this.person = item['reducer'].persons[this.index];
    })
  }

  editPerson() {
    console.log(this.person.name);
    this.store.dispatch({type: "EDIT_PERSON", payload: {index: this.index, person: this.person}});
    this.person = new Person();
  }

  private checkIndex(item) {
    return this.index >= 0 && item['reducer'].persons[this.index];
  }

}

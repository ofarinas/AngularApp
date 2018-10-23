import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Person} from "../model/Person";
import {AppState} from "../model/appState";
import {Store} from "@ngrx/store";

@Component({
  selector: 'addPerson',
  templateUrl: './addPerson.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class AddPersonComponent {

  public person: Person;

  public constructor(private store: Store<AppState>) {
    this.person = new Person();
  }

  addPerson() {
    console.log(this.person.name);
    this.store.dispatch({type: "ADD_PERSON", payload: this.person});
    this.person = new Person();
  }
}

import {Pipe, PipeTransform} from "@angular/core";
import {Person} from "../model/Person";

@Pipe({name: 'personPipe'})
export class PersonPipe implements PipeTransform {
  transform(persons: Person[], value: string) {
    if (!value) return persons;
    value = value.toLowerCase();
    return persons.filter(person => person.name.toLowerCase().indexOf(value) !== -1 || person.amountOfDebt.toString().indexOf(value) !== -1);
  }
}

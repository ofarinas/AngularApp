import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";


import {reducer} from "./reducer/reducer";
import {StoreModule} from "@ngrx/store";
import {LoginComponent} from "./login/login.component";
import {DebtBoardComponent} from "./debtBoard/debtBoard.component";
import {AddPersonComponent} from "./addPerson/addPerson.component";
import {RemovePersonComponent} from "./removePerson/removePerson.component";
import {EditPersonComponent} from "./editPerson/editPerson.component";
import {PersonPipe} from "./pipe/personPipe";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'task', component: DebtBoardComponent},
  {path: '**', component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DebtBoardComponent, AddPersonComponent, RemovePersonComponent, EditPersonComponent, PersonPipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    StoreModule.forRoot({reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

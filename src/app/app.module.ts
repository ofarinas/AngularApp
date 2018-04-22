import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {reducer} from "./reducer/reducer";
import {StoreModule} from "@ngrx/store";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    StoreModule.forRoot({ reducer: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

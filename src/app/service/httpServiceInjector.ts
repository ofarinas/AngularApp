import {Injector} from "@angular/core";
import {HttpClient, HttpHandler, HttpXhrBackend} from "@angular/common/http";

const injector = Injector.create({
  providers: [
    {provide: HttpClient, deps: [HttpHandler]},
    {provide: HttpHandler, useValue: new HttpXhrBackend({build: () => new XMLHttpRequest})},
  ],
});

export const http = injector.get(HttpClient);

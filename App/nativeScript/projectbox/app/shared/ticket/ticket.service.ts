import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Config } from "../config";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings";

@Injectable()
export class TicketService {

  constructor(private http: Http) {}

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  tickets() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
      Config.apiUrl + "v2/tickets",
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors);
  }
}

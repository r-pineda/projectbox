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

  saveTickets(ticketsToSave :any){
    setString("tickets", JSON.stringify(ticketsToSave));
  }

  getSavedTickets (){
    return JSON.parse(getString("tickets"));
  }

  createTicket(ticket :Ticket){
    delete ticket.id;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.post(
      Config.apiUrl + "v2/tickets",
      ("{\"ticket\": " + JSON.stringify(ticket) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  updateTicket(ticket :Ticket){
    let id :string = ticket.id + "";
    delete ticket.id;
    
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.put(
      Config.apiUrl + "v2/tickets/" + id,
      ("{\"ticket\": " + JSON.stringify(ticket) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      console.dir(data);
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  deleteTicket(id :string){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.delete(
      Config.apiUrl + "v2/tickets/" + id,
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }
}

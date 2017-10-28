import { Injectable } from '@angular/core';
import { Todo } from './todo';
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
export class TodoService {

  constructor(private http: Http) {}

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  todosDummy() :Todo[]{
    var arr :Todo[] = new Array<Todo>();
    var to :Todo = new Todo;
    var to2 :Todo = new Todo;
    var to3 :Todo = new Todo;
    var to4 :Todo = new Todo;
    to.id = 1;
    to.title ="test";
    to.dateFrom = new Date(2017, 10, 21);
    to.dateTo = new Date(2017, 10, 22);
    to.progress = 0.2;
    to.timeTaken = 20;
    to.isMileStone = false;
    to.isCompleted = false;
    to.apResponsible = "Michael";
    to.apWorker = "Rommelt";
    to.timeEstimated = 120;
    to.priority = 2;
    to.chargeable = false;
    to.priceExtern = 0;
    to.priceIntern = 0;
    arr[0] = to;

    to2.id = 2;
    to2.title ="test2";
    to2.dateFrom = new Date(2017, 10, 21);
    to2.dateTo = new Date(2017, 10, 22);
    to2.progress = 0.2;
    to2.timeTaken = 20;
    to2.isMileStone = false;
    to2.isCompleted = false;
    to2.apResponsible = "Michael";
    to2.apWorker = "Rommelt";
    to2.timeEstimated = 120;
    to2.priority = 2;
    to2.chargeable = false;
    to2.priceExtern = 0;
    to2.priceIntern = 0;

    arr[1] = to2;

    to3.id = 3;
    to3.title ="test3";
    to3.dateFrom = new Date(2017, 10, 21);
    to3.dateTo = new Date(2017, 10, 22);
    to3.progress = 0.2;
    to3.timeTaken = 20;
    to3.isMileStone = false;
    to3.isCompleted = false;
    to3.apResponsible = "Michael";
    to3.apWorker = "Rommelt";
    to3.timeEstimated = 120;
    to3.priority = 2;
    to3.chargeable = false;
    to3.priceExtern = 0;
    to3.priceIntern = 0;

    arr[2] = to3

    to4.id = 4;
    to4.title ="test3";
    to4.dateFrom = new Date(2017, 10, 21);
    to4.dateTo = new Date(2017, 10, 22);
    to4.progress = 0.2;
    to4.timeTaken = 20;
    to4.isMileStone = false;
    to4.isCompleted = false;
    to4.apResponsible = "Michael";
    to4.apWorker = "Rommelt";
    to4.timeEstimated = 120;
    to4.priority = 2;
    to4.chargeable = false;
    to4.priceExtern = 0;
    to4.priceIntern = 0;

    arr[3] = to4

    return arr;
  }
  
/*
  todos() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
      Config.apiUrl + "v2/todos",
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors);
  }
*/
}

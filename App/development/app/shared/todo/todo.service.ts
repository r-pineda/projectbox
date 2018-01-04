import { Injectable } from '@angular/core';
import { Todo, Tracking } from './todo';
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

  getTodos() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
      Config.apiUrl + "v2/tasks",
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  createTodo(todo :Todo){
    delete todo.id;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.post(
      Config.apiUrl + "v2/tasks",
      ("{\"task\": " + JSON.stringify(todo) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  updateTodo(todo :Todo){
    let id :string = todo.id + "";
    delete todo.id;
    
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.put(
      Config.apiUrl + "v2/tasks/" + id,
      ("{\"task\": " + JSON.stringify(todo) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      console.dir(data);
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  deleteTodo(id :string){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.delete(
      Config.apiUrl + "v2/tasks/" + id,
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  fillTracking(tracking :string){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
        Config.apiUrl + "v2/trackings/" + tracking,
        { headers: headers }
      )
      .map(response => response.json())
      .do(data => {
      })
      .catch(this.handleErrors)
      .toPromise();
  }

  createTracking(tracking :Tracking){
    delete tracking.id;
    delete tracking.task_id;
    delete tracking.user_id;
    delete tracking.created_at;
    delete tracking.updated_at;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.post(
      Config.apiUrl + "v2/trackings",
      ("{\"tracking\": " + JSON.stringify(tracking) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();

  }

  saveTodos(todosToSave :any){
    setString("todos", JSON.stringify(todosToSave));
  }

  getSavedTodos (){
    return JSON.parse(getString("todos"));
  }
}

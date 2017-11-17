import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
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
import { User } from "./user";
import { Config } from "../config";
import { Project, Pivot } from "./project"

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json) + " handleErrors");
    return Observable.throw(error);
  }

  login(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    return this.http.post(
      Config.apiUrl + "v2/token",
      JSON.stringify({
        username: user.email,
        password: user.password
      }),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      Config.token = data.access_token;
      console.log(Config.token);
    })
    .catch((err: any) => {
      console.log(err);
      if(err == "Response with status: 403 Forbidden for URL: https://secure.projectbox.eu/v2/token"){
        return Observable.throw("403");
      }else{
        return Observable.throw(err);
      }
    });
  }

  getProjects(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
      Config.apiUrl + "v2/projects",
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors);
  }

  saveProjects(projectsToSave :Project[]){
    setString("projects", JSON.stringify(projectsToSave));
  }

  getSavedProjects (){
    return JSON.parse(getString("projects"));
  }
  
}
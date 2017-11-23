import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
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
      if(data.result == "error"){
        console.log("here");
        throw new Error("403");
      }else{
        Config.token = data.access_token;
      }
    })
    .catch((err: any) => {
      if(err == "403"){
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
    .catch(this.handleErrors)
    .toPromise();
  }

  saveProjects(projectsToSave :Project[]){
    setString("projects", JSON.stringify(projectsToSave));
  }

  getSavedProjects (){
    return JSON.parse(getString("projects"));
  }
  
}
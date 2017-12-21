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
import { UserLogin } from "./userLogin";
import { User } from "./user";
import { Config } from "../config";
import { Project, Pivot } from "./project"

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  //Wahrscheinlicher Fall: wenn der Request nicht 200~ zurückgibt, wird automatisch ein Error geworfen und er springt sofort zum catch
  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json) + " handleErrors");
    return Observable.throw(error);
  }

  login(user: UserLogin) {
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
      this.setCurrentUser(data);
      Config.token = data.access_token;
    })
    .catch((err: any) => {
      if(err == "Response with status: 403 Forbidden for URL: https://secure.projectbox.eu/v2/token"){
        return Observable.throw("403");
      }else{
        return Observable.throw(err);
      }
    });
  }

  setCurrentUser(usr :User){
    let user :User = usr;
    setString("curUser", JSON.stringify(user));
  }
  getCurrentUser() :User{
    return JSON.parse(getString("curUser")); 
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

  getAvatar(){
    var http = require("http");
    http.getFile("https://secure.projectbox.eu/v2/user/avatar/" + this.getCurrentUser().avatar + "?access_token=" + Config.token).then(function (r) {
      console.dir(r);
    }, function (e) {
      console.log(e);
    });
  }
}
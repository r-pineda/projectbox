import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

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
  
}
import { Injectable } from '@angular/core';

import { Meeting } from './meeting';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Config } from "../config";

@Injectable()
export class MeetingService {

    meetings :Meeting[] = null;
    dinner_not_ready :boolean = true;

    constructor(private http: Http) {}

    getMeetings(): Promise<Meeting[]> {

        console.log("getMeetings");

        this.callAPI().subscribe(
            (data) => {return data.meetings}, 
            (error) => alert("Unfortunately we could not find any meetings.")
        );

        while(this.dinner_not_ready){

            if(this.meetings != null){
                this.dinner_not_ready = false;
            }
        }

        return Promise.resolve(this.meetings);
        
    }

  callAPI(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
    Config.apiUrl + "v2/meetings",
         { headers: headers }
    )
    .map(response => response.json())
    .do(data => { console.dir(data);
    })
    .catch(this.handleErrors);
      
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}

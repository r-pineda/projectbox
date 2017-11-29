import { Injectable } from '@angular/core';

import { Meeting } from './meeting';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
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
export class MeetingService {

  constructor(private http: Http) {}

  /*
    meetings :Meeting[] = null;
    dinner_not_ready :boolean = true;

    

    getMeetings(): Promise<Meeting[]> {

        console.log("getMeetings");

        this.callAPI().subscribe(
            (data) => {return data.meetings}, 
            (error) => alert("Unfortunately we could not find any meetings.")
        );

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
  */

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  saveMeetings(meetingsToSave :any){
    setString("meetings", JSON.stringify(meetingsToSave));
  }

  getSavedMeetings (){
    return JSON.parse(getString("meetings"));
  }
  

  meetings() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.get(
      Config.apiUrl + "v2/meetings",
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  createMeeting(meeting :Meeting){
    delete meeting.id;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.post(
      Config.apiUrl + "v2/meetings",
      ("{\"meeting\": " + JSON.stringify(meeting) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  update(meeting :Meeting){
    let id :string = meeting.id + "";
    delete meeting.id;
    
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.put(
      Config.apiUrl + "v2/meetings/" + id,
      ("{\"meeting\": " + JSON.stringify(meeting) + "}"),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

  delete(id :string){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ Config.token)
    return this.http.delete(
      Config.apiUrl + "v2/meetings/" + id,
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
    })
    .catch(this.handleErrors)
    .toPromise();
  }

}
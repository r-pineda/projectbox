import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Rx";
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
export class StatusService {

    offlineMode :boolean; 
    currentUser :string;    //noch string, TODO: user Interface anlegen
    AccesToken :string;

  constructor() {}

  setOfflineMode(isOffline :boolean){
      setBoolean("offlineMode", isOffline);
      this.offlineMode = isOffline;
  }
  getOfflineMode(){
      return getBoolean("offlineMode");
  }

  setCurrentUser(usr :any){
      this.currentUser = JSON.stringify(usr);
      setString("latestUser", JSON.stringify(usr));

  }
  getCurrentUser(){

      if(this.currentUser){

        return this.currentUser;

      }else{
          return getString("latestUser");
      }
  }

  setAccestoken(tkn :string){
      this.AccesToken = tkn;
  }
  getAccesToken(){
      return this.AccesToken;
  }

  loggedIn(){
      setBoolean("wasLoggedIn", true)
  }

  getWasLoggedIn(){
      if(getBoolean("wasLoggedIn")) {
          return true;
      }else{
          return false;
      }
  }

}

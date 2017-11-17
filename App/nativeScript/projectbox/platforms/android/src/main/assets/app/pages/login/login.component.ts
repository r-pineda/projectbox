import { Component, ViewChild, ElementRef } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
//import { AppShortcuts } from "nativescript-app-shortcuts";
import { isIOS } from "tns-core-modules/platform";
import { isAndroid } from "tns-core-modules/platform";
import { StatusService } from "../../shared/status/status.service"
import {AnimationCurve} from "ui/enums";
import observable = require("data/observable");
import view = require("ui/core/view");
import { TextField } from "ui/text-field";
import { GridLayout } from "ui/layouts/grid-layout";
import { AndroidData, IOSData, Elevation } from 'nativescript-ng-shadow';
import utilityModule = require("utils/utils");

@Component({
  selector: "my-app",
  providers: [UserService, StatusService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent{
  @ViewChild("box") grid: ElementRef;
  @ViewChild("usrn") userNameTextField: ElementRef;
  @ViewChild("pass") passWordTextField: ElementRef;

  user: User;
  wrongcredentials :boolean = false;
  box :GridLayout;
  boxIsUp :boolean = false;
  fabShadowA: AndroidData = {
    elevation: Elevation.CARD_PICKED_UP,
  };
  fabShadoI: IOSData = {
    elevation: Elevation.CARD_PICKED_UP,
  };

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private statusService :StatusService,
    private page: Page,
  )
  {
    this.user = new User();
    //this.user.email = "michael.fruehwirth@htl.rennweg.at";
    //this.user.password = "michael1234";
    page.actionBarHidden = true;

    // instantiate the plugin
    //let appShortcuts = new AppShortcuts();
/*
    appShortcuts.available().then(available => {
    if (available) {
        console.log("This device supports app shortcuts");
    } else {
        //console.log("No app shortcuts capability, ask the user to upgrade :)");
    }
    });

  	appShortcuts.configureQuickActions([
        {
            type: "dashboard",
            title: "Dashboard",
            //subtitle: "Gelange zum Dashboard", // iOS only
            iconTemplate: "dashboard" // ignored by iOS, if iconType is set as well
        },
        {
            type: "task",
            title: "Tasks",
            //subtitle: "Übersicht aller Tasks", // iOS only
            iconTemplate: "task" // ignored by iOS, if iconType is set as well
        },
        {
            type: "meeting",
            title: "Meetings",
            //subtitle: "Übersicht aller Meetings", // iOS only
            iconTemplate: "meeting" // ignored by iOS, if iconType is set as well
        },
        {
            type: "ticket",
            title: "Tickets",
            //subtitle: "Liste der Tickets", // iOS only
            iconTemplate: "bug"
        },
        {
            type: "seeting",
            title: "Einstellungen",
            //subtitle: "Ändere dein Profil", // iOS only
            iconTemplate: "setting"
        },
        ]).then(() => {
            alert("Added 2 actions, close the app and apply pressure to the app icon to check it out!");
        }, (errorMessage) => {
            alert(errorMessage);
        });

*/
  }

  login() {
    this.userService.login(this.user)
      .subscribe(
      (data) => this.loginProceed(data),
      (error) => this.offlineLogin(error)
      );
  }

  offlineLogin(valid :any){

    if (valid == "403"){
      this.wrongcredentials = true;
    }else{

      if(this.statusService.getWasLoggedIn()){

        //alert("You are offline. showing latest received data");
        this.statusService.setOfflineMode(true);
        this.routerExtensions.navigate(["/dashboard"], {
            transition: {
            name: "slide",
            curve: "easeOut"
            }
        });
      }else{
        alert("the first login requires an active internet connection");
      }
    }

  }

  loginProceed(usrData :any){

    this.keyboardOff();
    this.wrongcredentials = false;
    this.statusService.loggedIn();
    this.statusService.setCurrentUser(usrData);
    this.statusService.setOfflineMode(false);
    this.routerExtensions.navigate(["/dashboard"], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
    })
  }

  
  keyboardOn(){
    this.box = this.grid.nativeElement;
    this.box.animate({
      translate: {x:0, y:-300},
      duration: 750,
      curve: AnimationCurve.easeOut
    });
  }

  keyboardOff(){
    let usrTF = this.userNameTextField.nativeElement;
    let pswTF = this.passWordTextField.nativeElement;
    usrTF.dismissSoftInput();
    pswTF.dismissSoftInput();
    this.box = this.grid.nativeElement;
    this.box.animate({
      translate: {x:0, y:0},
      duration: 0,
      curve: AnimationCurve.easeIn
    });
  }

  forgotPW(){
    utilityModule.openUrl("https://secure.projectbox.eu/#/email");
  }
  
}

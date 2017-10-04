import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { Page } from "ui/page";
import { AppShortcuts } from "nativescript-app-shortcuts";
import { isIOS } from "tns-core-modules/platform";
import { StatusService } from "../../shared/status/status.service"

@Component({
  selector: "my-app",
  providers: [UserService, StatusService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private userService: UserService,
    private statusService :StatusService,
    private page: Page
  )
  {
    this.user = new User();
    this.user.email = "michael.fruehwirth@htl.rennweg.at";
    this.user.password = "michael1234";
    page.actionBarHidden = true;

    // instantiate the plugin
    let appShortcuts = new AppShortcuts();

    appShortcuts.available().then(available => {
    if (available) {
        console.log("This device supports app shortcuts");
    } else {
        console.log("No app shortcuts capability, ask the user to upgrade :)");
    }
    });

  	appShortcuts.configureQuickActions([
        {
            type: "dashboard",
            title: "Dashboard",
            subtitle: "Gelange zum Dashboard", // iOS only
            iconTemplate: "dashboard" // ignored by iOS, if iconType is set as well
        },
        {
            type: "task",
            title: "Tasks",
            subtitle: "Übersicht aller Tasks", // iOS only
            iconTemplate: "task" // ignored by iOS, if iconType is set as well
        },
        {
            type: "meeting",
            title: "Meetings",
            subtitle: "Übersicht aller Meetings", // iOS only
            iconTemplate: "meeting" // ignored by iOS, if iconType is set as well
        },
        {
            type: "ticket",
            title: "Tickets",
            subtitle: "Liste der Tickets", // iOS only
            iconTemplate: "bug"
        },
        {
            type: "seeting",
            title: "Einstellungen",
            subtitle: "Ändere dein Profil", // iOS only
            iconTemplate: "setting"
        },
        ]).then(() => {
            alert("Added 2 actions, close the app and apply pressure to the app icon to check it out!");
        }, (errorMessage) => {
            alert(errorMessage);
        });


  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
      .subscribe(
      (data) => this.loginProceed(data),
      (error) => this.offlineLogin(error)
      );
  }

  offlineLogin(valid :any){

    console.log(valid);

    if (valid == "SyntaxError: Unexpected token e in JSON at position 0"){
      alert("Wrong credentials!");
    }else{

      this.statusService.setOfflineMode(true);
      console.log(this.statusService.getOfflineMode());

      if(this.statusService.getWasLoggedIn()){

        //alert("You are offline. showing latest received data");
      
        this.routerExtensions.navigate(["/list"], {
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

    this.statusService.loggedIn();
    this.statusService.setCurrentUser(usrData);
    this.statusService.setOfflineMode(false);

    this.routerExtensions.navigate(["/list"], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
  })

  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}

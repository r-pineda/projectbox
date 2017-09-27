import { Component } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { Meeting } from "../../shared/meeting/meeting"
import {
  GestureEventData,
  GestureTypes,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeGestureEventData,
  TouchGestureEventData} from "ui/gestures";



@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  providers: [UserService],
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent {

  meetingdata :any;
  meetingsText :string;
  meetings :Meeting[];

  constructor(private router: Router, private routerExtensions: RouterExtensions, private userService: UserService) {
    
    this.meetingsText = "Lade...";


    this.userService.meetings().subscribe(
      (data) => this.displayMeetings(data), 
      (error) => alert("Unfortunately we could not find any meetings.")
    );
    
  }

  displayMeetings(data :any){

    //@Rommelt hier die Daten für View vorbereiten

    this.meetings = data.meetings;

    console.dir(this.meetings[0]);

    //@Rommelt: name des 1. meetings:

    console.log(this.meetings[0].name);

    //@Rommelt Attribute von this.meetings[i]:
    /*
    protocol :String;
    name :String;
    location :String;
    id :Number;
    duration :Number;
    date :Date;
    attendees: String;
    agenda :String
    */

  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction = 1) {
    
      this.routerExtensions.navigate(["/animation"], {
          transition: {
              name: "slide",
              curve: "easeOut"
          }
      });
    }
  }

}
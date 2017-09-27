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
      (data) => this.meetingsText = JSON.stringify(data.meeting), 
      (error) => alert("Unfortunately we could not find any meetings.")
    );

    this.meetingsText.split('\\').join('\\\\');

    this.meetings = JSON.parse(this.meetingsText).meeting

    console.log(this.meetings.length);
    console.dir(this.meetings[0]);
    console.dir(this.meetings[1]);
    
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
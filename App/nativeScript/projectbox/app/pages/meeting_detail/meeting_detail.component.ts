import { Component } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {
  GestureEventData,
  GestureTypes,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeGestureEventData,
  TouchGestureEventData} from "ui/gestures";

@Component({
  selector: "meeting_detail",
  templateUrl: "pages/meeting_detail/meeting_detail.html",
  providers: [UserService],
  styleUrls: ["pages/meeting_detail/meeting_detail-common.css", "pages/meeting_detail/meeting_detail.css"]
})
export class Meeting_detailComponent {

  meetings :string;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private userService: UserService) {

  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction = 2) {
    
      this.routerExtensions.navigate(["/list"], {
          transition: {
              name: "slideRight",
              curve: "easeOut"
          }
      });
    }
  }
}
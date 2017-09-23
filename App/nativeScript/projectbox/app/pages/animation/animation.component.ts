import { Component } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import {
  GestureEventData,
  GestureTypes,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeGestureEventData,
  TouchGestureEventData} from "ui/gestures";

@Component({
  selector: "animation",
  templateUrl: "pages/animation/animation.html",
  providers: [UserService],
  styleUrls: ["pages/animation/animation-common.css", "pages/animation/animation.css"]
})
export class AnimationComponent {

  meetings :String;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private userService: UserService) {

  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction = 2) {
    
      this.routerExtensions.navigate(["/list"], {
        transition: {
            name: "slideRight",
            duration: 500,
            curve: "easeOut"
          }
      });
    }
  }
}
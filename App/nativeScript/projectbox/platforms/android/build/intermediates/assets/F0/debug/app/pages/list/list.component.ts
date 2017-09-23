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
  selector: "list",
  templateUrl: "pages/list/list.html",
  providers: [UserService],
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent {

  meetings :String;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private userService: UserService) {
    
    this.meetings = "Lade..."

    this.userService.meetings().subscribe(
      (data) => this.meetings = JSON.stringify(data),
      (error) => alert("Unfortunately we could not find any meetings.")
    );
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction = 1) {
    
      this.routerExtensions.navigate(["/animation"], {
          transition: {
              name: "slideRight",
              curve: "easeOut"
          }
      });
    }
  }

}
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {ActivatedRoute} from "@angular/router";
import {
  GestureEventData,
  GestureTypes,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeGestureEventData,
  TouchGestureEventData} from "ui/gestures";
import { Meeting } from "../../shared/meeting/meeting"
import { MeetingService } from "../../shared/meeting/meeting.service"
import * as camera from "nativescript-camera";
let imagepicker = require("nativescript-imagepicker");
import * as imageSourceModule from "image-source";
import { Image } from "ui/image";
import { ImageAsset } from "tns-core-modules/image-asset";
var fs = require("file-system");
import * as imageSource from "tns-core-modules/image-source";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as tabViewModule from "tns-core-modules/ui/tab-view";

@Component({
  selector: "meeting_detail",
  templateUrl: "pages/meeting_detail/meeting_detail.html",
  providers: [UserService, MeetingService],
  styleUrls: ["pages/meeting_detail/meeting_detail-common.css", "pages/meeting_detail/meeting_detail.css"]
})
export class MeetingComponent implements OnInit{

  meetings :Meeting[];
  public picture :any;

  constructor(private route :ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private meetingService: MeetingService) {}

  ngOnInit(){
    this.meetingService.getMeetings().then(
      (data) => this.displayMeetings(data),
      (error) => this.displayMeetings(false)
    );
  }

  displayMeetings(data :any){
    
        if(data){
          this.meetingService.saveMeetings(data);
          this.meetings = data.meetings;
    
        }else{
    
          data = this.meetingService.getSavedMeetings()
          this.meetings = data.meetings; 
        }
    
        //this.meetings.sort((a, b) => {return a.date.getTime()-b.date.getTime()})
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 2) {
    
      this.routerExtensions.navigate(["/dashboard"], {
          transition: {
              name: "slideRight",
              curve: "easeOut"
          }
      });
    }
  }
}
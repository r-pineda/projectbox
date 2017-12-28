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
import {
  Calendar,
  SELECTION_MODE, // Multiple or single
  DISPLAY_MODE, // Week or month
  CalendarEvent, // little dots 
  Appearance, // style customisation
  SCROLL_ORIENTATION, // scroll orientation for iOS
  CalendarSubtitle, // subtitles for iOS
  Settings // Settings interface
} from 'nativescript-fancy-calendar';
import {registerElement} from "nativescript-angular/element-registry";

registerElement('Calendar', () => Calendar);

@Component({
  selector: "meeting_detail",
  templateUrl: "pages/meeting/meeting.html",
  providers: [UserService, MeetingService],
  styleUrls: ["pages/meeting/meeting-common.css"]
})
export class MeetingComponent implements OnInit{

  meetings :Meeting[];
  displayedMeetings :Meeting[];
  public picture :any;
  create: boolean;
  meetingdata :any;
  meetingsText :string;
  meeting: Meeting;

  constructor(private route :ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private meetingService: MeetingService) {}

  ngOnInit(){
    this.meetingService.getMeetings().then(
      (data) => this.displayMeetings(data),
      (error) => this.displayMeetings(false)
    );
    this.create = false;
  }

  cr_meeting() {
    this.create = true;

  }

  cancel() {
    console.log("cancel");
    this.create = false;
  }

  displayMeetings(data :any){
    
        if(data){
          this.meetingService.saveMeetings(data);
        }else{
          data = this.meetingService.getSavedMeetings()
        }
        this.meetings = data.meetings;
        this.displayedMeetings = data.meetings;
    
        //this.meetings.sort((a, b) => {return a.date.getTime()-b.date.getTime()})
  }

  createMeeting(){
    this.meetingService.createMeeting(this.meeting);
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

  showDetail(id: number) {
    
      this.routerExtensions.navigate(["/meeting_detail/" + id], {
          
          transition: {
              name: "slide",
              curve: "easeOut"
          }
      });
  }

  /* calendar */ 

  settings: any;
  subtitles: CalendarSubtitle[];
  events: CalendarEvent[];
  public appearance: Appearance;
  private _calendar: Calendar;
  
  public calendarLoaded(event) {
       this.settings = <Settings>{
          displayMode: DISPLAY_MODE.MONTH, 
          scrollOrientation: SCROLL_ORIENTATION.HORIZONTAL,
          selectionMode: SELECTION_MODE.SINGLE,
          firstWeekday: 2, // SUN: O, MON: 1, TUES: 2 etc..
      };
      this.appearance = <Appearance>{
          weekdayTextColor: "#000000", //color of Tue, Wed, Thur.. (only iOS)
          headerTitleColor: "#000000", //color of the current Month (only iOS)
          eventColor: "#29A699", // color of dots
          selectionColor: "#29A699", // color of the circle when a date is clicked
          todayColor: "#29A699", // the color of the current day
          hasBorder: true, // remove border (only iOS)
          todaySelectionColor: "#29A699", // today color when seleted (only iOS)
          borderRadius: 40 // border radius of the selection marker
      };
  }
  
  public dateSelected(event) {
    this.filterByDate(event.data.date);
  }

  filterByDate(date :Date){
    this.displayedMeetings = new Array<Meeting>();
    this.meetings.forEach(meeting => {
      let meetingDate = new Date(meeting.date);
      if(meetingDate.getFullYear() === date.getFullYear() && meetingDate.getMonth() === date.getMonth() && meetingDate.getDay() === date.getDay()){
        this.displayedMeetings.push(meeting);
      }
    });
  }


  public monthChanged(event) {
      console.log('month selected');
  }
}
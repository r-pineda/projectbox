import { Component } from "@angular/core";
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

@Component({
  selector: "meeting_detail",
  templateUrl: "pages/meeting_detail/meeting_detail.html",
  providers: [UserService, MeetingService],
  styleUrls: ["pages/meeting_detail/meeting_detail-common.css", "pages/meeting_detail/meeting_detail.css"]
})
export class Meeting_detailComponent {

  meeting :Meeting;

  constructor(private route :ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private meetingService: MeetingService) {

    this.route.params.subscribe((params) => {
      this.getMeetings(params["id"]);
    });
  }

  getMeetings(meeting_id :number){
    this.meetingService.meetings().subscribe(
      (data) => this.getMeetingById(data.meetings, meeting_id), 
      (error) => this.getMeetingById(null, meeting_id)
    );

  }

  getMeetingById(data :any, meeting_id :number){
    if(data){

      data.forEach(meeting => {

        if(meeting.id == meeting_id){
          this.meeting = meeting;
        }
      });

          //$H!T some
          /*
          this.meetingService.saveMeetings(data);
          data.some(function(meeting, index){
            if(meeting.id == meeting_id){
              this.meeting = meeting;
              return true;
            }
            return false;
          });
          */
    }else{
    
      data = this.meetingService.getSavedMeetings()

      data.forEach(meeting => {
            
        if(meeting.id == meeting_id){
          this.meeting = meeting;
        }
                        
      });
    }
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
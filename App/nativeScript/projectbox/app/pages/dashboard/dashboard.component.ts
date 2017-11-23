import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { StatusService } from "../../shared/status/status.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Meeting } from "../../shared/meeting/meeting";
import { MeetingService } from "../../shared/meeting/meeting.service";
import { Project, Pivot } from "../../shared/user/project"
import {
  GestureEventData,
  GestureTypes,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeGestureEventData,
  TouchGestureEventData
} from "ui/gestures";
import "rxjs/add/operator/switchMap";
import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import * as FrameModule from "ui/frame";

@Component({
  selector: "my-app",
  providers: [UserService, MeetingService, StatusService],
  templateUrl: "pages/dashboard/dashboard.html",
  styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
})

export class DashboardComponent {

  meetingdata :any;
  meetingsText :string;
  meetings :Meeting[];
  public offlinemode :boolean;
  projects :Project[];
  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private pageRoute: PageRoute,
    private userService: UserService,
    private meetingService :MeetingService,
    private statusService :StatusService
  )
  {
    
    this.meetingsText = "Lade...";

    this.offlinemode = this.statusService.getOfflineMode();
  }
  
  public ngOnInit() {
    this.userService.getProjects().subscribe(
      (data) => this.displayProjects(data),
      (error) => this.displayProjects(false)
    );

    this.meetingService.meetings().subscribe(
      (data) => this.displayMeetings(data), 
      (error) => this.displayMeetings(false)
    );
  }

  displayMeetings(data :any){

    //@Rommelt hier die Daten f�r View vorbereiten

    if(data){

      this.meetingService.saveMeetings(data);
      this.meetings = data.meetings;

    }else{

      data = this.meetingService.getSavedMeetings()
      this.meetings = data.meetings;
      
    }

    

    

    //console.dir(this.meetings[0]);

    //@Rommelt: name des 1. meetings:

    //console.log(this.meetings[0].name);

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
    this.meetings[0].name = "test inApp";
    this.meetingService.createMeeting(this.meetings[0]);

  }

  displayProjects(data :any){
        if(data){
    
          this.userService.saveProjects(data);
          this.projects = data.projects;
    
        }else{
    
          data = this.userService.getSavedProjects()
          this.projects = data.projects;
          
        }

        console.log(this.projects[0].name);
    
      }

  showDetail(id: number) {
    
      this.routerExtensions.navigate(["/meeting_detail/" + id], {
          
          transition: {
              name: "slide",
              curve: "easeOut"
          }
      });
  }

}

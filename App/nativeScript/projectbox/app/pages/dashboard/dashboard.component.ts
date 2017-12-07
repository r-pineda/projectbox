import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
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
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { User } from "../../shared/user/user";

@Component({
  selector: "my-app",
  providers: [UserService, MeetingService, StatusService],
  templateUrl: "pages/dashboard/dashboard.html",
  styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
})

export class DashboardComponent implements AfterViewInit, OnInit {

  curUser :User = new User;
  meetingdata :any;
  meetingsText :string;
  meetings :Meeting[];
  public offlinemode :boolean;
  projects :Project[];
  avatar :string;

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private pageRoute: PageRoute,
    private userService: UserService,
    private meetingService :MeetingService,
    private statusService :StatusService,
    private _changeDetectionRef: ChangeDetectorRef,
    private fonticon: TNSFontIconService
  )
  {

    this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;

    this.offlinemode = this.statusService.getOfflineMode();
  }
  
  public ngOnInit() {
    this.userService.getProjects().then(
      (data) => this.displayProjects(data),
      (error) => this.displayProjects(false)
    );

    this.meetingService.getMeetings().then(
      (data) => this.displayMeetings(data),
      (error) => this.displayMeetings(false)
    );
  }


  displayMeetings(data :any){

    //@Rommelt hier die Daten für View vorbereiten

    if(data){

      this.meetingService.saveMeetings(data);
      this.meetings = data.meetings;

    }else{

      data = this.meetingService.getSavedMeetings()
      this.meetings = data.meetings; 
    }

    //this.meetings.sort((a, b) => {return a.date.getTime()-b.date.getTime()})
  }

  aktualisieren(){
    this.userService.getProjects().then(
      (data) => this.displayProjects(data),
      (error) => this.displayProjects(false)
    );

    this.meetingService.getMeetings().then(
      (data) => this.displayMeetings(data),
      (error) => this.displayMeetings(false)
    );
  }

  displayProjects(data :any){
        if(data){
    
          this.userService.saveProjects(data);
          this.projects = data.projects;
    
        }else{
    
          data = this.userService.getSavedProjects()
          this.projects = data.projects;
          
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

  navigateto(pagename: string) {
            this.routerExtensions.navigate([pagename], {
              transition: {
                  name: "slide",
                  curve: "easeOut"
              }
          });
  }

  logout(){
    this.drawer.closeDrawer();
    this.routerExtensions.navigate(["/login"], {
      animated:true,
      transition: {
          name: "slide",
          curve: "easeOut"
      }
  });
  }
      
        @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
            private drawer: RadSideDrawer;
        
            ngAfterViewInit() {
                this.drawer = this.drawerComponent.sideDrawer;
                this._changeDetectionRef.detectChanges();
            }
        
            public openDrawer() {
                this.drawer.showDrawer();
            }
        
            public onCloseDrawerTap() {
               this.drawer.closeDrawer();
            }
}

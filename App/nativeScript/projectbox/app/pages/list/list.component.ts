import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { StatusService } from "../../shared/status/status.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Meeting } from "../../shared/meeting/meeting"
import { MeetingService } from "../../shared/meeting/meeting.service";
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
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { View } from 'ui/core/view';
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";


@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  providers: [UserService, MeetingService, StatusService],
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit{

  meetingdata :any;
  meetingsText :string;
  meetings :Meeting[];
  public offlinemode :boolean;

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

    /*
    this.pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.params)
    .forEach((params) => { this.meetings.id = +params["id"]; });
    */

    this.meetingService.meetings().subscribe(
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

  }

  showDetail(id: number) {
    
      this.routerExtensions.navigate(["/meeting_detail/" + id], {
          
          transition: {
              name: "slide",
              curve: "easeOut"
          }
      });
  }

  /* SideDrawer */
  public selected: number;
  private drawer: SideDrawerType;

  @ViewChild(RadSideDrawerComponent)
  public drawerComponent: RadSideDrawerComponent;

  public ngOnInit() {
      this.drawer = this.drawerComponent.sideDrawer;
  }

  public onPullToRefreshInitiated(args: any) { }

  public onSwipeCellStarted(args: ListViewEventData) { }

  public onDelete() { }

  public onArchive() { }

  public onMenuTapped(value: any) {
      this.drawer.closeDrawer();
  }

}
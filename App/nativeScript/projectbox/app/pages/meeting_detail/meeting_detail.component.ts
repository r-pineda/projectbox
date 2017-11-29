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
import * as imagepicker from "nativescript-imagepicker";
import { Image } from "ui/image";
import { ImageAsset } from "tns-core-modules/image-asset";
import * as fs from "tns-core-modules/file-system";
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
export class Meeting_detailComponent implements OnInit{

  meeting :Meeting;
  public picture :ImageAsset;

  constructor(private route :ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private meetingService: MeetingService) {

    this.route.params.subscribe((params) => {
      this.getMeetings(params["id"]);
    });
  }

  ngOnInit(){
    this.meeting.duration = 999999;
    this.updateMeeting(this.meeting);
  }

  getMeetings(meeting_id :number){
    this.meetingService.meetings().then(
      (data) => this.getMeetingById(data.meetings, meeting_id),
      (error) => this.getMeetingById(null, meeting_id)
    )
    .then((data) => {
      Promise.resolve(this.meetingService.delete(this.meeting.id))});
  }

  getMeetingById(data :any, meeting_id :number){
    if(data){

      data.forEach(meeting => {

        if(meeting.id === meeting_id){
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
    
      data = this.meetingService.getSavedMeetings();

      data.forEach(meeting => {
            
        if(meeting.id === meeting_id){
          this.meeting = meeting;
        }
      });
    }
  }

  updateMeeting(update :Meeting){
    this.meetingService.update(update);
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction = 2) {
    
      this.routerExtensions.navigate(["/dashboard"], {
          transition: {
              name: "slideRight",
              curve: "easeOut"
          }
      });
    }
  }

  openCamera(){
    camera.requestPermissions();

    camera.takePicture().then(picture => {
      this.picture = picture;
      console.dir(picture);
    });
  }

  openGallery(){

    let context = imagepicker.create({
      mode: "single" //use "multiple" for multiple selection
    });
    context
    .authorize()
    .then(function() {
        return context.present();
    })
    .then(function(selection) {
      console.log(selection[0].android);
      let path = fs.path.normalize(selection[0].android);
      this.picture = selection[0].android//imageSource.fromFile(path).android;
    }).catch(function (e) {
        // process error
    });

  }
}
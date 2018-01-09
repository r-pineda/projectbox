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
import { File } from "../../shared/user/file";
var bghttp = require("nativescript-background-http"); //file upload

@Component({
  selector: "pb-meeting_detail",
  templateUrl: "pages/meeting_detail/meeting_detail.html",
  providers: [UserService, MeetingService],
  styleUrls: ["pages/meeting_detail/meeting_detail-common.css", "pages/meeting_detail/meeting_detail.css"]
})
export class Meeting_detailComponent implements OnInit{

  meeting :Meeting;
  public picture :any;
  userFiles :File[];
  imageFiles :string[] = new Array<string>();

  constructor(private route :ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private meetingService: MeetingService, private userService: UserService) {

    this.route.params.subscribe((params) => {
      this.getMeeting(params["id"]);
    });
  }

  ngOnInit(){
    this.userService.getFiles().then(
      (data) => this.displayFiles(data),
      (error) => this.displayFiles(false)
    )
    .then(() => {
      this.userFiles.forEach(file => {
        if(file.meeting_id != this.meeting.id){
          this.userFiles.splice(this.userFiles.indexOf(file), 1);
        }
      });
    })
    .then(() => {
      this.userFiles.forEach(file => {
        if(file.mime.split("/")[0] === "image"){
          this.imageFiles.push("https://secure.projectbox.eu/v2/preview/file/" + file.id + "?access_token=" + this.userService.getCurrentUser().access_token)
        }
      });
    });
  }

  getMeeting(meeting_id :number){
    this.meetingService.getMeetings().then(
      (data) => this.getMeetingById(data.meetings, meeting_id),
      (error) => this.getMeetingById(null, meeting_id)
    )
    .then((data) => {
      //do shit after initialization of all datasets
    });
  }

  cancel() {
    this.routerExtensions.backToPreviousPage();
  }

  displayFiles(data :any){
    if(data){
      this.userFiles = data.files;
    }else{
      data = this.userService.getSavedFiles();
      this.userFiles = data.files;
    }
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

  updateMeeting(){
    this.meetingService.update(this.meeting);
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
  //experimental
  uploadFile(){
    var session = bghttp.session("image-upload");
 
    var request = {
        url: "https://secure.projectbox.eu/v2/files",
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "File-Name": "mobile_upload.png"
        },
        description: "{ 'uploading': 'mobile_upload.png' }" //wie body bei normalem post
    };

    //let params = {name:"meeting", filename: this.picture, mimeType: 'image/png'};
    let task = session.uploadFile(this.picture, request);
 
    task.on("progress", this.logEvent);
    task.on("error", this.logEvent);
    task.on("complete", this.logEvent);
  }
 
  logEvent(e) {
    console.log(e.eventName);
  }

  /*------------*/

  openCamera(){
    camera.requestPermissions();

    camera.takePicture().then(picture => {
      this.picture = picture;
    });
  }

  openGallery(){

    var milliseconds = new Date().getTime();
    var that = this;
    let context = imagepicker.create({
      mode: "single" //use "multiple" for multiple selection
    });

    context
    .authorize()
    .then(() => context.present())
    .then((selection) => {
      selection.forEach(selected => {
        selected.getImage().then(function(imagesource){
          let folder = fs.knownFolders.documents();
          var path = fs.path.join(folder.path, milliseconds + ".png");
          var saved = imagesource.saveToFile(path, "png");
          that.picture = path;
        })
      });
    }).catch(function (e) {
        // process error
    });
  }
}
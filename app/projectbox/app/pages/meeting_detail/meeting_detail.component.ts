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
import { Meeting, AgendaPoint } from "../../shared/meeting/meeting"
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
import { FileObject } from "../../shared/user/fileObject";
import { NavComponent } from "../nav/nav.component";
import { Page } from "ui/page";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import * as dialogs from "ui/dialogs";

/* date picker */
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";

var PhotoViewer = require("nativescript-photoviewer");

var bghttp = require("nativescript-background-http"); //file upload

@Component({
  selector: "pb-meeting_detail",
  templateUrl: "pages/meeting_detail/meeting_detail.html",
  providers: [UserService, MeetingService, NavComponent],
  styleUrls: ["pages/meeting_detail/meeting_detail-common.css", "pages/meeting_detail/meeting_detail.css"]
})
export class Meeting_detailComponent implements OnInit{

  photoViewer = new PhotoViewer();
  meeting :Meeting;
  public picture :ImageAsset;
  userFiles :FileObject[];
  imageFiles :string[] = new Array<string>();
  meeting_tabs: String;
  public projectSelection :string[] = new Array<string>();
  public projectNames: string[] = new Array<string>();


  constructor(private route :ActivatedRoute, private router: Router, private routerExtensions: RouterExtensions, private page: Page, private nav: NavComponent, private meetingService: MeetingService, private userService: UserService) {

    this.route.params.subscribe((params) => {
      this.getMeeting(params["id"]);
    });


      this.items = [];
      for (var i = 0; i < 5; i++) {
          this.items.push("data item " + i);
      }
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
          file.imagesrc = ("https://secure.projectbox.eu/v2/preview/file/" + file.id + "?access_token=" + this.userService.getCurrentUser().access_token)
        }
      });
    });

      this.page.css = "Page { background-color: #ffffff; } .page { padding-left: 0; padding:20; background-color: #ffffff;}";

      this.userService.getProjects()
      .then((data) => {
        data.projects.forEach((project) => {
          this.projectSelection[project.id] = project.name;
          this.projectNames.push(project.name);
        });
      });

      this.meeting_tabs = 'agenda';
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
          this.meeting.agenda[0] = new AgendaPoint();
        }
      });

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
    this.cancel();
  }

  createMeeting(){
    this.meetingService.createMeeting(this.meeting);
    this.cancel();
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

  uploadFile(){
    console.log("uploading...");
    var session = bghttp.session("image-upload");
 
    var request = {
        url: "https://secure.projectbox.eu/v2/upload/files",
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "File-Name": "mobile_upload.png",
            "Authorization": "Bearer " + this.userService.getCurrentUser().access_token
        },
        description: "{ 'uploading': 'mobile_upload.png' }" //wie body bei normalem post
    };
    var params = [{name: "meeting", value: this.meeting.id}, {name:"file", filename: this.picture , mimeType: 'image/png'}];

    let task = session.multipartUpload(params, request);
 
    task.on("progress", this.logEvent);
    task.on("error", this.logEvent);
    task.on("complete", this.logEvent);
  }
 
  logEvent(e) {
    console.log(e.eventName);
  }

  openCamera(){
    var milliseconds = new Date().getTime();
    var that = this;
    camera.requestPermissions();
    camera.takePicture()
        .then((imageAsset) => {
            console.log("Result is an image asset instance");
            let source = new imageSource.ImageSource();
            source.fromAsset(imageAsset).then((source) => {
                let folder = fs.knownFolders.documents();
                let fileName = "test.png"
                let path = fs.path.join(folder.path, milliseconds + ".png");
                let saved = source.saveToFile(path, "png");
                if(saved){
                    console.log("saved image")
                }
                that.picture = path;
                that.uploadFile();
            })
        }).catch((err) => {
        console.log("Error -> " + err.message);
    });
}

  sourcepic() {
      dialogs.action({
          message: "Quelle des Bildes",
          cancelButtonText: "Abbrechen",
          actions: ["Kamera", "Gallerie"]
      }).then(result => {
          if(result == "Kamera"){
              this.openCamera();
          }else if(result == "Gallerie"){
              this.openGallery();
          }
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
          that.uploadFile();
        })
      });
    }).catch(function (e) {
        // process error
    });
  }

  state(id) {
      this.meeting_tabs = id;
  }

  showImage(src :string){
    this.imageFiles = new Array<string>();
    this.userFiles.forEach((file) => {
      this.imageFiles.push(file.imagesrc);
    });
    this.photoViewer.showViewer(this.imageFiles);
  }

  /* drop down */
    public selectedIndex = 1;
    public items: Array<string>;


    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    /* date pciker */
    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        var d = new Date();

        datePicker.year = d.getFullYear();
        datePicker.month = d.getMonth()
        datePicker.day = d.getDay();
        datePicker.minDate = new Date(2000, 0, 1);
        datePicker.maxDate = new Date(2040, 12, 31);
    }

    onDateChanged(args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    }
}
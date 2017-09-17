import { Component } from "@angular/core";
import {
  GestureEventData,
  GestureTypes,
  PanGestureEventData,
  PinchGestureEventData,
  RotationGestureEventData,
  SwipeGestureEventData,
  TouchGestureEventData} from "ui/gestures";
import labelModule = require("ui/label");
import * as camera from "nativescript-camera";
import { Image } from "ui/image";

@Component({
  selector: "my-app",
  template: `
      <ActionBar title="NativeScript" class="action-bar"></ActionBar>
      <!--
      
      -->
      <Image src="{{ imgsrc }}" (tap)="onTap($event)" (longPress)="onLongPress($event)" (swipe)="onSwipe($event)" ></Image>
  `
})
export class AppComponent {

  imgsrc :String = "~/images/apple.jpg"

  constructor() {

  }

  onSwipe(args: SwipeGestureEventData) {
    var dir :String;
    switch (args.direction) {
      case 1: {
        dir = "right";
        break;
      }
      case 2: {
        dir = "left";
        break;
      }
      case 4: {
        dir = "up";
        break;
      }
      case 8: {
        dir = "down";
        break;
      }
      default: {
        dir = "unknown"
      }
    }
    console.log("Swipe Direction: " + dir);
  }

  onLongPress(args: GestureEventData) {
    console.log("LongPress!")
    camera.requestPermissions();
    camera.takePicture()
        .then((imageAsset) => {
          console.log("Result is an image asset instance");
          let image = new Image();
          image.src = imageAsset;
        }).catch((err) => {
      console.log("Error -> " + err.message);
    });
  }

  onTap(args: GestureEventData) {
    console.log("Tap!")
  }


}
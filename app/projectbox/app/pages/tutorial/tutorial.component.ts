import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'pb-tutorial',
  templateUrl: 'pages/tutorial/tutorial.html',
})
export class TutorialComponent implements OnInit {
slides = [
    {
        title: 'Example Title',
        description: 'Example Description',
        okButtonText: 'FERTIG',
        skipButtonText: 'Skip',
        backgroundColor: '#29A699',
        imageUrl: 'res://step1',
        animation: 'slide_left'
    }
];
    
  constructor(private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,) { }

  finish() {
      this.routerExtensions.navigate(["/nav"], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
  });
  }

  ngOnInit() { }

}

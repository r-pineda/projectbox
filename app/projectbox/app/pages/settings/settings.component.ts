import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import * as FrameModule from "ui/frame";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
  selector: 'pb-setting',
  templateUrl: 'pages/settings/settings.html'
})
export class SettingsComponent {

   constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private page: Page,
    private fonticon: TNSFontIconService,
    private _changeDetectionRef: ChangeDetectorRef,
    )
  {
  }

}

import {Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef} from "@angular/core";
import { User } from "../../shared/user/user";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { StatusService } from "../../shared/status/status.service";
import { Todo, Tracking, Comment } from "../../shared/todo/todo";
import { TicketService } from "../../shared/ticket/ticket.service";
import "rxjs/add/operator/switchMap";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { UserService } from "../../shared/user/user.service";
var timer = require("timer");
/* date picker */
import { ModalDatetimepicker, PickerOptions } from 'nativescript-modal-datetimepicker';
import {Config} from "../../shared/config";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";


@Component({
  selector: "pb-todo_detail",
  providers: [TicketService, StatusService, UserService],
  templateUrl: "pages/todo_detail/todo_detail.html",
  styleUrls: ["pages/todo_detail/todo_detail-common.css", "pages/todo_detail/todo_detail.css"]
})

export class Ticket_detailComponent {
  
  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute,
    private statusService :StatusService,
    private todoService :TicketService,
    private page: Page,
    private _changeDetectionRef: ChangeDetectorRef,
    private fonticon: TNSFontIconService,
    private userService: UserService,
  )
  {
    this.route.params.subscribe((params) => {
      this.getTicket(params["id"]);
    });

    this.page.css = "Page { background-color: #ffffff; } .page { padding-left: 0; padding:20; background-color: #ffffff;}";
  }

  getTicket(ticket_id){

  }

  navigateto(pagename: string) {
    this.routerExtensions.navigate([pagename], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
    });
  }

  

}

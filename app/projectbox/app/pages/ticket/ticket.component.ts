import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { StatusService } from "../../shared/status/status.service";
import { Ticket } from "../../shared/ticket/ticket";
import { TicketService } from "../../shared/ticket/ticket.service";
import "rxjs/add/operator/switchMap";
import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import * as FrameModule from "ui/frame";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as dialogs from "ui/dialogs";
import { NavComponent } from "../nav/nav.component";


@Component({
  selector: "pb-ticket",
  providers: [TicketService, StatusService, UserService],
  templateUrl: "pages/ticket/ticket.html",
  styleUrls: ["pages/ticket/ticket-common.css", "pages/ticket/ticket.css"]
})

export class TicketComponent implements OnInit {

  tickets :Ticket[];
  ticketForDetail :Boolean[];
  create: boolean;
  timestart :string;
  curUser :User = new User;
  avatar :string;
  public newTicket :Ticket = new Ticket();
  nav: NavComponent;
  meeting_tabs: String;
  public projectSelection :string[] = new Array<string>();

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private statusService :StatusService,
    private ticketService :TicketService,
    private _changeDetectionRef: ChangeDetectorRef,
    private page: Page,
    private fonticon: TNSFontIconService,
    private navState: NavComponent
    )
  {
    this.nav = navState;
    this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
  }

  ngOnInit(): void {
    this.ticketService.getTickets().then(
      (data) => this.displayTickets(data), 
      (error) => this.displayTickets(false)
    ).then(() => {
      this.ticketForDetail = new Array<Boolean>(this.tickets.length);
      this.tickets.forEach((element) => {
        this.ticketForDetail[element.id] = false;
      });
    });

    this.userService.getProjects()
      .then((data) => {
        data.projects.forEach((project) => {
          this.projectSelection[project.id] = project.name;
        });
      });
  }

  expand(id :string){
    this.ticketForDetail[id] = !this.ticketForDetail[id];
  }

  displayTickets(data :any){

    if(data){

      this.ticketService.saveTickets(data);
      this.tickets = data.tickets;

    }else{

      data = this.ticketService.getSavedTickets()
      this.tickets = data.tickets;
      
    }
  }

  cr_ticket() {
    this.create = true;
        this.page.css = "Page { background-color: #ffffff; } .page { padding-left: 0; padding:20; background-color: #ffffff;}";
  }

  cancel() {
    this.create = false;
          this.page.css = "Page { background-color: #dee8e7; } .page { padding-left: 20; background-color: #dee8e7;}";
  }

  createTicket() {
      this.ticketService.createTicket(this.newTicket);
      alert("Ticket erstellt");
      this.create = false;
  }

    state(id) {
        this.meeting_tabs = id;
    }

  /*
  saveTime(id :any){
    console.dir(this.temp);
    this.tickets.forEach(ticket => {
      if(id == ticket.id){
        let sec :number = 
        ((this.temp[id][3] * 3600) + (this.temp[id][4] * 60) + +this.temp[id][5]) 
        - ((this.temp[id][0] * 3600) + (this.temp[id][1] * 60) + +this.temp[id][2]);
        sec -= sec%60;
        ticket.timeTaken += (sec/60);
      }
    });
  }


  play_stop(id :any){
    if(this.temp[id][7] == 0){
      this.temp[id][7] = 1;
      let date :Date = new Date();
      this.temp[id][0] = date.getHours();
      this.temp[id][1] = date.getMinutes();
      this.temp[id][2] = date.getSeconds();
    }else{
      this.temp[id][7] = 0;
      let date :Date = new Date();
      this.temp[id][3] = date.getHours();
      this.temp[id][4] = date.getMinutes();
      this.temp[id][5] = date.getSeconds();
      this.saveTime(id);
      console.dir(this.temp);
    }

  }
  */
}

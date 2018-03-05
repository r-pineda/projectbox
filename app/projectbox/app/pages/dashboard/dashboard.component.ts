import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { StatusService } from "../../shared/status/status.service";
/*import { Router, ActivatedRoute } from "@angular/router";*/
import { RouterExtensions } from "nativescript-angular/router";
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
/*import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import * as FrameModule from "ui/frame";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';*/
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { User } from "../../shared/user/user";
import { TodoService } from "../../shared/todo/todo.service";
import { TicketService } from "../../shared/ticket/ticket.service";
import {Todo, Tracking} from "../../shared/todo/todo";
import { Ticket } from "../../shared/ticket/ticket";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: "pb-dashboard",
  providers: [UserService, MeetingService, StatusService, TodoService, TicketService],
  templateUrl: "pages/dashboard/dashboard.html",
  styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
})

export class DashboardComponent implements AfterViewInit, OnInit {

  curUser :User = new User;
  meetingdata :any;
  meetings :Meeting[] = new Array<Meeting>();
  displayedMeetings :Meeting[] = new Array<Meeting>();
  displayedTodos :Todo[] = new Array<Todo>();
  public offlinemode :boolean;
  projects :Project[];
  selectedProject :string = null; //id of the selected project
  avatar :string;
  todos :Todo[];
  tickets :Ticket[];
  all_projects :boolean = false;
  private nav :NavComponent;
  monthNames = ["Jänner", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
  public direction: number;

  constructor
  (
    /*private router: Router,*/
    private routerExtensions: RouterExtensions,
    /*private pageRoute: PageRoute,*/
    private userService: UserService,
    private meetingService :MeetingService,
    private todoService :TodoService,
    private ticketService :TicketService,
    private statusService :StatusService,
    private _changeDetectionRef: ChangeDetectorRef,
    private fonticon: TNSFontIconService,
    private navState: NavComponent
  )
  {
      this.nav = navState;

   /* this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
*/
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

    this.ticketService.getTickets().then(
      (data) => this.displayTickets(data), 
      (error) => this.displayTickets(false)
    );

    this.todoService.getTodos().then(
      (data) => this.displayTodos(data),
      (error) => this.displayTodos(false)
    );
  }

  public ngAfterViewInit() {

  }

  displayTickets(data :any){
    if(data){
      this.ticketService.saveTickets(data);
      this.tickets = data.tickets;
    }else{
      data = this.ticketService.getSavedTickets();
      this.tickets = data.tickets;
    }
  }

  displayTodos(data :any) {
      data.tasks.forEach((todo, index) => {        //alle todos durchlaufen
          /*Projektfarben für tasks herausfinden*/
          this.userService.getSingleProject(todo.project_id)
              .then(
                  (data) => {this.todos[index].color = data.projects[0].color},
                  (error) => {}
              );
          });
      if (data) {
          this.todoService.saveTodos(data);
          this.todos = data.tasks;
      } else {
          data = this.todoService.getSavedTodos();
          this.todos = data.tasks;
      }
      if (this.selectedProject) {
          this.displayedTodos = new Array<Todo>();
          data.tasks.forEach(todo => {
              if (todo.project == this.selectedProject) {
                  this.displayedTodos.push(todo);
              }
          });
      } else {
          this.displayedTodos = this.todos;
      }
      this.displayedTodos.splice(3,this.displayedTodos.length-1);
      this.displayedTodos.forEach((todo) => {
          var date = new Date(todo.due_date);
          todo.due_date_string = "bis " + date.getDay() + ". " + this.monthNames[date.getMonth()] + " " + date.getFullYear();
      });
  }

  displayMeetings(data :any){
    if(!data){
      data = this.meetingService.getSavedMeetings();
    }else {
        this.meetingService.saveMeetings(data);
    }
    data.meetings.forEach(meeting => {
          var curDate = new Date();
          var date = new Date(meeting.date);
          if (curDate.getDay() == date.getDay() && curDate.getMonth() == date.getMonth() && curDate.getFullYear() == date.getFullYear()) {
              meeting.dateFormatted = "HEUTE";
          } else {
              meeting.dateFormatted = date.getDay() + "." + date.getMonth() + "." + date.getFullYear().toString();
          }
      });
    this.meetings = data.meetings;
    if(this.selectedProject){
      this.displayedMeetings = new Array<Meeting>();
      data.meetings.forEach(meeting => {
        if(meeting.project == this.selectedProject){
          this.displayedMeetings.push(meeting);
        }
      });
    }else{
      this.displayedMeetings = this.meetings;
    }
    this.meetings.sort((a, b) => {return new Date(a.date).getTime() - new Date(b.date).getTime()});
      this.displayedMeetings.splice(3,this.displayedMeetings.length-1);
  }
  displayProjects(data :any){
    if(data){
      this.userService.saveProjects(data);
      this.projects = data.projects;
    }else{
      data = this.userService.getSavedProjects();
      this.projects = data.projects;
    }
  }

  filterByProject(id :string){
    if(this.selectedProject === id){
      this.selectedProject = null; //project de-selecten
    }else{
      this.selectedProject = id;
    }
    this.aktualisieren();
  }

  aktualisieren(){
    this.ngOnInit();
  }
  showDetail(id: number) {
    
      this.routerExtensions.navigate(["/meeting_detail/" + id], {
          
          transition: {
              name: "slide",
              curve: "easeOut"
          }
      });


  }
  setSelectedProject(id :string){
    this.selectedProject = id;
    this.ngOnInit();
  }

  state(view) {
    this.nav.appState = view + '';
  }

  showAllProjects() {
    this.all_projects = true;
  }

  limitProjects() {
    this.all_projects = false;
  }

  /* gesten */
    onSwipe(args: SwipeGestureEventData) {
        this.direction = args.direction;
        /* nach rechts */
        if (this.direction == 2) {
            this.state('todo');
        }

        /* nach links */
        if (this.direction == 1) {
            this.state('meeting');
        }

        /* nach unten */
        if (this.direction == 4) {
            this.state('ticket');
        }
    }
}

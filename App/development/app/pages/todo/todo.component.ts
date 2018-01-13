import {Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import { User } from "../../shared/user/user";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { StatusService } from "../../shared/status/status.service";
import { Todo, Tracking, Comment } from "../../shared/todo/todo";
import { TodoService } from "../../shared/todo/todo.service";
import "rxjs/add/operator/switchMap";
import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import * as FrameModule from "ui/frame";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { UserService } from "../../shared/user/user.service";
import { NavComponent } from "../nav/nav.component";


@Component({
  selector: "pb-todo",
  providers: [TodoService, StatusService, UserService],
  templateUrl: "pages/todo/todo.html",
  styleUrls: ["pages/todo/todo-common.css", "pages/todo/todo.css"]
})

export class TodoComponent {
  public newTodo :Todo = new Todo();
  public newTracking = new Tracking();
  public newTimerTracking = new Tracking();
  public newComment = new Comment();
  curUser :User = new User;
  avatar :string;
  todos :Todo[];
  todoForDetail :Boolean[];
  timestart :string;
  create :boolean;
  nav: NavComponent;
  public projectSelection :string[] = new Array<string>();//testen ob assotiativ funktioniert. || array[project_id] = project_name
  public phaseSelection :string[] = new Array<string>(); //dropdown selection zur auswahl der phase in der ein task created werden soll. wird befüllt nachdem der user ein Projekt ausgewählt hat.
  currentTracking :Tracking;

  
  
  //temp :number[][]; //dient zur temporären speicherungen der Zeiterfassung. 
                    //Ebene 1 des Arrays ist assoziativ mit den IDs von den Todos. die 2. Ebene enthält folgende Attribute:
                    //[0]startTime: Stunden
                    //[1]startTime: Minuten
                    //[2]startTime: Sekunden
                    //[3]endTime: Stunden
                    //[4]endTime: Minuten
                    //[5]endTime: Sekunden
                    //[6]errechnete dauer des Eintrags
                    //[7]TimerRunning :0 = false, 1 = true

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private statusService :StatusService,
    private todoService :TodoService,
    private page: Page,
    private _changeDetectionRef: ChangeDetectorRef,
    private fonticon: TNSFontIconService,
    private userService: UserService,
    private navState: NavComponent
  )
  {
    this.nav = navState;
    this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;

  }

  ngOnInit(): void {
    var that = this;
    this.todoService.getTodos()
    .then(
      (data) => this.displayTodos(data),
      (error) => this.displayTodos(null)
    );
    this.userService.getProjects()
    .then((data) => {
      data.projects.forEach((project) => {
        this.projectSelection[project.id] = project.name;
      });
    })
    this.create = false;
    this.page.css = ".details { height: 0;}";
    this.phaseSelection.push("Select a project first!")

    /*
    this.temp = new Array(this.todos.length);
    this.todos.forEach(element => {
      this.temp[element.id] = [];
      //this.temp[element.id][6] = element.timeTaken;
      this.temp[element.id][7] = 0;
    });
    */
  }

  cr_task() {
    this.create = true;
    this.page.css = "Page { background-color: #ffffff; } .page { padding-left: 0; padding:20; background-color: #ffffff;}";
  }

  cancel() {
  /*  this.create = false;
    this.page.css = "Page { background-color: #dee8e7; } .page { padding-left: 20; background-color: #dee8e7;}";*/
  }

 expand(id :string){
    this.todoForDetail[id] = !this.todoForDetail[id];
    this.page.css = ".details { height: auto; }";
  }

  displayTodos(data :any){
        if(data){
          this.todoService.saveTodos(data);
          this.todos = data.tasks;
        }else{
          data = this.todoService.getSavedTodos();
          this.todos = data.tasks;
        }
        this.todos.forEach(todo => {
          todo.trackingsFull = new Array<Tracking>();
        });

        this.todos.forEach((todo, index) => {        //alle todos durchlaufen
          this.userService.getSingleProject(todo.project_id)
            .then(
              (data) => {this.todos[index].color = data.projects[0].color},
              (error) => {}
            )
          this.todoService.fillComments(todo.id)
            .then(
              (data) => {this.todos[index].comments = data.comments},
              (error) => {alert("offlineComments not available in this version of projectbox®")}
          )
          todo.trackings.forEach(tracking => {//für jedes todo alle trackings durchlaufen
            this.todoService.fillTracking(tracking)   //todoService gibt zur trackingID ein tracking objekt zurück
            .then((data) => {
              this.todos[index].trackingsFull.push(data.trackings[0]);
              console.log("scanning for unfinished trackings..... " + data.trackings[0].id);
              if(!data.trackings[0].finished){
                this.currentTracking = data.trackings[0];
                console.log("unfinished Tracking detected! name: " + this.currentTracking.description);
              }
            },
            (error) => {alert("offlineTrackings not supported")});
                        
          });
          
        });

        this.todoForDetail = new Array<Boolean>(this.todos.length);
        this.todos.forEach((element) => {
          this.todoForDetail[element.id] = false;
        });
      }
/*
  saveTime(id :any){
    console.dir(this.temp);
    this.todos.forEach(todo => {
      if(id == todo.id){
        let sec :number =
        ((this.temp[id][3] * 3600) + (this.temp[id][4] * 60) + +this.temp[id][5])
        - ((this.temp[id][0] * 3600) + (this.temp[id][1] * 60) + +this.temp[id][2]);
        sec -= sec%60;
        //todo.timeTaken += (sec/60);
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
  createTracking(task_id :string){
    //started_at, finished_at, description müssen ins frontend gebinded werden
    this.newTracking.task = task_id;
    this.todoService.createTracking(this.newTracking);
  }

  navigateto(pagename: string) {
    this.routerExtensions.navigate([pagename], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
  });
}

    createTodo(){
      //this.newTodo.name = "created with mobile app";
      //this.newTodo.project = "619492ee-6fb5-4afd-b0b1-d6140392951a";
      //this.getPhases();
      //this.todoService.createTodo(this.newTodo);
      this.create = false;
      this.ngOnInit();
    }

    createComment(task_id :string){
      this.newComment.task = task_id;
      this.todoService.createComment(this.newComment);
    }

    getPhases(){
      this.userService.getSingleProject(this.newTodo.project)
        .then(
          (data) => {
            this.phaseSelection = new Array<string>();
            data.phases.forEach((phase) => {
              this.phaseSelection.push(phase.name);
            });
          },
          (error) => {})
    }

    startTimer(task_id :string){
      if(!this.currentTracking){
        this.currentTracking = new Tracking();
        this.currentTracking.task = task_id;
        this.currentTracking.started_at = new Date();
        this.currentTracking.finished = false;
        this.currentTracking.description = "mobile tracking";
        this.currentTracking.user = null
        this.todoService.createTracking(this.currentTracking)
        .then((data) => {
          this.todos.forEach((todo) => {
            if(todo.id === task_id){
              todo.trackings.push(data.trackings[0].id);
              todo.trackingsFull.push(data.trackings[0]);
              this.todoService.updateTodo(todo);
            }
          });
        });
      }else{
        alert("stop your currently running timer first!");
      }
    }

    stopTimer(){
      this.currentTracking.finished = true;
      this.currentTracking.finished_at = new Date();
      this.todoService.updateTracking(this.currentTracking);
    }
}

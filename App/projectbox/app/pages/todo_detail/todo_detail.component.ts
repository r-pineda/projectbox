import {Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import { User } from "../../shared/user/user";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { StatusService } from "../../shared/status/status.service";
import { Todo, Tracking, Comment } from "../../shared/todo/todo";
import { TodoService } from "../../shared/todo/todo.service";
import "rxjs/add/operator/switchMap";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { UserService } from "../../shared/user/user.service";
var timer = require("timer");


@Component({
  selector: "pb-todo_detail",
  providers: [TodoService, StatusService, UserService],
  templateUrl: "pages/todo_detail/todo_detail.html",
  styleUrls: ["pages/todo_detail/todo_detail-common.css", "pages/todo_detail/todo_detail.css"]
})

export class Todo_detailComponent {
  todo: Todo;
  public newTracking = new Tracking();
  public newTimerTracking = new Tracking();
  public newComment = new Comment();
  timestart :string;
  public projectSelection :string[] = new Array<string>();//testen ob assotiativ funktioniert. || array[project_id] = project_name
  public phaseSelection :string[] = new Array<string>();  //dropdown selection zur auswahl der phase in der ein task created werden soll. wird befüllt nachdem der user ein Projekt ausgewählt hat.
  timerString :string;
  tracker :any;
  trackedSeconds :number;
  currentTracking :Tracking;
  task_tabs: string;

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute,
    private statusService :StatusService,
    private todoService :TodoService,
    private page: Page,
    private _changeDetectionRef: ChangeDetectorRef,
    private fonticon: TNSFontIconService,
    private userService: UserService,
  )
  {
    this.route.params.subscribe((params) => {
      this.getTodo(params["id"]);
    });

    this.task_tabs = 'timetracking';

    this.page.css = "Page { background-color: #ffffff; } .page { padding-left: 0; padding:20; background-color: #ffffff;}";
  }

  ngOnInit(): void {}

  navigateto(pagename: string) {
    this.routerExtensions.navigate([pagename], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
    });
  }

  getTodo(todo_id :string){
    this.todoService.getSingleTodo(todo_id)
      .then((data) => {
        this.todo = data.tasks[0];
        console.dir(this.todo);
      });
    
  }

    createComment(task_id :string){
      this.newComment.task = task_id;
      this.todoService.createComment(this.newComment);
    }
/*
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
        this.timerString = "00:00:00";
        this.tracker = setInterval(() => {
          this.trackedSeconds++;
          let minsecs = this.trackedSeconds%60;
          let hours = (this.trackedSeconds-minsecs)/60;
          let seconds = minsecs%60;
          let minutes = (minsecs-seconds)/60;
          this.timerString = "" + (hours>9?hours:"0"+hours) + ":" + (minutes>9?minutes:"0"+minutes) + ":" + (seconds>9?seconds:"0"+seconds);
      }, 1000);

      }else{
        alert("stop your currently running timer first!");
      }
    }

    stopTimer(){
      this.currentTracking.finished = true;
      this.currentTracking.finished_at = new Date();
      this.todoService.updateTracking(this.currentTracking);
    }

*/

    state(id) {
        this.task_tabs = id;
    }

    getAvatar(user_id){
      this.userService.getUser(user_id)
        .then((data) => {
          return "https://secure.projectbox.eu/v2/user/avatar/" + data.avatar + "?access_token=" + this.userService.getCurrentUser().access_token;
        });
    }

    cancel() {
        this.routerExtensions.backToPreviousPage();
    }
}

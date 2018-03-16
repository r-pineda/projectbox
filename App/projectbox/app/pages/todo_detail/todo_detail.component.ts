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
/* date picker */
import { ModalDatetimepicker, PickerOptions } from 'nativescript-modal-datetimepicker';
import {Config} from "../../shared/config";


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
  public projectSelection :string[] = new Array<string>();
  public phaseSelection :string[] = new Array<string>();  //dropdown selection zur auswahl der phase in der ein task created werden soll. wird befüllt nachdem der user ein Projekt ausgewählt hat.
  task_tabs: string;
  trackings :Tracking[] = new Array<Tracking>();
  isPL :boolean;
  userAvatar :string = "";
  totalTime :number = 0;
  totalTimeString :string;

    /* date picker */
    public date: string;
    private modalDatetimepicker: ModalDatetimepicker;


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

    this.userAvatar = Config.apiUrl + "v2/user/avatar/" + this.userService.getCurrentUser().avatar + "?access_token=" + Config.token;

    this.task_tabs = 'timetracking';

    this.page.css = "Page { background-color: #ffffff; } .page { padding-left: 0; padding:20; background-color: #ffffff;}";
      this.modalDatetimepicker = new ModalDatetimepicker();
  }

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
        this.todo.comments = data.comments;
        if(this.todo.comments){
          this.todo.comments.forEach((comment) => {
            this.userService.getUser(comment.user_id)
                .then((data) => {
                  comment.userImage = Config.apiUrl + "v2/user/avatar/" + data.users[0].avatar + "?access_token=" + Config.token;
                  comment.userFName = data.users[0].first_name;
                  comment.userLName = data.users[0].last_name;
                });
            var date = new Date (comment.created_at);
            var month = date.setMonth(date.getMonth()+1);
            comment.date = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " um " + date.getHours() + ":" + date.getMinutes();
          });
        }
        let trackingsprocessed :number = 0;
        this.todo.trackings.forEach((tracking, index, array) => {
          this.todoService.fillTracking(tracking)
          .then((data) => {
            let startDate = new Date (data.trackings[0].created_at);
            let elapsedTime = Math.round((new Date(data.trackings[0].finished_at).getTime() - new Date(data.trackings[0].started_at).getTime())/1000);
            this.totalTime += elapsedTime; //counting together the length of all trackings
            trackingsprocessed++;
            if(trackingsprocessed === array.length) {
              let minsecs = this.totalTime%3600;
              let hours = (this.totalTime-minsecs)/3600;
              let seconds = minsecs%60;
              let minutes = (minsecs-seconds)/60;
              this.totalTimeString = "" + (hours>9?hours:"0"+hours) + ":" + (minutes>9?minutes:"0"+minutes) + ":" + (seconds>9?seconds:"0"+seconds);
            }
            let minsecs = elapsedTime%3600;
            let hours = (elapsedTime-minsecs)/3600;
            let seconds = minsecs%60;
            let minutes = (minsecs-seconds)/60;
            data.trackings[0].timerString = "" + (hours>9?hours:"0"+hours) + ":" + (minutes>9?minutes:"0"+minutes) + ":" + (seconds>9?seconds:"0"+seconds);
            return data;

          })
          .then((data) => {
            if(data.trackings[0].finished){
              this.trackings.push(data.trackings[0]);
            }
          });

        });
        this.userService.getSingleProject(this.todo.project)
          .then((data) =>{
            this.isPL = (data.projects[0].user == this.userService.getCurrentUser().id);
          });
      });
  }

    createComment(){
      this.newComment.task = this.todo.id;
      this.todoService.createComment(this.newComment)
        .then(() => {
          if(!this.todo.comments){
            this.todo.comments = new Array<Comment>();
          }
          this.newComment.userImage = Config.apiUrl + "v2/user/avatar/" + this.userService.getCurrentUser().avatar + "?access_token=" + Config.token;
          this.newComment.userFName = this.userService.getCurrentUser().first_name;
          this.newComment.userLName = this.userService.getCurrentUser().last_name;
          this.newComment.created_at = "jetzt";
          this.todo.comments.push(this.newComment);
          this.newComment = new Comment();
        });
    }

    state(id) {
        this.task_tabs = id;
    }

    getAvatar(user_id){
      this.userService.getUser(user_id)
        .then((data) => {
          return Config.apiUrl + "v2/user/avatar/" + data.avatar + "?access_token=" + Config.token;
        });
    }

    cancel() {
        this.routerExtensions.backToPreviousPage();
    }

    saveTodo() {
      this.todoService.updateTodo(this.todo);
      this.cancel();
    }

    /* date picker */
    selectDate() {
        this.modalDatetimepicker.pickDate(<PickerOptions>{
            title: "Datum auswählen",
            theme: "dark",
            startingDate: new Date(),
            maxDate: new Date('2030-12-31'), /* hier maxDate setzen */
            minDate: new Date()
        }).then((result:any) => {
            if (result) {
                this.date = result.day + "." + result.month + "." + result.year;
                this.todo.due_date = new Date(result.day, result.month, result.year);
            }
        })
            .catch((error) => {
                console.log("Error: " + error);
            });
    };

    deleteTracking(t_id :string){
      this.todoService.deleteTracking(t_id)
        .then(() => {
          this.reloadTrackings();
        })
    }

    reloadTrackings(){
      this.todoService.getSingleTodo(this.todo.id)
      .then((data) => {
        this.todo.trackings = data.tasks[0].trackings;
        this.trackings = new Array<Tracking>();
        this.todo.trackings.forEach((tracking, index) => {
          let currentItem :number = index;
          this.todoService.fillTracking(tracking)
          .then((data) => {
            let elapsedTime = Math.round((new Date(data.trackings[0].finished_at).getTime() - new Date(data.trackings[0].started_at).getTime())/1000);
            let minsecs = elapsedTime%3600;
            let hours = (elapsedTime-minsecs)/3600;
            let seconds = minsecs%60;
            let minutes = (minsecs-seconds)/60;
            data.trackings[0].timerString = "" + (hours>9?hours:"0"+hours) + ":" + (minutes>9?minutes:"0"+minutes) + ":" + (seconds>9?seconds:"0"+seconds);
            return data;

          })
          .then((data) => {
            if(data.trackings[0].finished){
              this.trackings.push(data.trackings[0]);
            }
          });
        });
      });
    }
}

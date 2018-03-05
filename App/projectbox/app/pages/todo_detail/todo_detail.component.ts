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
  public projectSelection :string[] = new Array<string>();//testen ob assotiativ funktioniert. || array[project_id] = project_name
  public phaseSelection :string[] = new Array<string>();  //dropdown selection zur auswahl der phase in der ein task created werden soll. wird befüllt nachdem der user ein Projekt ausgewählt hat.
  task_tabs: string;
  trackings :Tracking[] = new Array<Tracking>();
  isPL :boolean;


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
        this.todo.comments = data.comments;
        if(this.todo.comments.length > 0){
          this.todo.comments.forEach((comment) => {
            this.userService.getUser(comment.user_id)
                .then((data) => {
                  comment.userImage = "https://api.agiletoolz.com/v2/user/avatar/" + data.users[0].avatar + "?access_token=" + this.userService.getCurrentUser().access_token;
                });
              var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              //comment.date = new Date(comment.created_at).toLocaleDateString('de-DE', options);
          });
        }
        this.todo.trackings.forEach((tracking) => {
          this.trackings.push(data.trackings[0]);
        });
        this.userService.getSingleProject(this.todo.project)
          .then((data) =>{
            this.isPL = (data.projects[0].user == this.userService.getCurrentUser().id);
            console.log(this.isPL);
          });
      });

  }

    createComment(){
      this.newComment.task = this.todo.id;
      this.todoService.createComment(this.newComment)
        .then(() => {
          this.getTodo(this.todo.id);
        });
      this.newComment = new Comment();
    }

    state(id) {
        this.task_tabs = id;
    }

    getAvatar(user_id){
      this.userService.getUser(user_id)
        .then((data) => {
          return "https://api.agiletoolz.com/v2/user/avatar/" + data.avatar + "?access_token=" + this.userService.getCurrentUser().access_token;
        });
    }

    cancel() {
        this.routerExtensions.backToPreviousPage();
    }
}

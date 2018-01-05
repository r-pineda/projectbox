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


@Component({
  selector: "pb-todo",
  providers: [TodoService, StatusService, UserService],
  templateUrl: "pages/todo/todo.html",
  styleUrls: ["pages/todo/todo-common.css", "pages/todo/todo.css"]
})

export class TodoComponent {
  public newTodo :Todo = new Todo();
  public newTracking = new Tracking();
  curUser :User = new User;
  avatar :string;
  todos :Todo[];
  todoForDetail :Boolean[];
  timestart :string;
  create :boolean;
  temp :number[][]; //dient zur temporären speicherungen der Zeiterfassung. 
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
    private userService: UserService
  )
  {
    this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;

  }

  ngOnInit(): void {
    var that = this;
    this.todoService.getTodos()
    .then(
      (data) => this.displayTodos(data),
      (error) => this.displayTodos(null)
    ).then(() => {
      this.todos.forEach((todo, index) => {        //alle todos durchlaufen
        this.todoService.fillComments(todo.id)
          .then(
            (data) => {that.todos[index].comments = data.comments},
            (error) => {alert("offlineComments not available in this version of projectbox®")}
        )
        todo.trackings.forEach(tracking => {//für jedes todo alle trackings durchlaufen
          this.todoService.fillTracking(tracking)   //todoService gibt zur trackingID ein tracking objekt zurück
          .then((data) => {
            that.todos[index].trackingsFull.push(data.trackings[0]);
          },
          (error) => {alert("offlineTrackings not supported")})
        });
      });
        
         this.todoForDetail = new Array<Boolean>(this.todos.length);
      this.todos.forEach((element) => {
        this.todoForDetail[element.id] = false;
      });
    })
    .then(() => {console.dir(this.todos)});
    this.create = false;

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
    this.create = false;
    this.page.css = "Page { background-color: #dee8e7; } .page { padding-left: 20; background-color: #dee8e7;}";
  }

 expand(id :string){
    this.todoForDetail[id] = !this.todoForDetail[id];
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
  saveNewTracking(task_id :string){
    //started_at, finished_at, description müssen ins frontend gebinded werden
    this.newTracking.user = null;
    this.newTracking.task = task_id;
    this.newTracking.finished = true;
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
      this.todoService.createTodo(this.newTodo);
        alert("Task erstellt");
      this.create = false;
    }
}

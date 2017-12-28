import {Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import { User } from "../../shared/user/user";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { StatusService } from "../../shared/status/status.service";
import { Todo } from "../../shared/todo/todo";
import { TodoService } from "../../shared/todo/todo.service";
import "rxjs/add/operator/switchMap";
import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import * as FrameModule from "ui/frame";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { UserService } from "../../shared/user/user.service";


@Component({
  selector: "my-todo",
  providers: [TodoService, StatusService, UserService],
  templateUrl: "pages/todo/todo.html",
  styleUrls: ["pages/todo/todo-common.css", "pages/todo/todo.css"]
})

export class TodoComponent {
  public newTodo :Todo = new Todo();
  curUser :User = new User;
  avatar :string;
  todos :Todo[];
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
    this.todoService.getTodos()
    .then((data) => this.displayTodos(data));
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
  }
  
  displayTodos(data :any){
    
        if(data){
    
          this.todoService.saveTodos(data);
          this.todos = data.todos;
    
        }else{
    
          data = this.todoService.getSavedTodos()
          this.todos = data.tickets;
          
        }
        console.dir(this.todos);
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
  navigateto(pagename: string) {
    this.routerExtensions.navigate([pagename], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
  });
}

    saveNewTodo(){
      this.todoService.createTodo(this.newTodo);
    }
}

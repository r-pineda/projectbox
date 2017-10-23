import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { StatusService } from "../../shared/status/status.service";
import { Todo } from "../../shared/todo/todo";
import { TodoService } from "../../shared/todo/todo.service";

@Component({
  selector: "my-app",
  providers: [TodoService, StatusService],
  templateUrl: "pages/todo/todo.html",
  styleUrls: ["pages/todo/todo-common.css", "pages/todo/todo.css"]
})

export class TodoComponent {

  todos :Todo[];
  timestart :string;
  temp :number[][]; //dient zur temporären speicherungen der Zeiterfassung. 
                    //Ebene 1 des Arrays ist assoziativ mit den IDs von den Todos. die 2. Ebene enthält folgende Attribute:
                    //[0]startTime: Stunden
                    //[1]startTime: Minuten
                    //[2]endTime: Stunden
                    //[3]endTime: Minuten
                    //[4]errechnete dauer des Eintrags
                    //[5]TimerRunning :boolean

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private statusService :StatusService,
    private todoService :TodoService,
    private page: Page
  )
  {
    page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.todos = this.todoService.todosDummy();
    this.temp = new Array(this.todos.length);
    this.todos.forEach(element => {
      this.temp[element.id] = [];
      this.temp[element.id][4] = element.timeTaken;
      this.temp[element.id][5] = 0;
    });
  }

  saveTime(id :any){
    console.dir(this.temp);
    this.todos.forEach(todo => {
      if(id == todo.id){
        todo.timeTaken += ((this.temp[id][2] * 60) + +this.temp[id][3]) - ((this.temp[id][0] * 60) + +this.temp[id][1]); 
      }
    });
  }


  play_stop(id :any){
    if(this.temp[id][5] == 0){
      this.temp[id][5] = 1;
      let date :Date = new Date();
      this.temp[id][0] = date.getHours();
      this.temp[id][1] = date.getMinutes();
    }else{
      this.temp[id][5] = 0;
      let date :Date = new Date();
      this.temp[id][2] = date.getHours();
      this.temp[id][3] = date.getMinutes();
      this.saveTime(id);
    }

  }

}

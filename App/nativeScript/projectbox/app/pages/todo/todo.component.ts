import { Component } from "@angular/core";
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

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private statusService :StatusService,
    private todoService :TodoService 
  )
  {}
}

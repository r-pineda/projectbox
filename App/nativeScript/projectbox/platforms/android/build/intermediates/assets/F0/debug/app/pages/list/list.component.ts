import { Component } from "@angular/core";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  providers: [UserService],
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent {

  meetings :String;

  constructor(private userService: UserService) {
    
    this.meetings = "Lade..."

    this.userService.meetings().subscribe(
      (data) => this.meetings = JSON.stringify(data),
      (error) => alert("Unfortunately we could not find any meetings.")
    );
  }
}
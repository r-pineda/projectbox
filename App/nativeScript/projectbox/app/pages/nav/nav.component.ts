import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, NgModule } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from "@angular/router";
import { RouterExtensions, NativeScriptRouterModule } from "nativescript-angular/router";
import { Project, Pivot } from "../../shared/user/project";
import "rxjs/add/operator/switchMap";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { User } from "../../shared/user/user";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { routes } from "../../app.routing";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { TodoComponent } from "../todo/todo.component";
import { TicketComponent } from "../ticket/ticket.component";
import { NavModule } from "./nav.module";

@Component({
  selector: "app-nav",
  providers: [UserService],
  templateUrl: "pages/nav/nav.html",
  styleUrls: ["pages/nav/nav-common.css"]
})


@NgModule({
  bootstrap: [NavComponent],
  imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
  ]
})

export class NavComponent implements AfterViewInit, OnInit {

  curUser :User = new User;
  avatar :string;
  curView :string;

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    //private pageRoute: PageRoute,
    private userService: UserService,
    private _changeDetectionRef: ChangeDetectorRef,
  )
  {

    this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;

  }
  
  public ngOnInit() {
    this.curView = 'dashboard';
  }
      

logout(){
this.drawer.closeDrawer();
this.routerExtensions.navigate(["/login"], {
animated:true,
transition: {
  name: "slide",
  curve: "easeOut"
}
});
}

navigateto(view) {
  this.curView = view;
  console.log(view);
}
@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }
}


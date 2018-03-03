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
import { FileObject } from "../../shared/user/fileObject"
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
  selector: "pb-nav",
  providers: [UserService],
  templateUrl: "pages/nav/nav.html",
  styleUrls: ["pages/nav/nav-common.css"]
})


@NgModule({
  bootstrap: [NavComponent],
  imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [UserService]
})

export class NavComponent implements AfterViewInit, OnInit {

  curUser :User = new User;
  userFiles :FileObject[];
  avatar :string;
  appState :string = 'dashboard';

  constructor
  (
    private router: Router,
    private routerExtensions: RouterExtensions,
    //private pageRoute: PageRoute,
    private userService: UserService,
    private fonticon: TNSFontIconService,
    private _changeDetectionRef: ChangeDetectorRef
  )
  {

    this.curUser = this.userService.getCurrentUser();
    this.avatar = "https://api.agiletoolz.com/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;

  }
  
  public ngOnInit() {
    this.userService.getFiles().then(
      (data) => this.displayFiles(data),
      (error) => this.displayFiles(false)
    );
  }

  displayFiles(data :any){
    if(data){
      this.userFiles = data.files;
    }else{
      data = this.userService.getSavedFiles();
      this.userFiles = data.files;
    }
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

  state(view) {
    this.appState = view + '';
    this.onCloseDrawerTap();
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


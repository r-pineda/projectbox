"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var user_1 = require("../../shared/user/user");
var app_routing_1 = require("../../app.routing");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var todo_component_1 = require("../todo/todo.component");
var ticket_component_1 = require("../ticket/ticket.component");
var NavComponent = (function () {
    function NavComponent(router, routerExtensions, pageRoute, userService, _changeDetectionRef) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.userService = userService;
        this._changeDetectionRef = _changeDetectionRef;
        this.curUser = new user_1.User;
        this.curUser = this.userService.getCurrentUser();
        this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
    }
    NavComponent_1 = NavComponent;
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.logout = function () {
        this.drawer.closeDrawer();
        this.routerExtensions.navigate(["/login"], {
            animated: true,
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    NavComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    NavComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    NavComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], NavComponent.prototype, "drawerComponent", void 0);
    NavComponent = NavComponent_1 = __decorate([
        core_1.Component({
            selector: "app-nav",
            providers: [user_service_1.UserService],
            templateUrl: "pages/nav/nav.html",
            styleUrls: ["pages/nav/nav-common.css"]
        }),
        core_1.NgModule({
            bootstrap: [NavComponent_1],
            entryComponents: [dashboard_component_1.DashboardComponent, todo_component_1.TodoComponent, ticket_component_1.TicketComponent],
            imports: [
                router_2.NativeScriptRouterModule,
                router_2.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_2.PageRoute,
            user_service_1.UserService,
            core_1.ChangeDetectorRef])
    ], NavComponent);
    return NavComponent;
    var NavComponent_1;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFDekcsK0RBQTZEO0FBQzdELDBDQUF5RjtBQUN6RixzREFBb0c7QUFFcEcsdUNBQXFDO0FBQ3JDLGtFQUFnRztBQUVoRywrQ0FBOEM7QUFFOUMsaURBQTJDO0FBQzNDLHdFQUFzRTtBQUN0RSx5REFBdUQ7QUFDdkQsK0RBQTZEO0FBb0I3RDtJQUtFLHNCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsU0FBb0IsRUFDcEIsV0FBd0IsRUFDeEIsbUJBQXNDO1FBSnRDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQVRoRCxZQUFPLEdBQVMsSUFBSSxXQUFJLENBQUM7UUFhdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsOENBQThDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFFcEksQ0FBQztxQkFsQlUsWUFBWTtJQW9CaEIsK0JBQVEsR0FBZjtJQUNBLENBQUM7SUFHSCw2QkFBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsUUFBUSxFQUFDLElBQUk7WUFDYixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7U0FDQSxDQUFDLENBQUM7SUFDSCxDQUFDO0lBS0csc0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVDQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWQ4QjtRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7eURBQUM7SUFuQ3JFLFlBQVk7UUFqQnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQztRQUdELGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLGNBQVksQ0FBQztZQUN6QixlQUFlLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSw4QkFBYSxFQUFFLGtDQUFlLENBQUM7WUFDckUsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7YUFDM0M7U0FDRixDQUFDO3lDQVNrQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3ZCLGtCQUFTO1lBQ1AsMEJBQVc7WUFDSCx3QkFBaUI7T0FYckMsWUFBWSxDQWtEeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQaXZvdCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci9wcm9qZWN0XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vLi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tIFwiLi4vdG9kby90b2RvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUaWNrZXRDb21wb25lbnQgfSBmcm9tIFwiLi4vdGlja2V0L3RpY2tldC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF2TW9kdWxlIH0gZnJvbSBcIi4vbmF2Lm1vZHVsZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXBwLW5hdlwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9uYXYvbmF2Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL25hdi9uYXYtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgYm9vdHN0cmFwOiBbTmF2Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvZG9Db21wb25lbnQsIFRpY2tldENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgY3VyVXNlciA6VXNlciA9IG5ldyBVc2VyO1xyXG4gIGF2YXRhciA6c3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gIClcclxuICB7XHJcblxyXG4gICAgdGhpcy5jdXJVc2VyID0gdGhpcy51c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgdGhpcy5hdmF0YXIgPSBcImh0dHBzOi8vc2VjdXJlLnByb2plY3Rib3guZXUvdjIvdXNlci9hdmF0YXIvXCIgKyB0aGlzLmN1clVzZXIuYXZhdGFyICsgXCI/YWNjZXNzX3Rva2VuPVwiICsgdGhpcy5jdXJVc2VyLmFjY2Vzc190b2tlbjtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgICAgIFxyXG5cclxubG9nb3V0KCl7XHJcbnRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbnRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHtcclxuYW5pbWF0ZWQ6dHJ1ZSxcclxudHJhbnNpdGlvbjoge1xyXG4gIG5hbWU6IFwic2xpZGVcIixcclxuICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxufVxyXG59KTtcclxufVxyXG5cclxuQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcclxuICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
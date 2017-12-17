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
var NavComponent = (function () {
    function NavComponent(router, routerExtensions, 
        //private pageRoute: PageRoute,
        userService, _changeDetectionRef) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this._changeDetectionRef = _changeDetectionRef;
        this.curUser = new user_1.User;
        this.curUser = this.userService.getCurrentUser();
        this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
    }
    NavComponent_1 = NavComponent;
    NavComponent.prototype.ngOnInit = function () {
        this.curView = 'dashboard';
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
    NavComponent.prototype.navigateto = function (view) {
        this.curView = view;
        console.log(view);
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
            imports: [
                router_2.NativeScriptRouterModule,
                router_2.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            user_service_1.UserService,
            core_1.ChangeDetectorRef])
    ], NavComponent);
    return NavComponent;
    var NavComponent_1;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFDekcsK0RBQTZEO0FBQzdELDBDQUF5RjtBQUN6RixzREFBeUY7QUFFekYsdUNBQXFDO0FBQ3JDLGtFQUFnRztBQUVoRywrQ0FBOEM7QUFFOUMsaURBQTJDO0FBc0IzQztJQU1FLHNCQUVVLE1BQWMsRUFDZCxnQkFBa0M7UUFDMUMsK0JBQStCO1FBQ3ZCLFdBQXdCLEVBQ3hCLG1CQUFzQztRQUp0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUVsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBVmhELFlBQU8sR0FBUyxJQUFJLFdBQUksQ0FBQztRQWN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUVwSSxDQUFDO3FCQW5CVSxZQUFZO0lBcUJoQiwrQkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDN0IsQ0FBQztJQUdILDZCQUFNLEdBQU47UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQyxRQUFRLEVBQUMsSUFBSTtZQUNiLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtTQUNBLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUlHLHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSx1Q0FBZ0IsR0FBdkI7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFkOEI7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCO3lEQUFDO0lBekNyRSxZQUFZO1FBaEJ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7UUFHRCxlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyxjQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7YUFDM0M7U0FDRixDQUFDO3lDQVVrQixlQUFNO1lBQ0kseUJBQWdCO1lBRXJCLDBCQUFXO1lBQ0gsd0JBQWlCO09BWnJDLFlBQVksQ0F3RHhCO0lBQUQsbUJBQUM7O0NBQUEsQUF4REQsSUF3REM7QUF4RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFBpdm90IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3Byb2plY3RcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi8uLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gXCIuLi90b2RvL3RvZG8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpY2tldENvbXBvbmVudCB9IGZyb20gXCIuLi90aWNrZXQvdGlja2V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZNb2R1bGUgfSBmcm9tIFwiLi9uYXYubW9kdWxlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtbmF2XCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL25hdi9uYXYuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbmF2L25hdi1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBib290c3RyYXA6IFtOYXZDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcblxyXG4gIGN1clVzZXIgOlVzZXIgPSBuZXcgVXNlcjtcclxuICBhdmF0YXIgOnN0cmluZztcclxuICBjdXJWaWV3IDpzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIC8vcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApXHJcbiAge1xyXG5cclxuICAgIHRoaXMuY3VyVXNlciA9IHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIHRoaXMuYXZhdGFyID0gXCJodHRwczovL3NlY3VyZS5wcm9qZWN0Ym94LmV1L3YyL3VzZXIvYXZhdGFyL1wiICsgdGhpcy5jdXJVc2VyLmF2YXRhciArIFwiP2FjY2Vzc190b2tlbj1cIiArIHRoaXMuY3VyVXNlci5hY2Nlc3NfdG9rZW47XHJcblxyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmN1clZpZXcgPSAnZGFzaGJvYXJkJztcclxuICB9XHJcbiAgICAgIFxyXG5cclxubG9nb3V0KCl7XHJcbnRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbnRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHtcclxuYW5pbWF0ZWQ6dHJ1ZSxcclxudHJhbnNpdGlvbjoge1xyXG4gIG5hbWU6IFwic2xpZGVcIixcclxuICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxufVxyXG59KTtcclxufVxyXG5cclxubmF2aWdhdGV0byh2aWV3KSB7XHJcbiAgdGhpcy5jdXJWaWV3ID0gdmlldztcclxuICBjb25zb2xlLmxvZyh2aWV3KTtcclxufVxyXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
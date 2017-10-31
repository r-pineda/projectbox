"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
//import { AppShortcuts } from "nativescript-app-shortcuts";
//import { isIOS } from "tns-core-modules/platform";
var status_service_1 = require("../../shared/status/status.service");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var enums_1 = require("ui/enums");
var LoginComponent = (function () {
    function LoginComponent(router, routerExtensions, activatedRoute, userService, statusService, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.statusService = statusService;
        this.page = page;
        this.isLoggingIn = true;
        this.wrongcredentials = false;
        this.user = new user_1.User();
        //this.user.email = "michael.fruehwirth@htl.rennweg.at";
        //this.user.password = "michael1234";
        page.actionBarHidden = true;
        // instantiate the plugin
        //let appShortcuts = new AppShortcuts();
        /*
            appShortcuts.available().then(available => {
            if (available) {
                console.log("This device supports app shortcuts");
            } else {
                //console.log("No app shortcuts capability, ask the user to upgrade :)");
            }
            });
        
            appShortcuts.configureQuickActions([
                {
                    type: "dashboard",
                    title: "Dashboard",
                    //subtitle: "Gelange zum Dashboard", // iOS only
                    iconTemplate: "dashboard" // ignored by iOS, if iconType is set as well
                },
                {
                    type: "task",
                    title: "Tasks",
                    //subtitle: "Übersicht aller Tasks", // iOS only
                    iconTemplate: "task" // ignored by iOS, if iconType is set as well
                },
                {
                    type: "meeting",
                    title: "Meetings",
                    //subtitle: "Übersicht aller Meetings", // iOS only
                    iconTemplate: "meeting" // ignored by iOS, if iconType is set as well
                },
                {
                    type: "ticket",
                    title: "Tickets",
                    //subtitle: "Liste der Tickets", // iOS only
                    iconTemplate: "bug"
                },
                {
                    type: "seeting",
                    title: "Einstellungen",
                    //subtitle: "Ändere dein Profil", // iOS only
                    iconTemplate: "setting"
                },
                ]).then(() => {
                    alert("Added 2 actions, close the app and apply pressure to the app icon to check it out!");
                }, (errorMessage) => {
                    alert(errorMessage);
                });
        
        */
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            //this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (data) { return _this.loginProceed(data); }, function (error) { return _this.offlineLogin(error); });
    };
    LoginComponent.prototype.offlineLogin = function (valid) {
        if (valid == "403") {
            this.wrongcredentials = true;
        }
        else {
            if (this.statusService.getWasLoggedIn()) {
                //alert("You are offline. showing latest received data");
                this.statusService.setOfflineMode(true);
                this.routerExtensions.navigate(["/list"], {
                    transition: {
                        name: "slide",
                        curve: "easeOut"
                    }
                });
            }
            else {
                alert("the first login requires an active internet connection");
            }
        }
    };
    LoginComponent.prototype.loginProceed = function (usrData) {
        this.wrongcredentials = false;
        this.statusService.loggedIn();
        this.statusService.setCurrentUser(usrData);
        this.statusService.setOfflineMode(false);
        this.routerExtensions.navigate(["/list"], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    LoginComponent.prototype.keyboardOn = function () {
        this.box = this.grid.nativeElement;
        this.box.animate({
            translate: { x: 0, y: -300 },
            duration: 1000,
            curve: enums_1.AnimationCurve.easeOut
        });
    };
    __decorate([
        core_1.ViewChild("box"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "grid", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService, status_service_1.StatusService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            user_service_1.UserService,
            status_service_1.StatusService,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxxRUFBa0U7QUFDbEUsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLGtDQUF3QztBQVl4QztJQU9FLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsSUFBVTtRQUxWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBWHBCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQWFoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsd0RBQXdEO1FBQ3hELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1Qix5QkFBeUI7UUFDekIsd0NBQXdDO1FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBOENFO0lBQ0EsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJ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QUFDO0NBQUEsQUExSUQsSUEwSUM7QUExSVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbi8vaW1wb3J0IHsgQXBwU2hvcnRjdXRzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hcHAtc2hvcnRjdXRzXCI7XHJcbi8vaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudHtcclxuICBAVmlld0NoaWxkKFwiYm94XCIpIGdyaWQ6IEVsZW1lbnRSZWY7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgd3JvbmdjcmVkZW50aWFscyA6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGJveCA6R3JpZExheW91dDtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxyXG4gIClcclxuICB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBcIm1pY2hhZWwuZnJ1ZWh3aXJ0aEBodGwucmVubndlZy5hdFwiO1xyXG4gICAgLy90aGlzLnVzZXIucGFzc3dvcmQgPSBcIm1pY2hhZWwxMjM0XCI7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgLy8gaW5zdGFudGlhdGUgdGhlIHBsdWdpblxyXG4gICAgLy9sZXQgYXBwU2hvcnRjdXRzID0gbmV3IEFwcFNob3J0Y3V0cygpO1xyXG4vKlxyXG4gICAgYXBwU2hvcnRjdXRzLmF2YWlsYWJsZSgpLnRoZW4oYXZhaWxhYmxlID0+IHtcclxuICAgIGlmIChhdmFpbGFibGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgZGV2aWNlIHN1cHBvcnRzIGFwcCBzaG9ydGN1dHNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJObyBhcHAgc2hvcnRjdXRzIGNhcGFiaWxpdHksIGFzayB0aGUgdXNlciB0byB1cGdyYWRlIDopXCIpO1xyXG4gICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIFx0YXBwU2hvcnRjdXRzLmNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcImRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCJHZWxhbmdlIHp1bSBEYXNoYm9hcmRcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcImRhc2hib2FyZFwiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRhc2tcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGFza3NcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDnGJlcnNpY2h0IGFsbGVyIFRhc2tzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJ0YXNrXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwibWVldGluZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJNZWV0aW5nc1wiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIsOcYmVyc2ljaHQgYWxsZXIgTWVldGluZ3NcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcIm1lZXRpbmdcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0aWNrZXRcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGlja2V0c1wiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIkxpc3RlIGRlciBUaWNrZXRzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJidWdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInNlZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWluc3RlbGx1bmdlblwiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIsOEbmRlcmUgZGVpbiBQcm9maWxcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcInNldHRpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQWRkZWQgMiBhY3Rpb25zLCBjbG9zZSB0aGUgYXBwIGFuZCBhcHBseSBwcmVzc3VyZSB0byB0aGUgYXBwIGljb24gdG8gY2hlY2sgaXQgb3V0IVwiKTtcclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4qL1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy90aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMubG9naW5Qcm9jZWVkKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMub2ZmbGluZUxvZ2luKGVycm9yKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgb2ZmbGluZUxvZ2luKHZhbGlkIDphbnkpe1xyXG5cclxuICAgIGlmICh2YWxpZCA9PSBcIjQwM1wiKXtcclxuICAgICAgdGhpcy53cm9uZ2NyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgaWYodGhpcy5zdGF0dXNTZXJ2aWNlLmdldFdhc0xvZ2dlZEluKCkpe1xyXG5cclxuICAgICAgICAvL2FsZXJ0KFwiWW91IGFyZSBvZmZsaW5lLiBzaG93aW5nIGxhdGVzdCByZWNlaXZlZCBkYXRhXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRPZmZsaW5lTW9kZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KFwidGhlIGZpcnN0IGxvZ2luIHJlcXVpcmVzIGFuIGFjdGl2ZSBpbnRlcm5ldCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbG9naW5Qcm9jZWVkKHVzckRhdGEgOmFueSl7XHJcblxyXG4gICAgdGhpcy53cm9uZ2NyZWRlbnRpYWxzID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXR1c1NlcnZpY2UubG9nZ2VkSW4oKTtcclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRDdXJyZW50VXNlcih1c3JEYXRhKTtcclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRPZmZsaW5lTW9kZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9saXN0XCJdLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIFxyXG4gIGtleWJvYXJkT24oKXtcclxuICAgIHRoaXMuYm94ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmJveC5hbmltYXRlKHtcclxuICAgICAgdHJhbnNsYXRlOiB7eDowLCB5Oi0zMDB9LFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0=
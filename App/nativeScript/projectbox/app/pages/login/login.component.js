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
var enums_1 = require("ui/enums");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var LoginComponent = (function () {
    function LoginComponent(router, routerExtensions, activatedRoute, userService, statusService, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.statusService = statusService;
        this.page = page;
        this.wrongcredentials = false;
        this.boxIsUp = false;
        this.fabShadowA = {
            elevation: nativescript_ng_shadow_1.Elevation.CARD_PICKED_UP,
        };
        this.fabShadoI = {
            elevation: nativescript_ng_shadow_1.Elevation.CARD_PICKED_UP,
        };
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
            duration: 750,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxxRUFBa0U7QUFDbEUsa0NBQXdDO0FBS3hDLGlFQUF5RTtBQVF6RTtJQWFFLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsSUFBVTtRQUxWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBakJwQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQWdCO1lBQ3hCLFNBQVMsRUFBRSxrQ0FBUyxDQUFDLGNBQWM7U0FDcEMsQ0FBQztRQUNGLGNBQVMsR0FBWTtZQUNuQixTQUFTLEVBQUUsa0NBQVMsQ0FBQyxjQUFjO1NBQ3BDLENBQUM7UUFZQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsd0RBQXdEO1FBQ3hELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1Qix5QkFBeUI7UUFDekIsd0NBQXdDO1FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBOENFO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNWLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsRUFDakMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFVO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBRXRDLHlEQUF5RDtnQkFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDdEMsVUFBVSxFQUFFO3dCQUNaLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxTQUFTO3FCQUNmO2lCQUNKLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSixLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztZQUNsRSxDQUFDO1FBQ0gsQ0FBQztJQUVILENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsT0FBWTtRQUV2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFHRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNmLFNBQVMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDO1lBQ3hCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLHNCQUFjLENBQUMsT0FBTztTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBcklpQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBTyxpQkFBVTtnREFBQztJQUR4QixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDhCQUFhLENBQUM7WUFDdkMsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDO3lDQWdCa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNqQiwwQkFBVztZQUNULDhCQUFhO1lBQ3RCLFdBQUk7T0FwQlQsY0FBYyxDQXdJMUI7SUFBRCxxQkFBQztDQUFBLEFBeElELElBd0lDO0FBeElZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7IEFwcFNob3J0Y3V0cyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXBwLXNob3J0Y3V0c1wiO1xyXG4vL2ltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCJcclxuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQW5kcm9pZERhdGEsIElPU0RhdGEsIEVsZXZhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50e1xyXG4gIEBWaWV3Q2hpbGQoXCJib3hcIikgZ3JpZDogRWxlbWVudFJlZjtcclxuICB1c2VyOiBVc2VyO1xyXG4gIHdyb25nY3JlZGVudGlhbHMgOmJvb2xlYW4gPSBmYWxzZTtcclxuICBib3ggOkdyaWRMYXlvdXQ7XHJcbiAgYm94SXNVcCA6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGZhYlNoYWRvd0E6IEFuZHJvaWREYXRhID0ge1xyXG4gICAgZWxldmF0aW9uOiBFbGV2YXRpb24uQ0FSRF9QSUNLRURfVVAsXHJcbiAgfTtcclxuICBmYWJTaGFkb0k6IElPU0RhdGEgPSB7XHJcbiAgICBlbGV2YXRpb246IEVsZXZhdGlvbi5DQVJEX1BJQ0tFRF9VUCxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXHJcbiAgKVxyXG4gIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAvL3RoaXMudXNlci5lbWFpbCA9IFwibWljaGFlbC5mcnVlaHdpcnRoQGh0bC5yZW5ud2VnLmF0XCI7XHJcbiAgICAvL3RoaXMudXNlci5wYXNzd29yZCA9IFwibWljaGFlbDEyMzRcIjtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBpbnN0YW50aWF0ZSB0aGUgcGx1Z2luXHJcbiAgICAvL2xldCBhcHBTaG9ydGN1dHMgPSBuZXcgQXBwU2hvcnRjdXRzKCk7XHJcbi8qXHJcbiAgICBhcHBTaG9ydGN1dHMuYXZhaWxhYmxlKCkudGhlbihhdmFpbGFibGUgPT4ge1xyXG4gICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBkZXZpY2Ugc3VwcG9ydHMgYXBwIHNob3J0Y3V0c1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5vIGFwcCBzaG9ydGN1dHMgY2FwYWJpbGl0eSwgYXNrIHRoZSB1c2VyIHRvIHVwZ3JhZGUgOilcIik7XHJcbiAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgXHRhcHBTaG9ydGN1dHMuY29uZmlndXJlUXVpY2tBY3Rpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIkdlbGFuZ2UgenVtIERhc2hib2FyZFwiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwiZGFzaGJvYXJkXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGFza1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUYXNrc1wiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIsOcYmVyc2ljaHQgYWxsZXIgVGFza3NcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcInRhc2tcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJtZWV0aW5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1lZXRpbmdzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBNZWV0aW5nc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwibWVldGluZ1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRpY2tldFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXRzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiTGlzdGUgZGVyIFRpY2tldHNcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcImJ1Z1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2VldGluZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw4RuZGVyZSBkZWluIFByb2ZpbFwiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwic2V0dGluZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJBZGRlZCAyIGFjdGlvbnMsIGNsb3NlIHRoZSBhcHAgYW5kIGFwcGx5IHByZXNzdXJlIHRvIHRoZSBhcHAgaWNvbiB0byBjaGVjayBpdCBvdXQhXCIpO1xyXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiovXHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5sb2dpblByb2NlZWQoZGF0YSksXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5vZmZsaW5lTG9naW4oZXJyb3IpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBvZmZsaW5lTG9naW4odmFsaWQgOmFueSl7XHJcblxyXG4gICAgaWYgKHZhbGlkID09IFwiNDAzXCIpe1xyXG4gICAgICB0aGlzLndyb25nY3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBpZih0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0V2FzTG9nZ2VkSW4oKSl7XHJcblxyXG4gICAgICAgIC8vYWxlcnQoXCJZb3UgYXJlIG9mZmxpbmUuIHNob3dpbmcgbGF0ZXN0IHJlY2VpdmVkIGRhdGFcIik7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnNldE9mZmxpbmVNb2RlKHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGlzdFwiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoXCJ0aGUgZmlyc3QgbG9naW4gcmVxdWlyZXMgYW4gYWN0aXZlIGludGVybmV0IGNvbm5lY3Rpb25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsb2dpblByb2NlZWQodXNyRGF0YSA6YW55KXtcclxuXHJcbiAgICB0aGlzLndyb25nY3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5sb2dnZWRJbigpO1xyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnNldEN1cnJlbnRVc2VyKHVzckRhdGEpO1xyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnNldE9mZmxpbmVNb2RlKGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAga2V5Ym9hcmRPbigpe1xyXG4gICAgdGhpcy5ib3ggPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuYm94LmFuaW1hdGUoe1xyXG4gICAgICB0cmFuc2xhdGU6IHt4OjAsIHk6LTMwMH0sXHJcbiAgICAgIGR1cmF0aW9uOiA3NTAsXHJcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19
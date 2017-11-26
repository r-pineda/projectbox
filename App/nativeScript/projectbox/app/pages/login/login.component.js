"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userLogin_1 = require("../../shared/user/userLogin");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var enums_1 = require("ui/enums");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var utilityModule = require("utils/utils");
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
        this.fabShadowI = {
            elevation: nativescript_ng_shadow_1.Elevation.CARD_PICKED_UP,
        };
        this.user = new userLogin_1.UserLogin();
        this.user.email = "michael.fruehwirth@htl.rennweg.at";
        this.user.password = "michael1234";
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
            .subscribe(function (data) { return _this.loginProceed(); }, function (error) { return _this.offlineLogin(error); });
    };
    LoginComponent.prototype.offlineLogin = function (valid) {
        console.log(valid);
        if (valid === "403") {
            this.wrongcredentials = true;
        }
        else {
            if (this.statusService.getWasLoggedIn()) {
                //alert("You are offline. showing latest received data");
                this.statusService.setOfflineMode(true);
                this.routerExtensions.navigate(["/dashboard"], {
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
    LoginComponent.prototype.loginProceed = function () {
        this.keyboardOff();
        this.wrongcredentials = false;
        this.statusService.loggedIn();
        this.statusService.setOfflineMode(false);
        this.routerExtensions.navigate(["/dashboard"], {
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
    LoginComponent.prototype.keyboardOff = function () {
        var usrTF = this.userNameTextField.nativeElement;
        var pswTF = this.passWordTextField.nativeElement;
        usrTF.dismissSoftInput();
        pswTF.dismissSoftInput();
        this.box = this.grid.nativeElement;
        this.box.animate({
            translate: { x: 0, y: 0 },
            duration: 0,
            curve: enums_1.AnimationCurve.easeIn
        });
    };
    LoginComponent.prototype.forgotPW = function () {
        utilityModule.openUrl("https://secure.projectbox.eu/#/email");
    };
    __decorate([
        core_1.ViewChild("box"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "grid", void 0);
    __decorate([
        core_1.ViewChild("usrn"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "userNameTextField", void 0);
    __decorate([
        core_1.ViewChild("pass"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "passWordTextField", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLHlEQUF3RDtBQUN4RCwrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFJL0IscUVBQWtFO0FBQ2xFLGtDQUF3QztBQUt4QyxpRUFBeUU7QUFDekUsMkNBQThDO0FBUTlDO0lBZ0JFLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsSUFBVTtRQUxWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBakJwQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQWdCO1lBQ3hCLFNBQVMsRUFBRSxrQ0FBUyxDQUFDLGNBQWM7U0FDcEMsQ0FBQztRQUNGLGVBQVUsR0FBWTtZQUNwQixTQUFTLEVBQUUsa0NBQVMsQ0FBQyxjQUFjO1NBQ3BDLENBQUM7UUFZQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLG1DQUFtQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1Qix5QkFBeUI7UUFDekIsd0NBQXdDO1FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBekppQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBTyxpQkFBVTtnREFBQztJQUNoQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBb0IsaUJBQVU7NkRBQUM7SUFDOUI7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQW9CLGlCQUFVOzZEQUFDO0lBSHRDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsQ0FBQztZQUN2QyxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7eUNBbUJrQixlQUFNO1lBQ0kseUJBQWdCO1lBQ2xCLHVCQUFjO1lBQ2pCLDBCQUFXO1lBQ1QsOEJBQWE7WUFDdEIsV0FBSTtPQXZCVCxjQUFjLENBNEoxQjtJQUFELHFCQUFDO0NBQUEsQUE1SkQsSUE0SkM7QUE1Slksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJMb2dpbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyTG9naW5cIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7IEFwcFNob3J0Y3V0cyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXBwLXNob3J0Y3V0c1wiO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiXHJcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XHJcbmltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFuZHJvaWREYXRhLCBJT1NEYXRhLCBFbGV2YXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JztcclxuaW1wb3J0IHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgU3RhdHVzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnR7XHJcbiAgQFZpZXdDaGlsZChcImJveFwiKSBncmlkOiBFbGVtZW50UmVmOy8vZWxlbWVudGUgYXVzIGRlbSB2aWV3IHNlbGVjdGllcmVuLCBkaWVudCB6dXIgYW5pbWF0aW9uIGRlciBib3hcclxuICBAVmlld0NoaWxkKFwidXNyblwiKSB1c2VyTmFtZVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicGFzc1wiKSBwYXNzV29yZFRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgdXNlcjogVXNlckxvZ2luO1xyXG4gIHdyb25nY3JlZGVudGlhbHMgOmJvb2xlYW4gPSBmYWxzZTtcclxuICBib3ggOkdyaWRMYXlvdXQ7XHJcbiAgYm94SXNVcCA6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGZhYlNoYWRvd0E6IEFuZHJvaWREYXRhID0ge1xyXG4gICAgZWxldmF0aW9uOiBFbGV2YXRpb24uQ0FSRF9QSUNLRURfVVAsXHJcbiAgfTtcclxuICBmYWJTaGFkb3dJOiBJT1NEYXRhID0ge1xyXG4gICAgZWxldmF0aW9uOiBFbGV2YXRpb24uQ0FSRF9QSUNLRURfVVAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICApXHJcbiAge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJMb2dpbigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJtaWNoYWVsLmZydWVod2lydGhAaHRsLnJlbm53ZWcuYXRcIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwibWljaGFlbDEyMzRcIjtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBpbnN0YW50aWF0ZSB0aGUgcGx1Z2luXHJcbiAgICAvL2xldCBhcHBTaG9ydGN1dHMgPSBuZXcgQXBwU2hvcnRjdXRzKCk7XHJcbi8qXHJcbiAgICBhcHBTaG9ydGN1dHMuYXZhaWxhYmxlKCkudGhlbihhdmFpbGFibGUgPT4ge1xyXG4gICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBkZXZpY2Ugc3VwcG9ydHMgYXBwIHNob3J0Y3V0c1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5vIGFwcCBzaG9ydGN1dHMgY2FwYWJpbGl0eSwgYXNrIHRoZSB1c2VyIHRvIHVwZ3JhZGUgOilcIik7XHJcbiAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgXHRhcHBTaG9ydGN1dHMuY29uZmlndXJlUXVpY2tBY3Rpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIkdlbGFuZ2UgenVtIERhc2hib2FyZFwiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwiZGFzaGJvYXJkXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGFza1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUYXNrc1wiLFxyXG4gICAgICAgICAgICAvL3N1YnRpdGxlOiBcIsOcYmVyc2ljaHQgYWxsZXIgVGFza3NcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcInRhc2tcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJtZWV0aW5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1lZXRpbmdzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBNZWV0aW5nc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwibWVldGluZ1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRpY2tldFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXRzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiTGlzdGUgZGVyIFRpY2tldHNcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcImJ1Z1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2VldGluZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw4RuZGVyZSBkZWluIFByb2ZpbFwiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwic2V0dGluZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJBZGRlZCAyIGFjdGlvbnMsIGNsb3NlIHRoZSBhcHAgYW5kIGFwcGx5IHByZXNzdXJlIHRvIHRoZSBhcHAgaWNvbiB0byBjaGVjayBpdCBvdXQhXCIpO1xyXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiovXHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5sb2dpblByb2NlZWQoKSxcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLm9mZmxpbmVMb2dpbihlcnJvcilcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIG9mZmxpbmVMb2dpbih2YWxpZCA6YW55KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2YWxpZCk7XHJcblxyXG4gICAgaWYgKHZhbGlkID09PSBcIjQwM1wiKXtcclxuICAgICAgdGhpcy53cm9uZ2NyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgaWYodGhpcy5zdGF0dXNTZXJ2aWNlLmdldFdhc0xvZ2dlZEluKCkpe1xyXG5cclxuICAgICAgICAvL2FsZXJ0KFwiWW91IGFyZSBvZmZsaW5lLiBzaG93aW5nIGxhdGVzdCByZWNlaXZlZCBkYXRhXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRPZmZsaW5lTW9kZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoXCJ0aGUgZmlyc3QgbG9naW4gcmVxdWlyZXMgYW4gYWN0aXZlIGludGVybmV0IGNvbm5lY3Rpb25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsb2dpblByb2NlZWQoKXtcclxuXHJcbiAgICB0aGlzLmtleWJvYXJkT2ZmKCk7XHJcbiAgICB0aGlzLndyb25nY3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5sb2dnZWRJbigpO1xyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnNldE9mZmxpbmVNb2RlKGZhbHNlKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZGFzaGJvYXJkXCJdLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgXHJcbiAga2V5Ym9hcmRPbigpe1xyXG4gICAgdGhpcy5ib3ggPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuYm94LmFuaW1hdGUoe1xyXG4gICAgICB0cmFuc2xhdGU6IHt4OjAsIHk6LTMwMH0sXHJcbiAgICAgIGR1cmF0aW9uOiA3NTAsXHJcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGtleWJvYXJkT2ZmKCl7XHJcbiAgICBsZXQgdXNyVEYgPSB0aGlzLnVzZXJOYW1lVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgcHN3VEYgPSB0aGlzLnBhc3NXb3JkVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB1c3JURi5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICBwc3dURi5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICB0aGlzLmJveCA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5ib3guYW5pbWF0ZSh7XHJcbiAgICAgIHRyYW5zbGF0ZToge3g6MCwgeTowfSxcclxuICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9yZ290UFcoKXtcclxuICAgIHV0aWxpdHlNb2R1bGUub3BlblVybChcImh0dHBzOi8vc2VjdXJlLnByb2plY3Rib3guZXUvIy9lbWFpbFwiKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19
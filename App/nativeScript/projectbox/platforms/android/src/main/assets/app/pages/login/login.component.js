"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
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
        this.fabShadoI = {
            elevation: nativescript_ng_shadow_1.Elevation.CARD_PICKED_UP,
        };
        this.user = new user_1.User();
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
    LoginComponent.prototype.loginProceed = function (usrData) {
        this.keyboardOff();
        this.wrongcredentials = false;
        this.statusService.loggedIn();
        this.statusService.setCurrentUser(usrData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFJL0IscUVBQWtFO0FBQ2xFLGtDQUF3QztBQUt4QyxpRUFBeUU7QUFDekUsMkNBQThDO0FBUTlDO0lBZ0JFLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsSUFBVTtRQUxWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBakJwQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQWdCO1lBQ3hCLFNBQVMsRUFBRSxrQ0FBUyxDQUFDLGNBQWM7U0FDcEMsQ0FBQztRQUNGLGNBQVMsR0FBWTtZQUNuQixTQUFTLEVBQUUsa0NBQVMsQ0FBQyxjQUFjO1NBQ3BDLENBQUM7UUFZQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsbUNBQW1DLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHlCQUF5QjtRQUN6Qix3Q0FBd0M7UUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LHNCQUFjLENBQUMsTUFBTTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBeEppQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBTyxpQkFBVTtnREFBQztJQUNoQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBb0IsaUJBQVU7NkRBQUM7SUFDOUI7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQW9CLGlCQUFVOzZEQUFDO0lBSHRDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsQ0FBQztZQUN2QyxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7eUNBbUJrQixlQUFNO1lBQ0kseUJBQWdCO1lBQ2xCLHVCQUFjO1lBQ2pCLDBCQUFXO1lBQ1QsOEJBQWE7WUFDdEIsV0FBSTtPQXZCVCxjQUFjLENBMkoxQjtJQUFELHFCQUFDO0NBQUEsQUEzSkQsSUEySkM7QUEzSlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbi8vaW1wb3J0IHsgQXBwU2hvcnRjdXRzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hcHAtc2hvcnRjdXRzXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCJcclxuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcclxuaW1wb3J0IHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQW5kcm9pZERhdGEsIElPU0RhdGEsIEVsZXZhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG5pbXBvcnQgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudHtcclxuICBAVmlld0NoaWxkKFwiYm94XCIpIGdyaWQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInVzcm5cIikgdXNlck5hbWVUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcInBhc3NcIikgcGFzc1dvcmRUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgd3JvbmdjcmVkZW50aWFscyA6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGJveCA6R3JpZExheW91dDtcclxuICBib3hJc1VwIDpib29sZWFuID0gZmFsc2U7XHJcbiAgZmFiU2hhZG93QTogQW5kcm9pZERhdGEgPSB7XHJcbiAgICBlbGV2YXRpb246IEVsZXZhdGlvbi5DQVJEX1BJQ0tFRF9VUCxcclxuICB9O1xyXG4gIGZhYlNoYWRvSTogSU9TRGF0YSA9IHtcclxuICAgIGVsZXZhdGlvbjogRWxldmF0aW9uLkNBUkRfUElDS0VEX1VQLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgKVxyXG4gIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB0aGlzLnVzZXIuZW1haWwgPSBcIm1pY2hhZWwuZnJ1ZWh3aXJ0aEBodGwucmVubndlZy5hdFwiO1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJtaWNoYWVsMTIzNFwiO1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIGluc3RhbnRpYXRlIHRoZSBwbHVnaW5cclxuICAgIC8vbGV0IGFwcFNob3J0Y3V0cyA9IG5ldyBBcHBTaG9ydGN1dHMoKTtcclxuLypcclxuICAgIGFwcFNob3J0Y3V0cy5hdmFpbGFibGUoKS50aGVuKGF2YWlsYWJsZSA9PiB7XHJcbiAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGRldmljZSBzdXBwb3J0cyBhcHAgc2hvcnRjdXRzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTm8gYXBwIHNob3J0Y3V0cyBjYXBhYmlsaXR5LCBhc2sgdGhlIHVzZXIgdG8gdXBncmFkZSA6KVwiKTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICBcdGFwcFNob3J0Y3V0cy5jb25maWd1cmVRdWlja0FjdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiR2VsYW5nZSB6dW0gRGFzaGJvYXJkXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJkYXNoYm9hcmRcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0YXNrXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2tzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBUYXNrc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwidGFza1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm1lZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTWVldGluZ3NcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDnGJlcnNpY2h0IGFsbGVyIE1lZXRpbmdzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJtZWV0aW5nXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGlja2V0XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldHNcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCJMaXN0ZSBkZXIgVGlja2V0c1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwiYnVnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZWV0aW5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVpbnN0ZWxsdW5nZW5cIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDhG5kZXJlIGRlaW4gUHJvZmlsXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJzZXR0aW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFkZGVkIDIgYWN0aW9ucywgY2xvc2UgdGhlIGFwcCBhbmQgYXBwbHkgcHJlc3N1cmUgdG8gdGhlIGFwcCBpY29uIHRvIGNoZWNrIGl0IG91dCFcIik7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuKi9cclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmxvZ2luUHJvY2VlZChkYXRhKSxcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLm9mZmxpbmVMb2dpbihlcnJvcilcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIG9mZmxpbmVMb2dpbih2YWxpZCA6YW55KXtcclxuXHJcbiAgICBpZiAodmFsaWQgPT0gXCI0MDNcIil7XHJcbiAgICAgIHRoaXMud3JvbmdjcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIGlmKHRoaXMuc3RhdHVzU2VydmljZS5nZXRXYXNMb2dnZWRJbigpKXtcclxuXHJcbiAgICAgICAgLy9hbGVydChcIllvdSBhcmUgb2ZmbGluZS4gc2hvd2luZyBsYXRlc3QgcmVjZWl2ZWQgZGF0YVwiKTtcclxuICAgICAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0T2ZmbGluZU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KFwidGhlIGZpcnN0IGxvZ2luIHJlcXVpcmVzIGFuIGFjdGl2ZSBpbnRlcm5ldCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbG9naW5Qcm9jZWVkKHVzckRhdGEgOmFueSl7XHJcblxyXG4gICAgdGhpcy5rZXlib2FyZE9mZigpO1xyXG4gICAgdGhpcy53cm9uZ2NyZWRlbnRpYWxzID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXR1c1NlcnZpY2UubG9nZ2VkSW4oKTtcclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRDdXJyZW50VXNlcih1c3JEYXRhKTtcclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRPZmZsaW5lTW9kZShmYWxzZSk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIFxyXG4gIGtleWJvYXJkT24oKXtcclxuICAgIHRoaXMuYm94ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmJveC5hbmltYXRlKHtcclxuICAgICAgdHJhbnNsYXRlOiB7eDowLCB5Oi0zMDB9LFxyXG4gICAgICBkdXJhdGlvbjogNzUwLFxyXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBrZXlib2FyZE9mZigpe1xyXG4gICAgbGV0IHVzclRGID0gdGhpcy51c2VyTmFtZVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHBzd1RGID0gdGhpcy5wYXNzV29yZFRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdXNyVEYuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgcHN3VEYuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgdGhpcy5ib3ggPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuYm94LmFuaW1hdGUoe1xyXG4gICAgICB0cmFuc2xhdGU6IHt4OjAsIHk6MH0sXHJcbiAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvcmdvdFBXKCl7XHJcbiAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwczovL3NlY3VyZS5wcm9qZWN0Ym94LmV1LyMvZW1haWxcIik7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==
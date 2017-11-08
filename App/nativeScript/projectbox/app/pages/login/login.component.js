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
        this.keyboardOff();
        this.wrongcredentials = false;
        this.statusService.loggedIn();
        this.statusService.setCurrentUser(usrData);
        this.statusService.setOfflineMode(false);
        setTimeout(this.redirect(), 1000);
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
    LoginComponent.prototype.redirect = function () {
        this.routerExtensions.navigate(["/list"], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFJL0IscUVBQWtFO0FBQ2xFLGtDQUF3QztBQUt4QyxpRUFBeUU7QUFDekUsMkNBQThDO0FBUTlDO0lBZ0JFLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsSUFBVTtRQUxWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBakJwQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQWdCO1lBQ3hCLFNBQVMsRUFBRSxrQ0FBUyxDQUFDLGNBQWM7U0FDcEMsQ0FBQztRQUNGLGNBQVMsR0FBWTtZQUNuQixTQUFTLEVBQUUsa0NBQVMsQ0FBQyxjQUFjO1NBQ3BDLENBQUM7UUFZQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsd0RBQXdEO1FBQ3hELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1Qix5QkFBeUI7UUFDekIsd0NBQXdDO1FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBOENFO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxDLElBQUks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QixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUE1SmlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFPLGlCQUFVO2dEQUFDO0lBQ2hCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDO2tDQUFvQixpQkFBVTs2REFBQztJQUM5QjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQztrQ0FBb0IsaUJBQVU7NkRBQUM7SUFIdEMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZDLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDckUsQ0FBQzt5Q0FtQmtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDbEIsdUJBQWM7WUFDakIsMEJBQVc7WUFDVCw4QkFBYTtZQUN0QixXQUFJO09BdkJULGNBQWMsQ0ErSjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9KRCxJQStKQztBQS9KWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuLy9pbXBvcnQgeyBBcHBTaG9ydGN1dHMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFwcC1zaG9ydGN1dHNcIjtcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIlxyXG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IG9ic2VydmFibGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5pbXBvcnQgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xyXG5pbXBvcnQgeyBBbmRyb2lkRGF0YSwgSU9TRGF0YSwgRWxldmF0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7XHJcbmltcG9ydCB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50e1xyXG4gIEBWaWV3Q2hpbGQoXCJib3hcIikgZ3JpZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwidXNyblwiKSB1c2VyTmFtZVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicGFzc1wiKSBwYXNzV29yZFRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgdXNlcjogVXNlcjtcclxuICB3cm9uZ2NyZWRlbnRpYWxzIDpib29sZWFuID0gZmFsc2U7XHJcbiAgYm94IDpHcmlkTGF5b3V0O1xyXG4gIGJveElzVXAgOmJvb2xlYW4gPSBmYWxzZTtcclxuICBmYWJTaGFkb3dBOiBBbmRyb2lkRGF0YSA9IHtcclxuICAgIGVsZXZhdGlvbjogRWxldmF0aW9uLkNBUkRfUElDS0VEX1VQLFxyXG4gIH07XHJcbiAgZmFiU2hhZG9JOiBJT1NEYXRhID0ge1xyXG4gICAgZWxldmF0aW9uOiBFbGV2YXRpb24uQ0FSRF9QSUNLRURfVVAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICApXHJcbiAge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIC8vdGhpcy51c2VyLmVtYWlsID0gXCJtaWNoYWVsLmZydWVod2lydGhAaHRsLnJlbm53ZWcuYXRcIjtcclxuICAgIC8vdGhpcy51c2VyLnBhc3N3b3JkID0gXCJtaWNoYWVsMTIzNFwiO1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIGluc3RhbnRpYXRlIHRoZSBwbHVnaW5cclxuICAgIC8vbGV0IGFwcFNob3J0Y3V0cyA9IG5ldyBBcHBTaG9ydGN1dHMoKTtcclxuLypcclxuICAgIGFwcFNob3J0Y3V0cy5hdmFpbGFibGUoKS50aGVuKGF2YWlsYWJsZSA9PiB7XHJcbiAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGRldmljZSBzdXBwb3J0cyBhcHAgc2hvcnRjdXRzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTm8gYXBwIHNob3J0Y3V0cyBjYXBhYmlsaXR5LCBhc2sgdGhlIHVzZXIgdG8gdXBncmFkZSA6KVwiKTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICBcdGFwcFNob3J0Y3V0cy5jb25maWd1cmVRdWlja0FjdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiR2VsYW5nZSB6dW0gRGFzaGJvYXJkXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJkYXNoYm9hcmRcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0YXNrXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2tzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBUYXNrc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwidGFza1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm1lZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTWVldGluZ3NcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDnGJlcnNpY2h0IGFsbGVyIE1lZXRpbmdzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJtZWV0aW5nXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGlja2V0XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldHNcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCJMaXN0ZSBkZXIgVGlja2V0c1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwiYnVnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZWV0aW5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVpbnN0ZWxsdW5nZW5cIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDhG5kZXJlIGRlaW4gUHJvZmlsXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJzZXR0aW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFkZGVkIDIgYWN0aW9ucywgY2xvc2UgdGhlIGFwcCBhbmQgYXBwbHkgcHJlc3N1cmUgdG8gdGhlIGFwcCBpY29uIHRvIGNoZWNrIGl0IG91dCFcIik7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuKi9cclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmxvZ2luUHJvY2VlZChkYXRhKSxcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLm9mZmxpbmVMb2dpbihlcnJvcilcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIG9mZmxpbmVMb2dpbih2YWxpZCA6YW55KXtcclxuXHJcbiAgICBpZiAodmFsaWQgPT0gXCI0MDNcIil7XHJcbiAgICAgIHRoaXMud3JvbmdjcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIGlmKHRoaXMuc3RhdHVzU2VydmljZS5nZXRXYXNMb2dnZWRJbigpKXtcclxuXHJcbiAgICAgICAgLy9hbGVydChcIllvdSBhcmUgb2ZmbGluZS4gc2hvd2luZyBsYXRlc3QgcmVjZWl2ZWQgZGF0YVwiKTtcclxuICAgICAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0T2ZmbGluZU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9saXN0XCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBhbGVydChcInRoZSBmaXJzdCBsb2dpbiByZXF1aXJlcyBhbiBhY3RpdmUgaW50ZXJuZXQgY29ubmVjdGlvblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGxvZ2luUHJvY2VlZCh1c3JEYXRhIDphbnkpe1xyXG5cclxuICAgIHRoaXMua2V5Ym9hcmRPZmYoKTtcclxuICAgIHRoaXMud3JvbmdjcmVkZW50aWFscyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLmxvZ2dlZEluKCk7XHJcbiAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0Q3VycmVudFVzZXIodXNyRGF0YSk7XHJcbiAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0T2ZmbGluZU1vZGUoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZGlyZWN0KCksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAga2V5Ym9hcmRPbigpe1xyXG4gICAgdGhpcy5ib3ggPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuYm94LmFuaW1hdGUoe1xyXG4gICAgICB0cmFuc2xhdGU6IHt4OjAsIHk6LTMwMH0sXHJcbiAgICAgIGR1cmF0aW9uOiA3NTAsXHJcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGtleWJvYXJkT2ZmKCl7XHJcbiAgICBsZXQgdXNyVEYgPSB0aGlzLnVzZXJOYW1lVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgcHN3VEYgPSB0aGlzLnBhc3NXb3JkVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB1c3JURi5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICBwc3dURi5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICB0aGlzLmJveCA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5ib3guYW5pbWF0ZSh7XHJcbiAgICAgIHRyYW5zbGF0ZToge3g6MCwgeTowfSxcclxuICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9yZ290UFcoKXtcclxuICAgIHV0aWxpdHlNb2R1bGUub3BlblVybChcImh0dHBzOi8vc2VjdXJlLnByb2plY3Rib3guZXUvIy9lbWFpbFwiKTtcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KCl7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==
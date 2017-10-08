"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var nativescript_app_shortcuts_1 = require("nativescript-app-shortcuts");
var status_service_1 = require("../../shared/status/status.service");
var LoginComponent = (function () {
    function LoginComponent(router, routerExtensions, activatedRoute, userService, statusService, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.statusService = statusService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "michael.fruehwirth@htl.rennweg.at";
        this.user.password = "michael1234";
        page.actionBarHidden = true;
        // instantiate the plugin
        var appShortcuts = new nativescript_app_shortcuts_1.AppShortcuts();
        appShortcuts.available().then(function (available) {
            if (available) {
                console.log("This device supports app shortcuts");
            }
            else {
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
        ]).then(function () {
            alert("Added 2 actions, close the app and apply pressure to the app icon to check it out!");
        }, function (errorMessage) {
            alert(errorMessage);
        });
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (data) { return _this.loginProceed(data); }, function (error) { return _this.offlineLogin(error); });
    };
    LoginComponent.prototype.offlineLogin = function (valid) {
        console.log(valid);
        if (valid == "403") {
            alert("Wrong credentials!");
        }
        else {
            this.statusService.setOfflineMode(true);
            console.log(this.statusService.getOfflineMode());
            if (this.statusService.getWasLoggedIn()) {
                //alert("You are offline. showing latest received data");
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
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IseUVBQTBEO0FBRTFELHFFQUFrRTtBQVFsRTtJQUlFLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsSUFBVTtRQUxWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBVHBCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBWWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQ0FBbUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIseUJBQXlCO1FBQ3pCLElBQUksWUFBWSxHQUFHLElBQUkseUNBQVksRUFBRSxDQUFDO1FBRXRDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxTQUFTO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSix5RUFBeUU7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IFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBcHBTaG9ydGN1dHMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFwcC1zaG9ydGN1dHNcIjtcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxyXG4gIClcclxuICB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJtaWNoYWVsLmZydWVod2lydGhAaHRsLnJlbm53ZWcuYXRcIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwibWljaGFlbDEyMzRcIjtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBpbnN0YW50aWF0ZSB0aGUgcGx1Z2luXHJcbiAgICBsZXQgYXBwU2hvcnRjdXRzID0gbmV3IEFwcFNob3J0Y3V0cygpO1xyXG5cclxuICAgIGFwcFNob3J0Y3V0cy5hdmFpbGFibGUoKS50aGVuKGF2YWlsYWJsZSA9PiB7XHJcbiAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGRldmljZSBzdXBwb3J0cyBhcHAgc2hvcnRjdXRzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTm8gYXBwIHNob3J0Y3V0cyBjYXBhYmlsaXR5LCBhc2sgdGhlIHVzZXIgdG8gdXBncmFkZSA6KVwiKTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICBcdGFwcFNob3J0Y3V0cy5jb25maWd1cmVRdWlja0FjdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiR2VsYW5nZSB6dW0gRGFzaGJvYXJkXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJkYXNoYm9hcmRcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0YXNrXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2tzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBUYXNrc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwidGFza1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm1lZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTWVldGluZ3NcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDnGJlcnNpY2h0IGFsbGVyIE1lZXRpbmdzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJtZWV0aW5nXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGlja2V0XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldHNcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCJMaXN0ZSBkZXIgVGlja2V0c1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwiYnVnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZWV0aW5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVpbnN0ZWxsdW5nZW5cIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDhG5kZXJlIGRlaW4gUHJvZmlsXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJzZXR0aW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFkZGVkIDIgYWN0aW9ucywgY2xvc2UgdGhlIGFwcCBhbmQgYXBwbHkgcHJlc3N1cmUgdG8gdGhlIGFwcCBpY29uIHRvIGNoZWNrIGl0IG91dCFcIik7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMubG9naW5Qcm9jZWVkKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMub2ZmbGluZUxvZ2luKGVycm9yKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgb2ZmbGluZUxvZ2luKHZhbGlkIDphbnkpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHZhbGlkKTtcclxuXHJcbiAgICBpZiAodmFsaWQgPT0gXCI0MDNcIil7XHJcbiAgICAgIGFsZXJ0KFwiV3JvbmcgY3JlZGVudGlhbHMhXCIpO1xyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0T2ZmbGluZU1vZGUodHJ1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzU2VydmljZS5nZXRPZmZsaW5lTW9kZSgpKTtcclxuXHJcbiAgICAgIGlmKHRoaXMuc3RhdHVzU2VydmljZS5nZXRXYXNMb2dnZWRJbigpKXtcclxuXHJcbiAgICAgICAgLy9hbGVydChcIllvdSBhcmUgb2ZmbGluZS4gc2hvd2luZyBsYXRlc3QgcmVjZWl2ZWQgZGF0YVwiKTtcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9saXN0XCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBhbGVydChcInRoZSBmaXJzdCBsb2dpbiByZXF1aXJlcyBhbiBhY3RpdmUgaW50ZXJuZXQgY29ubmVjdGlvblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGxvZ2luUHJvY2VlZCh1c3JEYXRhIDphbnkpe1xyXG5cclxuICAgIHRoaXMuc3RhdHVzU2VydmljZS5sb2dnZWRJbigpO1xyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnNldEN1cnJlbnRVc2VyKHVzckRhdGEpO1xyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLnNldE9mZmxpbmVNb2RlKGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgIH1cclxuICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHNpZ25VcCgpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxyXG4gICAgICApO1xyXG4gIH1cclxuICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIH1cclxufVxyXG4iXX0=
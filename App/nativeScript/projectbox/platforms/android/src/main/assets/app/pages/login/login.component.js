"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
//import { AppShortcuts } from "nativescript-app-shortcuts";
//import { isIOS } from "tns-core-modules/platform";
var status_service_1 = require("../../shared/status/status.service");
var LoginComponent = (function () {
    function LoginComponent(router, routerExtensions, activatedRoute, userService, statusService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.statusService = statusService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "michael.fruehwirth@htl.rennweg.at";
        this.user.password = "michael1234";
        //page.actionBarHidden = true;
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
            status_service_1.StatusService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUUvRCw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELHFFQUFrRTtBQVFsRTtJQUlFLHdCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEI7UUFKNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBUnRDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBWWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQ0FBbUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDbkMsOEJBQThCO1FBRTlCLHlCQUF5QjtRQUN6Qix3Q0FBd0M7UUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUE4Q0U7SUFDQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNWLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsRUFDakMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFVO1FBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDbEIsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFakQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBRXRDLHlEQUF5RDtnQkFFekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN0QyxVQUFVLEVBQUU7d0JBQ1osSUFBSSxFQUFFLE9BQU87d0JBQ2IsS0FBSyxFQUFFLFNBQVM7cUJBQ2Y7aUJBQ0osQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNKLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxPQUFZO1FBRXZCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQTtJQUVGLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2pDLFNBQVMsQ0FDUjtZQUNFLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNwRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBN0lVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsQ0FBQztZQUN2QyxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7eUNBT2tCLGVBQU07WUFDSSx5QkFBZ0I7WUFDbEIsdUJBQWM7WUFDakIsMEJBQVc7WUFDVCw4QkFBYTtPQVYzQixjQUFjLENBOEkxQjtJQUFELHFCQUFDO0NBQUEsQUE5SUQsSUE4SUM7QUE5SVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7IEFwcFNob3J0Y3V0cyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXBwLXNob3J0Y3V0c1wiO1xyXG4vL2ltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2UsXHJcbiAgICAvL3ByaXZhdGUgcGFnZTogUGFnZVxyXG4gIClcclxuICB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJtaWNoYWVsLmZydWVod2lydGhAaHRsLnJlbm53ZWcuYXRcIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwibWljaGFlbDEyMzRcIjtcclxuICAgIC8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIGluc3RhbnRpYXRlIHRoZSBwbHVnaW5cclxuICAgIC8vbGV0IGFwcFNob3J0Y3V0cyA9IG5ldyBBcHBTaG9ydGN1dHMoKTtcclxuLypcclxuICAgIGFwcFNob3J0Y3V0cy5hdmFpbGFibGUoKS50aGVuKGF2YWlsYWJsZSA9PiB7XHJcbiAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGRldmljZSBzdXBwb3J0cyBhcHAgc2hvcnRjdXRzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTm8gYXBwIHNob3J0Y3V0cyBjYXBhYmlsaXR5LCBhc2sgdGhlIHVzZXIgdG8gdXBncmFkZSA6KVwiKTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICBcdGFwcFNob3J0Y3V0cy5jb25maWd1cmVRdWlja0FjdGlvbnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJkYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiR2VsYW5nZSB6dW0gRGFzaGJvYXJkXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJkYXNoYm9hcmRcIiAvLyBpZ25vcmVkIGJ5IGlPUywgaWYgaWNvblR5cGUgaXMgc2V0IGFzIHdlbGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0YXNrXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2tzXCIsXHJcbiAgICAgICAgICAgIC8vc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBUYXNrc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwidGFza1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm1lZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTWVldGluZ3NcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDnGJlcnNpY2h0IGFsbGVyIE1lZXRpbmdzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJtZWV0aW5nXCIgLy8gaWdub3JlZCBieSBpT1MsIGlmIGljb25UeXBlIGlzIHNldCBhcyB3ZWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGlja2V0XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldHNcIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCJMaXN0ZSBkZXIgVGlja2V0c1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwiYnVnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZWV0aW5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVpbnN0ZWxsdW5nZW5cIixcclxuICAgICAgICAgICAgLy9zdWJ0aXRsZTogXCLDhG5kZXJlIGRlaW4gUHJvZmlsXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJzZXR0aW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFkZGVkIDIgYWN0aW9ucywgY2xvc2UgdGhlIGFwcCBhbmQgYXBwbHkgcHJlc3N1cmUgdG8gdGhlIGFwcCBpY29uIHRvIGNoZWNrIGl0IG91dCFcIik7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuKi9cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5sb2dpblByb2NlZWQoZGF0YSksXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5vZmZsaW5lTG9naW4oZXJyb3IpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBvZmZsaW5lTG9naW4odmFsaWQgOmFueSl7XHJcblxyXG4gICAgY29uc29sZS5sb2codmFsaWQpO1xyXG5cclxuICAgIGlmICh2YWxpZCA9PSBcIjQwM1wiKXtcclxuICAgICAgYWxlcnQoXCJXcm9uZyBjcmVkZW50aWFscyFcIik7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIHRoaXMuc3RhdHVzU2VydmljZS5zZXRPZmZsaW5lTW9kZSh0cnVlKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0dXNTZXJ2aWNlLmdldE9mZmxpbmVNb2RlKCkpO1xyXG5cclxuICAgICAgaWYodGhpcy5zdGF0dXNTZXJ2aWNlLmdldFdhc0xvZ2dlZEluKCkpe1xyXG5cclxuICAgICAgICAvL2FsZXJ0KFwiWW91IGFyZSBvZmZsaW5lLiBzaG93aW5nIGxhdGVzdCByZWNlaXZlZCBkYXRhXCIpO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KFwidGhlIGZpcnN0IGxvZ2luIHJlcXVpcmVzIGFuIGFjdGl2ZSBpbnRlcm5ldCBjb25uZWN0aW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbG9naW5Qcm9jZWVkKHVzckRhdGEgOmFueSl7XHJcblxyXG4gICAgdGhpcy5zdGF0dXNTZXJ2aWNlLmxvZ2dlZEluKCk7XHJcbiAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0Q3VycmVudFVzZXIodXNyRGF0YSk7XHJcbiAgICB0aGlzLnN0YXR1c1NlcnZpY2Uuc2V0T2ZmbGluZU1vZGUoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGlzdFwiXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgfVxyXG4gIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgc2lnblVwKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgfVxyXG59XHJcbiJdfQ==
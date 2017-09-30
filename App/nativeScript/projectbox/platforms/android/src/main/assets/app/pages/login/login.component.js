"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var nativescript_app_shortcuts_1 = require("nativescript-app-shortcuts");
var LoginComponent = (function () {
    function LoginComponent(router, routerExtensions, userService, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "manuel.gafoz@htl.rennweg.at";
        this.user.password = "manuel1999";
        page.actionBarHidden = true;
        // instantiate the plugin
        var appShortcuts = new nativescript_app_shortcuts_1.AppShortcuts();
        appShortcuts.available().then(function (available) {
            if (available) {
                console.log("This device supports app shortcuts");
            }
            else {
                console.log("No app shortcuts capability, ask the user to upgrade :)");
            }
        });
        appShortcuts.configureQuickActions([
            {
                type: "dashboard",
                title: "Dashboard",
                subtitle: "Gelange zum Dashboard",
                iconTemplate: "dashboard" // ignored by iOS, if iconType is set as well
            },
            {
                type: "task",
                title: "Tasks",
                subtitle: "Übersicht aller Tasks",
                iconTemplate: "task" // ignored by iOS, if iconType is set as well
            },
            {
                type: "meeting",
                title: "Meetings",
                subtitle: "Übersicht aller Meetings",
                iconTemplate: "meeting" // ignored by iOS, if iconType is set as well
            },
            {
                type: "ticket",
                title: "Tickets",
                subtitle: "Liste der Tickets",
                iconTemplate: "bug"
            },
            {
                type: "seeting",
                title: "Einstellungen",
                subtitle: "Ändere dein Profil",
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
            .subscribe(function () { return _this.routerExtensions.navigate(["/list"], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        }); }, function (error) { return _this.routerExtensions.navigate(["/list"], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        }); });
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
            providers: [user_service_1.UserService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, user_service_1.UserService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUE2RDtBQUM3RCxnQ0FBNkI7QUFDN0IseUVBQTBEO0FBUzFEO0lBSUUsd0JBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxXQUF3QixFQUFVLElBQVU7UUFBaEgsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGcEksZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1Qix5QkFBeUI7UUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSx5Q0FBWSxFQUFFLENBQUM7UUFFdEMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDdkMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELENBQUMsQ0FBQztZQUMzRSxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUM7UUFFSixZQUFZLENBQUMscUJBQXFCLENBQUM7WUFDOUI7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T0FKekgsY0FBYyxDQW9HMUI7SUFBRCxxQkFBQztDQUFBLEFBcEdELElBb0dDO0FBcEdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQXBwU2hvcnRjdXRzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hcHAtc2hvcnRjdXRzXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci5lbWFpbCA9IFwibWFudWVsLmdhZm96QGh0bC5yZW5ud2VnLmF0XCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIm1hbnVlbDE5OTlcIjtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBpbnN0YW50aWF0ZSB0aGUgcGx1Z2luXHJcbiAgICBsZXQgYXBwU2hvcnRjdXRzID0gbmV3IEFwcFNob3J0Y3V0cygpO1xyXG5cclxuICAgIGFwcFNob3J0Y3V0cy5hdmFpbGFibGUoKS50aGVuKGF2YWlsYWJsZSA9PiB7XHJcbiAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGRldmljZSBzdXBwb3J0cyBhcHAgc2hvcnRjdXRzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGFwcCBzaG9ydGN1dHMgY2FwYWJpbGl0eSwgYXNrIHRoZSB1c2VyIHRvIHVwZ3JhZGUgOilcIik7XHJcbiAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgXHRhcHBTaG9ydGN1dHMuY29uZmlndXJlUXVpY2tBY3Rpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICBzdWJ0aXRsZTogXCJHZWxhbmdlIHp1bSBEYXNoYm9hcmRcIiwgLy8gaU9TIG9ubHlcclxuICAgICAgICAgICAgaWNvblRlbXBsYXRlOiBcImRhc2hib2FyZFwiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRhc2tcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGFza3NcIixcclxuICAgICAgICAgICAgc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBUYXNrc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwidGFza1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIm1lZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTWVldGluZ3NcIixcclxuICAgICAgICAgICAgc3VidGl0bGU6IFwiw5xiZXJzaWNodCBhbGxlciBNZWV0aW5nc1wiLCAvLyBpT1Mgb25seVxyXG4gICAgICAgICAgICBpY29uVGVtcGxhdGU6IFwibWVldGluZ1wiIC8vIGlnbm9yZWQgYnkgaU9TLCBpZiBpY29uVHlwZSBpcyBzZXQgYXMgd2VsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRpY2tldFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXRzXCIsXHJcbiAgICAgICAgICAgIHN1YnRpdGxlOiBcIkxpc3RlIGRlciBUaWNrZXRzXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJidWdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcInNlZXRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWluc3RlbGx1bmdlblwiLFxyXG4gICAgICAgICAgICBzdWJ0aXRsZTogXCLDhG5kZXJlIGRlaW4gUHJvZmlsXCIsIC8vIGlPUyBvbmx5XHJcbiAgICAgICAgICAgIGljb25UZW1wbGF0ZTogXCJzZXR0aW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkFkZGVkIDIgYWN0aW9ucywgY2xvc2UgdGhlIGFwcCBhbmQgYXBwbHkgcHJlc3N1cmUgdG8gdGhlIGFwcCBpY29uIHRvIGNoZWNrIGl0IG91dCFcIik7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAgIChlcnJvcikgPT4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9saXN0XCJdLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBzaWduVXAoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcclxuICAgICAgKTtcclxuICB9XHJcbiAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICB9XHJcbn1cclxuIl19
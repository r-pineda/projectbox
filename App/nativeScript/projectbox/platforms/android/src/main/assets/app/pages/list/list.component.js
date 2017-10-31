"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var status_service_1 = require("../../shared/status/status.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
require("rxjs/add/operator/switchMap");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var ListComponent = (function () {
    function ListComponent(router, routerExtensions, pageRoute, userService, meetingService, statusService) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.userService = userService;
        this.meetingService = meetingService;
        this.statusService = statusService;
        this.meetingsText = "Lade...";
        this.offlinemode = this.statusService.getOfflineMode();
        /*
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.meetings.id = +params["id"]; });
        */
        this.meetingService.meetings().subscribe(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
    }
    ListComponent.prototype.displayMeetings = function (data) {
        //@Rommelt hier die Daten für View vorbereiten
        if (data) {
            this.meetingService.saveMeetings(data);
            this.meetings = data.meetings;
        }
        else {
            data = this.meetingService.getSavedMeetings();
            this.meetings = data.meetings;
        }
        //console.dir(this.meetings[0]);
        //@Rommelt: name des 1. meetings:
        //console.log(this.meetings[0].name);
        //@Rommelt Attribute von this.meetings[i]:
        /*
        protocol :String;
        name :String;
        location :String;
        id :Number;
        duration :Number;
        date :Date;
        attendees: String;
        agenda :String
        */
    };
    ListComponent.prototype.showDetail = function (id) {
        this.routerExtensions.navigate(["/meeting_detail/" + id], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    ListComponent.prototype.onPullToRefreshInitiated = function (args) { };
    ListComponent.prototype.onSwipeCellStarted = function (args) { };
    ListComponent.prototype.onDelete = function () { };
    ListComponent.prototype.onArchive = function () { };
    ListComponent.prototype.onMenuTapped = function (value) {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ListComponent.prototype, "drawerComponent", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            providers: [user_service_1.UserService, meeting_service_1.MeetingService, status_service_1.StatusService],
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_2.PageRoute,
            user_service_1.UserService,
            meeting_service_1.MeetingService,
            status_service_1.StatusService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwrREFBNkQ7QUFDN0QscUVBQW1FO0FBQ25FLDBDQUF5RDtBQUN6RCxzREFBMEU7QUFFMUUsd0VBQXNFO0FBVXRFLHVDQUFxQztBQUVyQyxzRUFBb0c7QUFZcEc7SUFPRSx1QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLFNBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGFBQTRCO1FBUHRDLGlCQTBCQztRQXhCUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUlwQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkQ7Ozs7VUFJRTtRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUN0QyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLEVBQ3BDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FDdkMsQ0FBQztJQUVKLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQVM7UUFFdkIsOENBQThDO1FBRTlDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUVELGdDQUFnQztRQUVoQyxpQ0FBaUM7UUFFakMscUNBQXFDO1FBRXJDLDBDQUEwQztRQUMxQzs7Ozs7Ozs7O1VBU0U7SUFFSixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEVBQVU7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBRXRELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFTTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sZ0RBQXdCLEdBQS9CLFVBQWdDLElBQVMsSUFBSSxDQUFDO0lBRXZDLDBDQUFrQixHQUF6QixVQUEwQixJQUF1QixJQUFJLENBQUM7SUFFL0MsZ0NBQVEsR0FBZixjQUFvQixDQUFDO0lBRWQsaUNBQVMsR0FBaEIsY0FBcUIsQ0FBQztJQUVmLG9DQUFZLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBaEJEO1FBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FDVixnQ0FBc0I7MERBQUM7SUF2RnBDLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLDhCQUFhLENBQUM7WUFDdkQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FVa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUN2QixrQkFBUztZQUNQLDBCQUFXO1lBQ1IsZ0NBQWM7WUFDZiw4QkFBYTtPQWQzQixhQUFhLENBeUd6QjtJQUFELG9CQUFDO0NBQUEsQUF6R0QsSUF5R0M7QUF6R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiXHJcbmltcG9ydCB7IE1lZXRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhXHJcbn0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG4gIHB1YmxpYyBvZmZsaW5lbW9kZSA6Ym9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZWV0aW5nU2VydmljZSA6TWVldGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2VcclxuICApXHJcbiAge1xyXG4gICAgXHJcbiAgICB0aGlzLm1lZXRpbmdzVGV4dCA9IFwiTGFkZS4uLlwiO1xyXG5cclxuICAgIHRoaXMub2ZmbGluZW1vZGUgPSB0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0T2ZmbGluZU1vZGUoKTtcclxuXHJcbiAgICAvKlxyXG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLm1lZXRpbmdzLmlkID0gK3BhcmFtc1tcImlkXCJdOyB9KTtcclxuICAgICovXHJcblxyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS5tZWV0aW5ncygpLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLCBcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLmRpc3BsYXlNZWV0aW5ncyhmYWxzZSlcclxuICAgICk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGRpc3BsYXlNZWV0aW5ncyhkYXRhIDphbnkpe1xyXG5cclxuICAgIC8vQFJvbW1lbHQgaGllciBkaWUgRGF0ZW4gZsO8ciBWaWV3IHZvcmJlcmVpdGVuXHJcblxyXG4gICAgaWYoZGF0YSl7XHJcblxyXG4gICAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnNhdmVNZWV0aW5ncyhkYXRhKTtcclxuICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBkYXRhID0gdGhpcy5tZWV0aW5nU2VydmljZS5nZXRTYXZlZE1lZXRpbmdzKClcclxuICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc29sZS5kaXIodGhpcy5tZWV0aW5nc1swXSk7XHJcblxyXG4gICAgLy9AUm9tbWVsdDogbmFtZSBkZXMgMS4gbWVldGluZ3M6XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm1lZXRpbmdzWzBdLm5hbWUpO1xyXG5cclxuICAgIC8vQFJvbW1lbHQgQXR0cmlidXRlIHZvbiB0aGlzLm1lZXRpbmdzW2ldOlxyXG4gICAgLypcclxuICAgIHByb3RvY29sIDpTdHJpbmc7XHJcbiAgICBuYW1lIDpTdHJpbmc7XHJcbiAgICBsb2NhdGlvbiA6U3RyaW5nO1xyXG4gICAgaWQgOk51bWJlcjtcclxuICAgIGR1cmF0aW9uIDpOdW1iZXI7XHJcbiAgICBkYXRlIDpEYXRlO1xyXG4gICAgYXR0ZW5kZWVzOiBTdHJpbmc7XHJcbiAgICBhZ2VuZGEgOlN0cmluZ1xyXG4gICAgKi9cclxuXHJcbiAgfVxyXG5cclxuICBzaG93RGV0YWlsKGlkOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21lZXRpbmdfZGV0YWlsL1wiICsgaWRdLCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogU2lkZURyYXdlciAqL1xyXG4gIHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcclxuXHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxyXG4gIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZChhcmdzOiBhbnkpIHsgfVxyXG5cclxuICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7IH1cclxuXHJcbiAgcHVibGljIG9uRGVsZXRlKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBvbkFyY2hpdmUoKSB7IH1cclxuXHJcbiAgcHVibGljIG9uTWVudVRhcHBlZCh2YWx1ZTogYW55KSB7XHJcbiAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG5cclxufSJdfQ==
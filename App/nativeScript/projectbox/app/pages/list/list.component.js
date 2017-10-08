"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var status_service_1 = require("../../shared/status/status.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
require("rxjs/add/operator/switchMap");
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
    ListComponent.prototype.onSwipe = function (args) {
        /*
        if (args.direction = 1) {
        
          this.routerExtensions.navigate(["/meeting_detail"], {
              transition: {
                  name: "slide",
                  curve: "easeOut"
              }
          });
        }
        */
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QscUVBQW1FO0FBQ25FLDBDQUF5RDtBQUN6RCxzREFBMEU7QUFFMUUsd0VBQXNFO0FBVXRFLHVDQUFxQztBQVVyQztJQU9FLHVCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsU0FBb0IsRUFDcEIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsYUFBNEI7UUFQdEMsaUJBeUJDO1FBdkJTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBR3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2RDs7OztVQUlFO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBRUosQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUV2Qiw4Q0FBOEM7UUFFOUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUVQLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBRUQsZ0NBQWdDO1FBRWhDLGlDQUFpQztRQUVqQyxxQ0FBcUM7UUFFckMsMENBQTBDO1FBQzFDOzs7Ozs7Ozs7VUFTRTtJQUVKLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsSUFBMkI7UUFDakM7Ozs7Ozs7Ozs7VUFVRTtJQUNKLENBQUM7SUFsRlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO3lDQVVrQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3ZCLGtCQUFTO1lBQ1AsMEJBQVc7WUFDUixnQ0FBYztZQUNmLDhCQUFhO09BZDNCLGFBQWEsQ0FvRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBGRCxJQW9GQztBQXBGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmdcIlxyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YVxyXG59IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XHJcblxyXG4gIG1lZXRpbmdkYXRhIDphbnk7XHJcbiAgbWVldGluZ3NUZXh0IDpzdHJpbmc7XHJcbiAgbWVldGluZ3MgOk1lZXRpbmdbXTtcclxuICBwdWJsaWMgb2ZmbGluZW1vZGUgOmJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVldGluZ1NlcnZpY2UgOk1lZXRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBcclxuICAgIHRoaXMubWVldGluZ3NUZXh0ID0gXCJMYWRlLi4uXCI7XHJcblxyXG4gICAgdGhpcy5vZmZsaW5lbW9kZSA9IHRoaXMuc3RhdHVzU2VydmljZS5nZXRPZmZsaW5lTW9kZSgpO1xyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IHRoaXMubWVldGluZ3MuaWQgPSArcGFyYW1zW1wiaWRcIl07IH0pO1xyXG4gICAgKi9cclxuXHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLm1lZXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZGF0YSksIFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZGlzcGxheU1lZXRpbmdzKGRhdGEgOmFueSl7XHJcblxyXG4gICAgLy9AUm9tbWVsdCBoaWVyIGRpZSBEYXRlbiBmw7xyIFZpZXcgdm9yYmVyZWl0ZW5cclxuXHJcbiAgICBpZihkYXRhKXtcclxuXHJcbiAgICAgIHRoaXMubWVldGluZ1NlcnZpY2Uuc2F2ZU1lZXRpbmdzKGRhdGEpO1xyXG4gICAgICB0aGlzLm1lZXRpbmdzID0gZGF0YS5tZWV0aW5ncztcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKVxyXG4gICAgICB0aGlzLm1lZXRpbmdzID0gZGF0YS5tZWV0aW5ncztcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmRpcih0aGlzLm1lZXRpbmdzWzBdKTtcclxuXHJcbiAgICAvL0BSb21tZWx0OiBuYW1lIGRlcyAxLiBtZWV0aW5nczpcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMubWVldGluZ3NbMF0ubmFtZSk7XHJcblxyXG4gICAgLy9AUm9tbWVsdCBBdHRyaWJ1dGUgdm9uIHRoaXMubWVldGluZ3NbaV06XHJcbiAgICAvKlxyXG4gICAgcHJvdG9jb2wgOlN0cmluZztcclxuICAgIG5hbWUgOlN0cmluZztcclxuICAgIGxvY2F0aW9uIDpTdHJpbmc7XHJcbiAgICBpZCA6TnVtYmVyO1xyXG4gICAgZHVyYXRpb24gOk51bWJlcjtcclxuICAgIGRhdGUgOkRhdGU7XHJcbiAgICBhdHRlbmRlZXM6IFN0cmluZztcclxuICAgIGFnZW5kYSA6U3RyaW5nXHJcbiAgICAqL1xyXG5cclxuICB9XHJcblxyXG4gIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICAvKlxyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID0gMSkge1xyXG4gICAgXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWVldGluZ19kZXRhaWxcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgKi9cclxuICB9XHJcblxyXG59Il19
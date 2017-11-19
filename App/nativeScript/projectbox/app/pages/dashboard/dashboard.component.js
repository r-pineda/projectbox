"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var status_service_1 = require("../../shared/status/status.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
require("rxjs/add/operator/switchMap");
var DashboardComponent = (function () {
    function DashboardComponent(router, routerExtensions, pageRoute, userService, meetingService, statusService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.userService = userService;
        this.meetingService = meetingService;
        this.statusService = statusService;
        this.meetingsText = "Lade...";
        this.offlinemode = this.statusService.getOfflineMode();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProjects().subscribe(function (data) { return _this.displayProjects(data); }, function (error) { return _this.displayProjects(false); });
        this.meetingService.meetings().subscribe(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
    };
    DashboardComponent.prototype.displayMeetings = function (data) {
        //@Rommelt hier die Daten f�r View vorbereiten
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
    DashboardComponent.prototype.displayProjects = function (data) {
        if (data) {
            this.userService.saveProjects(data);
            this.projects = data.projects;
        }
        else {
            data = this.userService.getSavedProjects();
            this.projects = data.projects;
        }
        console.log(this.projects[0].name);
    };
    DashboardComponent.prototype.showDetail = function (id) {
        this.routerExtensions.navigate(["/meeting_detail/" + id], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService, meeting_service_1.MeetingService, status_service_1.StatusService],
            templateUrl: "pages/dashboard/dashboard.html",
            styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_2.PageRoute,
            user_service_1.UserService,
            meeting_service_1.MeetingService,
            status_service_1.StatusService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsK0RBQTZEO0FBQzdELHFFQUFtRTtBQUNuRSwwQ0FBeUQ7QUFDekQsc0RBQTBFO0FBRTFFLHdFQUFzRTtBQVd0RSx1Q0FBcUM7QUFXckM7SUFPRSw0QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLFNBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGFBQTRCO1FBTDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSXBDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUV2Qiw4Q0FBOEM7UUFFOUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUVQLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBTUQsZ0NBQWdDO1FBRWhDLGlDQUFpQztRQUVqQyxxQ0FBcUM7UUFFckMsMENBQTBDO1FBQzFDOzs7Ozs7Ozs7VUFTRTtJQUVKLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLElBQVM7UUFDbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUVQLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFFTCx1Q0FBVSxHQUFWLFVBQVcsRUFBVTtRQUVqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFFdEQsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJHVSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZELFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsc0NBQXNDLEVBQUUsK0JBQStCLENBQUM7U0FDckYsQ0FBQzt5Q0FXa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUN2QixrQkFBUztZQUNQLDBCQUFXO1lBQ1IsZ0NBQWM7WUFDZiw4QkFBYTtPQWQzQixrQkFBa0IsQ0F1RzlCO0lBQUQseUJBQUM7Q0FBQSxBQXZHRCxJQXVHQztBQXZHWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiO1xyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgUGl2b3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvcHJvamVjdFwiXHJcbmltcG9ydCB7XHJcbiAgR2VzdHVyZUV2ZW50RGF0YSxcclxuICBHZXN0dXJlVHlwZXMsXHJcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcclxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXHJcbiAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcclxuICBUb3VjaEdlc3R1cmVFdmVudERhdGFcclxufSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG4gIHB1YmxpYyBvZmZsaW5lbW9kZSA6Ym9vbGVhbjtcclxuICBwcm9qZWN0cyA6UHJvamVjdFtdO1xyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVldGluZ1NlcnZpY2UgOk1lZXRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlXHJcbiAgKVxyXG4gIHtcclxuICAgIFxyXG4gICAgdGhpcy5tZWV0aW5nc1RleHQgPSBcIkxhZGUuLi5cIjtcclxuXHJcbiAgICB0aGlzLm9mZmxpbmVtb2RlID0gdGhpcy5zdGF0dXNTZXJ2aWNlLmdldE9mZmxpbmVNb2RlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0UHJvamVjdHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmRpc3BsYXlQcm9qZWN0cyhkYXRhKSxcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLmRpc3BsYXlQcm9qZWN0cyhmYWxzZSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS5tZWV0aW5ncygpLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLCBcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLmRpc3BsYXlNZWV0aW5ncyhmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5TWVldGluZ3MoZGF0YSA6YW55KXtcclxuXHJcbiAgICAvL0BSb21tZWx0IGhpZXIgZGllIERhdGVuIGbvv71yIFZpZXcgdm9yYmVyZWl0ZW5cclxuXHJcbiAgICBpZihkYXRhKXtcclxuXHJcbiAgICAgIHRoaXMubWVldGluZ1NlcnZpY2Uuc2F2ZU1lZXRpbmdzKGRhdGEpO1xyXG4gICAgICB0aGlzLm1lZXRpbmdzID0gZGF0YS5tZWV0aW5ncztcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKVxyXG4gICAgICB0aGlzLm1lZXRpbmdzID0gZGF0YS5tZWV0aW5ncztcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgLy9jb25zb2xlLmRpcih0aGlzLm1lZXRpbmdzWzBdKTtcclxuXHJcbiAgICAvL0BSb21tZWx0OiBuYW1lIGRlcyAxLiBtZWV0aW5nczpcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMubWVldGluZ3NbMF0ubmFtZSk7XHJcblxyXG4gICAgLy9AUm9tbWVsdCBBdHRyaWJ1dGUgdm9uIHRoaXMubWVldGluZ3NbaV06XHJcbiAgICAvKlxyXG4gICAgcHJvdG9jb2wgOlN0cmluZztcclxuICAgIG5hbWUgOlN0cmluZztcclxuICAgIGxvY2F0aW9uIDpTdHJpbmc7XHJcbiAgICBpZCA6TnVtYmVyO1xyXG4gICAgZHVyYXRpb24gOk51bWJlcjtcclxuICAgIGRhdGUgOkRhdGU7XHJcbiAgICBhdHRlbmRlZXM6IFN0cmluZztcclxuICAgIGFnZW5kYSA6U3RyaW5nXHJcbiAgICAqL1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3BsYXlQcm9qZWN0cyhkYXRhIDphbnkpe1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgXHJcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9qZWN0cyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xyXG4gICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICBcclxuICAgICAgICAgIGRhdGEgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFNhdmVkUHJvamVjdHMoKVxyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHNbMF0ubmFtZSk7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuICBzaG93RGV0YWlsKGlkOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21lZXRpbmdfZGV0YWlsL1wiICsgaWRdLCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
        this.userService.getProjects().then(function (data) { return _this.displayProjects(data); }, function (error) { return _this.displayProjects(false); });
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
        this.meetings[0].name = "test inApp";
        this.meetingService.createMeeting(this.meetings[0]).then(function (data) { return alert("Meeting mit dem Namen: " + data.meeting.name + " erfolgreich erstellt."); }, function (error) { return console.log(error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsK0RBQTZEO0FBQzdELHFFQUFtRTtBQUNuRSwwQ0FBeUQ7QUFDekQsc0RBQTBFO0FBRTFFLHdFQUFzRTtBQVd0RSx1Q0FBcUM7QUFXckM7SUFPRSw0QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLFNBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGFBQTRCO1FBTDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSXBDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUV2Qiw4Q0FBOEM7UUFFOUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUVQLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBTUQsZ0NBQWdDO1FBRWhDLGlDQUFpQztRQUVqQyxxQ0FBcUM7UUFFckMsMENBQTBDO1FBQzFDOzs7Ozs7Ozs7VUFTRTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN0RCxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyx3QkFBd0IsQ0FBQyxFQUEvRSxDQUErRSxFQUN6RixVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFFSixDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixJQUFTO1FBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBRUwsdUNBQVUsR0FBVixVQUFXLEVBQVU7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBRXRELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6R1Usa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztZQUN2RCxXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLCtCQUErQixDQUFDO1NBQ3JGLENBQUM7eUNBV2tCLGVBQU07WUFDSSx5QkFBZ0I7WUFDdkIsa0JBQVM7WUFDUCwwQkFBVztZQUNSLGdDQUFjO1lBQ2YsOEJBQWE7T0FkM0Isa0JBQWtCLENBMkc5QjtJQUFELHlCQUFDO0NBQUEsQUEzR0QsSUEyR0M7QUEzR1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmdcIjtcclxuaW1wb3J0IHsgTWVldGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFBpdm90IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3Byb2plY3RcIlxyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhXHJcbn0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xyXG5pbXBvcnQgKiBhcyBGcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBNZWV0aW5nU2VydmljZSwgU3RhdHVzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XHJcblxyXG4gIG1lZXRpbmdkYXRhIDphbnk7XHJcbiAgbWVldGluZ3NUZXh0IDpzdHJpbmc7XHJcbiAgbWVldGluZ3MgOk1lZXRpbmdbXTtcclxuICBwdWJsaWMgb2ZmbGluZW1vZGUgOmJvb2xlYW47XHJcbiAgcHJvamVjdHMgOlByb2plY3RbXTtcclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lZXRpbmdTZXJ2aWNlIDpNZWV0aW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZVxyXG4gIClcclxuICB7XHJcbiAgICBcclxuICAgIHRoaXMubWVldGluZ3NUZXh0ID0gXCJMYWRlLi4uXCI7XHJcblxyXG4gICAgdGhpcy5vZmZsaW5lbW9kZSA9IHRoaXMuc3RhdHVzU2VydmljZS5nZXRPZmZsaW5lTW9kZSgpO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFByb2plY3RzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLm1lZXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZGF0YSksIFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlNZWV0aW5ncyhkYXRhIDphbnkpe1xyXG5cclxuICAgIC8vQFJvbW1lbHQgaGllciBkaWUgRGF0ZW4gZu+/vXIgVmlldyB2b3JiZXJlaXRlblxyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS5zYXZlTWVldGluZ3MoZGF0YSk7XHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgZGF0YSA9IHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0U2F2ZWRNZWV0aW5ncygpXHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMubWVldGluZ3NbMF0pO1xyXG5cclxuICAgIC8vQFJvbW1lbHQ6IG5hbWUgZGVzIDEuIG1lZXRpbmdzOlxyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5tZWV0aW5nc1swXS5uYW1lKTtcclxuXHJcbiAgICAvL0BSb21tZWx0IEF0dHJpYnV0ZSB2b24gdGhpcy5tZWV0aW5nc1tpXTpcclxuICAgIC8qXHJcbiAgICBwcm90b2NvbCA6U3RyaW5nO1xyXG4gICAgbmFtZSA6U3RyaW5nO1xyXG4gICAgbG9jYXRpb24gOlN0cmluZztcclxuICAgIGlkIDpOdW1iZXI7XHJcbiAgICBkdXJhdGlvbiA6TnVtYmVyO1xyXG4gICAgZGF0ZSA6RGF0ZTtcclxuICAgIGF0dGVuZGVlczogU3RyaW5nO1xyXG4gICAgYWdlbmRhIDpTdHJpbmdcclxuICAgICovXHJcbiAgICB0aGlzLm1lZXRpbmdzWzBdLm5hbWUgPSBcInRlc3QgaW5BcHBcIjtcclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UuY3JlYXRlTWVldGluZyh0aGlzLm1lZXRpbmdzWzBdKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gYWxlcnQoXCJNZWV0aW5nIG1pdCBkZW0gTmFtZW46IFwiICsgZGF0YS5tZWV0aW5nLm5hbWUgKyBcIiBlcmZvbGdyZWljaCBlcnN0ZWxsdC5cIiksXHJcbiAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3BsYXlQcm9qZWN0cyhkYXRhIDphbnkpe1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgXHJcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9qZWN0cyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xyXG4gICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICBcclxuICAgICAgICAgIGRhdGEgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFNhdmVkUHJvamVjdHMoKVxyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0c1swXS5uYW1lKTtcclxuICAgIFxyXG4gICAgICB9XHJcblxyXG4gIHNob3dEZXRhaWwoaWQ6IG51bWJlcikge1xyXG4gICAgXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWVldGluZ19kZXRhaWwvXCIgKyBpZF0sIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
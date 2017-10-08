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
    ListComponent.prototype.showDetail = function (id) {
        this.routerExtensions.navigate(["/meeting_detail/" + id], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QscUVBQW1FO0FBQ25FLDBDQUF5RDtBQUN6RCxzREFBMEU7QUFFMUUsd0VBQXNFO0FBVXRFLHVDQUFxQztBQVVyQztJQU9FLHVCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsU0FBb0IsRUFDcEIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsYUFBNEI7UUFQdEMsaUJBeUJDO1FBdkJTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBR3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2RDs7OztVQUlFO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBRUosQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUV2Qiw4Q0FBOEM7UUFFOUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUVQLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBRUQsZ0NBQWdDO1FBRWhDLGlDQUFpQztRQUVqQyxxQ0FBcUM7UUFFckMsMENBQTBDO1FBQzFDOzs7Ozs7Ozs7VUFTRTtJQUVKLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUVqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFFdEQsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9FVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1NBQ2pFLENBQUM7eUNBVWtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDdkIsa0JBQVM7WUFDUCwwQkFBVztZQUNSLGdDQUFjO1lBQ2YsOEJBQWE7T0FkM0IsYUFBYSxDQWlGekI7SUFBRCxvQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiXHJcbmltcG9ydCB7IE1lZXRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhXHJcbn0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgTWVldGluZ1NlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG4gIHB1YmxpYyBvZmZsaW5lbW9kZSA6Ym9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZWV0aW5nU2VydmljZSA6TWVldGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2VcclxuICApIHtcclxuICAgIFxyXG4gICAgdGhpcy5tZWV0aW5nc1RleHQgPSBcIkxhZGUuLi5cIjtcclxuXHJcbiAgICB0aGlzLm9mZmxpbmVtb2RlID0gdGhpcy5zdGF0dXNTZXJ2aWNlLmdldE9mZmxpbmVNb2RlKCk7XHJcblxyXG4gICAgLypcclxuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5tZWV0aW5ncy5pZCA9ICtwYXJhbXNbXCJpZFwiXTsgfSk7XHJcbiAgICAqL1xyXG5cclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UubWVldGluZ3MoKS5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmRpc3BsYXlNZWV0aW5ncyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZmFsc2UpXHJcbiAgICApO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5TWVldGluZ3MoZGF0YSA6YW55KXtcclxuXHJcbiAgICAvL0BSb21tZWx0IGhpZXIgZGllIERhdGVuIGbDvHIgVmlldyB2b3JiZXJlaXRlblxyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS5zYXZlTWVldGluZ3MoZGF0YSk7XHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgZGF0YSA9IHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0U2F2ZWRNZWV0aW5ncygpXHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMubWVldGluZ3NbMF0pO1xyXG5cclxuICAgIC8vQFJvbW1lbHQ6IG5hbWUgZGVzIDEuIG1lZXRpbmdzOlxyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5tZWV0aW5nc1swXS5uYW1lKTtcclxuXHJcbiAgICAvL0BSb21tZWx0IEF0dHJpYnV0ZSB2b24gdGhpcy5tZWV0aW5nc1tpXTpcclxuICAgIC8qXHJcbiAgICBwcm90b2NvbCA6U3RyaW5nO1xyXG4gICAgbmFtZSA6U3RyaW5nO1xyXG4gICAgbG9jYXRpb24gOlN0cmluZztcclxuICAgIGlkIDpOdW1iZXI7XHJcbiAgICBkdXJhdGlvbiA6TnVtYmVyO1xyXG4gICAgZGF0ZSA6RGF0ZTtcclxuICAgIGF0dGVuZGVlczogU3RyaW5nO1xyXG4gICAgYWdlbmRhIDpTdHJpbmdcclxuICAgICovXHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd0RldGFpbChpZDogbnVtYmVyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tZWV0aW5nX2RldGFpbC9cIiArIGlkXSwge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG59Il19
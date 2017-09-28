"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
var ListComponent = (function () {
    function ListComponent(router, routerExtensions, userService, meetingService) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.meetingService = meetingService;
        this.meetingsText = "Lade...";
        this.meetingService.getMeetings().then(function (data) { return _this.meetings; });
        /*
        this.userService.meetings().subscribe(
          (data) => this.displayMeetings(data),
          (error) => alert("Unfortunately we could not find any meetings.")
        );
        */
    }
    ListComponent.prototype.displayMeetings = function (data) {
        //@Rommelt hier die Daten für View vorbereiten
        //this.meetings = data.meetings;
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
        if (args.direction = 1) {
            this.routerExtensions.navigate(["/animation"], {
                transition: {
                    name: "slide",
                    curve: "easeOut"
                }
            });
        }
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            providers: [user_service_1.UserService, meeting_service_1.MeetingService],
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, user_service_1.UserService, meeting_service_1.MeetingService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUE2RDtBQUU3RCx3RUFBc0U7QUFtQnRFO0lBTUUsdUJBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxXQUF3QixFQUFVLGNBQThCO1FBQXhKLGlCQWNDO1FBZG1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEosSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBRzlEOzs7OztVQUtFO0lBRUosQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUV2Qiw4Q0FBOEM7UUFFOUMsZ0NBQWdDO1FBRWhDLGdDQUFnQztRQUVoQyxpQ0FBaUM7UUFFakMscUNBQXFDO1FBRXJDLDBDQUEwQztRQUMxQzs7Ozs7Ozs7O1VBU0U7SUFFSixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsU0FBUztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQTFEVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsZ0NBQWMsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO3lDQU80QixlQUFNLEVBQTRCLHlCQUFnQixFQUF1QiwwQkFBVyxFQUEwQixnQ0FBYztPQU43SSxhQUFhLENBNER6QjtJQUFELG9CQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmdcIlxyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YVxyXG59IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgTWVldGluZ1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIG1lZXRpbmdTZXJ2aWNlIDpNZWV0aW5nU2VydmljZSkge1xyXG4gICAgXHJcbiAgICB0aGlzLm1lZXRpbmdzVGV4dCA9IFwiTGFkZS4uLlwiO1xyXG5cclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0TWVldGluZ3MoKS50aGVuKGRhdGEgPT4gdGhpcy5tZWV0aW5ncyk7XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLm1lZXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZGF0YSksIFxyXG4gICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCBhbnkgbWVldGluZ3MuXCIpXHJcbiAgICApO1xyXG4gICAgKi9cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZGlzcGxheU1lZXRpbmdzKGRhdGEgOmFueSl7XHJcblxyXG4gICAgLy9AUm9tbWVsdCBoaWVyIGRpZSBEYXRlbiBmw7xyIFZpZXcgdm9yYmVyZWl0ZW5cclxuXHJcbiAgICAvL3RoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG5cclxuICAgIC8vY29uc29sZS5kaXIodGhpcy5tZWV0aW5nc1swXSk7XHJcblxyXG4gICAgLy9AUm9tbWVsdDogbmFtZSBkZXMgMS4gbWVldGluZ3M6XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm1lZXRpbmdzWzBdLm5hbWUpO1xyXG5cclxuICAgIC8vQFJvbW1lbHQgQXR0cmlidXRlIHZvbiB0aGlzLm1lZXRpbmdzW2ldOlxyXG4gICAgLypcclxuICAgIHByb3RvY29sIDpTdHJpbmc7XHJcbiAgICBuYW1lIDpTdHJpbmc7XHJcbiAgICBsb2NhdGlvbiA6U3RyaW5nO1xyXG4gICAgaWQgOk51bWJlcjtcclxuICAgIGR1cmF0aW9uIDpOdW1iZXI7XHJcbiAgICBkYXRlIDpEYXRlO1xyXG4gICAgYXR0ZW5kZWVzOiBTdHJpbmc7XHJcbiAgICBhZ2VuZGEgOlN0cmluZ1xyXG4gICAgKi9cclxuXHJcbiAgfVxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID0gMSkge1xyXG4gICAgXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYW5pbWF0aW9uXCJdLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19
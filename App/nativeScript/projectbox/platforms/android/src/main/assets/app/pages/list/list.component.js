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
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.userService = userService;
        this.meetingService = meetingService;
        this.statusService = statusService;
        this.meetingsText = "Lade...";
        this.offlinemode = this.statusService.getOfflineMode();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProjects().subscribe(function (data) { return _this.displayProjects(data); }, function (error) { return _this.displayProjects(false); });
        this.meetingService.meetings().subscribe(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
    };
    ListComponent.prototype.displayMeetings = function (data) {
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
    ListComponent.prototype.displayProjects = function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwrREFBNkQ7QUFDN0QscUVBQW1FO0FBQ25FLDBDQUF5RDtBQUN6RCxzREFBMEU7QUFFMUUsd0VBQXNFO0FBV3RFLHVDQUFxQztBQVdyQztJQU9FLHVCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsU0FBb0IsRUFDcEIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsYUFBNEI7UUFMNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFJcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FDdEMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUNwQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDdEMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUNwQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixJQUFTO1FBRXZCLDhDQUE4QztRQUU5QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFNRCxnQ0FBZ0M7UUFFaEMsaUNBQWlDO1FBRWpDLHFDQUFxQztRQUVyQywwQ0FBMEM7UUFDMUM7Ozs7Ozs7OztVQVNFO0lBRUosQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUNuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckMsQ0FBQztJQUVMLGtDQUFVLEdBQVYsVUFBVyxFQUFVO1FBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUV0RCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckdVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLDhCQUFhLENBQUM7WUFDdkQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FVa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUN2QixrQkFBUztZQUNQLDBCQUFXO1lBQ1IsZ0NBQWM7WUFDZiw4QkFBYTtPQWQzQixhQUFhLENBc0d6QjtJQUFELG9CQUFDO0NBQUEsQUF0R0QsSUFzR0M7QUF0R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiO1xyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgUGl2b3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvcHJvamVjdFwiXHJcbmltcG9ydCB7XHJcbiAgR2VzdHVyZUV2ZW50RGF0YSxcclxuICBHZXN0dXJlVHlwZXMsXHJcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcclxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXHJcbiAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcclxuICBUb3VjaEdlc3R1cmVFdmVudERhdGFcclxufSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBNZWV0aW5nU2VydmljZSwgU3RhdHVzU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIG1lZXRpbmdkYXRhIDphbnk7XHJcbiAgbWVldGluZ3NUZXh0IDpzdHJpbmc7XHJcbiAgbWVldGluZ3MgOk1lZXRpbmdbXTtcclxuICBwdWJsaWMgb2ZmbGluZW1vZGUgOmJvb2xlYW47XHJcbiAgcHJvamVjdHMgOlByb2plY3RbXTtcclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lZXRpbmdTZXJ2aWNlIDpNZWV0aW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZVxyXG4gIClcclxuICB7XHJcbiAgICBcclxuICAgIHRoaXMubWVldGluZ3NUZXh0ID0gXCJMYWRlLi4uXCI7XHJcblxyXG4gICAgdGhpcy5vZmZsaW5lbW9kZSA9IHRoaXMuc3RhdHVzU2VydmljZS5nZXRPZmZsaW5lTW9kZSgpO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFByb2plY3RzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5UHJvamVjdHMoZGF0YSksXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5UHJvamVjdHMoZmFsc2UpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UubWVldGluZ3MoKS5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmRpc3BsYXlNZWV0aW5ncyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZmFsc2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheU1lZXRpbmdzKGRhdGEgOmFueSl7XHJcblxyXG4gICAgLy9AUm9tbWVsdCBoaWVyIGRpZSBEYXRlbiBm77+9ciBWaWV3IHZvcmJlcmVpdGVuXHJcblxyXG4gICAgaWYoZGF0YSl7XHJcblxyXG4gICAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnNhdmVNZWV0aW5ncyhkYXRhKTtcclxuICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBkYXRhID0gdGhpcy5tZWV0aW5nU2VydmljZS5nZXRTYXZlZE1lZXRpbmdzKClcclxuICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vY29uc29sZS5kaXIodGhpcy5tZWV0aW5nc1swXSk7XHJcblxyXG4gICAgLy9AUm9tbWVsdDogbmFtZSBkZXMgMS4gbWVldGluZ3M6XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm1lZXRpbmdzWzBdLm5hbWUpO1xyXG5cclxuICAgIC8vQFJvbW1lbHQgQXR0cmlidXRlIHZvbiB0aGlzLm1lZXRpbmdzW2ldOlxyXG4gICAgLypcclxuICAgIHByb3RvY29sIDpTdHJpbmc7XHJcbiAgICBuYW1lIDpTdHJpbmc7XHJcbiAgICBsb2NhdGlvbiA6U3RyaW5nO1xyXG4gICAgaWQgOk51bWJlcjtcclxuICAgIGR1cmF0aW9uIDpOdW1iZXI7XHJcbiAgICBkYXRlIDpEYXRlO1xyXG4gICAgYXR0ZW5kZWVzOiBTdHJpbmc7XHJcbiAgICBhZ2VuZGEgOlN0cmluZ1xyXG4gICAgKi9cclxuXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5UHJvamVjdHMoZGF0YSA6YW55KXtcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgIFxyXG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlUHJvamVjdHMoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcclxuICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgICAgICBkYXRhID0gdGhpcy51c2VyU2VydmljZS5nZXRTYXZlZFByb2plY3RzKClcclxuICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzWzBdLm5hbWUpO1xyXG4gICAgXHJcbiAgICAgIH1cclxuXHJcbiAgc2hvd0RldGFpbChpZDogbnVtYmVyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tZWV0aW5nX2RldGFpbC9cIiArIGlkXSwge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn0iXX0=
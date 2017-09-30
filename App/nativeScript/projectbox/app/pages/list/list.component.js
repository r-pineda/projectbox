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
        //this.meetingService.getMeetings().then(data => this.meetings);
        this.userService.meetings().subscribe(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
    }
    ListComponent.prototype.displayMeetings = function (data) {
        //@Rommelt hier die Daten für View vorbereiten
        if (data) {
            this.meetingService.saveMeetings(data);
            this.meetings = data.meetings;
        }
        else {
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
            console.log("offline!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUErRDtBQUUvRCx3RUFBc0U7QUFtQnRFO0lBTUUsdUJBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxXQUF3QixFQUFVLGNBQThCO1FBQXhKLGlCQVlDO1FBWm1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEosSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFHOUIsZ0VBQWdFO1FBRWhFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUNuQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLEVBQ3BDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FDdkMsQ0FBQztJQUVKLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQVM7UUFFdkIsOENBQThDO1FBRTlDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBRUQsZ0NBQWdDO1FBRWhDLGlDQUFpQztRQUVqQyxxQ0FBcUM7UUFFckMsMENBQTBDO1FBQzFDOzs7Ozs7Ozs7VUFTRTtJQUVKLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsSUFBMkI7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDM0MsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxTQUFTO2lCQUNuQjthQUNKLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBNUVVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1NBQ2pFLENBQUM7eUNBTzRCLGVBQU0sRUFBNEIseUJBQWdCLEVBQXVCLDBCQUFXLEVBQTBCLGdDQUFjO09BTjdJLGFBQWEsQ0E4RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCJcclxuaW1wb3J0IHsgTWVldGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgR2VzdHVyZUV2ZW50RGF0YSxcclxuICBHZXN0dXJlVHlwZXMsXHJcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcclxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXHJcbiAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcclxuICBUb3VjaEdlc3R1cmVFdmVudERhdGFcclxufSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XHJcblxyXG4gIG1lZXRpbmdkYXRhIDphbnk7XHJcbiAgbWVldGluZ3NUZXh0IDpzdHJpbmc7XHJcbiAgbWVldGluZ3MgOk1lZXRpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBtZWV0aW5nU2VydmljZSA6TWVldGluZ1NlcnZpY2UpIHtcclxuICAgIFxyXG4gICAgdGhpcy5tZWV0aW5nc1RleHQgPSBcIkxhZGUuLi5cIjtcclxuXHJcblxyXG4gICAgLy90aGlzLm1lZXRpbmdTZXJ2aWNlLmdldE1lZXRpbmdzKCkudGhlbihkYXRhID0+IHRoaXMubWVldGluZ3MpO1xyXG5cclxuICAgIHRoaXMudXNlclNlcnZpY2UubWVldGluZ3MoKS5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmRpc3BsYXlNZWV0aW5ncyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZmFsc2UpXHJcbiAgICApO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5TWVldGluZ3MoZGF0YSA6YW55KXtcclxuXHJcbiAgICAvL0BSb21tZWx0IGhpZXIgZGllIERhdGVuIGbDvHIgVmlldyB2b3JiZXJlaXRlblxyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS5zYXZlTWVldGluZ3MoZGF0YSk7XHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lIVwiKTtcclxuICAgICAgZGF0YSA9IHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0U2F2ZWRNZWV0aW5ncygpXHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMubWVldGluZ3NbMF0pO1xyXG5cclxuICAgIC8vQFJvbW1lbHQ6IG5hbWUgZGVzIDEuIG1lZXRpbmdzOlxyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5tZWV0aW5nc1swXS5uYW1lKTtcclxuXHJcbiAgICAvL0BSb21tZWx0IEF0dHJpYnV0ZSB2b24gdGhpcy5tZWV0aW5nc1tpXTpcclxuICAgIC8qXHJcbiAgICBwcm90b2NvbCA6U3RyaW5nO1xyXG4gICAgbmFtZSA6U3RyaW5nO1xyXG4gICAgbG9jYXRpb24gOlN0cmluZztcclxuICAgIGlkIDpOdW1iZXI7XHJcbiAgICBkdXJhdGlvbiA6TnVtYmVyO1xyXG4gICAgZGF0ZSA6RGF0ZTtcclxuICAgIGF0dGVuZGVlczogU3RyaW5nO1xyXG4gICAgYWdlbmRhIDpTdHJpbmdcclxuICAgICovXHJcblxyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9IDEpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FuaW1hdGlvblwiXSwge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var status_service_1 = require("../../shared/status/status.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
require("rxjs/add/operator/switchMap");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var user_1 = require("../../shared/user/user");
var DashboardComponent = (function () {
    function DashboardComponent(router, routerExtensions, pageRoute, userService, meetingService, statusService, _changeDetectionRef, fonticon) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.userService = userService;
        this.meetingService = meetingService;
        this.statusService = statusService;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.curUser = new user_1.User;
        this.curUser = this.userService.getCurrentUser();
        this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
        this.offlinemode = this.statusService.getOfflineMode();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProjects().then(function (data) { return _this.displayProjects(data); }, function (error) { return _this.displayProjects(false); });
        this.meetingService.getMeetings().then(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
    };
    DashboardComponent.prototype.displayMeetings = function (data) {
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
        /*this.meetings[0].name = "test inApp";
        this.meetingService.createMeeting(this.meetings[0]).then(
          (data) => alert("Meeting mit dem Namen: " + data.meeting.name + " erfolgreich erstellt."),
          (error) => console.log(error)
        );
    */
    };
    DashboardComponent.prototype.aktualisieren = function () {
        var _this = this;
        this.userService.getProjects().then(function (data) { return _this.displayProjects(data); }, function (error) { return _this.displayProjects(false); });
        this.meetingService.getMeetings().then(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
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
    };
    DashboardComponent.prototype.showDetail = function (id) {
        this.routerExtensions.navigate(["/meeting_detail/" + id], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    DashboardComponent.prototype.navigateto = function (pagename) {
        this.routerExtensions.navigate([pagename], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    DashboardComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    DashboardComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], DashboardComponent.prototype, "drawerComponent", void 0);
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
            status_service_1.StatusService,
            core_1.ChangeDetectorRef,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsK0RBQTZEO0FBQzdELHFFQUFtRTtBQUNuRSwwQ0FBeUQ7QUFDekQsc0RBQTBFO0FBRTFFLHdFQUFzRTtBQVd0RSx1Q0FBcUM7QUFHckMsa0VBQWdHO0FBRWhHLHVFQUErRDtBQUMvRCwrQ0FBOEM7QUFTOUM7SUFVRSw0QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLFNBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLG1CQUFzQyxFQUN0QyxRQUE0QjtRQVA1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBakJ0QyxZQUFPLEdBQVMsSUFBSSxXQUFJLENBQUM7UUFxQnZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLDhDQUE4QyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRWxJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFD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QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0csNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSx1Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLDZDQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWQ4QjtRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7K0RBQUM7SUFwSTdFLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLDhCQUFhLENBQUM7WUFDdkQsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSwrQkFBK0IsQ0FBQztTQUNyRixDQUFDO3lDQWNrQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3ZCLGtCQUFTO1lBQ1AsMEJBQVc7WUFDUixnQ0FBYztZQUNmLDhCQUFhO1lBQ1Asd0JBQWlCO1lBQzVCLDhDQUFrQjtPQW5CM0Isa0JBQWtCLENBbUo5QjtJQUFELHlCQUFDO0NBQUEsQUFuSkQsSUFtSkM7QUFuSlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCI7XHJcbmltcG9ydCB7IE1lZXRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQaXZvdCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci9wcm9qZWN0XCJcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YVxyXG59IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgTWVldGluZ1NlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb21tb24uY3NzXCIsIFwicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG5cclxuICBjdXJVc2VyIDpVc2VyID0gbmV3IFVzZXI7XHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG4gIHB1YmxpYyBvZmZsaW5lbW9kZSA6Ym9vbGVhbjtcclxuICBwcm9qZWN0cyA6UHJvamVjdFtdO1xyXG4gIGF2YXRhciA6c3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lZXRpbmdTZXJ2aWNlIDpNZWV0aW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2VcclxuICApXHJcbiAge1xyXG5cclxuICAgIHRoaXMuY3VyVXNlciA9IHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIHRoaXMuYXZhdGFyID0gXCJodHRwczovL3NlY3VyZS5wcm9qZWN0Ym94LmV1L3YyL3VzZXIvYXZhdGFyL1wiICsgdGhpcy5jdXJVc2VyLmF2YXRhciArIFwiP2FjY2Vzc190b2tlbj1cIiArIHRoaXMuY3VyVXNlci5hY2Nlc3NfdG9rZW47XHJcblxyXG4gICAgdGhpcy5vZmZsaW5lbW9kZSA9IHRoaXMuc3RhdHVzU2VydmljZS5nZXRPZmZsaW5lTW9kZSgpO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFByb2plY3RzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldE1lZXRpbmdzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICBkaXNwbGF5TWVldGluZ3MoZGF0YSA6YW55KXtcclxuXHJcbiAgICAvL0BSb21tZWx0IGhpZXIgZGllIERhdGVuIGbDvHIgVmlldyB2b3JiZXJlaXRlblxyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS5zYXZlTWVldGluZ3MoZGF0YSk7XHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgZGF0YSA9IHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0U2F2ZWRNZWV0aW5ncygpXHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzOyBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMubWVldGluZ3NbMF0pO1xyXG5cclxuICAgIC8vQFJvbW1lbHQ6IG5hbWUgZGVzIDEuIG1lZXRpbmdzOlxyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5tZWV0aW5nc1swXS5uYW1lKTtcclxuXHJcbiAgICAvL0BSb21tZWx0IEF0dHJpYnV0ZSB2b24gdGhpcy5tZWV0aW5nc1tpXTpcclxuICAgIC8qXHJcbiAgICBwcm90b2NvbCA6U3RyaW5nO1xyXG4gICAgbmFtZSA6U3RyaW5nO1xyXG4gICAgbG9jYXRpb24gOlN0cmluZztcclxuICAgIGlkIDpOdW1iZXI7XHJcbiAgICBkdXJhdGlvbiA6TnVtYmVyO1xyXG4gICAgZGF0ZSA6RGF0ZTtcclxuICAgIGF0dGVuZGVlczogU3RyaW5nO1xyXG4gICAgYWdlbmRhIDpTdHJpbmdcclxuICAgICovXHJcbiAgICAvKnRoaXMubWVldGluZ3NbMF0ubmFtZSA9IFwidGVzdCBpbkFwcFwiO1xyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS5jcmVhdGVNZWV0aW5nKHRoaXMubWVldGluZ3NbMF0pLnRoZW4oXHJcbiAgICAgIChkYXRhKSA9PiBhbGVydChcIk1lZXRpbmcgbWl0IGRlbSBOYW1lbjogXCIgKyBkYXRhLm1lZXRpbmcubmFtZSArIFwiIGVyZm9sZ3JlaWNoIGVyc3RlbGx0LlwiKSxcclxuICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICk7XHJcbiovXHJcbiAgfVxyXG5cclxuICBha3R1YWxpc2llcmVuKCl7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFByb2plY3RzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldE1lZXRpbmdzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlQcm9qZWN0cyhkYXRhIDphbnkpe1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgXHJcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9qZWN0cyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xyXG4gICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICBcclxuICAgICAgICAgIGRhdGEgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFNhdmVkUHJvamVjdHMoKVxyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgc2hvd0RldGFpbChpZDogbnVtYmVyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tZWV0aW5nX2RldGFpbC9cIiArIGlkXSwge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRldG8ocGFnZW5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3BhZ2VuYW1lXSwge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgICAgICAgICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxufVxyXG4iXX0=
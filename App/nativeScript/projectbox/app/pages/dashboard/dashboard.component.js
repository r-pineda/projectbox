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
        /*this.meetings[0].name = "test inApp";
        this.meetingService.createMeeting(this.meetings[0]).then(
          (data) => alert("Meeting mit dem Namen: " + data.meeting.name + " erfolgreich erstellt."),
          (error) => console.log(error)
        );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsK0RBQTZEO0FBQzdELHFFQUFtRTtBQUNuRSwwQ0FBeUQ7QUFDekQsc0RBQTBFO0FBRTFFLHdFQUFzRTtBQVd0RSx1Q0FBcUM7QUFHckMsa0VBQWdHO0FBRWhHLHVFQUErRDtBQVMvRDtJQU9FLDRCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsU0FBb0IsRUFDcEIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsbUJBQXNDLEVBQ3RDLFFBQTRCO1FBUDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFJcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFTSxxQ0FBUSxHQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDakMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUNwQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDdEMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUNwQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixJQUFTO1FBRXZCLDhDQUE4QztRQUU5QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFNRCxnQ0FBZ0M7UUFFaEMsaUNBQWlDO1FBRWpDLHFDQUFxQztRQUVyQywwQ0FBMEM7UUFDMUM7Ozs7Ozs7OztVQVNFO1FBQ0Y7Ozs7O01BS0Y7SUFDQSxDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixJQUFTO1FBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBRUwsdUNBQVUsR0FBVixVQUFXLEVBQVU7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBRXRELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRyw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBZDhCO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsrREFBQztJQXRIN0Usa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGdDQUFjLEVBQUUsOEJBQWEsQ0FBQztZQUN2RCxXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLCtCQUErQixDQUFDO1NBQ3JGLENBQUM7eUNBV2tCLGVBQU07WUFDSSx5QkFBZ0I7WUFDdkIsa0JBQVM7WUFDUCwwQkFBVztZQUNSLGdDQUFjO1lBQ2YsOEJBQWE7WUFDUCx3QkFBaUI7WUFDNUIsOENBQWtCO09BaEIzQixrQkFBa0IsQ0FxSTlCO0lBQUQseUJBQUM7Q0FBQSxBQXJJRCxJQXFJQztBQXJJWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmdcIjtcclxuaW1wb3J0IHsgTWVldGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFBpdm90IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3Byb2plY3RcIlxyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhXHJcbn0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xyXG5pbXBvcnQgKiBhcyBGcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG4gIHB1YmxpYyBvZmZsaW5lbW9kZSA6Ym9vbGVhbjtcclxuICBwcm9qZWN0cyA6UHJvamVjdFtdO1xyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVldGluZ1NlcnZpY2UgOk1lZXRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxyXG4gIClcclxuICB7XHJcbiAgICBcclxuICAgIHRoaXMubWVldGluZ3NUZXh0ID0gXCJMYWRlLi4uXCI7XHJcblxyXG4gICAgdGhpcy5vZmZsaW5lbW9kZSA9IHRoaXMuc3RhdHVzU2VydmljZS5nZXRPZmZsaW5lTW9kZSgpO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFByb2plY3RzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheVByb2plY3RzKGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLm1lZXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZGF0YSksIFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlNZWV0aW5ncyhkYXRhIDphbnkpe1xyXG5cclxuICAgIC8vQFJvbW1lbHQgaGllciBkaWUgRGF0ZW4gZu+/vXIgVmlldyB2b3JiZXJlaXRlblxyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS5zYXZlTWVldGluZ3MoZGF0YSk7XHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgZGF0YSA9IHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0U2F2ZWRNZWV0aW5ncygpXHJcbiAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMubWVldGluZ3NbMF0pO1xyXG5cclxuICAgIC8vQFJvbW1lbHQ6IG5hbWUgZGVzIDEuIG1lZXRpbmdzOlxyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5tZWV0aW5nc1swXS5uYW1lKTtcclxuXHJcbiAgICAvL0BSb21tZWx0IEF0dHJpYnV0ZSB2b24gdGhpcy5tZWV0aW5nc1tpXTpcclxuICAgIC8qXHJcbiAgICBwcm90b2NvbCA6U3RyaW5nO1xyXG4gICAgbmFtZSA6U3RyaW5nO1xyXG4gICAgbG9jYXRpb24gOlN0cmluZztcclxuICAgIGlkIDpOdW1iZXI7XHJcbiAgICBkdXJhdGlvbiA6TnVtYmVyO1xyXG4gICAgZGF0ZSA6RGF0ZTtcclxuICAgIGF0dGVuZGVlczogU3RyaW5nO1xyXG4gICAgYWdlbmRhIDpTdHJpbmdcclxuICAgICovXHJcbiAgICAvKnRoaXMubWVldGluZ3NbMF0ubmFtZSA9IFwidGVzdCBpbkFwcFwiO1xyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS5jcmVhdGVNZWV0aW5nKHRoaXMubWVldGluZ3NbMF0pLnRoZW4oXHJcbiAgICAgIChkYXRhKSA9PiBhbGVydChcIk1lZXRpbmcgbWl0IGRlbSBOYW1lbjogXCIgKyBkYXRhLm1lZXRpbmcubmFtZSArIFwiIGVyZm9sZ3JlaWNoIGVyc3RlbGx0LlwiKSxcclxuICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICk7XHJcbiovXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5UHJvamVjdHMoZGF0YSA6YW55KXtcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgIFxyXG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlUHJvamVjdHMoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcclxuICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgICAgICBkYXRhID0gdGhpcy51c2VyU2VydmljZS5nZXRTYXZlZFByb2plY3RzKClcclxuICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHNbMF0ubmFtZSk7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuICBzaG93RGV0YWlsKGlkOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21lZXRpbmdfZGV0YWlsL1wiICsgaWRdLCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGV0byhwYWdlbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbcGFnZW5hbWVdLCB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG59XHJcbiJdfQ==
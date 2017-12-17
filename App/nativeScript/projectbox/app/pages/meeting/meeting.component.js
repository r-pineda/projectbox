"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var router_3 = require("@angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
var imagepicker = require("nativescript-imagepicker");
var fs = require("file-system");
var nativescript_fancy_calendar_1 = require("nativescript-fancy-calendar");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement('Calendar', function () { return nativescript_fancy_calendar_1.Calendar; });
var MeetingComponent = (function () {
    function MeetingComponent(route, router, routerExtensions, meetingService) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.meetingService = meetingService;
    }
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meetingService.getMeetings().then(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
        this.create = false;
    };
    MeetingComponent.prototype.cr_meeting = function () {
        this.create = true;
    };
    MeetingComponent.prototype.cancel = function () {
        console.log("cancel");
        this.create = false;
    };
    MeetingComponent.prototype.displayMeetings = function (data) {
        if (data) {
            this.meetingService.saveMeetings(data);
            this.meetings = data.meetings;
        }
        else {
            data = this.meetingService.getSavedMeetings();
            this.meetings = data.meetings;
        }
        //this.meetings.sort((a, b) => {return a.date.getTime()-b.date.getTime()})
    };
    MeetingComponent.prototype.createMeeting = function () {
        this.meetingService.createMeeting(this.meeting);
    };
    MeetingComponent.prototype.onSwipe = function (args) {
        if (args.direction === 2) {
            this.routerExtensions.navigate(["/dashboard"], {
                transition: {
                    name: "slideRight",
                    curve: "easeOut"
                }
            });
        }
    };
    MeetingComponent.prototype.showDetail = function (id) {
        this.routerExtensions.navigate(["/meeting_detail/" + id], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    MeetingComponent.prototype.calendarLoaded = function (event) {
        this.settings = {
            displayMode: nativescript_fancy_calendar_1.DISPLAY_MODE.MONTH,
            scrollOrientation: nativescript_fancy_calendar_1.SCROLL_ORIENTATION.HORIZONTAL,
            selectionMode: nativescript_fancy_calendar_1.SELECTION_MODE.MULTIPLE,
            firstWeekday: 2,
        };
        this.appearance = {
            weekdayTextColor: "#000000",
            headerTitleColor: "#000000",
            eventColor: "#29A699",
            selectionColor: "#29A699",
            todayColor: "#29A699",
            hasBorder: true,
            todaySelectionColor: "#29A699",
            borderRadius: 40 // border radius of the selection marker
        };
    };
    MeetingComponent.prototype.dateSelected = function (event) {
        console.log('date selected');
    };
    MeetingComponent.prototype.monthChanged = function (event) {
        console.log('month selected');
    };
    MeetingComponent = __decorate([
        core_1.Component({
            selector: "meeting_detail",
            templateUrl: "pages/meeting/meeting.html",
            providers: [user_service_1.UserService, meeting_service_1.MeetingService],
            styleUrls: ["pages/meeting/meeting-common.css"]
        }),
        __metadata("design:paramtypes", [router_3.ActivatedRoute, router_1.Router, router_2.RouterExtensions, meeting_service_1.MeetingService])
    ], MeetingComponent);
    return MeetingComponent;
}());
exports.MeetingComponent = MeetingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZWV0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFVL0Msd0VBQXFFO0FBRXJFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBSXRELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQU1oQywyRUFTcUM7QUFDckMsMEVBQXNFO0FBRXRFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxzQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBUTVDO0lBU0UsMEJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGNBQThCO1FBQWpJLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXpKLG1DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUNwQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLEVBQ3BDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FDdkMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLElBQVM7UUFFbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxDQUFDO1FBRUQsMEVBQTBFO0lBQ2hGLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsSUFBMkI7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDM0MsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxZQUFZO29CQUNsQixLQUFLLEVBQUUsU0FBUztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxFQUFVO1FBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUV0RCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBVU0seUNBQWMsR0FBckIsVUFBc0IsS0FBSztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQ0FBWSxDQUFDLEtBQUs7WUFDL0IsaUJBQWlCLEVBQUUsZ0RBQWtCLENBQUMsVUFBVTtZQUNoRCxhQUFhLEVBQUUsNENBQWMsQ0FBQyxRQUFRO1lBQ3RDLFlBQVksRUFBRSxDQUFDO1NBQ2xCLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFlO1lBQzFCLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixVQUFVLEVBQUUsU0FBUztZQUNyQixjQUFjLEVBQUUsU0FBUztZQUN6QixVQUFVLEVBQUUsU0FBUztZQUNyQixTQUFTLEVBQUUsSUFBSTtZQUNmLG1CQUFtQixFQUFFLFNBQVM7WUFDOUIsWUFBWSxFQUFFLEVBQUUsQ0FBQyx3Q0FBd0M7U0FDNUQsQ0FBQztJQUNOLENBQUM7SUFFTSx1Q0FBWSxHQUFuQixVQUFvQixLQUFLO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdNLHVDQUFZLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUF6R1UsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7eUNBVTJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQTBCLGdDQUFjO09BVDFJLGdCQUFnQixDQTBHNUI7SUFBRCx1QkFBQztDQUFBLEFBMUdELElBMEdDO0FBMUdZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgR2VzdHVyZUV2ZW50RGF0YSxcclxuICBHZXN0dXJlVHlwZXMsXHJcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcclxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXHJcbiAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcclxuICBUb3VjaEdlc3R1cmVFdmVudERhdGF9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmdcIlxyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxubGV0IGltYWdlcGlja2VyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiKTtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2VNb2R1bGUgZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXRcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FsZW5kYXIsXHJcbiAgU0VMRUNUSU9OX01PREUsIC8vIE11bHRpcGxlIG9yIHNpbmdsZVxyXG4gIERJU1BMQVlfTU9ERSwgLy8gV2VlayBvciBtb250aFxyXG4gIENhbGVuZGFyRXZlbnQsIC8vIGxpdHRsZSBkb3RzIFxyXG4gIEFwcGVhcmFuY2UsIC8vIHN0eWxlIGN1c3RvbWlzYXRpb25cclxuICBTQ1JPTExfT1JJRU5UQVRJT04sIC8vIHNjcm9sbCBvcmllbnRhdGlvbiBmb3IgaU9TXHJcbiAgQ2FsZW5kYXJTdWJ0aXRsZSwgLy8gc3VidGl0bGVzIGZvciBpT1NcclxuICBTZXR0aW5ncyAvLyBTZXR0aW5ncyBpbnRlcmZhY2VcclxufSBmcm9tICduYXRpdmVzY3JpcHQtZmFuY3ktY2FsZW5kYXInO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudCgnQ2FsZW5kYXInLCAoKSA9PiBDYWxlbmRhcik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtZWV0aW5nX2RldGFpbFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21lZXRpbmcvbWVldGluZy5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL21lZXRpbmcvbWVldGluZy1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWV0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBtZWV0aW5ncyA6TWVldGluZ1tdO1xyXG4gIHB1YmxpYyBwaWN0dXJlIDphbnk7XHJcbiAgY3JlYXRlOiBib29sZWFuO1xyXG4gIG1lZXRpbmdkYXRhIDphbnk7XHJcbiAgbWVldGluZ3NUZXh0IDpzdHJpbmc7XHJcbiAgbWVldGluZzogTWVldGluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZSA6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtZWV0aW5nU2VydmljZTogTWVldGluZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldE1lZXRpbmdzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3JlYXRlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjcl9tZWV0aW5nKCkge1xyXG4gICAgdGhpcy5jcmVhdGUgPSB0cnVlO1xyXG5cclxuICB9XHJcblxyXG4gIGNhbmNlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsXCIpO1xyXG4gICAgdGhpcy5jcmVhdGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlNZWV0aW5ncyhkYXRhIDphbnkpe1xyXG4gICAgXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnNhdmVNZWV0aW5ncyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG4gICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICBcclxuICAgICAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKVxyXG4gICAgICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7IFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vdGhpcy5tZWV0aW5ncy5zb3J0KChhLCBiKSA9PiB7cmV0dXJuIGEuZGF0ZS5nZXRUaW1lKCktYi5kYXRlLmdldFRpbWUoKX0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVNZWV0aW5nKCl7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLmNyZWF0ZU1lZXRpbmcodGhpcy5tZWV0aW5nKTtcclxuICB9XHJcblxyXG4gIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IDIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVSaWdodFwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dEZXRhaWwoaWQ6IG51bWJlcikge1xyXG4gICAgXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWVldGluZ19kZXRhaWwvXCIgKyBpZF0sIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiBjYWxlbmRhciAqLyBcclxuXHJcbiAgc2V0dGluZ3M6IGFueTtcclxuICBzdWJ0aXRsZXM6IENhbGVuZGFyU3VidGl0bGVbXTtcclxuICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcclxuICBwdWJsaWMgYXBwZWFyYW5jZTogQXBwZWFyYW5jZTtcclxuICBwcml2YXRlIF9jYWxlbmRhcjogQ2FsZW5kYXI7XHJcbiAgXHJcbiAgcHVibGljIGNhbGVuZGFyTG9hZGVkKGV2ZW50KSB7XHJcbiAgICAgICB0aGlzLnNldHRpbmdzID0gPFNldHRpbmdzPntcclxuICAgICAgICAgIGRpc3BsYXlNb2RlOiBESVNQTEFZX01PREUuTU9OVEgsIFxyXG4gICAgICAgICAgc2Nyb2xsT3JpZW50YXRpb246IFNDUk9MTF9PUklFTlRBVElPTi5IT1JJWk9OVEFMLFxyXG4gICAgICAgICAgc2VsZWN0aW9uTW9kZTogU0VMRUNUSU9OX01PREUuTVVMVElQTEUsXHJcbiAgICAgICAgICBmaXJzdFdlZWtkYXk6IDIsIC8vIFNVTjogTywgTU9OOiAxLCBUVUVTOiAyIGV0Yy4uXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IDxBcHBlYXJhbmNlPntcclxuICAgICAgICAgIHdlZWtkYXlUZXh0Q29sb3I6IFwiIzAwMDAwMFwiLCAvL2NvbG9yIG9mIFR1ZSwgV2VkLCBUaHVyLi4gKG9ubHkgaU9TKVxyXG4gICAgICAgICAgaGVhZGVyVGl0bGVDb2xvcjogXCIjMDAwMDAwXCIsIC8vY29sb3Igb2YgdGhlIGN1cnJlbnQgTW9udGggKG9ubHkgaU9TKVxyXG4gICAgICAgICAgZXZlbnRDb2xvcjogXCIjMjlBNjk5XCIsIC8vIGNvbG9yIG9mIGRvdHNcclxuICAgICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcIiMyOUE2OTlcIiwgLy8gY29sb3Igb2YgdGhlIGNpcmNsZSB3aGVuIGEgZGF0ZSBpcyBjbGlja2VkXHJcbiAgICAgICAgICB0b2RheUNvbG9yOiBcIiMyOUE2OTlcIiwgLy8gdGhlIGNvbG9yIG9mIHRoZSBjdXJyZW50IGRheVxyXG4gICAgICAgICAgaGFzQm9yZGVyOiB0cnVlLCAvLyByZW1vdmUgYm9yZGVyIChvbmx5IGlPUylcclxuICAgICAgICAgIHRvZGF5U2VsZWN0aW9uQ29sb3I6IFwiIzI5QTY5OVwiLCAvLyB0b2RheSBjb2xvciB3aGVuIHNlbGV0ZWQgKG9ubHkgaU9TKVxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0MCAvLyBib3JkZXIgcmFkaXVzIG9mIHRoZSBzZWxlY3Rpb24gbWFya2VyXHJcbiAgICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBkYXRlU2VsZWN0ZWQoZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RhdGUgc2VsZWN0ZWQnKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgbW9udGhDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtb250aCBzZWxlY3RlZCcpO1xyXG4gIH1cclxufSJdfQ==
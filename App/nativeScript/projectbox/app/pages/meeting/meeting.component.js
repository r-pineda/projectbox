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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZWV0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUErRDtBQUMvRCwwQ0FBK0M7QUFVL0Msd0VBQXFFO0FBRXJFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBSXRELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQU1oQywyRUFTcUM7QUFDckMsMEVBQXNFO0FBRXRFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxzQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBUTVDO0lBUUUsMEJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGNBQThCO1FBQWpJLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXpKLG1DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUNwQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLEVBQ3BDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FDdkMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUVuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLENBQUM7UUFFRCwwRUFBMEU7SUFDaEYsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUEyQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMzQyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLEtBQUssRUFBRSxTQUFTO2lCQUNuQjthQUNKLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLEVBQVU7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBRXRELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFVTSx5Q0FBYyxHQUFyQixVQUFzQixLQUFLO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQWE7WUFDdkIsV0FBVyxFQUFFLDBDQUFZLENBQUMsS0FBSztZQUMvQixpQkFBaUIsRUFBRSxnREFBa0IsQ0FBQyxVQUFVO1lBQ2hELGFBQWEsRUFBRSw0Q0FBYyxDQUFDLFFBQVE7WUFDdEMsWUFBWSxFQUFFLENBQUM7U0FDbEIsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQWU7WUFDMUIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixZQUFZLEVBQUUsRUFBRSxDQUFDLHdDQUF3QztTQUM1RCxDQUFDO0lBQ04sQ0FBQztJQUVNLHVDQUFZLEdBQW5CLFVBQW9CLEtBQUs7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBR00sdUNBQVksR0FBbkIsVUFBb0IsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQS9GVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGdDQUFjLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzt5Q0FTMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBMEIsZ0NBQWM7T0FSMUksZ0JBQWdCLENBZ0c1QjtJQUFELHVCQUFDO0NBQUEsQUFoR0QsSUFnR0M7QUFoR1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YX0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiXHJcbmltcG9ydCB7IE1lZXRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmcuc2VydmljZVwiXHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5sZXQgaW1hZ2VwaWNrZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCIpO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZU1vZHVsZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldFwiO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCAqIGFzIHRhYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHtcclxuICBDYWxlbmRhcixcclxuICBTRUxFQ1RJT05fTU9ERSwgLy8gTXVsdGlwbGUgb3Igc2luZ2xlXHJcbiAgRElTUExBWV9NT0RFLCAvLyBXZWVrIG9yIG1vbnRoXHJcbiAgQ2FsZW5kYXJFdmVudCwgLy8gbGl0dGxlIGRvdHMgXHJcbiAgQXBwZWFyYW5jZSwgLy8gc3R5bGUgY3VzdG9taXNhdGlvblxyXG4gIFNDUk9MTF9PUklFTlRBVElPTiwgLy8gc2Nyb2xsIG9yaWVudGF0aW9uIGZvciBpT1NcclxuICBDYWxlbmRhclN1YnRpdGxlLCAvLyBzdWJ0aXRsZXMgZm9yIGlPU1xyXG4gIFNldHRpbmdzIC8vIFNldHRpbmdzIGludGVyZmFjZVxyXG59IGZyb20gJ25hdGl2ZXNjcmlwdC1mYW5jeS1jYWxlbmRhcic7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KCdDYWxlbmRhcicsICgpID0+IENhbGVuZGFyKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1lZXRpbmdfZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWVldGluZy9tZWV0aW5nLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgTWVldGluZ1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbWVldGluZy9tZWV0aW5nLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lZXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIG1lZXRpbmdzIDpNZWV0aW5nW107XHJcbiAgcHVibGljIHBpY3R1cmUgOmFueTtcclxuICBjcmVhdGU6IGJvb2xlYW47XHJcbiAgbWVldGluZ2RhdGEgOmFueTtcclxuICBtZWV0aW5nc1RleHQgOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZSA6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtZWV0aW5nU2VydmljZTogTWVldGluZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldE1lZXRpbmdzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3JlYXRlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjcl9tZWV0aW5nKCkge1xyXG4gICAgdGhpcy5jcmVhdGUgPSB0cnVlO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3BsYXlNZWV0aW5ncyhkYXRhIDphbnkpe1xyXG4gICAgXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnNhdmVNZWV0aW5ncyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMubWVldGluZ3MgPSBkYXRhLm1lZXRpbmdzO1xyXG4gICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICBcclxuICAgICAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKVxyXG4gICAgICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7IFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vdGhpcy5tZWV0aW5ncy5zb3J0KChhLCBiKSA9PiB7cmV0dXJuIGEuZGF0ZS5nZXRUaW1lKCktYi5kYXRlLmdldFRpbWUoKX0pXHJcbiAgfVxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSAyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93RGV0YWlsKGlkOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21lZXRpbmdfZGV0YWlsL1wiICsgaWRdLCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogY2FsZW5kYXIgKi8gXHJcblxyXG4gIHNldHRpbmdzOiBhbnk7XHJcbiAgc3VidGl0bGVzOiBDYWxlbmRhclN1YnRpdGxlW107XHJcbiAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XHJcbiAgcHVibGljIGFwcGVhcmFuY2U6IEFwcGVhcmFuY2U7XHJcbiAgcHJpdmF0ZSBfY2FsZW5kYXI6IENhbGVuZGFyO1xyXG4gIFxyXG4gIHB1YmxpYyBjYWxlbmRhckxvYWRlZChldmVudCkge1xyXG4gICAgICAgdGhpcy5zZXR0aW5ncyA9IDxTZXR0aW5ncz57XHJcbiAgICAgICAgICBkaXNwbGF5TW9kZTogRElTUExBWV9NT0RFLk1PTlRILCBcclxuICAgICAgICAgIHNjcm9sbE9yaWVudGF0aW9uOiBTQ1JPTExfT1JJRU5UQVRJT04uSE9SSVpPTlRBTCxcclxuICAgICAgICAgIHNlbGVjdGlvbk1vZGU6IFNFTEVDVElPTl9NT0RFLk1VTFRJUExFLFxyXG4gICAgICAgICAgZmlyc3RXZWVrZGF5OiAyLCAvLyBTVU46IE8sIE1PTjogMSwgVFVFUzogMiBldGMuLlxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSA8QXBwZWFyYW5jZT57XHJcbiAgICAgICAgICB3ZWVrZGF5VGV4dENvbG9yOiBcIiMwMDAwMDBcIiwgLy9jb2xvciBvZiBUdWUsIFdlZCwgVGh1ci4uIChvbmx5IGlPUylcclxuICAgICAgICAgIGhlYWRlclRpdGxlQ29sb3I6IFwiIzAwMDAwMFwiLCAvL2NvbG9yIG9mIHRoZSBjdXJyZW50IE1vbnRoIChvbmx5IGlPUylcclxuICAgICAgICAgIGV2ZW50Q29sb3I6IFwiIzI5QTY5OVwiLCAvLyBjb2xvciBvZiBkb3RzXHJcbiAgICAgICAgICBzZWxlY3Rpb25Db2xvcjogXCIjMjlBNjk5XCIsIC8vIGNvbG9yIG9mIHRoZSBjaXJjbGUgd2hlbiBhIGRhdGUgaXMgY2xpY2tlZFxyXG4gICAgICAgICAgdG9kYXlDb2xvcjogXCIjMjlBNjk5XCIsIC8vIHRoZSBjb2xvciBvZiB0aGUgY3VycmVudCBkYXlcclxuICAgICAgICAgIGhhc0JvcmRlcjogdHJ1ZSwgLy8gcmVtb3ZlIGJvcmRlciAob25seSBpT1MpXHJcbiAgICAgICAgICB0b2RheVNlbGVjdGlvbkNvbG9yOiBcIiMyOUE2OTlcIiwgLy8gdG9kYXkgY29sb3Igd2hlbiBzZWxldGVkIChvbmx5IGlPUylcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogNDAgLy8gYm9yZGVyIHJhZGl1cyBvZiB0aGUgc2VsZWN0aW9uIG1hcmtlclxyXG4gICAgICB9O1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZGF0ZVNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRlIHNlbGVjdGVkJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIG1vbnRoQ2hhbmdlZChldmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbW9udGggc2VsZWN0ZWQnKTtcclxuICB9XHJcbn0iXX0=
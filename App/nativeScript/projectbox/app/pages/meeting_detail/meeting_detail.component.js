"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var router_3 = require("@angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
var camera = require("nativescript-camera");
var Meeting_detailComponent = (function () {
    function Meeting_detailComponent(route, router, routerExtensions, meetingService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.meetingService = meetingService;
        this.route.params.subscribe(function (params) {
            _this.getMeetings(params["id"]);
        });
        this.picture = "https://placehold.it/200x200";
    }
    Meeting_detailComponent.prototype.getMeetings = function (meeting_id) {
        var _this = this;
        this.meetingService.meetings().subscribe(function (data) { return _this.getMeetingById(data.meetings, meeting_id); }, function (error) { return _this.getMeetingById(null, meeting_id); });
    };
    Meeting_detailComponent.prototype.getMeetingById = function (data, meeting_id) {
        var _this = this;
        if (data) {
            data.forEach(function (meeting) {
                if (meeting.id == meeting_id) {
                    _this.meeting = meeting;
                }
            });
            //$H!T some
            /*
            this.meetingService.saveMeetings(data);
            data.some(function(meeting, index){
              if(meeting.id == meeting_id){
                this.meeting = meeting;
                return true;
              }
              return false;
            });
            */
        }
        else {
            data = this.meetingService.getSavedMeetings();
            data.forEach(function (meeting) {
                if (meeting.id == meeting_id) {
                    _this.meeting = meeting;
                }
            });
        }
    };
    Meeting_detailComponent.prototype.onSwipe = function (args) {
        if (args.direction = 2) {
            this.routerExtensions.navigate(["/list"], {
                transition: {
                    name: "slideRight",
                    curve: "easeOut"
                }
            });
        }
    };
    Meeting_detailComponent.prototype.openCamera = function () {
        var _this = this;
        camera.requestPermissions();
        camera.takePicture().then(function (picture) {
            _this.picture = picture;
            console.dir(picture);
        });
    };
    Meeting_detailComponent = __decorate([
        core_1.Component({
            selector: "meeting_detail",
            templateUrl: "pages/meeting_detail/meeting_detail.html",
            providers: [user_service_1.UserService, meeting_service_1.MeetingService],
            styleUrls: ["pages/meeting_detail/meeting_detail-common.css", "pages/meeting_detail/meeting_detail.css"]
        }),
        __metadata("design:paramtypes", [router_3.ActivatedRoute, router_1.Router, router_2.RouterExtensions, meeting_service_1.MeetingService])
    ], Meeting_detailComponent);
    return Meeting_detailComponent;
}());
exports.Meeting_detailComponent = Meeting_detailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ19kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZ19kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtEQUE2RDtBQUM3RCwwQ0FBd0M7QUFDeEMsc0RBQStEO0FBQy9ELDBDQUErQztBQVUvQyx3RUFBcUU7QUFDckUsNENBQThDO0FBUzlDO0lBS0UsaUNBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLGNBQThCO1FBQXJKLGlCQU1DO1FBTm1CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFbkosSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLFVBQWtCO1FBQTlCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxFQUN4RCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBRUosQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxJQUFTLEVBQUUsVUFBa0I7UUFBNUMsaUJBaUNDO1FBaENDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFFbEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQSxDQUFDO29CQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUMsV0FBVztZQUNYOzs7Ozs7Ozs7Y0FTRTtRQUNSLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFFN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBRWxCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUM7WUFFSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQseUNBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0osQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQUEsaUJBT0M7UUFOQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU1QixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNFVSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGdDQUFjLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsZ0RBQWdELEVBQUUseUNBQXlDLENBQUM7U0FDekcsQ0FBQzt5Q0FNMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBMEIsZ0NBQWM7T0FMMUksdUJBQXVCLENBNEVuQztJQUFELDhCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgR2VzdHVyZUV2ZW50RGF0YSxcclxuICBHZXN0dXJlVHlwZXMsXHJcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcclxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXHJcbiAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcclxuICBUb3VjaEdlc3R1cmVFdmVudERhdGF9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmdcIlxyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1lZXRpbmdfZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBNZWV0aW5nU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tZWV0aW5nX2RldGFpbC9tZWV0aW5nX2RldGFpbC1jb21tb24uY3NzXCIsIFwicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWV0aW5nX2RldGFpbENvbXBvbmVudCB7XHJcblxyXG4gIG1lZXRpbmcgOk1lZXRpbmc7XHJcbiAgcHVibGljIHBpY3R1cmUgOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZSA6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtZWV0aW5nU2VydmljZTogTWVldGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLmdldE1lZXRpbmdzKHBhcmFtc1tcImlkXCJdKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5waWN0dXJlID0gXCJodHRwczovL3BsYWNlaG9sZC5pdC8yMDB4MjAwXCI7XHJcbiAgfVxyXG5cclxuICBnZXRNZWV0aW5ncyhtZWV0aW5nX2lkIDpudW1iZXIpe1xyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS5tZWV0aW5ncygpLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZ2V0TWVldGluZ0J5SWQoZGF0YS5tZWV0aW5ncywgbWVldGluZ19pZCksIFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZ2V0TWVldGluZ0J5SWQobnVsbCwgbWVldGluZ19pZClcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0TWVldGluZ0J5SWQoZGF0YSA6YW55LCBtZWV0aW5nX2lkIDpudW1iZXIpe1xyXG4gICAgaWYoZGF0YSl7XHJcblxyXG4gICAgICBkYXRhLmZvckVhY2gobWVldGluZyA9PiB7XHJcblxyXG4gICAgICAgIGlmKG1lZXRpbmcuaWQgPT0gbWVldGluZ19pZCl7XHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmcgPSBtZWV0aW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8kSCFUIHNvbWVcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnNhdmVNZWV0aW5ncyhkYXRhKTtcclxuICAgICAgICAgIGRhdGEuc29tZShmdW5jdGlvbihtZWV0aW5nLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmKG1lZXRpbmcuaWQgPT0gbWVldGluZ19pZCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZWV0aW5nID0gbWVldGluZztcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICovXHJcbiAgICB9ZWxzZXtcclxuICAgIFxyXG4gICAgICBkYXRhID0gdGhpcy5tZWV0aW5nU2VydmljZS5nZXRTYXZlZE1lZXRpbmdzKClcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaChtZWV0aW5nID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYobWVldGluZy5pZCA9PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgIHRoaXMubWVldGluZyA9IG1lZXRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID0gMikge1xyXG4gICAgXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGlzdFwiXSwge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVSaWdodFwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5DYW1lcmEoKXtcclxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuXHJcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoKS50aGVuKHBpY3R1cmUgPT4ge1xyXG4gICAgICB0aGlzLnBpY3R1cmUgPSBwaWN0dXJlO1xyXG4gICAgICBjb25zb2xlLmRpcihwaWN0dXJlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var router_3 = require("@angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
var camera = require("nativescript-camera");
var imagepicker = require("nativescript-imagepicker");
var fs = require("tns-core-modules/file-system");
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
    Meeting_detailComponent.prototype.openGallery = function () {
        var context = imagepicker.create({
            mode: "single" //use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            console.log(selection[0].android);
            var path = fs.path.normalize(selection[0].android);
            this.picture = selection[0].android; //imageSource.fromFile(path).android;
        }).catch(function (e) {
            // process error
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ19kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZ19kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtEQUE2RDtBQUM3RCwwQ0FBd0M7QUFDeEMsc0RBQStEO0FBQy9ELDBDQUErQztBQVUvQyx3RUFBcUU7QUFDckUsNENBQThDO0FBQzlDLHNEQUF3RDtBQUd4RCxpREFBbUQ7QUFhbkQ7SUFLRSxpQ0FBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsY0FBOEI7UUFBckosaUJBS0M7UUFMbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUVuSixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLFVBQWtCO1FBQTlCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxFQUN4RCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBRUosQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxJQUFTLEVBQUUsVUFBa0I7UUFBNUMsaUJBaUNDO1FBaENDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFFbEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQSxDQUFDO29CQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUMsV0FBVztZQUNYOzs7Ozs7Ozs7Y0FTRTtRQUNSLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFFN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBRWxCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUM7WUFFSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQseUNBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0osQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQUEsaUJBT0M7UUFOQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU1QixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFFRSxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksRUFBRSxRQUFRLENBQUMsdUNBQXVDO1NBQ3ZELENBQUMsQ0FBQztRQUNILE9BQU87YUFDTixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFTLFNBQVM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQSxDQUFBLHFDQUFxQztRQUMxRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLGdCQUFnQjtRQUNwQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUE5RlUsdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLHlDQUF5QyxDQUFDO1NBQ3pHLENBQUM7eUNBTTJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBNEIseUJBQWdCLEVBQTBCLGdDQUFjO09BTDFJLHVCQUF1QixDQStGbkM7SUFBRCw4QkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCJcclxuaW1wb3J0IHsgTWVldGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZy5zZXJ2aWNlXCJcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0XCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCAqIGFzIHRhYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1lZXRpbmdfZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBNZWV0aW5nU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tZWV0aW5nX2RldGFpbC9tZWV0aW5nX2RldGFpbC1jb21tb24uY3NzXCIsIFwicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWV0aW5nX2RldGFpbENvbXBvbmVudCB7XHJcblxyXG4gIG1lZXRpbmcgOk1lZXRpbmc7XHJcbiAgcHVibGljIHBpY3R1cmUgOkltYWdlQXNzZXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGUgOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbWVldGluZ1NlcnZpY2U6IE1lZXRpbmdTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5nZXRNZWV0aW5ncyhwYXJhbXNbXCJpZFwiXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE1lZXRpbmdzKG1lZXRpbmdfaWQgOm51bWJlcil7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLm1lZXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5nZXRNZWV0aW5nQnlJZChkYXRhLm1lZXRpbmdzLCBtZWV0aW5nX2lkKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5nZXRNZWV0aW5nQnlJZChudWxsLCBtZWV0aW5nX2lkKVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRNZWV0aW5nQnlJZChkYXRhIDphbnksIG1lZXRpbmdfaWQgOm51bWJlcil7XHJcbiAgICBpZihkYXRhKXtcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaChtZWV0aW5nID0+IHtcclxuXHJcbiAgICAgICAgaWYobWVldGluZy5pZCA9PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgIHRoaXMubWVldGluZyA9IG1lZXRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyRIIVQgc29tZVxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgIHRoaXMubWVldGluZ1NlcnZpY2Uuc2F2ZU1lZXRpbmdzKGRhdGEpO1xyXG4gICAgICAgICAgZGF0YS5zb21lKGZ1bmN0aW9uKG1lZXRpbmcsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYobWVldGluZy5pZCA9PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgICAgICB0aGlzLm1lZXRpbmcgPSBtZWV0aW5nO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgKi9cclxuICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKVxyXG5cclxuICAgICAgZGF0YS5mb3JFYWNoKG1lZXRpbmcgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihtZWV0aW5nLmlkID09IG1lZXRpbmdfaWQpe1xyXG4gICAgICAgICAgdGhpcy5tZWV0aW5nID0gbWVldGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICBpZiAoYXJncy5kaXJlY3Rpb24gPSAyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9saXN0XCJdLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkNhbWVyYSgpe1xyXG4gICAgY2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xyXG5cclxuICAgIGNhbWVyYS50YWtlUGljdHVyZSgpLnRoZW4ocGljdHVyZSA9PiB7XHJcbiAgICAgIHRoaXMucGljdHVyZSA9IHBpY3R1cmU7XHJcbiAgICAgIGNvbnNvbGUuZGlyKHBpY3R1cmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuR2FsbGVyeSgpe1xyXG5cclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgbW9kZTogXCJzaW5nbGVcIiAvL3VzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbihzZWxlY3Rpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0aW9uWzBdLmFuZHJvaWQpO1xyXG4gICAgICBsZXQgcGF0aCA9IGZzLnBhdGgubm9ybWFsaXplKHNlbGVjdGlvblswXS5hbmRyb2lkKTtcclxuICAgICAgdGhpcy5waWN0dXJlID0gc2VsZWN0aW9uWzBdLmFuZHJvaWQvL2ltYWdlU291cmNlLmZyb21GaWxlKHBhdGgpLmFuZHJvaWQ7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn0iXX0=
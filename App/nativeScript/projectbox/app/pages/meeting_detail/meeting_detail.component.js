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
    Meeting_detailComponent.prototype.ngOnInit = function () {
        this.meeting.duration = 999999;
        this.updateMeeting(this.meeting);
    };
    Meeting_detailComponent.prototype.getMeetings = function (meeting_id) {
        var _this = this;
        this.meetingService.meetings().then(function (data) { return _this.getMeetingById(data.meetings, meeting_id); }, function (error) { return _this.getMeetingById(null, meeting_id); })
            .then(function (data) {
            Promise.resolve(_this.meetingService.delete(_this.meeting.id));
        });
    };
    Meeting_detailComponent.prototype.getMeetingById = function (data, meeting_id) {
        var _this = this;
        if (data) {
            data.forEach(function (meeting) {
                if (meeting.id === meeting_id) {
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
                if (meeting.id === meeting_id) {
                    _this.meeting = meeting;
                }
            });
        }
    };
    Meeting_detailComponent.prototype.updateMeeting = function (update) {
        this.meetingService.update(update);
    };
    Meeting_detailComponent.prototype.onSwipe = function (args) {
        if (args.direction = 2) {
            this.routerExtensions.navigate(["/dashboard"], {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ19kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZ19kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtEQUE2RDtBQUM3RCwwQ0FBd0M7QUFDeEMsc0RBQStEO0FBQy9ELDBDQUErQztBQVUvQyx3RUFBcUU7QUFDckUsNENBQThDO0FBQzlDLHNEQUF3RDtBQUd4RCxpREFBbUQ7QUFhbkQ7SUFLRSxpQ0FBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsY0FBOEI7UUFBckosaUJBS0M7UUFMbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUVuSixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLFVBQWtCO1FBQTlCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxFQUN4RCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FB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LENBQUM7WUFDaEIsZ0JBQWdCO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQXZHVSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGdDQUFjLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsZ0RBQWdELEVBQUUseUNBQXlDLENBQUM7U0FDekcsQ0FBQzt5Q0FNMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBMEIsZ0NBQWM7T0FMMUksdUJBQXVCLENBd0duQztJQUFELDhCQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YX0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiXHJcbmltcG9ydCB7IE1lZXRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZWV0aW5nL21lZXRpbmcuc2VydmljZVwiXHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldFwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtZWV0aW5nX2RldGFpbFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21lZXRpbmdfZGV0YWlsL21lZXRpbmdfZGV0YWlsLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgTWVldGluZ1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwtY29tbW9uLmNzc1wiLCBcInBhZ2VzL21lZXRpbmdfZGV0YWlsL21lZXRpbmdfZGV0YWlsLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVldGluZ19kZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIG1lZXRpbmcgOk1lZXRpbmc7XHJcbiAgcHVibGljIHBpY3R1cmUgOkltYWdlQXNzZXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGUgOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbWVldGluZ1NlcnZpY2U6IE1lZXRpbmdTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5nZXRNZWV0aW5ncyhwYXJhbXNbXCJpZFwiXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLm1lZXRpbmcuZHVyYXRpb24gPSA5OTk5OTk7XHJcbiAgICB0aGlzLnVwZGF0ZU1lZXRpbmcodGhpcy5tZWV0aW5nKTtcclxuICB9XHJcblxyXG4gIGdldE1lZXRpbmdzKG1lZXRpbmdfaWQgOm51bWJlcil7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLm1lZXRpbmdzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZ2V0TWVldGluZ0J5SWQoZGF0YS5tZWV0aW5ncywgbWVldGluZ19pZCksXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5nZXRNZWV0aW5nQnlJZChudWxsLCBtZWV0aW5nX2lkKVxyXG4gICAgKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMubWVldGluZ1NlcnZpY2UuZGVsZXRlKHRoaXMubWVldGluZy5pZCkpfSk7XHJcbiAgfVxyXG5cclxuICBnZXRNZWV0aW5nQnlJZChkYXRhIDphbnksIG1lZXRpbmdfaWQgOm51bWJlcil7XHJcbiAgICBpZihkYXRhKXtcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaChtZWV0aW5nID0+IHtcclxuXHJcbiAgICAgICAgaWYobWVldGluZy5pZCA9PT0gbWVldGluZ19pZCl7XHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmcgPSBtZWV0aW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8kSCFUIHNvbWVcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnNhdmVNZWV0aW5ncyhkYXRhKTtcclxuICAgICAgICAgIGRhdGEuc29tZShmdW5jdGlvbihtZWV0aW5nLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmKG1lZXRpbmcuaWQgPT0gbWVldGluZ19pZCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZWV0aW5nID0gbWVldGluZztcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICovXHJcbiAgICB9ZWxzZXtcclxuICAgIFxyXG4gICAgICBkYXRhID0gdGhpcy5tZWV0aW5nU2VydmljZS5nZXRTYXZlZE1lZXRpbmdzKCk7XHJcblxyXG4gICAgICBkYXRhLmZvckVhY2gobWVldGluZyA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKG1lZXRpbmcuaWQgPT09IG1lZXRpbmdfaWQpe1xyXG4gICAgICAgICAgdGhpcy5tZWV0aW5nID0gbWVldGluZztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWVldGluZyh1cGRhdGUgOk1lZXRpbmcpe1xyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS51cGRhdGUodXBkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICBpZiAoYXJncy5kaXJlY3Rpb24gPSAyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FtZXJhKCl7XHJcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcblxyXG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKCkudGhlbihwaWN0dXJlID0+IHtcclxuICAgICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTtcclxuICAgICAgY29uc29sZS5kaXIocGljdHVyZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5HYWxsZXJ5KCl7XHJcblxyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiIC8vdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHRcclxuICAgIC5hdXRob3JpemUoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3Rpb25bMF0uYW5kcm9pZCk7XHJcbiAgICAgIGxldCBwYXRoID0gZnMucGF0aC5ub3JtYWxpemUoc2VsZWN0aW9uWzBdLmFuZHJvaWQpO1xyXG4gICAgICB0aGlzLnBpY3R1cmUgPSBzZWxlY3Rpb25bMF0uYW5kcm9pZC8vaW1hZ2VTb3VyY2UuZnJvbUZpbGUocGF0aCkuYW5kcm9pZDtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufSJdfQ==
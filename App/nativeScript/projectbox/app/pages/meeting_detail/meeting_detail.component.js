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
            _this.meeting.duration = 9999;
            _this.meetingService.update(_this.meeting);
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
                if (meeting.id == meeting_id) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ19kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZ19kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtEQUE2RDtBQUM3RCwwQ0FBd0M7QUFDeEMsc0RBQStEO0FBQy9ELDBDQUErQztBQVUvQyx3RUFBcUU7QUFDckUsNENBQThDO0FBQzlDLHNEQUF3RDtBQUd4RCxpREFBbUQ7QUFhbkQ7SUFLRSxpQ0FBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsY0FBOEI7UUFBckosaUJBS0M7UUFMbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUVuSixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLFVBQWtCO1FBQTlCLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxFQUN4RCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FB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SyxDQUFDLFVBQVUsQ0FBQztZQUNoQixnQkFBZ0I7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBMUdVLHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsZ0NBQWMsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSx5Q0FBeUMsQ0FBQztTQUN6RyxDQUFDO3lDQU0yQix1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUEwQixnQ0FBYztPQUwxSSx1QkFBdUIsQ0EyR25DO0lBQUQsOEJBQUM7Q0FBQSxBQTNHRCxJQTJHQztBQTNHWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCJcclxuaW1wb3J0IHsgTWVldGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZy5zZXJ2aWNlXCJcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0XCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCAqIGFzIHRhYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1lZXRpbmdfZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBNZWV0aW5nU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tZWV0aW5nX2RldGFpbC9tZWV0aW5nX2RldGFpbC1jb21tb24uY3NzXCIsIFwicGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWV0aW5nX2RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgbWVldGluZyA6TWVldGluZztcclxuICBwdWJsaWMgcGljdHVyZSA6SW1hZ2VBc3NldDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZSA6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtZWV0aW5nU2VydmljZTogTWVldGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLmdldE1lZXRpbmdzKHBhcmFtc1tcImlkXCJdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMubWVldGluZy5kdXJhdGlvbiA9IDk5OTk5OTtcclxuICAgIHRoaXMudXBkYXRlTWVldGluZyh0aGlzLm1lZXRpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVldGluZ3MobWVldGluZ19pZCA6bnVtYmVyKXtcclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UubWVldGluZ3MoKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5nZXRNZWV0aW5nQnlJZChkYXRhLm1lZXRpbmdzLCBtZWV0aW5nX2lkKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5nZXRNZWV0aW5nQnlJZChudWxsLCBtZWV0aW5nX2lkKVxyXG4gICAgKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5tZWV0aW5nLmR1cmF0aW9uID0gOTk5OTtcclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS51cGRhdGUodGhpcy5tZWV0aW5nKX0pO1xyXG5cclxuICB9XHJcblxyXG4gIGdldE1lZXRpbmdCeUlkKGRhdGEgOmFueSwgbWVldGluZ19pZCA6bnVtYmVyKXtcclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgZGF0YS5mb3JFYWNoKG1lZXRpbmcgPT4ge1xyXG5cclxuICAgICAgICBpZihtZWV0aW5nLmlkID09PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgIHRoaXMubWVldGluZyA9IG1lZXRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyRIIVQgc29tZVxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgIHRoaXMubWVldGluZ1NlcnZpY2Uuc2F2ZU1lZXRpbmdzKGRhdGEpO1xyXG4gICAgICAgICAgZGF0YS5zb21lKGZ1bmN0aW9uKG1lZXRpbmcsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYobWVldGluZy5pZCA9PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgICAgICB0aGlzLm1lZXRpbmcgPSBtZWV0aW5nO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgKi9cclxuICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKTtcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaChtZWV0aW5nID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYobWVldGluZy5pZCA9PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgIHRoaXMubWVldGluZyA9IG1lZXRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNZWV0aW5nKHVwZGF0ZSA6TWVldGluZyl7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnVwZGF0ZSh1cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9IDIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVSaWdodFwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5DYW1lcmEoKXtcclxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuXHJcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoKS50aGVuKHBpY3R1cmUgPT4ge1xyXG4gICAgICB0aGlzLnBpY3R1cmUgPSBwaWN0dXJlO1xyXG4gICAgICBjb25zb2xlLmRpcihwaWN0dXJlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkdhbGxlcnkoKXtcclxuXHJcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgIG1vZGU6IFwic2luZ2xlXCIgLy91c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gICAgY29udGV4dFxyXG4gICAgLmF1dGhvcml6ZSgpXHJcbiAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvblswXS5hbmRyb2lkKTtcclxuICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLm5vcm1hbGl6ZShzZWxlY3Rpb25bMF0uYW5kcm9pZCk7XHJcbiAgICAgIHRoaXMucGljdHVyZSA9IHNlbGVjdGlvblswXS5hbmRyb2lkLy9pbWFnZVNvdXJjZS5mcm9tRmlsZShwYXRoKS5hbmRyb2lkO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBwcm9jZXNzIGVycm9yXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59Il19
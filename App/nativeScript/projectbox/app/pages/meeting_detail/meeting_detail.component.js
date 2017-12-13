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
var fs = require("file-system");
var Meeting_detailComponent = (function () {
    function Meeting_detailComponent(route, router, routerExtensions, meetingService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.meetingService = meetingService;
        this.route.params.subscribe(function (params) {
            _this.getMeeting(params["id"]);
        });
    }
    Meeting_detailComponent.prototype.ngOnInit = function () { };
    Meeting_detailComponent.prototype.getMeeting = function (meeting_id) {
        var _this = this;
        this.meetingService.getMeetings().then(function (data) { return _this.getMeetingById(data.meetings, meeting_id); }, function (error) { return _this.getMeetingById(null, meeting_id); })
            .then(function (data) {
            //do shit after initialization of all datasets
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
    Meeting_detailComponent.prototype.updateMeeting = function () {
        this.meetingService.update(this.meeting);
    };
    Meeting_detailComponent.prototype.createMeeting = function () {
        this.meetingService.createMeeting(this.meeting);
    };
    Meeting_detailComponent.prototype.onSwipe = function (args) {
        if (args.direction === 2) {
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
        var milliseconds = new Date().getTime();
        var that = this;
        var context = imagepicker.create({
            mode: "single" //use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () { return context.present(); })
            .then(function (selection) {
            selection.forEach(function (selected) {
                selected.getImage().then(function (imagesource) {
                    var folder = fs.knownFolders.documents();
                    var path = fs.path.join(folder.path, milliseconds + ".png");
                    var saved = imagesource.saveToFile(path, "png");
                    that.picture = path;
                });
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ19kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZ19kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtEQUE2RDtBQUM3RCwwQ0FBd0M7QUFDeEMsc0RBQStEO0FBQy9ELDBDQUErQztBQVUvQyx3RUFBcUU7QUFDckUsNENBQThDO0FBQzlDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBSXRELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQWFoQztJQUtFLGlDQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxjQUE4QjtRQUFySixpQkFLQztRQUxtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRW5KLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQUVaLDRDQUFVLEdBQVYsVUFBVyxVQUFrQjtRQUE3QixpQkFRQztRQVBDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUNwQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBOUMsQ0FBOEMsRUFDeEQsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQ7YUFDQSxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1QsOENBQThDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxJQUFTLEVBQUUsVUFBa0I7UUFBNUMsaUJBZ0NDO1FBL0JDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFFbEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQSxDQUFDO29CQUM1QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUMsV0FBVztZQUNYOzs7Ozs7Ozs7Y0FTRTtRQUNSLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBRWxCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUEsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQseUNBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0osQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQUEsaUJBT0M7UUFOQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU1QixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFFRSxJQUFJLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksRUFBRSxRQUFRLENBQUMsdUNBQXVDO1NBQ3ZELENBQUMsQ0FBQztRQUVILE9BQU87YUFDTixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQzthQUM3QixJQUFJLENBQUMsVUFBQyxTQUFTO1lBQ2QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQ3hCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxXQUFXO29CQUMzQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN6QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNoQixnQkFBZ0I7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBOUdVLHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsZ0NBQWMsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSx5Q0FBeUMsQ0FBQztTQUN6RyxDQUFDO3lDQU0yQix1QkFBYyxFQUFrQixlQUFNLEVBQTRCLHlCQUFnQixFQUEwQixnQ0FBYztPQUwxSSx1QkFBdUIsQ0ErR25DO0lBQUQsOEJBQUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCJcclxuaW1wb3J0IHsgTWVldGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZy5zZXJ2aWNlXCJcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmxldCBpbWFnZXBpY2tlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIik7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlTW9kdWxlIGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0XCI7XHJcbnZhciBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWVldGluZ19kZXRhaWxcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9tZWV0aW5nX2RldGFpbC9tZWV0aW5nX2RldGFpbC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL21lZXRpbmdfZGV0YWlsL21lZXRpbmdfZGV0YWlsLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9tZWV0aW5nX2RldGFpbC9tZWV0aW5nX2RldGFpbC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lZXRpbmdfZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBtZWV0aW5nIDpNZWV0aW5nO1xyXG4gIHB1YmxpYyBwaWN0dXJlIDphbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGUgOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbWVldGluZ1NlcnZpY2U6IE1lZXRpbmdTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5nZXRNZWV0aW5nKHBhcmFtc1tcImlkXCJdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXt9XHJcblxyXG4gIGdldE1lZXRpbmcobWVldGluZ19pZCA6bnVtYmVyKXtcclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0TWVldGluZ3MoKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5nZXRNZWV0aW5nQnlJZChkYXRhLm1lZXRpbmdzLCBtZWV0aW5nX2lkKSxcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLmdldE1lZXRpbmdCeUlkKG51bGwsIG1lZXRpbmdfaWQpXHJcbiAgICApXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAvL2RvIHNoaXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24gb2YgYWxsIGRhdGFzZXRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE1lZXRpbmdCeUlkKGRhdGEgOmFueSwgbWVldGluZ19pZCA6bnVtYmVyKXtcclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgZGF0YS5mb3JFYWNoKG1lZXRpbmcgPT4ge1xyXG5cclxuICAgICAgICBpZihtZWV0aW5nLmlkID09PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgIHRoaXMubWVldGluZyA9IG1lZXRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyRIIVQgc29tZVxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgIHRoaXMubWVldGluZ1NlcnZpY2Uuc2F2ZU1lZXRpbmdzKGRhdGEpO1xyXG4gICAgICAgICAgZGF0YS5zb21lKGZ1bmN0aW9uKG1lZXRpbmcsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYobWVldGluZy5pZCA9PSBtZWV0aW5nX2lkKXtcclxuICAgICAgICAgICAgICB0aGlzLm1lZXRpbmcgPSBtZWV0aW5nO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgKi9cclxuICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgIGRhdGEgPSB0aGlzLm1lZXRpbmdTZXJ2aWNlLmdldFNhdmVkTWVldGluZ3MoKTtcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaChtZWV0aW5nID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYobWVldGluZy5pZCA9PT0gbWVldGluZ19pZCl7XHJcbiAgICAgICAgICB0aGlzLm1lZXRpbmcgPSBtZWV0aW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNZWV0aW5nKCl7XHJcbiAgICB0aGlzLm1lZXRpbmdTZXJ2aWNlLnVwZGF0ZSh0aGlzLm1lZXRpbmcpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVldGluZygpe1xyXG4gICAgdGhpcy5tZWV0aW5nU2VydmljZS5jcmVhdGVNZWV0aW5nKHRoaXMubWVldGluZyk7XHJcbiAgfVxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSAyKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuQ2FtZXJhKCl7XHJcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcblxyXG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKCkudGhlbihwaWN0dXJlID0+IHtcclxuICAgICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTtcclxuICAgICAgY29uc29sZS5kaXIocGljdHVyZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5HYWxsZXJ5KCl7XHJcblxyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICBtb2RlOiBcInNpbmdsZVwiIC8vdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZXh0XHJcbiAgICAuYXV0aG9yaXplKClcclxuICAgIC50aGVuKCgpID0+IGNvbnRleHQucHJlc2VudCgpKVxyXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICBzZWxlY3Rpb24uZm9yRWFjaChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2UoKS50aGVuKGZ1bmN0aW9uKGltYWdlc291cmNlKXtcclxuICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcbiAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgbWlsbGlzZWNvbmRzICsgXCIucG5nXCIpO1xyXG4gICAgICAgICAgdmFyIHNhdmVkID0gaW1hZ2Vzb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcInBuZ1wiKTtcclxuICAgICAgICAgIHRoYXQucGljdHVyZSA9IHBhdGg7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==
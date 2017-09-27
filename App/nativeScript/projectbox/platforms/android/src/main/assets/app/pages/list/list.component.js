"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var ListComponent = (function () {
    function ListComponent(router, routerExtensions, userService) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.meetingsText = "Lade...";
        this.userService.meetings().subscribe(function (data) { return _this.displayMeetings(data); }, function (error) { return alert("Unfortunately we could not find any meetings."); });
    }
    ListComponent.prototype.displayMeetings = function (data) {
        //@Rommelt hier die Daten für View vorbereiten
        this.meetings = data.meetings;
        console.dir(this.meetings[0]);
        //@Rommelt: name des 1. meetings:
        console.log(this.meetings[0].name);
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
            providers: [user_service_1.UserService],
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, user_service_1.UserService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUE2RDtBQW9CN0Q7SUFNRSx1QkFBb0IsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLFdBQXdCO1FBQWhILGlCQVVDO1FBVm1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFOUcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFHOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDbEUsQ0FBQztJQUVKLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQVM7UUFFdkIsOENBQThDO1FBRTlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixpQ0FBaUM7UUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLDBDQUEwQztRQUMxQzs7Ozs7Ozs7O1VBU0U7SUFJSixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsU0FBUztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQXhEVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FPNEIsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBdUIsMEJBQVc7T0FOckcsYUFBYSxDQTBEekI7SUFBRCxvQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCJcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YVxyXG59IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xyXG5cclxuICBtZWV0aW5nZGF0YSA6YW55O1xyXG4gIG1lZXRpbmdzVGV4dCA6c3RyaW5nO1xyXG4gIG1lZXRpbmdzIDpNZWV0aW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIFxyXG4gICAgdGhpcy5tZWV0aW5nc1RleHQgPSBcIkxhZGUuLi5cIjtcclxuXHJcblxyXG4gICAgdGhpcy51c2VyU2VydmljZS5tZWV0aW5ncygpLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheU1lZXRpbmdzKGRhdGEpLCBcclxuICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgYW55IG1lZXRpbmdzLlwiKVxyXG4gICAgKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZGlzcGxheU1lZXRpbmdzKGRhdGEgOmFueSl7XHJcblxyXG4gICAgLy9AUm9tbWVsdCBoaWVyIGRpZSBEYXRlbiBmw7xyIFZpZXcgdm9yYmVyZWl0ZW5cclxuXHJcbiAgICB0aGlzLm1lZXRpbmdzID0gZGF0YS5tZWV0aW5ncztcclxuXHJcbiAgICBjb25zb2xlLmRpcih0aGlzLm1lZXRpbmdzWzBdKTtcclxuXHJcbiAgICAvL0BSb21tZWx0OiBuYW1lIGRlcyAxLiBtZWV0aW5nczpcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lZXRpbmdzWzBdLm5hbWUpO1xyXG5cclxuICAgIC8vQFJvbW1lbHQgQXR0cmlidXRlIHZvbiB0aGlzLm1lZXRpbmdzW2ldOlxyXG4gICAgLypcclxuICAgIHByb3RvY29sIDpTdHJpbmc7XHJcbiAgICBuYW1lIDpTdHJpbmc7XHJcbiAgICBsb2NhdGlvbiA6U3RyaW5nO1xyXG4gICAgaWQgOk51bWJlcjtcclxuICAgIGR1cmF0aW9uIDpOdW1iZXI7XHJcbiAgICBkYXRlIDpEYXRlO1xyXG4gICAgYXR0ZW5kZWVzOiBTdHJpbmc7XHJcbiAgICBhZ2VuZGEgOlN0cmluZ1xyXG4gICAgKi9cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICBpZiAoYXJncy5kaXJlY3Rpb24gPSAxKSB7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hbmltYXRpb25cIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=
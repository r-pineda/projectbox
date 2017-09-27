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
        this.userService.meetings().subscribe(function (data) { return _this.meetingsText = JSON.stringify(data.meeting); }, function (error) { return alert("Unfortunately we could not find any meetings."); });
        this.meetingsText.split('\\').join('\\\\');
        this.meetings = JSON.parse(this.meetingsText).meeting;
        console.log(this.meetings.length);
        console.dir(this.meetings[0]);
        console.dir(this.meetings[1]);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrREFBNkQ7QUFDN0QsMENBQXdDO0FBQ3hDLHNEQUE2RDtBQW1CN0Q7SUFNRSx1QkFBb0IsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLFdBQXdCO1FBQWhILGlCQWtCQztRQWxCbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUU5RyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUc5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDbkMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFoRCxDQUFnRCxFQUMxRCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNsRSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFBO1FBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoQyxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLElBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsU0FBUztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQXBDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FPNEIsZUFBTSxFQUE0Qix5QkFBZ0IsRUFBdUIsMEJBQVc7T0FOckcsYUFBYSxDQXNDekI7SUFBRCxvQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nXCJcclxuaW1wb3J0IHtcclxuICBHZXN0dXJlRXZlbnREYXRhLFxyXG4gIEdlc3R1cmVUeXBlcyxcclxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcclxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFRvdWNoR2VzdHVyZUV2ZW50RGF0YX0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XHJcblxyXG4gIG1lZXRpbmdkYXRhIDphbnk7XHJcbiAgbWVldGluZ3NUZXh0IDpzdHJpbmc7XHJcbiAgbWVldGluZ3MgOk1lZXRpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgXHJcbiAgICB0aGlzLm1lZXRpbmdzVGV4dCA9IFwiTGFkZS4uLlwiO1xyXG5cclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLm1lZXRpbmdzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5tZWV0aW5nc1RleHQgPSBKU09OLnN0cmluZ2lmeShkYXRhLm1lZXRpbmcpLCBcclxuICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgYW55IG1lZXRpbmdzLlwiKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdzVGV4dC5zcGxpdCgnXFxcXCcpLmpvaW4oJ1xcXFxcXFxcJyk7XHJcblxyXG4gICAgdGhpcy5tZWV0aW5ncyA9IEpTT04ucGFyc2UodGhpcy5tZWV0aW5nc1RleHQpLm1lZXRpbmdcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lZXRpbmdzLmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLm1lZXRpbmdzWzBdKTtcclxuICAgIGNvbnNvbGUuZGlyKHRoaXMubWVldGluZ3NbMV0pO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID0gMSkge1xyXG4gICAgXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYW5pbWF0aW9uXCJdLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19
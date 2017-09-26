"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var AnimationComponent = (function () {
    function AnimationComponent(router, routerExtensions, userService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
    }
    AnimationComponent.prototype.onSwipe = function (args) {
        if (args.direction = 2) {
            this.routerExtensions.navigate(["/list"], {
                transition: {
                    name: "slideRight",
                    curve: "easeOut"
                }
            });
        }
    };
    AnimationComponent = __decorate([
        core_1.Component({
            selector: "animation",
            templateUrl: "pages/animation/animation.html",
            providers: [user_service_1.UserService],
            styleUrls: ["pages/animation/animation-common.css", "pages/animation/animation.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, user_service_1.UserService])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0RBQTZEO0FBQzdELDBDQUF3QztBQUN4QyxzREFBNkQ7QUFnQjdEO0lBSUUsNEJBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxXQUF3QjtRQUE1RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRWhILENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsSUFBMkI7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxZQUFZO29CQUNsQixLQUFLLEVBQUUsU0FBUztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQWxCVSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSwrQkFBK0IsQ0FBQztTQUNyRixDQUFDO3lDQUs0QixlQUFNLEVBQTRCLHlCQUFnQixFQUF1QiwwQkFBVztPQUpyRyxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgR2VzdHVyZUV2ZW50RGF0YSxcbiAgR2VzdHVyZVR5cGVzLFxuICBQYW5HZXN0dXJlRXZlbnREYXRhLFxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcbiAgU3dpcGVHZXN0dXJlRXZlbnREYXRhLFxuICBUb3VjaEdlc3R1cmVFdmVudERhdGF9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5pbWF0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2FuaW1hdGlvbi9hbmltYXRpb24uaHRtbFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYW5pbWF0aW9uL2FuaW1hdGlvbi1jb21tb24uY3NzXCIsIFwicGFnZXMvYW5pbWF0aW9uL2FuaW1hdGlvbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQ29tcG9uZW50IHtcblxuICBtZWV0aW5ncyA6U3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcblxuICB9XG5cbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBpZiAoYXJncy5kaXJlY3Rpb24gPSAyKSB7XG4gICAgXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVSaWdodFwiLFxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=
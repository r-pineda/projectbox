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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0RBQTZEO0FBQzdELDBDQUF3QztBQUN4QyxzREFBNkQ7QUFnQjdEO0lBSUUsNEJBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxXQUF3QjtRQUE1RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRWhILENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsSUFBMkI7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxZQUFZO29CQUNsQixLQUFLLEVBQUUsU0FBUztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQWxCVSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSwrQkFBK0IsQ0FBQztTQUNyRixDQUFDO3lDQUs0QixlQUFNLEVBQTRCLHlCQUFnQixFQUF1QiwwQkFBVztPQUpyRyxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdlc3R1cmVFdmVudERhdGEsXHJcbiAgR2VzdHVyZVR5cGVzLFxyXG4gIFBhbkdlc3R1cmVFdmVudERhdGEsXHJcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxyXG4gIFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSxcclxuICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXHJcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFuaW1hdGlvblwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2FuaW1hdGlvbi9hbmltYXRpb24uaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2FuaW1hdGlvbi9hbmltYXRpb24tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2FuaW1hdGlvbi9hbmltYXRpb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25Db21wb25lbnQge1xyXG5cclxuICBtZWV0aW5ncyA6U3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9IDIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcclxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19
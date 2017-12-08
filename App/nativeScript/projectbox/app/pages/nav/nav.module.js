"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("../../app.routing");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var ticket_component_1 = require("../ticket/ticket.component");
var todo_component_1 = require("../todo/todo.component");
var nav_component_1 = require("../nav/nav.component");
var NavModule = (function () {
    function NavModule() {
    }
    NavModule = __decorate([
        core_1.NgModule({
            bootstrap: [nav_component_1.NavComponent],
            entryComponents: [dashboard_component_1.DashboardComponent, ticket_component_1.TicketComponent, todo_component_1.TodoComponent],
            imports: [
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ]
        })
    ], NavModule);
    return NavModule;
}());
exports.NavModule = NavModule;
platform_1.platformNativeScriptDynamic().bootstrapModule(NavModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsMERBQTRFO0FBQzVFLHNEQUF1RTtBQUV2RSxpREFBMkM7QUFDM0Msd0VBQXNFO0FBQ3RFLCtEQUE2RDtBQUM3RCx5REFBc0Q7QUFDdEQsc0RBQW9EO0FBWXBEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFUckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixlQUFlLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSxrQ0FBZSxFQUFFLDhCQUFhLENBQUM7WUFDckUsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7YUFDM0M7U0FDSixDQUFDO09BRVcsU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTO0FBRXRCLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vLi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpY2tldENvbXBvbmVudCB9IGZyb20gXCIuLi90aWNrZXQvdGlja2V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb2RvQ29tcG9uZW50fSBmcm9tIFwiLi4vdG9kby90b2RvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tIFwiLi4vbmF2L25hdi5jb21wb25lbnRcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbTmF2Q29tcG9uZW50XSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0Rhc2hib2FyZENvbXBvbmVudCwgVGlja2V0Q29tcG9uZW50LCBUb2RvQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1vZHVsZSB7fVxyXG5cclxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKE5hdk1vZHVsZSk7Il19
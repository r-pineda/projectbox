"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
//import { AppShortcuts } from "nativescript-app-shortcuts";
/* Navigation */
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule(routerExtensions) {
        this.routerExtensions = routerExtensions;
        /*
            new AppShortcuts().setQuickActionCallback(shortcutItem => {
          console.log(`The app was launched by shortcut type '${shortcutItem.type}'`);
        
              // this is where you handle any specific case for the shortcut, based on its type
              if (shortcutItem.type === "dashboard") {
                //this.deeplink("/page1");
                console.log("dashboard");
              } else if (shortcutItem.type === "task") {
                //this.deeplink("/page2");
                console.log("task");
              } else if (shortcutItem.type === "meeting") {
                //this.deeplink("/page2");
                console.log("meeting");
              } else if (shortcutItem.type === "ticket") {
                //this.deeplink("/page2");
                console.log("ticket");
              } else if (shortcutItem.type === "setting") {
                //this.deeplink("/page2");
                console.log("seeting");
              }
            });
          }
        
          private deeplink(to: string): void {
            this.zone.run(() => {
              this.routerExtensions.navigate([to], {
                animated: false
              });
            });
            */
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                nativescript_ng_shadow_1.NgShadowModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            declarations: [
                app_component_1.AppComponent,
                app_routing_1.navigatableComponents,
                angular_2.LISTVIEW_DIRECTIVES,
                angular_1.SIDEDRAWER_DIRECTIVES
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsNkRBQXdEO0FBQ3hELG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxpRUFBd0Q7QUFDeEQsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQixzRUFBbUY7QUFDbkYsb0VBQStFO0FBRS9FLGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFtQjlEO0lBQ0ksbUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0E4Qk07SUFDSixDQUFDO0lBbkNVLFNBQVM7UUFqQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLHVDQUFjO2dCQUNkLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2FBQ3pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLG1DQUFxQjtnQkFDckIsNkJBQW1CO2dCQUNuQiwrQkFBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7eUNBRXdDLHVDQUFnQjtPQUQ3QyxTQUFTLENBb0NyQjtJQUFELGdCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG4vL2ltcG9ydCB7IEFwcFNob3J0Y3V0cyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXBwLXNob3J0Y3V0c1wiO1xyXG4vKiBOYXZpZ2F0aW9uICovXHJcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgIE5nU2hhZG93TW9kdWxlLCAvL25nLXNoYWRvdyBwbHVnaW5cclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgbmF2aWdhdGFibGVDb21wb25lbnRzLFxyXG4gICAgTElTVFZJRVdfRElSRUNUSVZFUyxcclxuICAgIFNJREVEUkFXRVJfRElSRUNUSVZFU1xyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAvL3ByaXZhdGUgem9uZTogTmdab25lXHJcbiAgICAgICAgICAgICkge1xyXG4vKlxyXG4gICAgbmV3IEFwcFNob3J0Y3V0cygpLnNldFF1aWNrQWN0aW9uQ2FsbGJhY2soc2hvcnRjdXRJdGVtID0+IHtcclxuICBjb25zb2xlLmxvZyhgVGhlIGFwcCB3YXMgbGF1bmNoZWQgYnkgc2hvcnRjdXQgdHlwZSAnJHtzaG9ydGN1dEl0ZW0udHlwZX0nYCk7XHJcblxyXG4gICAgICAvLyB0aGlzIGlzIHdoZXJlIHlvdSBoYW5kbGUgYW55IHNwZWNpZmljIGNhc2UgZm9yIHRoZSBzaG9ydGN1dCwgYmFzZWQgb24gaXRzIHR5cGVcclxuICAgICAgaWYgKHNob3J0Y3V0SXRlbS50eXBlID09PSBcImRhc2hib2FyZFwiKSB7XHJcbiAgICAgICAgLy90aGlzLmRlZXBsaW5rKFwiL3BhZ2UxXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGFzaGJvYXJkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNob3J0Y3V0SXRlbS50eXBlID09PSBcInRhc2tcIikge1xyXG4gICAgICAgIC8vdGhpcy5kZWVwbGluayhcIi9wYWdlMlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hvcnRjdXRJdGVtLnR5cGUgPT09IFwibWVldGluZ1wiKSB7XHJcbiAgICAgICAgLy90aGlzLmRlZXBsaW5rKFwiL3BhZ2UyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVldGluZ1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaG9ydGN1dEl0ZW0udHlwZSA9PT0gXCJ0aWNrZXRcIikge1xyXG4gICAgICAgIC8vdGhpcy5kZWVwbGluayhcIi9wYWdlMlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpY2tldFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaG9ydGN1dEl0ZW0udHlwZSA9PT0gXCJzZXR0aW5nXCIpIHtcclxuICAgICAgICAvL3RoaXMuZGVlcGxpbmsoXCIvcGFnZTJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWV0aW5nXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVlcGxpbmsodG86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdG9dLCB7XHJcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAqL1xyXG4gIH1cclxufVxyXG4iXX0=
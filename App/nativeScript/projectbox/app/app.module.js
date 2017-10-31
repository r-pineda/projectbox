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
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents),
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsNkRBQXdEO0FBQ3hELG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxpRUFBd0Q7QUFDeEQsNERBQTREO0FBRTVELGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFpQjlEO0lBQ0ksbUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0E4Qk07SUFDSixDQUFDO0lBbkNVLFNBQVM7UUFmckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsdUNBQWM7Z0JBQ2QsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7YUFDekM7WUFDRCxZQUFZO2dCQUNWLDRCQUFZO3FCQUNULG1DQUFxQixDQUN6QjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQzt5Q0FFd0MsdUNBQWdCO09BRDdDLFNBQVMsQ0FvQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5nU2hhZG93TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7XHJcbi8vaW1wb3J0IHsgQXBwU2hvcnRjdXRzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hcHAtc2hvcnRjdXRzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgTmdTaGFkb3dNb2R1bGUsIC8vbmctc2hhZG93IHBsdWdpblxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgLy9wcml2YXRlIHpvbmU6IE5nWm9uZVxyXG4gICAgICAgICAgICApIHtcclxuLypcclxuICAgIG5ldyBBcHBTaG9ydGN1dHMoKS5zZXRRdWlja0FjdGlvbkNhbGxiYWNrKHNob3J0Y3V0SXRlbSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFRoZSBhcHAgd2FzIGxhdW5jaGVkIGJ5IHNob3J0Y3V0IHR5cGUgJyR7c2hvcnRjdXRJdGVtLnR5cGV9J2ApO1xyXG5cclxuICAgICAgLy8gdGhpcyBpcyB3aGVyZSB5b3UgaGFuZGxlIGFueSBzcGVjaWZpYyBjYXNlIGZvciB0aGUgc2hvcnRjdXQsIGJhc2VkIG9uIGl0cyB0eXBlXHJcbiAgICAgIGlmIChzaG9ydGN1dEl0ZW0udHlwZSA9PT0gXCJkYXNoYm9hcmRcIikge1xyXG4gICAgICAgIC8vdGhpcy5kZWVwbGluayhcIi9wYWdlMVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhc2hib2FyZFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaG9ydGN1dEl0ZW0udHlwZSA9PT0gXCJ0YXNrXCIpIHtcclxuICAgICAgICAvL3RoaXMuZGVlcGxpbmsoXCIvcGFnZTJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNob3J0Y3V0SXRlbS50eXBlID09PSBcIm1lZXRpbmdcIikge1xyXG4gICAgICAgIC8vdGhpcy5kZWVwbGluayhcIi9wYWdlMlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lZXRpbmdcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hvcnRjdXRJdGVtLnR5cGUgPT09IFwidGlja2V0XCIpIHtcclxuICAgICAgICAvL3RoaXMuZGVlcGxpbmsoXCIvcGFnZTJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aWNrZXRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hvcnRjdXRJdGVtLnR5cGUgPT09IFwic2V0dGluZ1wiKSB7XHJcbiAgICAgICAgLy90aGlzLmRlZXBsaW5rKFwiL3BhZ2UyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VldGluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlZXBsaW5rKHRvOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RvXSwge1xyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgKi9cclxuICB9XHJcbn1cclxuIl19
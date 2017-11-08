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
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var angular_2 = require("nativescript-pro-ui/listview/angular");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsNkRBQXdEO0FBQ3hELG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxpRUFBd0Q7QUFDeEQsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQixrRUFBK0U7QUFDL0UsZ0VBQTJFO0FBRTNFLGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFtQjlEO0lBQ0ksbUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0E4Qk07SUFDSixDQUFDO0lBbkNVLFNBQVM7UUFqQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLHVDQUFjO2dCQUNkLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2FBQ3pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLG1DQUFxQjtnQkFDckIsNkJBQW1CO2dCQUNuQiwrQkFBcUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7eUNBRXdDLHVDQUFnQjtPQUQ3QyxTQUFTLENBb0NyQjtJQUFELGdCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG4vL2ltcG9ydCB7IEFwcFNob3J0Y3V0cyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXBwLXNob3J0Y3V0c1wiO1xyXG4vKiBOYXZpZ2F0aW9uICovXHJcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBMSVNUVklFV19ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICBOZ1NoYWRvd01vZHVsZSwgLy9uZy1zaGFkb3cgcGx1Z2luXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIG5hdmlnYXRhYmxlQ29tcG9uZW50cyxcclxuICAgIExJU1RWSUVXX0RJUkVDVElWRVMsXHJcbiAgICBTSURFRFJBV0VSX0RJUkVDVElWRVNcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgLy9wcml2YXRlIHpvbmU6IE5nWm9uZVxyXG4gICAgICAgICAgICApIHtcclxuLypcclxuICAgIG5ldyBBcHBTaG9ydGN1dHMoKS5zZXRRdWlja0FjdGlvbkNhbGxiYWNrKHNob3J0Y3V0SXRlbSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFRoZSBhcHAgd2FzIGxhdW5jaGVkIGJ5IHNob3J0Y3V0IHR5cGUgJyR7c2hvcnRjdXRJdGVtLnR5cGV9J2ApO1xyXG5cclxuICAgICAgLy8gdGhpcyBpcyB3aGVyZSB5b3UgaGFuZGxlIGFueSBzcGVjaWZpYyBjYXNlIGZvciB0aGUgc2hvcnRjdXQsIGJhc2VkIG9uIGl0cyB0eXBlXHJcbiAgICAgIGlmIChzaG9ydGN1dEl0ZW0udHlwZSA9PT0gXCJkYXNoYm9hcmRcIikge1xyXG4gICAgICAgIC8vdGhpcy5kZWVwbGluayhcIi9wYWdlMVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhc2hib2FyZFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaG9ydGN1dEl0ZW0udHlwZSA9PT0gXCJ0YXNrXCIpIHtcclxuICAgICAgICAvL3RoaXMuZGVlcGxpbmsoXCIvcGFnZTJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNob3J0Y3V0SXRlbS50eXBlID09PSBcIm1lZXRpbmdcIikge1xyXG4gICAgICAgIC8vdGhpcy5kZWVwbGluayhcIi9wYWdlMlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lZXRpbmdcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hvcnRjdXRJdGVtLnR5cGUgPT09IFwidGlja2V0XCIpIHtcclxuICAgICAgICAvL3RoaXMuZGVlcGxpbmsoXCIvcGFnZTJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aWNrZXRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hvcnRjdXRJdGVtLnR5cGUgPT09IFwic2V0dGluZ1wiKSB7XHJcbiAgICAgICAgLy90aGlzLmRlZXBsaW5rKFwiL3BhZ2UyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VldGluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlZXBsaW5rKHRvOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RvXSwge1xyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgKi9cclxuICB9XHJcbn1cclxuIl19
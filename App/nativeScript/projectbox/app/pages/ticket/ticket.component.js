"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var ticket_service_1 = require("../../shared/ticket/ticket.service");
require("rxjs/add/operator/switchMap");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var TicketComponent = (function () {
    function TicketComponent(router, routerExtensions, activatedRoute, userService, statusService, ticketService, page, _changeDetectionRef, fonticon) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.statusService = statusService;
        this.ticketService = ticketService;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        //Ebene 1 des Arrays ist assoziativ mit den IDs von den Todos. die 2. Ebene enthält folgende Attribute:
        //[0]startTime: Stunden
        //[1]startTime: Minuten
        //[2]startTime: Sekunden
        //[3]endTime: Stunden
        //[4]endTime: Minuten
        //[5]endTime: Sekunden
        //[6]errechnete dauer des Eintrags
        //[7]TimerRunning :0 = false, 1 = true
        this.curUser = new user_1.User;
        this.curUser = this.userService.getCurrentUser();
        this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
    }
    TicketComponent.prototype.ngOnInit = function () {
        /*
        this.temp = new Array(this.tickets.length);
        this.tickets.forEach(element => {
          this.temp[element.id] = [];
          this.temp[element.id][6] = element.timeTaken;
          this.temp[element.id][7] = 0;
        });
        */
        var _this = this;
        this.ticketService.getTickets().then(function (data) { return _this.displayTickets(data); }, function (error) { return _this.displayTickets(false); });
    };
    TicketComponent.prototype.displayTickets = function (data) {
        if (data) {
            this.ticketService.saveTickets(data);
            this.tickets = data.tickets;
        }
        else {
            data = this.ticketService.getSavedTickets();
            this.tickets = data.tickets;
        }
        console.dir(this.tickets);
    };
    /*
    saveTime(id :any){
      console.dir(this.temp);
      this.tickets.forEach(ticket => {
        if(id == ticket.id){
          let sec :number =
          ((this.temp[id][3] * 3600) + (this.temp[id][4] * 60) + +this.temp[id][5])
          - ((this.temp[id][0] * 3600) + (this.temp[id][1] * 60) + +this.temp[id][2]);
          sec -= sec%60;
          ticket.timeTaken += (sec/60);
        }
      });
    }
  
  
    play_stop(id :any){
      if(this.temp[id][7] == 0){
        this.temp[id][7] = 1;
        let date :Date = new Date();
        this.temp[id][0] = date.getHours();
        this.temp[id][1] = date.getMinutes();
        this.temp[id][2] = date.getSeconds();
      }else{
        this.temp[id][7] = 0;
        let date :Date = new Date();
        this.temp[id][3] = date.getHours();
        this.temp[id][4] = date.getMinutes();
        this.temp[id][5] = date.getSeconds();
        this.saveTime(id);
        console.dir(this.temp);
      }
  
    }
    */
    TicketComponent.prototype.navigateto = function (pagename) {
        this.routerExtensions.navigate([pagename], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    TicketComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    TicketComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    TicketComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], TicketComponent.prototype, "drawerComponent", void 0);
    TicketComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [ticket_service_1.TicketService, status_service_1.StatusService, user_service_1.UserService],
            templateUrl: "pages/ticket/ticket.html",
            styleUrls: ["pages/ticket/ticket-common.css", "pages/ticket/ticket.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            user_service_1.UserService,
            status_service_1.StatusService,
            ticket_service_1.TicketService,
            page_1.Page,
            core_1.ChangeDetectorRef,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], TicketComponent);
    return TicketComponent;
}());
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpY2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsK0NBQThDO0FBQzlDLCtEQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQixxRUFBbUU7QUFFbkUscUVBQW1FO0FBQ25FLHVDQUFxQztBQUdyQyxrRUFBZ0c7QUFFaEcsdUVBQStEO0FBVS9EO0lBaUJFLHlCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsSUFBVSxFQUNWLG1CQUFzQyxFQUN0QyxRQUE0QjtRQVI1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUF0QnBCLHVHQUF1RztRQUN2Ryx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixrQ0FBa0M7UUFDbEMsc0NBQXNDO1FBQ3RDLFlBQU8sR0FBUyxJQUFJLFdBQUksQ0FBQztRQWV6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNwSSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVFOzs7Ozs7O1VBT0U7UUFUSixpQkFlQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUNsQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ25DLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUV0QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU5QixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFpQ0U7SUFFRixvQ0FBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRyx5Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBZDhCO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs0REFBQztJQTlHckUsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw4QkFBYSxFQUFFLDBCQUFXLENBQUM7WUFDdEQsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztTQUN6RSxDQUFDO3lDQXFCa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNqQiwwQkFBVztZQUNULDhCQUFhO1lBQ2IsOEJBQWE7WUFDdEIsV0FBSTtZQUNXLHdCQUFpQjtZQUM1Qiw4Q0FBa0I7T0EzQjNCLGVBQWUsQ0E2SDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdIRCxJQTZIQztBQTdIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpY2tldCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGlja2V0L3RpY2tldFwiO1xyXG5pbXBvcnQgeyBUaWNrZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90aWNrZXQvdGlja2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVGlja2V0U2VydmljZSwgU3RhdHVzU2VydmljZSwgVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RpY2tldC90aWNrZXQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdGlja2V0L3RpY2tldC1jb21tb24uY3NzXCIsIFwicGFnZXMvdGlja2V0L3RpY2tldC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWNrZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG5cclxuICB0aWNrZXRzIDpUaWNrZXRbXTtcclxuICB0aW1lc3RhcnQgOnN0cmluZztcclxuICB0ZW1wIDpudW1iZXJbXVtdOyAvL2RpZW50IHp1ciB0ZW1wb3LDpHJlbiBzcGVpY2hlcnVuZ2VuIGRlciBaZWl0ZXJmYXNzdW5nLiBcclxuICAgICAgICAgICAgICAgICAgICAvL0ViZW5lIDEgZGVzIEFycmF5cyBpc3QgYXNzb3ppYXRpdiBtaXQgZGVuIElEcyB2b24gZGVuIFRvZG9zLiBkaWUgMi4gRWJlbmUgZW50aMOkbHQgZm9sZ2VuZGUgQXR0cmlidXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzBdc3RhcnRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMV1zdGFydFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1syXXN0YXJ0VGltZTogU2VrdW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1szXWVuZFRpbWU6IFN0dW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s0XWVuZFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s1XWVuZFRpbWU6IFNla3VuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNl1lcnJlY2huZXRlIGRhdWVyIGRlcyBFaW50cmFnc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vWzddVGltZXJSdW5uaW5nIDowID0gZmFsc2UsIDEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY3VyVXNlciA6VXNlciA9IG5ldyBVc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhciA6c3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aWNrZXRTZXJ2aWNlIDpUaWNrZXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSlcclxuICB7XHJcbiAgICB0aGlzLmN1clVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB0aGlzLmF2YXRhciA9IFwiaHR0cHM6Ly9zZWN1cmUucHJvamVjdGJveC5ldS92Mi91c2VyL2F2YXRhci9cIiArIHRoaXMuY3VyVXNlci5hdmF0YXIgKyBcIj9hY2Nlc3NfdG9rZW49XCIgKyB0aGlzLmN1clVzZXIuYWNjZXNzX3Rva2VuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgLypcclxuICAgIHRoaXMudGVtcCA9IG5ldyBBcnJheSh0aGlzLnRpY2tldHMubGVuZ3RoKTtcclxuICAgIHRoaXMudGlja2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF0gPSBbXTtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzZdID0gZWxlbWVudC50aW1lVGFrZW47XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXVs3XSA9IDA7XHJcbiAgICB9KTtcclxuICAgICovXHJcblxyXG4gICAgdGhpcy50aWNrZXRTZXJ2aWNlLmdldFRpY2tldHMoKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5VGlja2V0cyhkYXRhIDphbnkpe1xyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy50aWNrZXRTZXJ2aWNlLnNhdmVUaWNrZXRzKGRhdGEpO1xyXG4gICAgICB0aGlzLnRpY2tldHMgPSBkYXRhLnRpY2tldHM7XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBkYXRhID0gdGhpcy50aWNrZXRTZXJ2aWNlLmdldFNhdmVkVGlja2V0cygpXHJcbiAgICAgIHRoaXMudGlja2V0cyA9IGRhdGEudGlja2V0cztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRpY2tldHMpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICBzYXZlVGltZShpZCA6YW55KXtcclxuICAgIGNvbnNvbGUuZGlyKHRoaXMudGVtcCk7XHJcbiAgICB0aGlzLnRpY2tldHMuZm9yRWFjaCh0aWNrZXQgPT4ge1xyXG4gICAgICBpZihpZCA9PSB0aWNrZXQuaWQpe1xyXG4gICAgICAgIGxldCBzZWMgOm51bWJlciA9IFxyXG4gICAgICAgICgodGhpcy50ZW1wW2lkXVszXSAqIDM2MDApICsgKHRoaXMudGVtcFtpZF1bNF0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVs1XSkgXHJcbiAgICAgICAgLSAoKHRoaXMudGVtcFtpZF1bMF0gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzFdICogNjApICsgK3RoaXMudGVtcFtpZF1bMl0pO1xyXG4gICAgICAgIHNlYyAtPSBzZWMlNjA7XHJcbiAgICAgICAgdGlja2V0LnRpbWVUYWtlbiArPSAoc2VjLzYwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcGxheV9zdG9wKGlkIDphbnkpe1xyXG4gICAgaWYodGhpcy50ZW1wW2lkXVs3XSA9PSAwKXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDE7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVswXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsxXSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzJdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDA7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVszXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs0XSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzVdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVRpbWUoaWQpO1xyXG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgKi9cclxuXHJcbiAgbmF2aWdhdGV0byhwYWdlbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3BhZ2VuYW1lXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
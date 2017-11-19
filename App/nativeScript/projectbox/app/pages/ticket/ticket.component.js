"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var ticket_service_1 = require("../../shared/ticket/ticket.service");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var TicketComponent = (function () {
    //Ebene 1 des Arrays ist assoziativ mit den IDs von den Todos. die 2. Ebene enthält folgende Attribute:
    //[0]startTime: Stunden
    //[1]startTime: Minuten
    //[2]startTime: Sekunden
    //[3]endTime: Stunden
    //[4]endTime: Minuten
    //[5]endTime: Sekunden
    //[6]errechnete dauer des Eintrags
    //[7]TimerRunning :0 = false, 1 = true
    function TicketComponent(router, routerExtensions, activatedRoute, statusService, ticketService, page, _changeDetectionRef) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.statusService = statusService;
        this.ticketService = ticketService;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
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
        this.ticketService.tickets().subscribe(function (data) { return _this.displayTickets(data); }, function (error) { return _this.displayTickets(false); });
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
            providers: [ticket_service_1.TicketService, status_service_1.StatusService],
            templateUrl: "pages/ticket/ticket.html",
            styleUrls: ["pages/ticket/ticket-common.css", "pages/ticket/ticket.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            status_service_1.StatusService,
            ticket_service_1.TicketService,
            page_1.Page,
            core_1.ChangeDetectorRef])
    ], TicketComponent);
    return TicketComponent;
}());
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpY2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFHL0YsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBRW5FLHFFQUFtRTtBQUNuRSxrRUFBZ0c7QUFXaEc7SUFLb0IsdUdBQXVHO0lBQ3ZHLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFFeEQseUJBRVUsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixhQUE0QixFQUM1QixhQUE0QixFQUM1QixJQUFVLEVBQ1YsbUJBQXNDO1FBTnRDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUdoRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVFOzs7Ozs7O1VBT0U7UUFUSixpQkFlQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNwQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ25DLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUV0QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU5QixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXdDQyx5Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBZGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs0REFBQztJQWhHekUsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw4QkFBYSxDQUFDO1lBQ3pDLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FtQmtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDbEIsdUJBQWM7WUFDZiw4QkFBYTtZQUNiLDhCQUFhO1lBQ3RCLFdBQUk7WUFDVyx3QkFBaUI7T0F2QnJDLGVBQWUsQ0FnSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhIRCxJQWdIQztBQWhIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpY2tldCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGlja2V0L3RpY2tldFwiO1xyXG5pbXBvcnQgeyBUaWNrZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90aWNrZXQvdGlja2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVGlja2V0U2VydmljZSwgU3RhdHVzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGlja2V0L3RpY2tldC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90aWNrZXQvdGlja2V0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy90aWNrZXQvdGlja2V0LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpY2tldENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcblxyXG4gIHRpY2tldHMgOlRpY2tldFtdO1xyXG4gIHRpbWVzdGFydCA6c3RyaW5nO1xyXG4gIHRlbXAgOm51bWJlcltdW107IC8vZGllbnQgenVyIHRlbXBvcsOkcmVuIHNwZWljaGVydW5nZW4gZGVyIFplaXRlcmZhc3N1bmcuIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vRWJlbmUgMSBkZXMgQXJyYXlzIGlzdCBhc3NvemlhdGl2IG1pdCBkZW4gSURzIHZvbiBkZW4gVG9kb3MuIGRpZSAyLiBFYmVuZSBlbnRow6RsdCBmb2xnZW5kZSBBdHRyaWJ1dGU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMF1zdGFydFRpbWU6IFN0dW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1sxXXN0YXJ0VGltZTogTWludXRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzJdc3RhcnRUaW1lOiBTZWt1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzNdZW5kVGltZTogU3R1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzRdZW5kVGltZTogTWludXRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzVdZW5kVGltZTogU2VrdW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s2XWVycmVjaG5ldGUgZGF1ZXIgZGVzIEVpbnRyYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bN11UaW1lclJ1bm5pbmcgOjAgPSBmYWxzZSwgMSA9IHRydWVcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRpY2tldFNlcnZpY2UgOlRpY2tldFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKVxyXG4gIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLnRlbXAgPSBuZXcgQXJyYXkodGhpcy50aWNrZXRzLmxlbmd0aCk7XHJcbiAgICB0aGlzLnRpY2tldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdID0gW107XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXVs2XSA9IGVsZW1lbnQudGltZVRha2VuO1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF1bN10gPSAwO1xyXG4gICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICAgIHRoaXMudGlja2V0U2VydmljZS50aWNrZXRzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5VGlja2V0cyhkYXRhIDphbnkpe1xyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy50aWNrZXRTZXJ2aWNlLnNhdmVUaWNrZXRzKGRhdGEpO1xyXG4gICAgICB0aGlzLnRpY2tldHMgPSBkYXRhLnRpY2tldHM7XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBkYXRhID0gdGhpcy50aWNrZXRTZXJ2aWNlLmdldFNhdmVkVGlja2V0cygpXHJcbiAgICAgIHRoaXMudGlja2V0cyA9IGRhdGEudGlja2V0cztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRpY2tldHMpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICBzYXZlVGltZShpZCA6YW55KXtcclxuICAgIGNvbnNvbGUuZGlyKHRoaXMudGVtcCk7XHJcbiAgICB0aGlzLnRpY2tldHMuZm9yRWFjaCh0aWNrZXQgPT4ge1xyXG4gICAgICBpZihpZCA9PSB0aWNrZXQuaWQpe1xyXG4gICAgICAgIGxldCBzZWMgOm51bWJlciA9IFxyXG4gICAgICAgICgodGhpcy50ZW1wW2lkXVszXSAqIDM2MDApICsgKHRoaXMudGVtcFtpZF1bNF0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVs1XSkgXHJcbiAgICAgICAgLSAoKHRoaXMudGVtcFtpZF1bMF0gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzFdICogNjApICsgK3RoaXMudGVtcFtpZF1bMl0pO1xyXG4gICAgICAgIHNlYyAtPSBzZWMlNjA7XHJcbiAgICAgICAgdGlja2V0LnRpbWVUYWtlbiArPSAoc2VjLzYwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcGxheV9zdG9wKGlkIDphbnkpe1xyXG4gICAgaWYodGhpcy50ZW1wW2lkXVs3XSA9PSAwKXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDE7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVswXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsxXSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzJdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDA7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVszXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs0XSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzVdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVRpbWUoaWQpO1xyXG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgKi9cclxuXHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
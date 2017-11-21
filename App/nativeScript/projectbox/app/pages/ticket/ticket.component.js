"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var ticket_service_1 = require("../../shared/ticket/ticket.service");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
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
    function TicketComponent(router, routerExtensions, activatedRoute, statusService, ticketService, page, _changeDetectionRef, fonticon) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.statusService = statusService;
        this.ticketService = ticketService;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        console.log(fonticon);
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
            core_1.ChangeDetectorRef,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], TicketComponent);
    return TicketComponent;
}());
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpY2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFHL0YsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBRW5FLHFFQUFtRTtBQUNuRSxrRUFBZ0c7QUFFaEcsdUVBQStEO0FBUy9EO0lBS29CLHVHQUF1RztJQUN2Ryx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBRXhELHlCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsSUFBVSxFQUNWLG1CQUFzQyxFQUN0QyxRQUE0QjtRQVA1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFHbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVFOzs7Ozs7O1VBT0U7UUFUSixpQkFlQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNwQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ25DLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUV0QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU5QixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXdDQyx5Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBZGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs0REFBQztJQWxHekUsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw4QkFBYSxDQUFDO1lBQ3pDLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FtQmtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDbEIsdUJBQWM7WUFDZiw4QkFBYTtZQUNiLDhCQUFhO1lBQ3RCLFdBQUk7WUFDVyx3QkFBaUI7WUFDNUIsOENBQWtCO09BeEIzQixlQUFlLENBa0gzQjtJQUFELHNCQUFDO0NBQUEsQUFsSEQsSUFrSEM7QUFsSFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaWNrZXQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RpY2tldC90aWNrZXRcIjtcclxuaW1wb3J0IHsgVGlja2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGlja2V0L3RpY2tldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1RpY2tldFNlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RpY2tldC90aWNrZXQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdGlja2V0L3RpY2tldC1jb21tb24uY3NzXCIsIFwicGFnZXMvdGlja2V0L3RpY2tldC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWNrZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG5cclxuICB0aWNrZXRzIDpUaWNrZXRbXTtcclxuICB0aW1lc3RhcnQgOnN0cmluZztcclxuICB0ZW1wIDpudW1iZXJbXVtdOyAvL2RpZW50IHp1ciB0ZW1wb3LDpHJlbiBzcGVpY2hlcnVuZ2VuIGRlciBaZWl0ZXJmYXNzdW5nLiBcclxuICAgICAgICAgICAgICAgICAgICAvL0ViZW5lIDEgZGVzIEFycmF5cyBpc3QgYXNzb3ppYXRpdiBtaXQgZGVuIElEcyB2b24gZGVuIFRvZG9zLiBkaWUgMi4gRWJlbmUgZW50aMOkbHQgZm9sZ2VuZGUgQXR0cmlidXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzBdc3RhcnRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMV1zdGFydFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1syXXN0YXJ0VGltZTogU2VrdW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1szXWVuZFRpbWU6IFN0dW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s0XWVuZFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s1XWVuZFRpbWU6IFNla3VuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNl1lcnJlY2huZXRlIGRhdWVyIGRlcyBFaW50cmFnc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vWzddVGltZXJSdW5uaW5nIDowID0gZmFsc2UsIDEgPSB0cnVlXHJcblxyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aWNrZXRTZXJ2aWNlIDpUaWNrZXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxyXG4gIClcclxuICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvbnRpY29uKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLnRlbXAgPSBuZXcgQXJyYXkodGhpcy50aWNrZXRzLmxlbmd0aCk7XHJcbiAgICB0aGlzLnRpY2tldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdID0gW107XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXVs2XSA9IGVsZW1lbnQudGltZVRha2VuO1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF1bN10gPSAwO1xyXG4gICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICAgIHRoaXMudGlja2V0U2VydmljZS50aWNrZXRzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5VGlja2V0cyhkYXRhIDphbnkpe1xyXG5cclxuICAgIGlmKGRhdGEpe1xyXG5cclxuICAgICAgdGhpcy50aWNrZXRTZXJ2aWNlLnNhdmVUaWNrZXRzKGRhdGEpO1xyXG4gICAgICB0aGlzLnRpY2tldHMgPSBkYXRhLnRpY2tldHM7XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBkYXRhID0gdGhpcy50aWNrZXRTZXJ2aWNlLmdldFNhdmVkVGlja2V0cygpXHJcbiAgICAgIHRoaXMudGlja2V0cyA9IGRhdGEudGlja2V0cztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRpY2tldHMpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICBzYXZlVGltZShpZCA6YW55KXtcclxuICAgIGNvbnNvbGUuZGlyKHRoaXMudGVtcCk7XHJcbiAgICB0aGlzLnRpY2tldHMuZm9yRWFjaCh0aWNrZXQgPT4ge1xyXG4gICAgICBpZihpZCA9PSB0aWNrZXQuaWQpe1xyXG4gICAgICAgIGxldCBzZWMgOm51bWJlciA9IFxyXG4gICAgICAgICgodGhpcy50ZW1wW2lkXVszXSAqIDM2MDApICsgKHRoaXMudGVtcFtpZF1bNF0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVs1XSkgXHJcbiAgICAgICAgLSAoKHRoaXMudGVtcFtpZF1bMF0gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzFdICogNjApICsgK3RoaXMudGVtcFtpZF1bMl0pO1xyXG4gICAgICAgIHNlYyAtPSBzZWMlNjA7XHJcbiAgICAgICAgdGlja2V0LnRpbWVUYWtlbiArPSAoc2VjLzYwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcGxheV9zdG9wKGlkIDphbnkpe1xyXG4gICAgaWYodGhpcy50ZW1wW2lkXVs3XSA9PSAwKXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDE7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVswXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsxXSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzJdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDA7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVszXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs0XSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzVdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVRpbWUoaWQpO1xyXG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgKi9cclxuXHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
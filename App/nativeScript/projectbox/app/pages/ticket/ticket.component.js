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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpY2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFHL0YsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBRW5FLHFFQUFtRTtBQUNuRSxrRUFBZ0c7QUFFaEcsdUVBQStEO0FBUy9EO0lBS29CLHVHQUF1RztJQUN2Ryx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBRXhELHlCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsSUFBVSxFQUNWLG1CQUFzQyxFQUN0QyxRQUE0QjtRQVA1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFFdEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFFRTs7Ozs7OztVQU9FO1FBVEosaUJBZUM7UUFKQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDcEMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUF6QixDQUF5QixFQUNuQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLElBQVM7UUFFdEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUVQLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU5QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFSixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFOUIsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUF3Q0MseUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSxvQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBDQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWRrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7NERBQUM7SUFoR3pFLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsOEJBQWEsQ0FBQztZQUN6QyxXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHlCQUF5QixDQUFDO1NBQ3pFLENBQUM7eUNBbUJrQixlQUFNO1lBQ0kseUJBQWdCO1lBQ2xCLHVCQUFjO1lBQ2YsOEJBQWE7WUFDYiw4QkFBYTtZQUN0QixXQUFJO1lBQ1csd0JBQWlCO1lBQzVCLDhDQUFrQjtPQXhCM0IsZUFBZSxDQWdIM0I7SUFBRCxzQkFBQztDQUFBLEFBaEhELElBZ0hDO0FBaEhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGlja2V0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90aWNrZXQvdGlja2V0XCI7XHJcbmltcG9ydCB7IFRpY2tldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RpY2tldC90aWNrZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtUaWNrZXRTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90aWNrZXQvdGlja2V0Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RpY2tldC90aWNrZXQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RpY2tldC90aWNrZXQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGlja2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgdGlja2V0cyA6VGlja2V0W107XHJcbiAgdGltZXN0YXJ0IDpzdHJpbmc7XHJcbiAgdGVtcCA6bnVtYmVyW11bXTsgLy9kaWVudCB6dXIgdGVtcG9yw6RyZW4gc3BlaWNoZXJ1bmdlbiBkZXIgWmVpdGVyZmFzc3VuZy4gXHJcbiAgICAgICAgICAgICAgICAgICAgLy9FYmVuZSAxIGRlcyBBcnJheXMgaXN0IGFzc296aWF0aXYgbWl0IGRlbiBJRHMgdm9uIGRlbiBUb2Rvcy4gZGllIDIuIEViZW5lIGVudGjDpGx0IGZvbGdlbmRlIEF0dHJpYnV0ZTpcclxuICAgICAgICAgICAgICAgICAgICAvL1swXXN0YXJ0VGltZTogU3R1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzFdc3RhcnRUaW1lOiBNaW51dGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMl1zdGFydFRpbWU6IFNla3VuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bM11lbmRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNF1lbmRUaW1lOiBNaW51dGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNV1lbmRUaW1lOiBTZWt1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzZdZXJyZWNobmV0ZSBkYXVlciBkZXMgRWludHJhZ3NcclxuICAgICAgICAgICAgICAgICAgICAvL1s3XVRpbWVyUnVubmluZyA6MCA9IGZhbHNlLCAxID0gdHJ1ZVxyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgdGlja2V0U2VydmljZSA6VGlja2V0U2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpXHJcbiAge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgLypcclxuICAgIHRoaXMudGVtcCA9IG5ldyBBcnJheSh0aGlzLnRpY2tldHMubGVuZ3RoKTtcclxuICAgIHRoaXMudGlja2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF0gPSBbXTtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzZdID0gZWxlbWVudC50aW1lVGFrZW47XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXVs3XSA9IDA7XHJcbiAgICB9KTtcclxuICAgICovXHJcblxyXG4gICAgdGhpcy50aWNrZXRTZXJ2aWNlLnRpY2tldHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB0aGlzLmRpc3BsYXlUaWNrZXRzKGRhdGEpLCBcclxuICAgICAgKGVycm9yKSA9PiB0aGlzLmRpc3BsYXlUaWNrZXRzKGZhbHNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlUaWNrZXRzKGRhdGEgOmFueSl7XHJcblxyXG4gICAgaWYoZGF0YSl7XHJcblxyXG4gICAgICB0aGlzLnRpY2tldFNlcnZpY2Uuc2F2ZVRpY2tldHMoZGF0YSk7XHJcbiAgICAgIHRoaXMudGlja2V0cyA9IGRhdGEudGlja2V0cztcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIGRhdGEgPSB0aGlzLnRpY2tldFNlcnZpY2UuZ2V0U2F2ZWRUaWNrZXRzKClcclxuICAgICAgdGhpcy50aWNrZXRzID0gZGF0YS50aWNrZXRzO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGNvbnNvbGUuZGlyKHRoaXMudGlja2V0cyk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gIHNhdmVUaW1lKGlkIDphbnkpe1xyXG4gICAgY29uc29sZS5kaXIodGhpcy50ZW1wKTtcclxuICAgIHRoaXMudGlja2V0cy5mb3JFYWNoKHRpY2tldCA9PiB7XHJcbiAgICAgIGlmKGlkID09IHRpY2tldC5pZCl7XHJcbiAgICAgICAgbGV0IHNlYyA6bnVtYmVyID0gXHJcbiAgICAgICAgKCh0aGlzLnRlbXBbaWRdWzNdICogMzYwMCkgKyAodGhpcy50ZW1wW2lkXVs0XSAqIDYwKSArICt0aGlzLnRlbXBbaWRdWzVdKSBcclxuICAgICAgICAtICgodGhpcy50ZW1wW2lkXVswXSAqIDM2MDApICsgKHRoaXMudGVtcFtpZF1bMV0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVsyXSk7XHJcbiAgICAgICAgc2VjIC09IHNlYyU2MDtcclxuICAgICAgICB0aWNrZXQudGltZVRha2VuICs9IChzZWMvNjApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwbGF5X3N0b3AoaWQgOmFueSl7XHJcbiAgICBpZih0aGlzLnRlbXBbaWRdWzddID09IDApe1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzddID0gMTtcclxuICAgICAgbGV0IGRhdGUgOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzBdID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzFdID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bMl0gPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzddID0gMDtcclxuICAgICAgbGV0IGRhdGUgOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzNdID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzRdID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bNV0gPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgICAgdGhpcy5zYXZlVGltZShpZCk7XHJcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMudGVtcCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAqL1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
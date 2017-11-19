"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var ticket_service_1 = require("../../shared/ticket/ticket.service");
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
    function TicketComponent(router, routerExtensions, activatedRoute, statusService, ticketService, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.statusService = statusService;
        this.ticketService = ticketService;
        this.page = page;
        page.actionBarHidden = true;
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
            page_1.Page])
    ], TicketComponent);
    return TicketComponent;
}());
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpY2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBRW5FLHFFQUFtRTtBQVNuRTtJQUtvQix1R0FBdUc7SUFDdkcsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUV4RCx5QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLElBQVU7UUFMVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUdsQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVFOzs7Ozs7O1VBT0U7UUFUSixpQkFlQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNwQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ25DLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUV0QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU5QixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQTNEVSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDhCQUFhLENBQUM7WUFDekMsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztTQUN6RSxDQUFDO3lDQW1Ca0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNmLDhCQUFhO1lBQ2IsOEJBQWE7WUFDdEIsV0FBSTtPQXRCVCxlQUFlLENBZ0czQjtJQUFELHNCQUFDO0NBQUEsQUFoR0QsSUFnR0M7QUFoR1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaWNrZXQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RpY2tldC90aWNrZXRcIjtcclxuaW1wb3J0IHsgVGlja2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdGlja2V0L3RpY2tldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtUaWNrZXRTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90aWNrZXQvdGlja2V0Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RpY2tldC90aWNrZXQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RpY2tldC90aWNrZXQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGlja2V0Q29tcG9uZW50IHtcclxuXHJcbiAgdGlja2V0cyA6VGlja2V0W107XHJcbiAgdGltZXN0YXJ0IDpzdHJpbmc7XHJcbiAgdGVtcCA6bnVtYmVyW11bXTsgLy9kaWVudCB6dXIgdGVtcG9yw6RyZW4gc3BlaWNoZXJ1bmdlbiBkZXIgWmVpdGVyZmFzc3VuZy4gXHJcbiAgICAgICAgICAgICAgICAgICAgLy9FYmVuZSAxIGRlcyBBcnJheXMgaXN0IGFzc296aWF0aXYgbWl0IGRlbiBJRHMgdm9uIGRlbiBUb2Rvcy4gZGllIDIuIEViZW5lIGVudGjDpGx0IGZvbGdlbmRlIEF0dHJpYnV0ZTpcclxuICAgICAgICAgICAgICAgICAgICAvL1swXXN0YXJ0VGltZTogU3R1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzFdc3RhcnRUaW1lOiBNaW51dGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMl1zdGFydFRpbWU6IFNla3VuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bM11lbmRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNF1lbmRUaW1lOiBNaW51dGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNV1lbmRUaW1lOiBTZWt1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzZdZXJyZWNobmV0ZSBkYXVlciBkZXMgRWludHJhZ3NcclxuICAgICAgICAgICAgICAgICAgICAvL1s3XVRpbWVyUnVubmluZyA6MCA9IGZhbHNlLCAxID0gdHJ1ZVxyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgdGlja2V0U2VydmljZSA6VGlja2V0U2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxyXG4gIClcclxuICB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvKlxyXG4gICAgdGhpcy50ZW1wID0gbmV3IEFycmF5KHRoaXMudGlja2V0cy5sZW5ndGgpO1xyXG4gICAgdGhpcy50aWNrZXRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXSA9IFtdO1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF1bNl0gPSBlbGVtZW50LnRpbWVUYWtlbjtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzddID0gMDtcclxuICAgIH0pO1xyXG4gICAgKi9cclxuXHJcbiAgICB0aGlzLnRpY2tldFNlcnZpY2UudGlja2V0cygpLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheVRpY2tldHMoZGF0YSksIFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheVRpY2tldHMoZmFsc2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRpY2tldHMoZGF0YSA6YW55KXtcclxuXHJcbiAgICBpZihkYXRhKXtcclxuXHJcbiAgICAgIHRoaXMudGlja2V0U2VydmljZS5zYXZlVGlja2V0cyhkYXRhKTtcclxuICAgICAgdGhpcy50aWNrZXRzID0gZGF0YS50aWNrZXRzO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgZGF0YSA9IHRoaXMudGlja2V0U2VydmljZS5nZXRTYXZlZFRpY2tldHMoKVxyXG4gICAgICB0aGlzLnRpY2tldHMgPSBkYXRhLnRpY2tldHM7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5kaXIodGhpcy50aWNrZXRzKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgc2F2ZVRpbWUoaWQgOmFueSl7XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgdGhpcy50aWNrZXRzLmZvckVhY2godGlja2V0ID0+IHtcclxuICAgICAgaWYoaWQgPT0gdGlja2V0LmlkKXtcclxuICAgICAgICBsZXQgc2VjIDpudW1iZXIgPSBcclxuICAgICAgICAoKHRoaXMudGVtcFtpZF1bM10gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzRdICogNjApICsgK3RoaXMudGVtcFtpZF1bNV0pIFxyXG4gICAgICAgIC0gKCh0aGlzLnRlbXBbaWRdWzBdICogMzYwMCkgKyAodGhpcy50ZW1wW2lkXVsxXSAqIDYwKSArICt0aGlzLnRlbXBbaWRdWzJdKTtcclxuICAgICAgICBzZWMgLT0gc2VjJTYwO1xyXG4gICAgICAgIHRpY2tldC50aW1lVGFrZW4gKz0gKHNlYy82MCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHBsYXlfc3RvcChpZCA6YW55KXtcclxuICAgIGlmKHRoaXMudGVtcFtpZF1bN10gPT0gMCl7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bN10gPSAxO1xyXG4gICAgICBsZXQgZGF0ZSA6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bMF0gPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bMV0gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsyXSA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bN10gPSAwO1xyXG4gICAgICBsZXQgZGF0ZSA6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bM10gPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bNF0gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs1XSA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICB0aGlzLnNhdmVUaW1lKGlkKTtcclxuICAgICAgY29uc29sZS5kaXIodGhpcy50ZW1wKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gICovXHJcblxyXG59XHJcbiJdfQ==
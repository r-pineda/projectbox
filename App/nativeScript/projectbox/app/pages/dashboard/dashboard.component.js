"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var status_service_1 = require("../../shared/status/status.service");
/*import { Router, ActivatedRoute } from "@angular/router";*/
var router_1 = require("nativescript-angular/router");
var meeting_service_1 = require("../../shared/meeting/meeting.service");
require("rxjs/add/operator/switchMap");
/*import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import * as FrameModule from "ui/frame";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';*/
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var user_1 = require("../../shared/user/user");
var todo_service_1 = require("../../shared/todo/todo.service");
var ticket_service_1 = require("../../shared/ticket/ticket.service");
var DashboardComponent = (function () {
    function DashboardComponent(
        /*private router: Router,*/
        routerExtensions, 
        /*private pageRoute: PageRoute,*/
        userService, meetingService, todoService, ticketService, statusService, _changeDetectionRef, fonticon) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.meetingService = meetingService;
        this.todoService = todoService;
        this.ticketService = ticketService;
        this.statusService = statusService;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.curUser = new user_1.User;
        this.meetings = new Array();
        /* this.curUser = this.userService.getCurrentUser();
         this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
     
         this.offlinemode = this.statusService.getOfflineMode();
         */
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProjects().then(function (data) { return _this.displayProjects(data); }, function (error) { return _this.displayProjects(false); });
        this.meetingService.getMeetings().then(function (data) { return _this.displayMeetings(data); }, function (error) { return _this.displayMeetings(false); });
        this.ticketService.getTickets().then(function (data) { return _this.displayTickets(data); }, function (error) { return _this.displayTickets(false); });
        this.todoService.getTodos().then(function (data) { return _this.displayTickets(data); }, function (error) { return _this.displayTickets(false); });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.displayTickets = function (data) {
        if (data) {
            this.ticketService.saveTickets(data);
            this.tickets = data.tickets;
        }
        else {
            data = this.ticketService.getSavedTickets();
            this.tickets = data.tickets;
        }
    };
    DashboardComponent.prototype.displayTodos = function (data) {
        if (data) {
            this.todoService.saveTodos(data);
            this.todos = data.todos;
        }
        else {
            data = this.todoService.getSavedTodos();
            this.todos = data.tickets;
        }
    };
    DashboardComponent.prototype.displayMeetings = function (data) {
        var _this = this;
        if (!data) {
            data = this.meetingService.getSavedMeetings();
        }
        else {
            this.meetingService.saveMeetings(data);
        }
        if (this.selectedProject) {
            data.meetings.forEach(function (meeting) {
                if (meeting.project == _this.selectedProject) {
                    _this.meetings.push(meeting);
                }
            });
        }
        else {
            this.meetings = data.meetings;
        }
        //this.meetings.sort((a, b) => {return a.date.getTime()-b.date.getTime()})
    };
    DashboardComponent.prototype.displayProjects = function (data) {
        if (data) {
            this.userService.saveProjects(data);
            this.projects = data.projects;
        }
        else {
            data = this.userService.getSavedProjects();
            this.projects = data.projects;
        }
    };
    DashboardComponent.prototype.aktualisieren = function () {
        this.ngOnInit();
    };
    DashboardComponent.prototype.showDetail = function (id) {
        this.routerExtensions.navigate(["/meeting_detail/" + id], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    DashboardComponent.prototype.setSelectedProject = function (id) {
        this.selectedProject = id;
        this.ngOnInit();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "app-dashboard",
            providers: [user_service_1.UserService, meeting_service_1.MeetingService, status_service_1.StatusService, todo_service_1.TodoService, ticket_service_1.TicketService],
            templateUrl: "pages/dashboard/dashboard.html",
            styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            user_service_1.UserService,
            meeting_service_1.MeetingService,
            todo_service_1.TodoService,
            ticket_service_1.TicketService,
            status_service_1.StatusService,
            core_1.ChangeDetectorRef,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsK0RBQTZEO0FBQzdELHFFQUFtRTtBQUNuRSw2REFBNkQ7QUFDN0Qsc0RBQStEO0FBRS9ELHdFQUFzRTtBQVd0RSx1Q0FBcUM7QUFDckM7OztpRUFHaUU7QUFDakUsdUVBQStEO0FBQy9ELCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QscUVBQW1FO0FBV25FO0lBYUU7UUFFRSwyQkFBMkI7UUFDbkIsZ0JBQWtDO1FBQzFDLGlDQUFpQztRQUN6QixXQUF3QixFQUN4QixjQUE4QixFQUM5QixXQUF3QixFQUN4QixhQUE0QixFQUM1QixhQUE0QixFQUM1QixtQkFBc0MsRUFDdEMsUUFBNEI7UUFSNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUVsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQXRCdEMsWUFBTyxHQUFTLElBQUksV0FBSSxDQUFDO1FBR3pCLGFBQVEsR0FBYyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBdUIxQzs7OztXQUlHO0lBQ0osQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDcEMsVUFBQyxLQUFLLElBQUssT0FB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QVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLCtCQUErQixDQUFDO1NBQ3JGLENBQUM7eUNBa0I0Qix5QkFBZ0I7WUFFckIsMEJBQVc7WUFDUixnQ0FBYztZQUNqQiwwQkFBVztZQUNULDhCQUFhO1lBQ2IsOEJBQWE7WUFDUCx3QkFBaUI7WUFDNUIsOENBQWtCO09BeEIzQixrQkFBa0IsQ0FpSzlCO0lBQUQseUJBQUM7Q0FBQSxBQWpLRCxJQWlLQztBQWpLWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuLyppbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyovXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lZXRpbmcvbWVldGluZ1wiO1xyXG5pbXBvcnQgeyBNZWV0aW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVldGluZy9tZWV0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgUGl2b3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvcHJvamVjdFwiXHJcbmltcG9ydCB7XHJcbiAgR2VzdHVyZUV2ZW50RGF0YSxcclxuICBHZXN0dXJlVHlwZXMsXHJcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcclxuICBQaW5jaEdlc3R1cmVFdmVudERhdGEsXHJcbiAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxyXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcclxuICBUb3VjaEdlc3R1cmVFdmVudERhdGFcclxufSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbi8qaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInOyovXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVG9kb1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RvZG8vdG9kby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpY2tldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RpY2tldC90aWNrZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90b2RvL3RvZG9cIjtcclxuaW1wb3J0IHsgVGlja2V0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90aWNrZXQvdGlja2V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtZGFzaGJvYXJkXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIE1lZXRpbmdTZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlLCBUb2RvU2VydmljZSwgVGlja2V0U2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcblxyXG4gIGN1clVzZXIgOlVzZXIgPSBuZXcgVXNlcjtcclxuICBtZWV0aW5nZGF0YSA6YW55O1xyXG4gIG1lZXRpbmdzVGV4dCA6c3RyaW5nO1xyXG4gIG1lZXRpbmdzIDpNZWV0aW5nW10gPSBuZXcgQXJyYXk8TWVldGluZz4oKTtcclxuICBwdWJsaWMgb2ZmbGluZW1vZGUgOmJvb2xlYW47XHJcbiAgcHJvamVjdHMgOlByb2plY3RbXTtcclxuICBzZWxlY3RlZFByb2plY3QgOnN0cmluZyAvL2lkIG9mIHRoZSBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgYXZhdGFyIDpzdHJpbmc7XHJcbiAgdG9kb3MgOlRvZG9bXTtcclxuICB0aWNrZXRzIDpUaWNrZXRbXTtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICAvKnByaXZhdGUgcm91dGVyOiBSb3V0ZXIsKi9cclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIC8qcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSwqL1xyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1lZXRpbmdTZXJ2aWNlIDpNZWV0aW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgdG9kb1NlcnZpY2UgOlRvZG9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aWNrZXRTZXJ2aWNlIDpUaWNrZXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxyXG4gIClcclxuICB7XHJcblxyXG4gICAvKiB0aGlzLmN1clVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB0aGlzLmF2YXRhciA9IFwiaHR0cHM6Ly9zZWN1cmUucHJvamVjdGJveC5ldS92Mi91c2VyL2F2YXRhci9cIiArIHRoaXMuY3VyVXNlci5hdmF0YXIgKyBcIj9hY2Nlc3NfdG9rZW49XCIgKyB0aGlzLmN1clVzZXIuYWNjZXNzX3Rva2VuO1xyXG5cclxuICAgIHRoaXMub2ZmbGluZW1vZGUgPSB0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0T2ZmbGluZU1vZGUoKTtcclxuICAgICovXHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0UHJvamVjdHMoKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5UHJvamVjdHMoZGF0YSksXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5UHJvamVjdHMoZmFsc2UpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubWVldGluZ1NlcnZpY2UuZ2V0TWVldGluZ3MoKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZGF0YSksXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5TWVldGluZ3MoZmFsc2UpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudGlja2V0U2VydmljZS5nZXRUaWNrZXRzKCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHRoaXMuZGlzcGxheVRpY2tldHMoZGF0YSksIFxyXG4gICAgICAoZXJyb3IpID0+IHRoaXMuZGlzcGxheVRpY2tldHMoZmFsc2UpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudG9kb1NlcnZpY2UuZ2V0VG9kb3MoKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhkYXRhKSwgXHJcbiAgICAgIChlcnJvcikgPT4gdGhpcy5kaXNwbGF5VGlja2V0cyhmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3BsYXlUaWNrZXRzKGRhdGEgOmFueSl7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgdGhpcy50aWNrZXRTZXJ2aWNlLnNhdmVUaWNrZXRzKGRhdGEpO1xyXG4gICAgICB0aGlzLnRpY2tldHMgPSBkYXRhLnRpY2tldHM7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZGF0YSA9IHRoaXMudGlja2V0U2VydmljZS5nZXRTYXZlZFRpY2tldHMoKTtcclxuICAgICAgdGhpcy50aWNrZXRzID0gZGF0YS50aWNrZXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRvZG9zKGRhdGEgOmFueSl7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgdGhpcy50b2RvU2VydmljZS5zYXZlVG9kb3MoZGF0YSk7XHJcbiAgICAgIHRoaXMudG9kb3MgPSBkYXRhLnRvZG9zO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGRhdGEgPSB0aGlzLnRvZG9TZXJ2aWNlLmdldFNhdmVkVG9kb3MoKTtcclxuICAgICAgdGhpcy50b2RvcyA9IGRhdGEudGlja2V0cztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlNZWV0aW5ncyhkYXRhIDphbnkpe1xyXG4gICAgaWYoIWRhdGEpe1xyXG4gICAgICBkYXRhID0gdGhpcy5tZWV0aW5nU2VydmljZS5nZXRTYXZlZE1lZXRpbmdzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tZWV0aW5nU2VydmljZS5zYXZlTWVldGluZ3MoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnNlbGVjdGVkUHJvamVjdCl7XHJcbiAgICAgIGRhdGEubWVldGluZ3MuZm9yRWFjaChtZWV0aW5nID0+IHtcclxuICAgICAgICBpZihtZWV0aW5nLnByb2plY3QgPT0gdGhpcy5zZWxlY3RlZFByb2plY3Qpe1xyXG4gICAgICAgICAgdGhpcy5tZWV0aW5ncy5wdXNoKG1lZXRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tZWV0aW5ncyA9IGRhdGEubWVldGluZ3M7XHJcbiAgICB9XHJcbiAgICAvL3RoaXMubWVldGluZ3Muc29ydCgoYSwgYikgPT4ge3JldHVybiBhLmRhdGUuZ2V0VGltZSgpLWIuZGF0ZS5nZXRUaW1lKCl9KVxyXG4gIH1cclxuICBkaXNwbGF5UHJvamVjdHMoZGF0YSA6YW55KXtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNhdmVQcm9qZWN0cyhkYXRhKTtcclxuICAgICAgdGhpcy5wcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZGF0YSA9IHRoaXMudXNlclNlcnZpY2UuZ2V0U2F2ZWRQcm9qZWN0cygpO1xyXG4gICAgICB0aGlzLnByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcclxuICAgIH1cclxuICB9XHJcbiAgYWt0dWFsaXNpZXJlbigpe1xyXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gIH1cclxuICBzaG93RGV0YWlsKGlkOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21lZXRpbmdfZGV0YWlsL1wiICsgaWRdLCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBzZXRTZWxlY3RlZFByb2plY3QoaWQgOnN0cmluZyl7XHJcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IGlkO1xyXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gIH1cclxuLypcclxuICBuYXZpZ2F0ZXRvKHBhZ2VuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtwYWdlbmFtZV0sIHtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7XHJcbiAgICAgIGFuaW1hdGVkOnRydWUsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgfVxyXG4gICAgICBcclxuICAgICAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovXHJcbn1cclxuIl19
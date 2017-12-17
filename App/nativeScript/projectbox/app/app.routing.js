"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var meeting_detail_component_1 = require("./pages/meeting_detail/meeting_detail.component");
var todo_component_1 = require("./pages/todo/todo.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var ticket_component_1 = require("./pages/ticket/ticket.component");
var nav_component_1 = require("./pages/nav/nav.component");
var meeting_component_1 = require("./pages/meeting/meeting.component");
exports.firstroute = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "nav",
        component: nav_component_1.NavComponent,
        children: [
            { path: "dashboard", component: dashboard_component_1.DashboardComponent },
            { path: "meeting_detail/:id", component: meeting_detail_component_1.Meeting_detailComponent },
            { path: "ticket", component: ticket_component_1.TicketComponent },
            { path: "todo", component: todo_component_1.TodoComponent },
            { path: "meeting", component: meeting_component_1.MeetingComponent }
        ]
    }
];
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "nav",
        component: nav_component_1.NavComponent,
        children: [
            { path: "dashboard", component: dashboard_component_1.DashboardComponent },
            { path: "meeting_detail/:id", component: meeting_detail_component_1.Meeting_detailComponent },
            { path: "ticket", component: ticket_component_1.TicketComponent },
            { path: "todo", component: todo_component_1.TodoComponent },
            { path: "meeting", component: meeting_component_1.MeetingComponent }
        ]
    },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "meeting_detail/:id", component: meeting_detail_component_1.Meeting_detailComponent },
    { path: "ticket", component: ticket_component_1.TicketComponent },
    { path: "todo", component: todo_component_1.TodoComponent },
    { path: "meeting", component: meeting_component_1.MeetingComponent }
];
exports.navigatableComponents = [
    nav_component_1.NavComponent,
    login_component_1.LoginComponent,
    meeting_detail_component_1.Meeting_detailComponent,
    todo_component_1.TodoComponent,
    dashboard_component_1.DashboardComponent,
    ticket_component_1.TicketComponent,
    meeting_component_1.MeetingComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCw0RkFBMEY7QUFDMUYsOERBQTREO0FBQzVELDZFQUEyRTtBQUMzRSxvRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELHVFQUFxRTtBQUV4RCxRQUFBLFVBQVUsR0FBRztJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsNEJBQVk7UUFDdkIsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUU7WUFDbEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQzlDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO1NBQ2hEO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ1gsU0FBUyxFQUFFLDRCQUFZO1FBQ3ZCLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFFO1lBQ2xFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztTQUNoRDtLQUNGO0lBQ0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUU7SUFDbEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0NBQ2hELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLDRCQUFZO0lBQ1osZ0NBQWM7SUFDZCxrREFBdUI7SUFDdkIsOEJBQWE7SUFDYix3Q0FBa0I7SUFDbEIsa0NBQWU7SUFDZixvQ0FBZ0I7Q0FDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lZXRpbmdfZGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWVldGluZ19kZXRhaWwvbWVldGluZ19kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy90b2RvL3RvZG8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpY2tldENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3RpY2tldC90aWNrZXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL25hdi9uYXYuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lZXRpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tZWV0aW5nL21lZXRpbmcuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3Ryb3V0ZSA9IFtcclxuICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJuYXZcIiwgXHJcbiAgICBjb21wb25lbnQ6IE5hdkNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogXCJkYXNoYm9hcmRcIiwgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiBcIm1lZXRpbmdfZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IE1lZXRpbmdfZGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogXCJ0aWNrZXRcIiwgY29tcG9uZW50OiBUaWNrZXRDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiBcInRvZG9cIiwgY29tcG9uZW50OiBUb2RvQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogXCJtZWV0aW5nXCIsIGNvbXBvbmVudDogTWVldGluZ0NvbXBvbmVudH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcIm5hdlwiLCBcclxuICAgIGNvbXBvbmVudDogTmF2Q29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6IFwibWVldGluZ19kZXRhaWwvOmlkXCIsIGNvbXBvbmVudDogTWVldGluZ19kZXRhaWxDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiBcInRpY2tldFwiLCBjb21wb25lbnQ6IFRpY2tldENvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6IFwidG9kb1wiLCBjb21wb25lbnQ6IFRvZG9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiBcIm1lZXRpbmdcIiwgY29tcG9uZW50OiBNZWV0aW5nQ29tcG9uZW50fVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJtZWV0aW5nX2RldGFpbC86aWRcIiwgY29tcG9uZW50OiBNZWV0aW5nX2RldGFpbENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJ0aWNrZXRcIiwgY29tcG9uZW50OiBUaWNrZXRDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwidG9kb1wiLCBjb21wb25lbnQ6IFRvZG9Db21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwibWVldGluZ1wiLCBjb21wb25lbnQ6IE1lZXRpbmdDb21wb25lbnR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gIE5hdkNvbXBvbmVudCxcclxuICBMb2dpbkNvbXBvbmVudCxcclxuICBNZWV0aW5nX2RldGFpbENvbXBvbmVudCxcclxuICBUb2RvQ29tcG9uZW50LFxyXG4gIERhc2hib2FyZENvbXBvbmVudCxcclxuICBUaWNrZXRDb21wb25lbnQsXHJcbiAgTWVldGluZ0NvbXBvbmVudFxyXG5dOyJdfQ==
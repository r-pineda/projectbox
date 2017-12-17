import { LoginComponent } from "./pages/login/login.component";
import { Meeting_detailComponent } from "./pages/meeting_detail/meeting_detail.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TicketComponent } from "./pages/ticket/ticket.component";
import { NavComponent } from "./pages/nav/nav.component";
import { MeetingComponent } from "./pages/meeting/meeting.component";

export const firstroute = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "nav", 
    component: NavComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "meeting_detail/:id", component: Meeting_detailComponent },
      { path: "ticket", component: TicketComponent },
      { path: "todo", component: TodoComponent },
      { path: "meeting", component: MeetingComponent}
    ]
  }
];

export const routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "nav", 
    component: NavComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "meeting_detail/:id", component: Meeting_detailComponent },
      { path: "ticket", component: TicketComponent },
      { path: "todo", component: TodoComponent },
      { path: "meeting", component: MeetingComponent}
    ]
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "meeting_detail/:id", component: Meeting_detailComponent },
  { path: "ticket", component: TicketComponent },
  { path: "todo", component: TodoComponent },
  { path: "meeting", component: MeetingComponent}
];

export const navigatableComponents = [
  NavComponent,
  LoginComponent,
  Meeting_detailComponent,
  TodoComponent,
  DashboardComponent,
  TicketComponent,
  MeetingComponent
];
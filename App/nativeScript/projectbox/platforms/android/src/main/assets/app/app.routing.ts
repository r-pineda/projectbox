import { LoginComponent } from "./pages/login/login.component";
import { Meeting_detailComponent } from "./pages/meeting_detail/meeting_detail.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TicketComponent } from "./pages/ticket/ticket.component"


export const routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "meeting_detail/:id", component: Meeting_detailComponent },
  { path: "ticket", component: TicketComponent },
  { path: "todo", component: TodoComponent }
];

export const navigatableComponents = [
  LoginComponent,
  Meeting_detailComponent,
  TodoComponent,
  DashboardComponent,
  TicketComponent
];
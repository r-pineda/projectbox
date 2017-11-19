import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { Meeting_detailComponent } from "./pages/meeting_detail/meeting_detail.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TicketComponent } from "./pages/ticket/ticket.component"


export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "meeting_detail/:id", component: Meeting_detailComponent },
  { path: "ticket", component: TicketComponent },
  { path: "todo", component: TodoComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  Meeting_detailComponent,
  TodoComponent,
  DashboardComponent,
  TicketComponent
];
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { Meeting_detailComponent } from "./pages/meeting_detail/meeting_detail.component";
import { TodoComponent } from "./pages/todo/todo.component";

export const routes = [
  { path: "", component: ListComponent },
  { path: "list", component: LoginComponent },
  { path: "meeting_detail/:id", component: Meeting_detailComponent },
  { path: "todo", component: TodoComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  Meeting_detailComponent,
  TodoComponent
];
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { Meeting_detailComponent } from "./pages/meeting_detail/meeting_detail.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "meeting_detail/:id", component: Meeting_detailComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  Meeting_detailComponent
];
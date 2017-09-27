import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { AnimationComponent } from "./pages/animation/animation.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "animation", component: AnimationComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  AnimationComponent
];
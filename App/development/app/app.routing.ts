import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";
import { Meeting_detailComponent } from "./pages/meeting_detail/meeting_detail.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TicketComponent } from "./pages/ticket/ticket.component";
import { NavComponent } from "./pages/nav/nav.component";
import { MeetingComponent } from "./pages/meeting/meeting.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "nav", component: NavComponent,
    children: [
      { path: "dashboard", component: DashboardComponent, outlet: 'dashboardoutlet' },
      { path: "meeting_detail/:id", component: Meeting_detailComponent, outlet: 'meetingdetailoutlet' },
      { path: "ticket", component: TicketComponent, outlet: 'ticketoutlet' },
      { path: "todo", component: TodoComponent , outlet: 'todooutlet'},
      { path: "meeting", component: MeetingComponent, outlet: 'meetingoutlet'}
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})

export class AppRoutingModule { }
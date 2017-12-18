import { Component, NgModule } from "@angular/core";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { routes } from "../../app.routing";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { TicketComponent } from "../ticket/ticket.component";
import { TodoComponent} from "../todo/todo.component";
import { NavComponent } from "../nav/nav.component";


@NgModule({
    bootstrap: [NavComponent],
    entryComponents: [DashboardComponent, TicketComponent, TodoComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ]
})

export class NavModule {}

platformNativeScriptDynamic().bootstrapModule(NavModule);
import { NgModule } from "@angular/core";
import { NgZone } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppShortcuts } from "nativescript-app-shortcuts";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private routerExtensions: RouterExtensions,
              private zone: NgZone) {

    new AppShortcuts().setQuickActionCallback(shortcutItem => {
  console.log(`The app was launched by shortcut type '${shortcutItem.type}'`);

      // this is where you handle any specific case for the shortcut, based on its type
      if (shortcutItem.type === "dashboard") {
        //this.deeplink("/page1");
        console.log("dashboard");
      } else if (shortcutItem.type === "task") {
        //this.deeplink("/page2");
        console.log("task");
      } else if (shortcutItem.type === "meeting") {
        //this.deeplink("/page2");
        console.log("meeting");
      } else if (shortcutItem.type === "ticket") {
        //this.deeplink("/page2");
        console.log("ticket");
      } else if (shortcutItem.type === "setting") {
        //this.deeplink("/page2");
        console.log("seeting");
      }
    });
  }

  private deeplink(to: string): void {
    this.zone.run(() => {
      this.routerExtensions.navigate([to], {
        animated: false
      });
    });
  }
}

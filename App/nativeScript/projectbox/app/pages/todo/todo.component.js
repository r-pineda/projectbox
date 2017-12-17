"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var todo_1 = require("../../shared/todo/todo");
var todo_service_1 = require("../../shared/todo/todo.service");
require("rxjs/add/operator/switchMap");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var user_service_1 = require("../../shared/user/user.service");
var TodoComponent = (function () {
    //Ebene 1 des Arrays ist assoziativ mit den IDs von den Todos. die 2. Ebene enthält folgende Attribute:
    //[0]startTime: Stunden
    //[1]startTime: Minuten
    //[2]startTime: Sekunden
    //[3]endTime: Stunden
    //[4]endTime: Minuten
    //[5]endTime: Sekunden
    //[6]errechnete dauer des Eintrags
    //[7]TimerRunning :0 = false, 1 = true
    function TodoComponent(router, routerExtensions, activatedRoute, statusService, todoService, page, _changeDetectionRef, fonticon, userService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.statusService = statusService;
        this.todoService = todoService;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.userService = userService;
        this.newTodo = new todo_1.Todo();
        this.curUser = new user_1.User;
        this.curUser = this.userService.getCurrentUser();
        this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos()
            .then(function (data) { return _this.displayTodos(data); });
        /*
        this.temp = new Array(this.todos.length);
        this.todos.forEach(element => {
          this.temp[element.id] = [];
          //this.temp[element.id][6] = element.timeTaken;
          this.temp[element.id][7] = 0;
        });
        */
    };
    TodoComponent.prototype.displayTodos = function (data) {
        if (data) {
            this.todoService.saveTodos(data);
            this.todos = data.todos;
        }
        else {
            data = this.todoService.getSavedTodos();
            this.todos = data.tickets;
        }
        console.dir(this.todos);
    };
    /*
      saveTime(id :any){
        console.dir(this.temp);
        this.todos.forEach(todo => {
          if(id == todo.id){
            let sec :number =
            ((this.temp[id][3] * 3600) + (this.temp[id][4] * 60) + +this.temp[id][5])
            - ((this.temp[id][0] * 3600) + (this.temp[id][1] * 60) + +this.temp[id][2]);
            sec -= sec%60;
            //todo.timeTaken += (sec/60);
          }
        });
      }
    
    
      play_stop(id :any){
        if(this.temp[id][7] == 0){
          this.temp[id][7] = 1;
          let date :Date = new Date();
          this.temp[id][0] = date.getHours();
          this.temp[id][1] = date.getMinutes();
          this.temp[id][2] = date.getSeconds();
        }else{
          this.temp[id][7] = 0;
          let date :Date = new Date();
          this.temp[id][3] = date.getHours();
          this.temp[id][4] = date.getMinutes();
          this.temp[id][5] = date.getSeconds();
          this.saveTime(id);
          console.dir(this.temp);
        }
    
      }
    */
    TodoComponent.prototype.navigateto = function (pagename) {
        this.routerExtensions.navigate([pagename], {
            transition: {
                name: "slide",
                curve: "easeOut"
            }
        });
    };
    TodoComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    TodoComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    TodoComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    TodoComponent.prototype.saveNewTodo = function () {
        this.todoService.createTodo(this.newTodo);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], TodoComponent.prototype, "drawerComponent", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: "my-todo",
            providers: [todo_service_1.TodoService, status_service_1.StatusService, user_service_1.UserService],
            templateUrl: "pages/todo/todo.html",
            styleUrls: ["pages/todo/todo-common.css", "pages/todo/todo.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            status_service_1.StatusService,
            todo_service_1.TodoService,
            page_1.Page,
            core_1.ChangeDetectorRef,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            user_service_1.UserService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RiwrQ0FBOEM7QUFDOUMsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBQ25FLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsdUNBQXFDO0FBR3JDLGtFQUFnRztBQUVoRyx1RUFBK0Q7QUFDL0QsK0RBQTZEO0FBVTdEO0lBT29CLHVHQUF1RztJQUN2Ryx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBRXhELHVCQUVVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsSUFBVSxFQUNWLG1CQUFzQyxFQUN0QyxRQUE0QixFQUM1QixXQUF3QjtRQVJ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUExQjNCLFlBQU8sR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ2xDLFlBQU8sR0FBUyxJQUFJLFdBQUksQ0FBQztRQTRCdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsOENBQThDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFFcEksQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtRQUV4Qzs7Ozs7OztVQU9FO0lBQ0osQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxJQUFTO1FBRWhCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFMUIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWlDRTtJQUNBLGtDQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtHLHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFsQjhCO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQTFHckUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLDBCQUFXLENBQUM7WUFDcEQsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO3lDQXFCa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNmLDhCQUFhO1lBQ2YsMEJBQVc7WUFDbEIsV0FBSTtZQUNXLHdCQUFpQjtZQUM1Qiw4Q0FBa0I7WUFDZiwwQkFBVztPQTNCdkIsYUFBYSxDQThIekI7SUFBRCxvQkFBQztDQUFBLEFBOUhELElBOEhDO0FBOUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9kby90b2RvXCI7XHJcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90b2RvL3RvZG8uc2VydmljZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktdG9kb1wiLFxyXG4gIHByb3ZpZGVyczogW1RvZG9TZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlLCBVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdG9kby90b2RvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RvZG8vdG9kby1jb21tb24uY3NzXCIsIFwicGFnZXMvdG9kby90b2RvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQge1xyXG4gIHB1YmxpYyBuZXdUb2RvIDpUb2RvID0gbmV3IFRvZG8oKTtcclxuICBjdXJVc2VyIDpVc2VyID0gbmV3IFVzZXI7XHJcbiAgYXZhdGFyIDpzdHJpbmc7XHJcbiAgdG9kb3MgOlRvZG9bXTtcclxuICB0aW1lc3RhcnQgOnN0cmluZztcclxuICB0ZW1wIDpudW1iZXJbXVtdOyAvL2RpZW50IHp1ciB0ZW1wb3LDpHJlbiBzcGVpY2hlcnVuZ2VuIGRlciBaZWl0ZXJmYXNzdW5nLiBcclxuICAgICAgICAgICAgICAgICAgICAvL0ViZW5lIDEgZGVzIEFycmF5cyBpc3QgYXNzb3ppYXRpdiBtaXQgZGVuIElEcyB2b24gZGVuIFRvZG9zLiBkaWUgMi4gRWJlbmUgZW50aMOkbHQgZm9sZ2VuZGUgQXR0cmlidXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzBdc3RhcnRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMV1zdGFydFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1syXXN0YXJ0VGltZTogU2VrdW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1szXWVuZFRpbWU6IFN0dW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s0XWVuZFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s1XWVuZFRpbWU6IFNla3VuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNl1lcnJlY2huZXRlIGRhdWVyIGRlcyBFaW50cmFnc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vWzddVGltZXJSdW5uaW5nIDowID0gZmFsc2UsIDEgPSB0cnVlXHJcblxyXG4gIGNvbnN0cnVjdG9yXHJcbiAgKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBzdGF0dXNTZXJ2aWNlIDpTdGF0dXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0b2RvU2VydmljZSA6VG9kb1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcclxuICApXHJcbiAge1xyXG4gICAgdGhpcy5jdXJVc2VyID0gdGhpcy51c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgdGhpcy5hdmF0YXIgPSBcImh0dHBzOi8vc2VjdXJlLnByb2plY3Rib3guZXUvdjIvdXNlci9hdmF0YXIvXCIgKyB0aGlzLmN1clVzZXIuYXZhdGFyICsgXCI/YWNjZXNzX3Rva2VuPVwiICsgdGhpcy5jdXJVc2VyLmFjY2Vzc190b2tlbjtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9kb1NlcnZpY2UuZ2V0VG9kb3MoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHRoaXMuZGlzcGxheVRvZG9zKGRhdGEpKVxyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLnRlbXAgPSBuZXcgQXJyYXkodGhpcy50b2Rvcy5sZW5ndGgpO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF0gPSBbXTtcclxuICAgICAgLy90aGlzLnRlbXBbZWxlbWVudC5pZF1bNl0gPSBlbGVtZW50LnRpbWVUYWtlbjtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzddID0gMDtcclxuICAgIH0pO1xyXG4gICAgKi9cclxuICB9XHJcbiAgZGlzcGxheVRvZG9zKGRhdGEgOmFueSl7XHJcbiAgICBcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgIFxyXG4gICAgICAgICAgdGhpcy50b2RvU2VydmljZS5zYXZlVG9kb3MoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnRvZG9zID0gZGF0YS50b2RvcztcclxuICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgICAgICBkYXRhID0gdGhpcy50b2RvU2VydmljZS5nZXRTYXZlZFRvZG9zKClcclxuICAgICAgICAgIHRoaXMudG9kb3MgPSBkYXRhLnRpY2tldHM7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy50b2Rvcyk7XHJcbiAgICAgIH1cclxuLypcclxuICBzYXZlVGltZShpZCA6YW55KXtcclxuICAgIGNvbnNvbGUuZGlyKHRoaXMudGVtcCk7XHJcbiAgICB0aGlzLnRvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgIGlmKGlkID09IHRvZG8uaWQpe1xyXG4gICAgICAgIGxldCBzZWMgOm51bWJlciA9IFxyXG4gICAgICAgICgodGhpcy50ZW1wW2lkXVszXSAqIDM2MDApICsgKHRoaXMudGVtcFtpZF1bNF0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVs1XSkgXHJcbiAgICAgICAgLSAoKHRoaXMudGVtcFtpZF1bMF0gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzFdICogNjApICsgK3RoaXMudGVtcFtpZF1bMl0pO1xyXG4gICAgICAgIHNlYyAtPSBzZWMlNjA7XHJcbiAgICAgICAgLy90b2RvLnRpbWVUYWtlbiArPSAoc2VjLzYwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcGxheV9zdG9wKGlkIDphbnkpe1xyXG4gICAgaWYodGhpcy50ZW1wW2lkXVs3XSA9PSAwKXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDE7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVswXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsxXSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzJdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs3XSA9IDA7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVszXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs0XSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzVdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVRpbWUoaWQpO1xyXG4gICAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiovXHJcbiAgbmF2aWdhdGV0byhwYWdlbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3BhZ2VuYW1lXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlTmV3VG9kbygpe1xyXG4gICAgICB0aGlzLnRvZG9TZXJ2aWNlLmNyZWF0ZVRvZG8odGhpcy5uZXdUb2RvKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
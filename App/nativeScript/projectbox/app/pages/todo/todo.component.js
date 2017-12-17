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
        this.create = false;
        /*
        this.temp = new Array(this.todos.length);
        this.todos.forEach(element => {
          this.temp[element.id] = [];
          //this.temp[element.id][6] = element.timeTaken;
          this.temp[element.id][7] = 0;
        });
        */
    };
    TodoComponent.prototype.cr_task = function () {
        this.create = true;
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
    TodoComponent.prototype.saveNewTodo = function () {
        this.todoService.createTodo(this.newTodo);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RiwrQ0FBOEM7QUFDOUMsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBQ25FLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsdUNBQXFDO0FBS3JDLHVFQUErRDtBQUMvRCwrREFBNkQ7QUFVN0Q7SUFRb0IsdUdBQXVHO0lBQ3ZHLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFFeEQsdUJBRVUsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixhQUE0QixFQUM1QixXQUF3QixFQUN4QixJQUFVLEVBQ1YsbUJBQXNDLEVBQ3RDLFFBQTRCLEVBQzVCLFdBQXdCO1FBUnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTNCM0IsWUFBTyxHQUFTLElBQUksV0FBSSxFQUFFLENBQUM7UUFDbEMsWUFBTyxHQUFTLElBQUksV0FBSSxDQUFDO1FBNkJ2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUVwSSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDMUIsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCOzs7Ozs7O1VBT0U7SUFDSixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsSUFBUztRQUVoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRVAsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTFCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVKLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU1QixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFpQ0U7SUFDQSxrQ0FBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRyxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFuSFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLDBCQUFXLENBQUM7WUFDcEQsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO3lDQXNCa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNmLDhCQUFhO1lBQ2YsMEJBQVc7WUFDbEIsV0FBSTtZQUNXLHdCQUFpQjtZQUM1Qiw4Q0FBa0I7WUFDZiwwQkFBVztPQTVCdkIsYUFBYSxDQW9IekI7SUFBRCxvQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9kby90b2RvXCI7XHJcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90b2RvL3RvZG8uc2VydmljZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktdG9kb1wiLFxyXG4gIHByb3ZpZGVyczogW1RvZG9TZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlLCBVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdG9kby90b2RvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RvZG8vdG9kby1jb21tb24uY3NzXCIsIFwicGFnZXMvdG9kby90b2RvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQge1xyXG4gIHB1YmxpYyBuZXdUb2RvIDpUb2RvID0gbmV3IFRvZG8oKTtcclxuICBjdXJVc2VyIDpVc2VyID0gbmV3IFVzZXI7XHJcbiAgYXZhdGFyIDpzdHJpbmc7XHJcbiAgdG9kb3MgOlRvZG9bXTtcclxuICB0aW1lc3RhcnQgOnN0cmluZztcclxuICBjcmVhdGUgOmJvb2xlYW47XHJcbiAgdGVtcCA6bnVtYmVyW11bXTsgLy9kaWVudCB6dXIgdGVtcG9yw6RyZW4gc3BlaWNoZXJ1bmdlbiBkZXIgWmVpdGVyZmFzc3VuZy4gXHJcbiAgICAgICAgICAgICAgICAgICAgLy9FYmVuZSAxIGRlcyBBcnJheXMgaXN0IGFzc296aWF0aXYgbWl0IGRlbiBJRHMgdm9uIGRlbiBUb2Rvcy4gZGllIDIuIEViZW5lIGVudGjDpGx0IGZvbGdlbmRlIEF0dHJpYnV0ZTpcclxuICAgICAgICAgICAgICAgICAgICAvL1swXXN0YXJ0VGltZTogU3R1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzFdc3RhcnRUaW1lOiBNaW51dGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMl1zdGFydFRpbWU6IFNla3VuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bM11lbmRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNF1lbmRUaW1lOiBNaW51dGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNV1lbmRUaW1lOiBTZWt1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzZdZXJyZWNobmV0ZSBkYXVlciBkZXMgRWludHJhZ3NcclxuICAgICAgICAgICAgICAgICAgICAvL1s3XVRpbWVyUnVubmluZyA6MCA9IGZhbHNlLCAxID0gdHJ1ZVxyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgdG9kb1NlcnZpY2UgOlRvZG9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXHJcbiAgKVxyXG4gIHtcclxuICAgIHRoaXMuY3VyVXNlciA9IHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIHRoaXMuYXZhdGFyID0gXCJodHRwczovL3NlY3VyZS5wcm9qZWN0Ym94LmV1L3YyL3VzZXIvYXZhdGFyL1wiICsgdGhpcy5jdXJVc2VyLmF2YXRhciArIFwiP2FjY2Vzc190b2tlbj1cIiArIHRoaXMuY3VyVXNlci5hY2Nlc3NfdG9rZW47XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZG9TZXJ2aWNlLmdldFRvZG9zKClcclxuICAgIC50aGVuKChkYXRhKSA9PiB0aGlzLmRpc3BsYXlUb2RvcyhkYXRhKSk7XHJcbiAgICB0aGlzLmNyZWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLnRlbXAgPSBuZXcgQXJyYXkodGhpcy50b2Rvcy5sZW5ndGgpO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF0gPSBbXTtcclxuICAgICAgLy90aGlzLnRlbXBbZWxlbWVudC5pZF1bNl0gPSBlbGVtZW50LnRpbWVUYWtlbjtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzddID0gMDtcclxuICAgIH0pO1xyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIGNyX3Rhc2soKSB7XHJcbiAgICB0aGlzLmNyZWF0ZSA9IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIGRpc3BsYXlUb2RvcyhkYXRhIDphbnkpe1xyXG4gICAgXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICBcclxuICAgICAgICAgIHRoaXMudG9kb1NlcnZpY2Uuc2F2ZVRvZG9zKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy50b2RvcyA9IGRhdGEudG9kb3M7XHJcbiAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgIFxyXG4gICAgICAgICAgZGF0YSA9IHRoaXMudG9kb1NlcnZpY2UuZ2V0U2F2ZWRUb2RvcygpXHJcbiAgICAgICAgICB0aGlzLnRvZG9zID0gZGF0YS50aWNrZXRzO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMudG9kb3MpO1xyXG4gICAgICB9XHJcbi8qXHJcbiAgc2F2ZVRpbWUoaWQgOmFueSl7XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICBpZihpZCA9PSB0b2RvLmlkKXtcclxuICAgICAgICBsZXQgc2VjIDpudW1iZXIgPSBcclxuICAgICAgICAoKHRoaXMudGVtcFtpZF1bM10gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzRdICogNjApICsgK3RoaXMudGVtcFtpZF1bNV0pIFxyXG4gICAgICAgIC0gKCh0aGlzLnRlbXBbaWRdWzBdICogMzYwMCkgKyAodGhpcy50ZW1wW2lkXVsxXSAqIDYwKSArICt0aGlzLnRlbXBbaWRdWzJdKTtcclxuICAgICAgICBzZWMgLT0gc2VjJTYwO1xyXG4gICAgICAgIC8vdG9kby50aW1lVGFrZW4gKz0gKHNlYy82MCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHBsYXlfc3RvcChpZCA6YW55KXtcclxuICAgIGlmKHRoaXMudGVtcFtpZF1bN10gPT0gMCl7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bN10gPSAxO1xyXG4gICAgICBsZXQgZGF0ZSA6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bMF0gPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bMV0gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsyXSA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bN10gPSAwO1xyXG4gICAgICBsZXQgZGF0ZSA6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bM10gPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bNF0gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs1XSA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICB0aGlzLnNhdmVUaW1lKGlkKTtcclxuICAgICAgY29uc29sZS5kaXIodGhpcy50ZW1wKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4qL1xyXG4gIG5hdmlnYXRldG8ocGFnZW5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtwYWdlbmFtZV0sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXHJcbiAgICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuICAgIHNhdmVOZXdUb2RvKCl7XHJcbiAgICAgIHRoaXMudG9kb1NlcnZpY2UuY3JlYXRlVG9kbyh0aGlzLm5ld1RvZG8pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
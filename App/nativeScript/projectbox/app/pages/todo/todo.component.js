"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
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
        this.curUser = new user_1.User;
        this.curUser = this.userService.getCurrentUser();
        this.avatar = "https://secure.projectbox.eu/v2/user/avatar/" + this.curUser.avatar + "?access_token=" + this.curUser.access_token;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos()
            .then(function (data) { return _this.displayTodos(data); });
        this.temp = new Array(this.todos.length);
        this.todos.forEach(function (element) {
            _this.temp[element.id] = [];
            _this.temp[element.id][6] = element.timeTaken;
            _this.temp[element.id][7] = 0;
        });
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
    TodoComponent.prototype.saveTime = function (id) {
        var _this = this;
        console.dir(this.temp);
        this.todos.forEach(function (todo) {
            if (id == todo.id) {
                var sec = ((_this.temp[id][3] * 3600) + (_this.temp[id][4] * 60) + +_this.temp[id][5])
                    - ((_this.temp[id][0] * 3600) + (_this.temp[id][1] * 60) + +_this.temp[id][2]);
                sec -= sec % 60;
                todo.timeTaken += (sec / 60);
            }
        });
    };
    TodoComponent.prototype.play_stop = function (id) {
        if (this.temp[id][7] == 0) {
            this.temp[id][7] = 1;
            var date = new Date();
            this.temp[id][0] = date.getHours();
            this.temp[id][1] = date.getMinutes();
            this.temp[id][2] = date.getSeconds();
        }
        else {
            this.temp[id][7] = 0;
            var date = new Date();
            this.temp[id][3] = date.getHours();
            this.temp[id][4] = date.getMinutes();
            this.temp[id][5] = date.getSeconds();
            this.saveTime(id);
            console.dir(this.temp);
        }
    };
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
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], TodoComponent.prototype, "drawerComponent", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: "my-app",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RiwrQ0FBOEM7QUFDOUMsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IscUVBQW1FO0FBRW5FLCtEQUE2RDtBQUM3RCx1Q0FBcUM7QUFHckMsa0VBQWdHO0FBRWhHLHVFQUErRDtBQUMvRCwrREFBNkQ7QUFVN0Q7SUFNb0IsdUdBQXVHO0lBQ3ZHLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFFeEQsdUJBRVUsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixhQUE0QixFQUM1QixXQUF3QixFQUN4QixJQUFVLEVBQ1YsbUJBQXNDLEVBQ3RDLFFBQTRCLEVBQzVCLFdBQXdCO1FBUnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXpCbEMsWUFBTyxHQUFTLElBQUksV0FBSSxDQUFDO1FBNEJ2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUVwSSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDMUIsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxJQUFTO1FBRWhCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFFUCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFMUIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBRUosSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTVCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUwsZ0NBQVEsR0FBUixVQUFTLEVBQU87UUFBaEIsaUJBV0M7UUFWQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDckIsRUFBRSxDQUFBLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixJQUFJLEdBQUcsR0FDUCxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3NCQUN2RSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLEdBQUcsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELGlDQUFTLEdBQVQsVUFBVSxFQUFPO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxJQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFFSCxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0csdUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWQ4QjtRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MERBQUM7SUF0R3JFLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsRUFBRSwwQkFBVyxDQUFDO1lBQ3BELFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FvQmtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDbEIsdUJBQWM7WUFDZiw4QkFBYTtZQUNmLDBCQUFXO1lBQ2xCLFdBQUk7WUFDVyx3QkFBaUI7WUFDNUIsOENBQWtCO1lBQ2YsMEJBQVc7T0ExQnZCLGFBQWEsQ0FzSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRIRCxJQXNIQztBQXRIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RvZG8vdG9kb1wiO1xyXG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9kby90b2RvLnNlcnZpY2VcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1RvZG9TZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlLCBVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdG9kby90b2RvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RvZG8vdG9kby1jb21tb24uY3NzXCIsIFwicGFnZXMvdG9kby90b2RvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQge1xyXG4gIGN1clVzZXIgOlVzZXIgPSBuZXcgVXNlcjtcclxuICBhdmF0YXIgOnN0cmluZztcclxuICB0b2RvcyA6VG9kb1tdO1xyXG4gIHRpbWVzdGFydCA6c3RyaW5nO1xyXG4gIHRlbXAgOm51bWJlcltdW107IC8vZGllbnQgenVyIHRlbXBvcsOkcmVuIHNwZWljaGVydW5nZW4gZGVyIFplaXRlcmZhc3N1bmcuIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vRWJlbmUgMSBkZXMgQXJyYXlzIGlzdCBhc3NvemlhdGl2IG1pdCBkZW4gSURzIHZvbiBkZW4gVG9kb3MuIGRpZSAyLiBFYmVuZSBlbnRow6RsdCBmb2xnZW5kZSBBdHRyaWJ1dGU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMF1zdGFydFRpbWU6IFN0dW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1sxXXN0YXJ0VGltZTogTWludXRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzJdc3RhcnRUaW1lOiBTZWt1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzNdZW5kVGltZTogU3R1bmRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzRdZW5kVGltZTogTWludXRlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzVdZW5kVGltZTogU2VrdW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s2XWVycmVjaG5ldGUgZGF1ZXIgZGVzIEVpbnRyYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bN11UaW1lclJ1bm5pbmcgOjAgPSBmYWxzZSwgMSA9IHRydWVcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvZG9TZXJ2aWNlIDpUb2RvU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxyXG4gIClcclxuICB7XHJcbiAgICB0aGlzLmN1clVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICB0aGlzLmF2YXRhciA9IFwiaHR0cHM6Ly9zZWN1cmUucHJvamVjdGJveC5ldS92Mi91c2VyL2F2YXRhci9cIiArIHRoaXMuY3VyVXNlci5hdmF0YXIgKyBcIj9hY2Nlc3NfdG9rZW49XCIgKyB0aGlzLmN1clVzZXIuYWNjZXNzX3Rva2VuO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2RvU2VydmljZS5nZXRUb2RvcygpXHJcbiAgICAudGhlbigoZGF0YSkgPT4gdGhpcy5kaXNwbGF5VG9kb3MoZGF0YSkpXHJcbiAgICB0aGlzLnRlbXAgPSBuZXcgQXJyYXkodGhpcy50b2Rvcy5sZW5ndGgpO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF0gPSBbXTtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzZdID0gZWxlbWVudC50aW1lVGFrZW47XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXVs3XSA9IDA7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGlzcGxheVRvZG9zKGRhdGEgOmFueSl7XHJcbiAgICBcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgIFxyXG4gICAgICAgICAgdGhpcy50b2RvU2VydmljZS5zYXZlVG9kb3MoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnRvZG9zID0gZGF0YS50b2RvcztcclxuICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgXHJcbiAgICAgICAgICBkYXRhID0gdGhpcy50b2RvU2VydmljZS5nZXRTYXZlZFRvZG9zKClcclxuICAgICAgICAgIHRoaXMudG9kb3MgPSBkYXRhLnRpY2tldHM7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy50b2Rvcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgc2F2ZVRpbWUoaWQgOmFueSl7XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICBpZihpZCA9PSB0b2RvLmlkKXtcclxuICAgICAgICBsZXQgc2VjIDpudW1iZXIgPSBcclxuICAgICAgICAoKHRoaXMudGVtcFtpZF1bM10gKiAzNjAwKSArICh0aGlzLnRlbXBbaWRdWzRdICogNjApICsgK3RoaXMudGVtcFtpZF1bNV0pIFxyXG4gICAgICAgIC0gKCh0aGlzLnRlbXBbaWRdWzBdICogMzYwMCkgKyAodGhpcy50ZW1wW2lkXVsxXSAqIDYwKSArICt0aGlzLnRlbXBbaWRdWzJdKTtcclxuICAgICAgICBzZWMgLT0gc2VjJTYwO1xyXG4gICAgICAgIHRvZG8udGltZVRha2VuICs9IChzZWMvNjApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwbGF5X3N0b3AoaWQgOmFueSl7XHJcbiAgICBpZih0aGlzLnRlbXBbaWRdWzddID09IDApe1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzddID0gMTtcclxuICAgICAgbGV0IGRhdGUgOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzBdID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzFdID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bMl0gPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzddID0gMDtcclxuICAgICAgbGV0IGRhdGUgOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzNdID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzRdID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgIHRoaXMudGVtcFtpZF1bNV0gPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgICAgdGhpcy5zYXZlVGltZShpZCk7XHJcbiAgICAgIGNvbnNvbGUuZGlyKHRoaXMudGVtcCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGV0byhwYWdlbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3BhZ2VuYW1lXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCJcclxuICAgICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
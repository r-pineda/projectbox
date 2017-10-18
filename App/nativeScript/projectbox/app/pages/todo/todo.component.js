"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var status_service_1 = require("../../shared/status/status.service");
var todo_service_1 = require("../../shared/todo/todo.service");
var TodoComponent = (function () {
    function TodoComponent(router, routerExtensions, activatedRoute, statusService, todoService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.statusService = statusService;
        this.todoService = todoService;
    }
    TodoComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [todo_service_1.TodoService, status_service_1.StatusService],
            templateUrl: "pages/todo/todo.html",
            styleUrls: ["pages/todo/todo-common.css", "pages/todo/todo.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            status_service_1.StatusService,
            todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUcxQywwQ0FBeUQ7QUFDekQsc0RBQStEO0FBRS9ELHFFQUFtRTtBQUVuRSwrREFBNkQ7QUFRN0Q7SUFJRSx1QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLFdBQXdCO1FBSnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUVqQyxDQUFDO0lBWlMsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FPa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNmLDhCQUFhO1lBQ2YsMEJBQVc7T0FWdkIsYUFBYSxDQWF6QjtJQUFELG9CQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9kby90b2RvXCI7XHJcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90b2RvL3RvZG8uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVG9kb1NlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RvZG8vdG9kby5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90b2RvL3RvZG8tY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RvZG8vdG9kby5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQge1xyXG5cclxuICB0b2RvcyA6VG9kb1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvclxyXG4gIChcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgc3RhdHVzU2VydmljZSA6U3RhdHVzU2VydmljZSxcclxuICAgIHByaXZhdGUgdG9kb1NlcnZpY2UgOlRvZG9TZXJ2aWNlIFxyXG4gIClcclxuICB7fVxyXG59XHJcbiJdfQ==
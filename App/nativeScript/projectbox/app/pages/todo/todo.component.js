"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var todo_service_1 = require("../../shared/todo/todo.service");
var TodoComponent = (function () {
    function TodoComponent(router, routerExtensions, activatedRoute, statusService, todoService, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.statusService = statusService;
        this.todoService = todoService;
        this.page = page;
        page.actionBarHidden = true;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos = this.todoService.todosDummy();
        this.temp = new Array(this.todos.length);
        this.todos.forEach(function (element) {
            _this.temp[element.id] = [];
        });
    };
    TodoComponent.prototype.saveTime = function (id) {
        this.temp[id][4] += ((+this.temp[id][2] * 60) + +this.temp[id][3]) - ((+this.temp[id][0] * 60) + +this.temp[id][1]);
    };
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
            todo_service_1.TodoService,
            page_1.Page])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQixxRUFBbUU7QUFFbkUsK0RBQTZEO0FBUzdEO0lBTUUsdUJBRVUsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixhQUE0QixFQUM1QixXQUF3QixFQUN4QixJQUFVO1FBTFYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFHbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsRUFBTztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JILENBQUM7SUE3QlUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FVa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUNsQix1QkFBYztZQUNmLDhCQUFhO1lBQ2YsMEJBQVc7WUFDbEIsV0FBSTtPQWJULGFBQWEsQ0ErQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU3RhdHVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3RhdHVzL3N0YXR1cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RvZG8vdG9kb1wiO1xyXG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9kby90b2RvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1RvZG9TZXJ2aWNlLCBTdGF0dXNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90b2RvL3RvZG8uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdG9kby90b2RvLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy90b2RvL3RvZG8uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCB7XHJcblxyXG4gIHRvZG9zIDpUb2RvW107XHJcbiAgdGltZXN0YXJ0IDpzdHJpbmc7XHJcbiAgdGVtcCA6bnVtYmVyW11bXTtcclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvZG9TZXJ2aWNlIDpUb2RvU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxyXG4gIClcclxuICB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9TZXJ2aWNlLnRvZG9zRHVtbXkoKTtcclxuICAgIHRoaXMudGVtcCA9IG5ldyBBcnJheSh0aGlzLnRvZG9zLmxlbmd0aCk7XHJcbiAgICB0aGlzLnRvZG9zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXSA9IFtdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlVGltZShpZCA6YW55KXtcclxuICAgIHRoaXMudGVtcFtpZF1bNF0gKz0gKCgrdGhpcy50ZW1wW2lkXVsyXSAqIDYwKSArICt0aGlzLnRlbXBbaWRdWzNdKSAtICgoK3RoaXMudGVtcFtpZF1bMF0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVsxXSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
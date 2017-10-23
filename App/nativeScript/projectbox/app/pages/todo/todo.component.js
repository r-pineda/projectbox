"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var status_service_1 = require("../../shared/status/status.service");
var todo_service_1 = require("../../shared/todo/todo.service");
var TodoComponent = (function () {
    //Ebene 1 des Arrays ist assoziativ mit den IDs von den Todos. die 2. Ebene enthält folgende Attribute:
    //[0]startTime: Stunden
    //[1]startTime: Minuten
    //[2]endTime: Stunden
    //[3]endTime: Minuten
    //[4]errechnete dauer des Eintrags
    //[5]TimerRunning :boolean
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
            _this.temp[element.id][4] = element.timeTaken;
            _this.temp[element.id][5] = 0;
        });
    };
    TodoComponent.prototype.saveTime = function (id) {
        var _this = this;
        console.dir(this.temp);
        this.todos.forEach(function (todo) {
            if (id == todo.id) {
                todo.timeTaken += ((_this.temp[id][2] * 60) + +_this.temp[id][3]) - ((_this.temp[id][0] * 60) + +_this.temp[id][1]);
            }
        });
    };
    TodoComponent.prototype.play_stop = function (id) {
        if (this.temp[id][5] == 0) {
            this.temp[id][5] = 1;
            var date = new Date();
            this.temp[id][0] = date.getHours();
            this.temp[id][1] = date.getMinutes();
        }
        else {
            this.temp[id][5] = 0;
            var date = new Date();
            this.temp[id][2] = date.getHours();
            this.temp[id][3] = date.getMinutes();
            this.saveTime(id);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQixxRUFBbUU7QUFFbkUsK0RBQTZEO0FBUzdEO0lBS29CLHVHQUF1RztJQUN2Ryx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUU1Qyx1QkFFVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLElBQVU7UUFMVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUdsQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxFQUFPO1FBQWhCLGlCQU9DO1FBTkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3JCLEVBQUUsQ0FBQSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsaUNBQVMsR0FBVCxVQUFVLEVBQU87UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxJQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLElBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztJQUVILENBQUM7SUE1RFUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FpQmtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDbEIsdUJBQWM7WUFDZiw4QkFBYTtZQUNmLDBCQUFXO1lBQ2xCLFdBQUk7T0FwQlQsYUFBYSxDQThEekI7SUFBRCxvQkFBQztDQUFBLEFBOURELElBOERDO0FBOURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zdGF0dXMvc3RhdHVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdG9kby90b2RvXCI7XHJcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90b2RvL3RvZG8uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVG9kb1NlcnZpY2UsIFN0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RvZG8vdG9kby5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90b2RvL3RvZG8tY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RvZG8vdG9kby5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50IHtcclxuXHJcbiAgdG9kb3MgOlRvZG9bXTtcclxuICB0aW1lc3RhcnQgOnN0cmluZztcclxuICB0ZW1wIDpudW1iZXJbXVtdOyAvL2RpZW50IHp1ciB0ZW1wb3LDpHJlbiBzcGVpY2hlcnVuZ2VuIGRlciBaZWl0ZXJmYXNzdW5nLiBcclxuICAgICAgICAgICAgICAgICAgICAvL0ViZW5lIDEgZGVzIEFycmF5cyBpc3QgYXNzb3ppYXRpdiBtaXQgZGVuIElEcyB2b24gZGVuIFRvZG9zLiBkaWUgMi4gRWJlbmUgZW50aMOkbHQgZm9sZ2VuZGUgQXR0cmlidXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vWzBdc3RhcnRUaW1lOiBTdHVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bMV1zdGFydFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1syXWVuZFRpbWU6IFN0dW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1szXWVuZFRpbWU6IE1pbnV0ZW5cclxuICAgICAgICAgICAgICAgICAgICAvL1s0XWVycmVjaG5ldGUgZGF1ZXIgZGVzIEVpbnRyYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgLy9bNV1UaW1lclJ1bm5pbmcgOmJvb2xlYW5cclxuXHJcbiAgY29uc3RydWN0b3JcclxuICAoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHN0YXR1c1NlcnZpY2UgOlN0YXR1c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvZG9TZXJ2aWNlIDpUb2RvU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxyXG4gIClcclxuICB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9TZXJ2aWNlLnRvZG9zRHVtbXkoKTtcclxuICAgIHRoaXMudGVtcCA9IG5ldyBBcnJheSh0aGlzLnRvZG9zLmxlbmd0aCk7XHJcbiAgICB0aGlzLnRvZG9zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMudGVtcFtlbGVtZW50LmlkXSA9IFtdO1xyXG4gICAgICB0aGlzLnRlbXBbZWxlbWVudC5pZF1bNF0gPSBlbGVtZW50LnRpbWVUYWtlbjtcclxuICAgICAgdGhpcy50ZW1wW2VsZW1lbnQuaWRdWzVdID0gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRpbWUoaWQgOmFueSl7XHJcbiAgICBjb25zb2xlLmRpcih0aGlzLnRlbXApO1xyXG4gICAgdGhpcy50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICBpZihpZCA9PSB0b2RvLmlkKXtcclxuICAgICAgICB0b2RvLnRpbWVUYWtlbiArPSAoKHRoaXMudGVtcFtpZF1bMl0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVszXSkgLSAoKHRoaXMudGVtcFtpZF1bMF0gKiA2MCkgKyArdGhpcy50ZW1wW2lkXVsxXSk7IFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwbGF5X3N0b3AoaWQgOmFueSl7XHJcbiAgICBpZih0aGlzLnRlbXBbaWRdWzVdID09IDApe1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzVdID0gMTtcclxuICAgICAgbGV0IGRhdGUgOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzBdID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICB0aGlzLnRlbXBbaWRdWzFdID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy50ZW1wW2lkXVs1XSA9IDA7XHJcbiAgICAgIGxldCBkYXRlIDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVsyXSA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgdGhpcy50ZW1wW2lkXVszXSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnNhdmVUaW1lKGlkKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
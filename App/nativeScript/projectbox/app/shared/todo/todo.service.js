"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var application_settings_1 = require("application-settings");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    TodoService.prototype.getTodos = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "v2/tasks", { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    TodoService.prototype.createTodo = function (ticket) {
        delete ticket.id;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.post(config_1.Config.apiUrl + "v2/tasks", ("{\"ticket\": " + JSON.stringify(ticket) + "}"), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    TodoService.prototype.updateTodo = function (ticket) {
        var id = ticket.id + "";
        delete ticket.id;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.put(config_1.Config.apiUrl + "v2/tasks/" + id, ("{\"ticket\": " + JSON.stringify(ticket) + "}"), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.dir(data);
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    TodoService.prototype.deleteTodo = function (id) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.delete(config_1.Config.apiUrl + "v2/tasks/" + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    TodoService.prototype.saveTodos = function (todosToSave) {
        application_settings_1.setString("todos", JSON.stringify(todosToSave));
    };
    TodoService.prototype.getSavedTodos = function () {
        return JSON.parse(application_settings_1.getString("todos"));
    };
    TodoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixvQ0FBbUM7QUFDbkMsNkRBVThCO0FBRzlCO0lBRUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQzFCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtRQUNSLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3hCLFNBQVMsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGdD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QUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWxGVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2UsV0FBSTtPQUZuQixXQUFXLENBbUZ2QjtJQUFELGtCQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9kb1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIENvbmZpZy50b2tlbilcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi90YXNrc1wiLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVG9kbyh0aWNrZXQgOlRvZG8pe1xyXG4gICAgZGVsZXRlIHRpY2tldC5pZDtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIisgQ29uZmlnLnRva2VuKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi90YXNrc1wiLFxyXG4gICAgICAoXCJ7XFxcInRpY2tldFxcXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkodGlja2V0KSArIFwifVwiKSxcclxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAgIClcclxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG8odGlja2V0IDpUb2RvKXtcclxuICAgIGxldCBpZCA6c3RyaW5nID0gdGlja2V0LmlkICsgXCJcIjtcclxuICAgIGRlbGV0ZSB0aWNrZXQuaWQ7XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIisgQ29uZmlnLnRva2VuKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInYyL3Rhc2tzL1wiICsgaWQsXHJcbiAgICAgIChcIntcXFwidGlja2V0XFxcIjogXCIgKyBKU09OLnN0cmluZ2lmeSh0aWNrZXQpICsgXCJ9XCIpLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG8oaWQgOnN0cmluZyl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIENvbmZpZy50b2tlbilcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi90YXNrcy9cIiArIGlkLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRvZG9zKHRvZG9zVG9TYXZlIDphbnkpe1xyXG4gICAgc2V0U3RyaW5nKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3NUb1NhdmUpKTtcclxuICB9XHJcblxyXG4gIGdldFNhdmVkVG9kb3MgKCl7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJ0b2Rvc1wiKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
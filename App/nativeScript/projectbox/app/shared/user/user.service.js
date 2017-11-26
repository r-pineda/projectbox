"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var application_settings_1 = require("application-settings");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    //Wahrscheinlicher Fall: wenn der Request nicht 200~ zurückgibt, wird automatisch ein Error geworfen und er springt sofort zum catch
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json) + " handleErrors");
        return Rx_1.Observable.throw(error);
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "v2/token", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            _this.setCurrentUser(data);
            config_1.Config.token = data.access_token;
        })
            .catch(function (err) {
            if (err == "Response with status: 403 Forbidden for URL: https://secure.projectbox.eu/v2/token") {
                return Rx_1.Observable.throw("403");
            }
            else {
                return Rx_1.Observable.throw(err);
            }
        });
    };
    UserService.prototype.setCurrentUser = function (usr) {
        var user = usr;
        console.dir(user);
        application_settings_1.setString("curUser", JSON.stringify(user));
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(application_settings_1.getString("curUser"));
    };
    UserService.prototype.getProjects = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "v2/projects", { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    UserService.prototype.saveProjects = function (projectsToSave) {
        application_settings_1.setString("projects", JSON.stringify(projectsToSave));
    };
    UserService.prototype.getSavedProjects = function () {
        return JSON.parse(application_settings_1.getString("projects"));
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMsNkRBVThCO0FBRzlCLG9DQUFtQztBQUluQztJQUNFLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsb0lBQW9JO0lBQ3BJLGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFlO1FBQXJCLGlCQXdCQztRQXZCQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFDZCxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksb0ZBQW9GLENBQUMsQ0FBQSxDQUFDO2dCQUM5RixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxHQUFTO1FBQ3RCLElBQUksSUFBSSxHQUFTLEdBQUcsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLGdDQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQzdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtRQUNSLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3hCLFNBQVMsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxjQUF5QjtRQUNwQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBakVVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJO09BRG5CLFdBQVcsQ0FtRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQge1xyXG4gIGdldEJvb2xlYW4sXHJcbiAgc2V0Qm9vbGVhbixcclxuICBnZXROdW1iZXIsXHJcbiAgc2V0TnVtYmVyLFxyXG4gIGdldFN0cmluZyxcclxuICBzZXRTdHJpbmcsXHJcbiAgaGFzS2V5LFxyXG4gIHJlbW92ZSxcclxuICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBVc2VyTG9naW4gfSBmcm9tIFwiLi91c2VyTG9naW5cIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQaXZvdCB9IGZyb20gXCIuL3Byb2plY3RcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgLy9XYWhyc2NoZWlubGljaGVyIEZhbGw6IHdlbm4gZGVyIFJlcXVlc3QgbmljaHQgMjAwfiB6dXLDvGNrZ2lidCwgd2lyZCBhdXRvbWF0aXNjaCBlaW4gRXJyb3IgZ2V3b3JmZW4gdW5kIGVyIHNwcmluZ3Qgc29mb3J0IHp1bSBjYXRjaFxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24pICsgXCIgaGFuZGxlRXJyb3JzXCIpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcjogVXNlckxvZ2luKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInYyL3Rva2VuXCIsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICB9KSxcclxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAgIClcclxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKGRhdGEpO1xyXG4gICAgICBDb25maWcudG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgIGlmKGVyciA9PSBcIlJlc3BvbnNlIHdpdGggc3RhdHVzOiA0MDMgRm9yYmlkZGVuIGZvciBVUkw6IGh0dHBzOi8vc2VjdXJlLnByb2plY3Rib3guZXUvdjIvdG9rZW5cIil7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coXCI0MDNcIik7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFVzZXIodXNyIDpVc2VyKXtcclxuICAgIGxldCB1c2VyIDpVc2VyID0gdXNyO1xyXG4gICAgY29uc29sZS5kaXIodXNlcik7XHJcbiAgICBzZXRTdHJpbmcoXCJjdXJVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICB9XHJcbiAgZ2V0Q3VycmVudFVzZXIoKSA6VXNlcntcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGdldFN0cmluZyhcImN1clVzZXJcIikpOyBcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIENvbmZpZy50b2tlbilcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9wcm9qZWN0c1wiLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByb2plY3RzKHByb2plY3RzVG9TYXZlIDpQcm9qZWN0W10pe1xyXG4gICAgc2V0U3RyaW5nKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNUb1NhdmUpKTtcclxuICB9XHJcblxyXG4gIGdldFNhdmVkUHJvamVjdHMgKCl7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJwcm9qZWN0c1wiKSk7XHJcbiAgfVxyXG4gIFxyXG59Il19
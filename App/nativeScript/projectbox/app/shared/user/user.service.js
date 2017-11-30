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
    UserService.prototype.getAvatar = function () {
        var http = require("http");
        http.getFile("https://secure.projectbox.eu/v2/user/avatar/" + this.getCurrentUser().avatar + "?access_token=" + config_1.Config.token).then(function (r) {
            console.dir(r);
        }, function (e) {
            console.log(e);
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMsNkRBVThCO0FBRzlCLG9DQUFtQztBQUluQztJQUNFLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsb0lBQW9JO0lBQ3BJLGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFlO1FBQXJCLGlCQXdCQztRQXZCQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFDZCxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksb0ZBQW9GLENBQUMsQ0FBQSxDQUFDO2dCQUM5RixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxHQUFTO1FBQ3RCLElBQUksSUFBSSxHQUFTLEdBQUcsQ0FBQztRQUNyQixnQ0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELG9DQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFFLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUM3QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7UUFDUixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN4QixTQUFTLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsY0FBeUI7UUFDcEMsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBekVVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJO09BRG5CLFdBQVcsQ0EwRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQge1xyXG4gIGdldEJvb2xlYW4sXHJcbiAgc2V0Qm9vbGVhbixcclxuICBnZXROdW1iZXIsXHJcbiAgc2V0TnVtYmVyLFxyXG4gIGdldFN0cmluZyxcclxuICBzZXRTdHJpbmcsXHJcbiAgaGFzS2V5LFxyXG4gIHJlbW92ZSxcclxuICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBVc2VyTG9naW4gfSBmcm9tIFwiLi91c2VyTG9naW5cIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQaXZvdCB9IGZyb20gXCIuL3Byb2plY3RcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgLy9XYWhyc2NoZWlubGljaGVyIEZhbGw6IHdlbm4gZGVyIFJlcXVlc3QgbmljaHQgMjAwfiB6dXLDvGNrZ2lidCwgd2lyZCBhdXRvbWF0aXNjaCBlaW4gRXJyb3IgZ2V3b3JmZW4gdW5kIGVyIHNwcmluZ3Qgc29mb3J0IHp1bSBjYXRjaFxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24pICsgXCIgaGFuZGxlRXJyb3JzXCIpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcjogVXNlckxvZ2luKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInYyL3Rva2VuXCIsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICB9KSxcclxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAgIClcclxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKGRhdGEpO1xyXG4gICAgICBDb25maWcudG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgIGlmKGVyciA9PSBcIlJlc3BvbnNlIHdpdGggc3RhdHVzOiA0MDMgRm9yYmlkZGVuIGZvciBVUkw6IGh0dHBzOi8vc2VjdXJlLnByb2plY3Rib3guZXUvdjIvdG9rZW5cIil7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coXCI0MDNcIik7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFVzZXIodXNyIDpVc2VyKXtcclxuICAgIGxldCB1c2VyIDpVc2VyID0gdXNyO1xyXG4gICAgc2V0U3RyaW5nKFwiY3VyVXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgfVxyXG4gIGdldEN1cnJlbnRVc2VyKCkgOlVzZXJ7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJjdXJVc2VyXCIpKTsgXHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiKyBDb25maWcudG9rZW4pXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgQ29uZmlnLmFwaVVybCArIFwidjIvcHJvamVjdHNcIixcclxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAgIClcclxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0cyhwcm9qZWN0c1RvU2F2ZSA6UHJvamVjdFtdKXtcclxuICAgIHNldFN0cmluZyhcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzVG9TYXZlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTYXZlZFByb2plY3RzICgpe1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwicHJvamVjdHNcIikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZhdGFyKCl7XHJcbiAgICB2YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4gICAgaHR0cC5nZXRGaWxlKFwiaHR0cHM6Ly9zZWN1cmUucHJvamVjdGJveC5ldS92Mi91c2VyL2F2YXRhci9cIiArIHRoaXMuZ2V0Q3VycmVudFVzZXIoKS5hdmF0YXIgKyBcIj9hY2Nlc3NfdG9rZW49XCIgKyBDb25maWcudG9rZW4pLnRoZW4oZnVuY3Rpb24gKHIpIHtcclxuICAgICAgY29uc29sZS5kaXIocik7XHJcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==
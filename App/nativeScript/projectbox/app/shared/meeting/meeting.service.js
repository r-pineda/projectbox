"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var MeetingService = (function () {
    function MeetingService(http) {
        this.http = http;
        this.meetings = null;
        this.dinner_not_ready = true;
    }
    MeetingService.prototype.getMeetings = function () {
        console.log("getMeetings");
        this.callAPI().subscribe(function (data) { return data.meetings; }, function (error) { return alert("Unfortunately we could not find any meetings."); });
        while (this.dinner_not_ready) {
            if (this.meetings != null) {
                this.dinner_not_ready = false;
            }
        }
        return Promise.resolve(this.meetings);
    };
    MeetingService.prototype.callAPI = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "v2/meetings", { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.dir(data);
        })
            .catch(this.handleErrors);
    };
    MeetingService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    MeetingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MeetingService);
    return MeetingService;
}());
exports.MeetingService = MeetingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixvQ0FBbUM7QUFHbkM7SUFLSSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIOUIsYUFBUSxHQUFjLElBQUksQ0FBQztRQUMzQixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7SUFFQSxDQUFDO0lBRWxDLG9DQUFXLEdBQVg7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ3BCLFVBQUMsSUFBSSxJQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUEsQ0FBQyxFQUNoQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNwRSxDQUFDO1FBRUYsT0FBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQztZQUV6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUVILGdDQUFPLEdBQVA7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFFLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDeEI7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE3Q1UsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQU1pQixXQUFJO09BTHJCLGNBQWMsQ0E4QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lZXRpbmcgfSBmcm9tICcuL21lZXRpbmcnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVldGluZ1NlcnZpY2Uge1xyXG5cclxuICAgIG1lZXRpbmdzIDpNZWV0aW5nW10gPSBudWxsO1xyXG4gICAgZGlubmVyX25vdF9yZWFkeSA6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldE1lZXRpbmdzKCk6IFByb21pc2U8TWVldGluZ1tdPiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0TWVldGluZ3NcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbEFQSSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKGRhdGEpID0+IHtyZXR1cm4gZGF0YS5tZWV0aW5nc30sIFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCBhbnkgbWVldGluZ3MuXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2hpbGUodGhpcy5kaW5uZXJfbm90X3JlYWR5KXtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubWVldGluZ3MgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpbm5lcl9ub3RfcmVhZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm1lZXRpbmdzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgY2FsbEFQSSgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiKyBDb25maWcudG9rZW4pXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgIENvbmZpZy5hcGlVcmwgKyBcInYyL21lZXRpbmdzXCIsXHJcbiAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcbiAgICApXHJcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5kbyhkYXRhID0+IHsgY29uc29sZS5kaXIoZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn1cclxuIl19
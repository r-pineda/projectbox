"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var application_settings_1 = require("application-settings");
var MeetingService = (function () {
    function MeetingService(http) {
        this.http = http;
        this.meetings = null;
        this.dinner_not_ready = true;
    }
    MeetingService.prototype.getMeetings = function () {
        console.log("getMeetings");
        this.callAPI().subscribe(function (data) { return data.meetings; }, function (error) { return alert("Unfortunately we could not find any meetings."); });
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
    MeetingService.prototype.saveMeetings = function (meetingsToSave) {
        application_settings_1.setString("meetings", JSON.stringify(meetingsToSave));
        console.log("saving meetings...");
        console.log("saving meetings...");
        console.log("saving meetings...");
        console.log("saving meetings...");
        console.log("saving meetings...");
        console.log("saving meetings...");
        console.log("saving meetings...");
    };
    MeetingService.prototype.getSavedMeetings = function () {
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        console.log("reading saved meetings");
        return JSON.parse(application_settings_1.getString("meetings"));
    };
    MeetingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MeetingService);
    return MeetingService;
}());
exports.MeetingService = MeetingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixvQ0FBbUM7QUFDbkMsNkRBVThCO0FBRzlCO0lBS0ksd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDlCLGFBQVEsR0FBYyxJQUFJLENBQUM7UUFDM0IscUJBQWdCLEdBQVksSUFBSSxDQUFDO0lBRUEsQ0FBQztJQUVsQyxvQ0FBVyxHQUFYO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNwQixVQUFDLElBQUksSUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFBLENBQUMsRUFDaEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDcEUsQ0FBQztRQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBRUgsZ0NBQU8sR0FBUDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDcEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUN4QjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU1QixDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxjQUFtQjtRQUM5QixnQ0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBN0RVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FNaUIsV0FBSTtPQUxyQixjQUFjLENBOEQxQjtJQUFELHFCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSAnLi9tZWV0aW5nJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lZXRpbmdTZXJ2aWNlIHtcclxuXHJcbiAgICBtZWV0aW5ncyA6TWVldGluZ1tdID0gbnVsbDtcclxuICAgIGRpbm5lcl9ub3RfcmVhZHkgOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRNZWV0aW5ncygpOiBQcm9taXNlPE1lZXRpbmdbXT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldE1lZXRpbmdzXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxBUEkoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChkYXRhKSA9PiB7cmV0dXJuIGRhdGEubWVldGluZ3N9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgYW55IG1lZXRpbmdzLlwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5tZWV0aW5ncyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIGNhbGxBUEkoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIisgQ29uZmlnLnRva2VuKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9tZWV0aW5nc1wiLFxyXG4gICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7IGNvbnNvbGUuZGlyKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBzYXZlTWVldGluZ3MobWVldGluZ3NUb1NhdmUgOmFueSl7XHJcbiAgICBzZXRTdHJpbmcoXCJtZWV0aW5nc1wiLCBKU09OLnN0cmluZ2lmeShtZWV0aW5nc1RvU2F2ZSkpO1xyXG4gICAgY29uc29sZS5sb2coXCJzYXZpbmcgbWVldGluZ3MuLi5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhdmluZyBtZWV0aW5ncy4uLlwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2F2aW5nIG1lZXRpbmdzLi4uXCIpOyAgICBcclxuICAgIGNvbnNvbGUubG9nKFwic2F2aW5nIG1lZXRpbmdzLi4uXCIpOyBcclxuICAgIGNvbnNvbGUubG9nKFwic2F2aW5nIG1lZXRpbmdzLi4uXCIpOyBcclxuICAgIGNvbnNvbGUubG9nKFwic2F2aW5nIG1lZXRpbmdzLi4uXCIpOyBcclxuICAgIGNvbnNvbGUubG9nKFwic2F2aW5nIG1lZXRpbmdzLi4uXCIpOyBcclxuICB9XHJcblxyXG4gIGdldFNhdmVkTWVldGluZ3MgKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlYWRpbmcgc2F2ZWQgbWVldGluZ3NcIik7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJtZWV0aW5nc1wiKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
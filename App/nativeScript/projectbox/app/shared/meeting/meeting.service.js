"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var config_1 = require("../config");
var application_settings_1 = require("application-settings");
var MeetingService = (function () {
    function MeetingService(http) {
        this.http = http;
    }
    /*
      meetings :Meeting[] = null;
      dinner_not_ready :boolean = true;
  
      
  
      getMeetings(): Promise<Meeting[]> {
  
          console.log("getMeetings");
  
          this.callAPI().subscribe(
              (data) => {return data.meetings},
              (error) => alert("Unfortunately we could not find any meetings.")
          );
  
          return Promise.resolve(this.meetings);
          
      }
  
    callAPI(){
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", "Bearer "+ Config.token)
      return this.http.get(
      Config.apiUrl + "v2/meetings",
           { headers: headers }
      )
      .map(response => response.json())
      .do(data => { console.dir(data);
      })
      .catch(this.handleErrors);
        
    }
    */
    MeetingService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    MeetingService.prototype.saveMeetings = function (meetingsToSave) {
        application_settings_1.setString("meetings", JSON.stringify(meetingsToSave));
    };
    MeetingService.prototype.getSavedMeetings = function () {
        return JSON.parse(application_settings_1.getString("meetings"));
    };
    MeetingService.prototype.meetings = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "v2/meetings", { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    MeetingService.prototype.createMeeting = function (meeting) {
        delete meeting.id;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.post(config_1.Config.apiUrl + "v2/meetings", ("{\"meeting\": " + JSON.stringify(meeting) + "}"), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    MeetingService.prototype.update = function (meeting) {
        var id = meeting.id + "";
        delete meeting.id;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.put(config_1.Config.apiUrl + "v2/meetings/" + id, ("{\"meeting\": " + JSON.stringify(meeting) + "}"), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    MeetingService.prototype.delete = function (id) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.delete(config_1.Config.apiUrl + "v2/meetings/" + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
        })
            .catch(this.handleErrors)
            .toPromise();
    };
    MeetingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MeetingService);
    return MeetingService;
}());
exports.MeetingService = MeetingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMsb0NBQW1DO0FBQ25DLDZEQVU4QjtBQUc5QjtJQUVFLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWlDRTtJQUVGLHFDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsY0FBbUI7UUFDOUIsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELGlDQUFRLEdBQVI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFFLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUks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QUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7UUFDUixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN4QixTQUFTLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFySFUsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdlLFdBQUk7T0FGbkIsY0FBYyxDQXVIMUI7SUFBRCxxQkFBQztDQUFBLEFBdkhELElBdUhDO0FBdkhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVldGluZyB9IGZyb20gJy4vbWVldGluZyc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lZXRpbmdTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAvKlxyXG4gICAgbWVldGluZ3MgOk1lZXRpbmdbXSA9IG51bGw7XHJcbiAgICBkaW5uZXJfbm90X3JlYWR5IDpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBnZXRNZWV0aW5ncygpOiBQcm9taXNlPE1lZXRpbmdbXT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldE1lZXRpbmdzXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxBUEkoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChkYXRhKSA9PiB7cmV0dXJuIGRhdGEubWVldGluZ3N9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgYW55IG1lZXRpbmdzLlwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5tZWV0aW5ncyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIGNhbGxBUEkoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIisgQ29uZmlnLnRva2VuKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9tZWV0aW5nc1wiLFxyXG4gICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7IGNvbnNvbGUuZGlyKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICAgIFxyXG4gIH1cclxuICAqL1xyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcblxyXG4gIHNhdmVNZWV0aW5ncyhtZWV0aW5nc1RvU2F2ZSA6YW55KXtcclxuICAgIHNldFN0cmluZyhcIm1lZXRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KG1lZXRpbmdzVG9TYXZlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTYXZlZE1lZXRpbmdzICgpe1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwibWVldGluZ3NcIikpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgbWVldGluZ3MoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIENvbmZpZy50b2tlbilcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9tZWV0aW5nc1wiLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVldGluZyhtZWV0aW5nIDpNZWV0aW5nKXtcclxuICAgIGRlbGV0ZSBtZWV0aW5nLmlkO1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiKyBDb25maWcudG9rZW4pXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInYyL21lZXRpbmdzXCIsXHJcbiAgICAgIChcIntcXFwibWVldGluZ1xcXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVldGluZykgKyBcIn1cIiksXHJcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcbiAgICApXHJcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5kbyhkYXRhID0+IHtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobWVldGluZyA6TWVldGluZyl7XHJcbiAgICBsZXQgaWQgOnN0cmluZyA9IG1lZXRpbmcuaWQgKyBcIlwiO1xyXG4gICAgZGVsZXRlIG1lZXRpbmcuaWQ7XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIisgQ29uZmlnLnRva2VuKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInYyL21lZXRpbmdzL1wiICsgaWQsXHJcbiAgICAgIChcIntcXFwibWVldGluZ1xcXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVldGluZykgKyBcIn1cIiksXHJcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcbiAgICApXHJcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5kbyhkYXRhID0+IHtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQgOnN0cmluZyl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIENvbmZpZy50b2tlbilcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9tZWV0aW5ncy9cIiArIGlkLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbn0iXX0=
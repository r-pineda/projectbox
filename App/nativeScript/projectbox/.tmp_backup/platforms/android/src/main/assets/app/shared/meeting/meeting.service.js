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
            .catch(this.handleErrors);
    };
    MeetingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MeetingService);
    return MeetingService;
}());
exports.MeetingService = MeetingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixvQ0FBbUM7QUFDbkMsNkRBVThCO0FBRzlCO0lBRUUsd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaUNFO0lBRUYscUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxjQUFtQjtRQUM5QixnQ0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0QsaUNBQVEsR0FBUjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUUsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQzdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtRQUNSLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWpFVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2UsV0FBSTtPQUZuQixjQUFjLENBa0UxQjtJQUFELHFCQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZWV0aW5nIH0gZnJvbSAnLi9tZWV0aW5nJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lZXRpbmdTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAvKlxyXG4gICAgbWVldGluZ3MgOk1lZXRpbmdbXSA9IG51bGw7XHJcbiAgICBkaW5uZXJfbm90X3JlYWR5IDpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBnZXRNZWV0aW5ncygpOiBQcm9taXNlPE1lZXRpbmdbXT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldE1lZXRpbmdzXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxBUEkoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChkYXRhKSA9PiB7cmV0dXJuIGRhdGEubWVldGluZ3N9LCBcclxuICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgYW55IG1lZXRpbmdzLlwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5tZWV0aW5ncyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIGNhbGxBUEkoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIisgQ29uZmlnLnRva2VuKVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9tZWV0aW5nc1wiLFxyXG4gICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7IGNvbnNvbGUuZGlyKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICAgIFxyXG4gIH1cclxuICAqL1xyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcblxyXG4gIHNhdmVNZWV0aW5ncyhtZWV0aW5nc1RvU2F2ZSA6YW55KXtcclxuICAgIHNldFN0cmluZyhcIm1lZXRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KG1lZXRpbmdzVG9TYXZlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTYXZlZE1lZXRpbmdzICgpe1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwibWVldGluZ3NcIikpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgbWVldGluZ3MoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIENvbmZpZy50b2tlbilcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ2Mi9tZWV0aW5nc1wiLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbn1cclxuIl19
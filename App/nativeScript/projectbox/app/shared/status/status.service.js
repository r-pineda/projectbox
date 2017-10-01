"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var StatusService = (function () {
    function StatusService() {
        this.offlineMode = false;
    }
    StatusService.prototype.setOfflineMode = function (isOffline) {
        this.offlineMode = isOffline;
    };
    StatusService.prototype.getOfflineMode = function () {
        return this.offlineMode;
    };
    StatusService.prototype.setCurrentUser = function (usr) {
        this.currentUser = JSON.stringify(usr);
        application_settings_1.setString("latestUser", JSON.stringify(usr));
    };
    StatusService.prototype.getCurrentUser = function () {
        if (this.currentUser) {
            return this.currentUser;
        }
        else {
            return application_settings_1.getString("latestUser");
        }
    };
    StatusService.prototype.setAccestoken = function (tkn) {
        this.AccesToken = tkn;
    };
    StatusService.prototype.getAccesToken = function () {
        return this.AccesToken;
    };
    StatusService.prototype.loggedIn = function () {
        application_settings_1.setBoolean("wasLoggedIn", true);
    };
    StatusService.prototype.getWasLoggedIn = function () {
        if (application_settings_1.getBoolean("wasLoggedIn")) {
            return true;
        }
        else {
            return false;
        }
    };
    StatusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], StatusService);
    return StatusService;
}());
exports.StatusService = StatusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0dXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyw2REFVOEI7QUFJOUI7SUFNRTtRQUpFLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBSWhCLENBQUM7SUFFaEIsc0NBQWMsR0FBZCxVQUFlLFNBQWtCO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFRO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUNELHNDQUFjLEdBQWQ7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUVuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUUxQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxpQ0FBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQWhEVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWtEekI7SUFBRCxvQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNTZXJ2aWNlIHtcclxuXHJcbiAgICBvZmZsaW5lTW9kZSA6Ym9vbGVhbiA9IGZhbHNlOyBcclxuICAgIGN1cnJlbnRVc2VyIDpzdHJpbmc7ICAgIC8vbm9jaCBzdHJpbmcsIFRPRE86IHVzZXIgSW50ZXJmYWNlIGFubGVnZW5cclxuICAgIEFjY2VzVG9rZW4gOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzZXRPZmZsaW5lTW9kZShpc09mZmxpbmUgOmJvb2xlYW4pe1xyXG4gICAgICB0aGlzLm9mZmxpbmVNb2RlID0gaXNPZmZsaW5lO1xyXG4gIH1cclxuICBnZXRPZmZsaW5lTW9kZSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5vZmZsaW5lTW9kZTtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRVc2VyKHVzciA6YW55KXtcclxuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04uc3RyaW5naWZ5KHVzcik7XHJcbiAgICAgIHNldFN0cmluZyhcImxhdGVzdFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNyKSk7XHJcblxyXG4gIH1cclxuICBnZXRDdXJyZW50VXNlcigpe1xyXG5cclxuICAgICAgaWYodGhpcy5jdXJyZW50VXNlcil7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyO1xyXG5cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwibGF0ZXN0VXNlclwiKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0QWNjZXN0b2tlbih0a24gOnN0cmluZyl7XHJcbiAgICAgIHRoaXMuQWNjZXNUb2tlbiA9IHRrbjtcclxuICB9XHJcbiAgZ2V0QWNjZXNUb2tlbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5BY2Nlc1Rva2VuO1xyXG4gIH1cclxuXHJcbiAgbG9nZ2VkSW4oKXtcclxuICAgICAgc2V0Qm9vbGVhbihcIndhc0xvZ2dlZEluXCIsIHRydWUpXHJcbiAgfVxyXG5cclxuICBnZXRXYXNMb2dnZWRJbigpe1xyXG4gICAgICBpZihnZXRCb29sZWFuKFwid2FzTG9nZ2VkSW5cIikpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
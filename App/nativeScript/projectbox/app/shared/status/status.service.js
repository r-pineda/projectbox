"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var StatusService = (function () {
    function StatusService() {
    }
    StatusService.prototype.setOfflineMode = function (isOffline) {
        application_settings_1.setBoolean("offlineMode", isOffline);
        this.offlineMode = isOffline;
    };
    StatusService.prototype.getOfflineMode = function () {
        return application_settings_1.getBoolean("offlineMode");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0dXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyw2REFVOEI7QUFJOUI7SUFNRTtJQUFlLENBQUM7SUFFaEIsc0NBQWMsR0FBZCxVQUFlLFNBQWtCO1FBQzdCLGlDQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFRO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUNELHNDQUFjLEdBQWQ7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUVuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUUxQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxpQ0FBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQWpEVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQW1EekI7SUFBRCxvQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEJvb2xlYW4sXHJcbiAgICBzZXRCb29sZWFuLFxyXG4gICAgZ2V0TnVtYmVyLFxyXG4gICAgc2V0TnVtYmVyLFxyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNTZXJ2aWNlIHtcclxuXHJcbiAgICBvZmZsaW5lTW9kZSA6Ym9vbGVhbjsgXHJcbiAgICBjdXJyZW50VXNlciA6c3RyaW5nOyAgICAvL25vY2ggc3RyaW5nLCBUT0RPOiB1c2VyIEludGVyZmFjZSBhbmxlZ2VuXHJcbiAgICBBY2Nlc1Rva2VuIDpzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc2V0T2ZmbGluZU1vZGUoaXNPZmZsaW5lIDpib29sZWFuKXtcclxuICAgICAgc2V0Qm9vbGVhbihcIm9mZmxpbmVNb2RlXCIsIGlzT2ZmbGluZSk7XHJcbiAgICAgIHRoaXMub2ZmbGluZU1vZGUgPSBpc09mZmxpbmU7XHJcbiAgfVxyXG4gIGdldE9mZmxpbmVNb2RlKCl7XHJcbiAgICAgIHJldHVybiBnZXRCb29sZWFuKFwib2ZmbGluZU1vZGVcIik7XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50VXNlcih1c3IgOmFueSl7XHJcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnN0cmluZ2lmeSh1c3IpO1xyXG4gICAgICBzZXRTdHJpbmcoXCJsYXRlc3RVc2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzcikpO1xyXG5cclxuICB9XHJcbiAgZ2V0Q3VycmVudFVzZXIoKXtcclxuXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudFVzZXIpe1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcclxuXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcImxhdGVzdFVzZXJcIik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFjY2VzdG9rZW4odGtuIDpzdHJpbmcpe1xyXG4gICAgICB0aGlzLkFjY2VzVG9rZW4gPSB0a247XHJcbiAgfVxyXG4gIGdldEFjY2VzVG9rZW4oKXtcclxuICAgICAgcmV0dXJuIHRoaXMuQWNjZXNUb2tlbjtcclxuICB9XHJcblxyXG4gIGxvZ2dlZEluKCl7XHJcbiAgICAgIHNldEJvb2xlYW4oXCJ3YXNMb2dnZWRJblwiLCB0cnVlKVxyXG4gIH1cclxuXHJcbiAgZ2V0V2FzTG9nZ2VkSW4oKXtcclxuICAgICAgaWYoZ2V0Qm9vbGVhbihcIndhc0xvZ2dlZEluXCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
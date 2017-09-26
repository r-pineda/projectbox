"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var image_1 = require("ui/image");
var AppComponent = (function () {
    function AppComponent() {
        this.imgsrc = "~/images/apple.jpg";
    }
    AppComponent.prototype.onSwipe = function (args) {
        var dir;
        switch (args.direction) {
            case 1: {
                dir = "right";
                break;
            }
            case 2: {
                dir = "left";
                break;
            }
            case 4: {
                dir = "up";
                break;
            }
            case 8: {
                dir = "down";
                break;
            }
            default: {
                dir = "unknown";
            }
        }
        console.log("Swipe Direction: " + dir);
    };
    AppComponent.prototype.onLongPress = function (args) {
        console.log("LongPress!");
        camera.requestPermissions();
        camera.takePicture()
            .then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new image_1.Image();
            image.src = imageAsset;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    AppComponent.prototype.onTap = function (args) {
        console.log("Tap!");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n      <ActionBar title=\"NativeScript\" class=\"action-bar\"></ActionBar>\n      <!--\n      \n      -->\n      <Image src=\"{{ imgsrc }}\" (tap)=\"onTap($event)\" (longPress)=\"onLongPress($event)\" (swipe)=\"onSwipe($event)\" ></Image>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFVMUMsNENBQThDO0FBQzlDLGtDQUFpQztBQVlqQztJQUlFO1FBRkEsV0FBTSxHQUFXLG9CQUFvQixDQUFBO0lBSXJDLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsSUFBMkI7UUFDakMsSUFBSSxHQUFXLENBQUM7UUFDaEIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNkLEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNQLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ2IsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNELEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDWCxLQUFLLENBQUM7WUFDUixDQUFDO1lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUNiLEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxTQUFTLENBQUM7Z0JBQ1IsR0FBRyxHQUFHLFNBQVMsQ0FBQTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3pCLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDZixJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBc0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBakRVLFlBQVk7UUFWeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxxUEFNVDtTQUNGLENBQUM7O09BQ1csWUFBWSxDQW9EeEI7SUFBRCxtQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEdlc3R1cmVFdmVudERhdGEsXG4gIEdlc3R1cmVUeXBlcyxcbiAgUGFuR2VzdHVyZUV2ZW50RGF0YSxcbiAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxuICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXG4gIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcbiAgVG91Y2hHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCBsYWJlbE1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9sYWJlbFwiKTtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk5hdGl2ZVNjcmlwdFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgICAgPCEtLVxuICAgICAgXG4gICAgICAtLT5cbiAgICAgIDxJbWFnZSBzcmM9XCJ7eyBpbWdzcmMgfX1cIiAodGFwKT1cIm9uVGFwKCRldmVudClcIiAobG9uZ1ByZXNzKT1cIm9uTG9uZ1ByZXNzKCRldmVudClcIiAoc3dpcGUpPVwib25Td2lwZSgkZXZlbnQpXCIgPjwvSW1hZ2U+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICBpbWdzcmMgOlN0cmluZyA9IFwifi9pbWFnZXMvYXBwbGUuanBnXCJcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcbiAgICB2YXIgZGlyIDpTdHJpbmc7XG4gICAgc3dpdGNoIChhcmdzLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIGRpciA9IFwicmlnaHRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgZGlyID0gXCJsZWZ0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA0OiB7XG4gICAgICAgIGRpciA9IFwidXBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDg6IHtcbiAgICAgICAgZGlyID0gXCJkb3duXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBkaXIgPSBcInVua25vd25cIlxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlN3aXBlIERpcmVjdGlvbjogXCIgKyBkaXIpO1xuICB9XG5cbiAgb25Mb25nUHJlc3MoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9uZ1ByZXNzIVwiKVxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoKVxuICAgICAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IGlzIGFuIGltYWdlIGFzc2V0IGluc3RhbmNlXCIpO1xuICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJUYXAhXCIpXG4gIH1cblxuXG59Il19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var utils_1 = require("tns-core-modules/utils/utils");
var quickActionCallback = null;
var lastQuickAction = null;
var SHORTCUT_PREFIX = "shortcut.type.";
(function () {
    var iconHandler = function (args) {
        if (!args || !args.android || !args.android.getAction) {
            return;
        }
        var launchAction = args.android.getAction();
        var isShortcutAction = launchAction && launchAction.indexOf(SHORTCUT_PREFIX) > -1;
        if (isShortcutAction) {
            args.android.setAction("");
            var quickAction = {
                type: launchAction.substring(SHORTCUT_PREFIX.length)
            };
            if (quickActionCallback) {
                quickActionCallback(quickAction);
            }
            else {
                lastQuickAction = quickAction;
            }
        }
    };
    application.on("launch", function (args) { return iconHandler(args); });
})();
var AppShortcuts = (function () {
    function AppShortcuts() {
    }
    AppShortcuts.prototype.supported = function () {
        return android.os.Build.VERSION.SDK_INT >= 25;
    };
    AppShortcuts.prototype.available = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.supported());
        });
    };
    AppShortcuts.prototype.configureQuickActions = function (actions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!_this.supported()) {
                    reject("Not supported on this API level. Requires minimum of API level 25 (Android 7.1).");
                    return;
                }
                var shortcuts_1 = new java.util.ArrayList();
                actions.map(function (action, i) {
                    var intent = new android.content.Intent(application.android.context, application.android.foregroundActivity.getClass());
                    intent.setAction(SHORTCUT_PREFIX + action.type);
                    var shortcutBuilder = new android.content.pm.ShortcutInfo.Builder(application.android.context, "id" + i)
                        .setShortLabel(action.title)
                        .setLongLabel(action.title)
                        .setIntent(intent);
                    if (action.iconTemplate) {
                        var res = utils_1.ad.getApplicationContext().getResources();
                        var identifier = res.getIdentifier(action.iconTemplate, "drawable", utils_1.ad.getApplication().getPackageName());
                        if (identifier === 0) {
                            console.log("No icon found for this device density for icon '" + action.iconTemplate + "'. Falling back to the default icon.");
                        }
                        else {
                            shortcutBuilder.setIcon(android.graphics.drawable.Icon.createWithResource(application.android.context, identifier));
                        }
                    }
                    shortcuts_1.add(shortcutBuilder.build());
                });
                var shortcutManager = application.android.context.getSystemService(android.content.pm.ShortcutManager.class);
                shortcutManager.setDynamicShortcuts(shortcuts_1);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    AppShortcuts.prototype.setQuickActionCallback = function (callback) {
        quickActionCallback = callback;
        if (lastQuickAction !== null) {
            quickActionCallback(lastQuickAction);
            lastQuickAction = null;
        }
    };
    return AppShortcuts;
}());
exports.AppShortcuts = AppShortcuts;
//# sourceMappingURL=app-shortcuts.js.map
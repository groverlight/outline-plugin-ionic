var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var log = {
    initialize: function (apiKey) {
        return;
    },
    send: function (uuid) {
        return;
    }
};
var OutlinePlugin = /** @class */ (function (_super) {
    __extends(OutlinePlugin, _super);
    function OutlinePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlinePlugin.prototype.quitApplication = function () { return cordova(this, "quitApplication", {}, arguments); };
    OutlinePlugin.prototype.create = function (serverConfig, id) { return cordova(this, "create", {}, arguments); };
    OutlinePlugin.prototype.logInitialize = function (apiKey) { return cordova(this, "logInitialize", {}, arguments); };
    OutlinePlugin.prototype.sendLog = function (uuid) { return cordova(this, "sendLog", {}, arguments); };
    OutlinePlugin.prototype.start = function () { return cordova(this, "start", {}, arguments); };
    OutlinePlugin.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    OutlinePlugin.prototype.isRunning = function () { return cordova(this, "isRunning", {}, arguments); };
    OutlinePlugin.prototype.isReachable = function () { return cordova(this, "isReachable", {}, arguments); };
    OutlinePlugin.prototype.onStatusChange = function (listener) { return cordova(this, "onStatusChange", {}, arguments); };
    OutlinePlugin.pluginName = "OutlinePlugin";
    OutlinePlugin.plugin = "cordova-plugin-outline";
    OutlinePlugin.pluginRef = "cordova.plugins.outline";
    OutlinePlugin.repo = "https://github.com/Jigsaw-Code/outline-client/tree/master/cordova-plugin-outline";
    OutlinePlugin.install = "";
    OutlinePlugin.installVariables = [];
    OutlinePlugin.platforms = ["Android", "iOS", "macOS"];
    OutlinePlugin = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], OutlinePlugin);
    return OutlinePlugin;
}(IonicNativePlugin));
export { OutlinePlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL291dGxpbmUtcGx1Z2luL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDO0FBRzVILE1BQU0sQ0FBQyxJQUFNLEdBQUcsR0FBRztJQUNqQixVQUFVLEVBQVYsVUFBVyxNQUFjO1FBQ3ZCLE9BQU87SUFDVCxDQUFDO0lBQ0QsSUFBSSxFQUFKLFVBQUssSUFBWTtRQUNmLE9BQU87SUFDVCxDQUFDO0NBQ0YsQ0FBQzs7SUFxQ2lDLGlDQUFpQjs7OztJQUVsRCx1Q0FBZTtJQU9mLDhCQUFNLGFBQUMsWUFBMEIsRUFBRSxFQUFXO0lBRzlDLHFDQUFhLGFBQUMsTUFBYztJQUc1QiwrQkFBTyxhQUFDLElBQVk7SUFHcEIsNkJBQUs7SUFHTCw0QkFBSTtJQUdKLGlDQUFTO0lBR1QsbUNBQVc7SUFHWCxzQ0FBYyxhQUFDLFFBQTRDOzs7Ozs7OztJQTlCaEQsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csYUFBYTt3QkFqRDFCO0VBaURtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3QgbG9nID0ge1xuICBpbml0aWFsaXplKGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9LFxuICBzZW5kKHV1aWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVudW0gQ29ubmVjdGlvblN0YXR1cyB7IENPTk5FQ1RFRCwgRElTQ09OTkVDVEVELCBSRUNPTk5FQ1RJTkcgfVxuZXhwb3J0IGNvbnN0IGVudW0gRVJST1JfQ09ERSB7XG4gIE5PX0VSUk9SLFxuICBVTkVYUEVDVEVELFxuICBWUE5fUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCxcbiAgSU5WQUxJRF9TRVJWRVJfQ1JFREVOVElBTFMsXG4gIFVEUF9SRUxBWV9OT1RfRU5BQkxFRCxcbiAgU0VSVkVSX1VOUkVBQ0hBQkxFLFxuICBWUE5fU1RBUlRfRkFJTFVSRSxcbiAgSUxMRUdBTF9TRVJWRVJfQ09ORklHVVJBVElPTixcbiAgU0hBRE9XU09DS1NfU1RBUlRfRkFJTFVSRSxcbiAgSFRUUF9QUk9YWV9TVEFSVF9GQUlMVVJFLFxuICBDT05GSUdVUkVfU1lTVEVNX1BST1hZX0ZBSUxVUkVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJDb25maWcge1xuICBtZXRob2Q/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ091dGxpbmVQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1vdXRsaW5lJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5vdXRsaW5lJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0ppZ3Nhdy1Db2RlL291dGxpbmUtY2xpZW50L3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLW91dGxpbmUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdtYWNPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE91dGxpbmVQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgcXVpdEFwcGxpY2F0aW9uKCkgeyB9XG5cbiAgY29uZmlnOiBTZXJ2ZXJDb25maWc7XG5cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICBAQ29yZG92YSgpXG4gIGNyZWF0ZShzZXJ2ZXJDb25maWc6IFNlcnZlckNvbmZpZywgaWQ/OiBzdHJpbmcpIHsgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgbG9nSW5pdGlhbGl6ZShhcGlLZXk6IHN0cmluZykgeyB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kTG9nKHV1aWQ6IHN0cmluZykgeyB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4geyByZXR1cm47IH1cblxuICBAQ29yZG92YSgpXG4gIGlzUnVubmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBpc1JlYWNoYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmEoKVxuICBvblN0YXR1c0NoYW5nZShsaXN0ZW5lcjogKHN0YXR1czogQ29ubmVjdGlvblN0YXR1cykgPT4gdm9pZCk6IHZvaWQgeyB9XG59XG5cbiJdfQ==
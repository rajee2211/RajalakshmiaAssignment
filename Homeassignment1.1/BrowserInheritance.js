"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
        this.browserName = "chrome";
        this.browserVersion = " ";
    }
    Browser.prototype.openURL = function () {
        console.log("Open  the url");
    };
    Browser.prototype.closeBrowser = function () {
        console.log("Close the browser");
    };
    Browser.prototype.navigateBack = function () {
        console.log("Navigate back");
    };
    return Browser;
}());
exports.Browser = Browser;

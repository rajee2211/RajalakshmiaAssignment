"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserInheritance_1 = require("./BrowserInheritance");
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chrome.prototype.openIncognito = function () {
        console.log("Open the incognito window");
    };
    Chrome.prototype.clearCache = function () {
        console.log("Clear the cache");
    };
    return Chrome;
}(BrowserInheritance_1.Browser));
var chromeObj = new Chrome();
chromeObj.openURL();
chromeObj.closeBrowser();
chromeObj.navigateBack();
chromeObj.openIncognito();
chromeObj.clearCache();

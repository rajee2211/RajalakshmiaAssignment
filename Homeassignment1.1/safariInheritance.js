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
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Safari.prototype.readerMode = function () {
        console.log("Reader mode");
    };
    Safari.prototype.fullScreenMode = function () {
        console.log("Full screener mode");
    };
    return Safari;
}(BrowserInheritance_1.Browser));
var safariObj = new Safari();
safariObj.openURL();
safariObj.closeBrowser();
safariObj.navigateBack();
safariObj.readerMode();
safariObj.fullScreenMode();

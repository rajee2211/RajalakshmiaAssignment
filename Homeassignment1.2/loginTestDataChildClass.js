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
var testDataParentClass_1 = require("../Homeassignment1.2/testDataParentClass");
var LoginTestData = /** @class */ (function (_super) {
    __extends(LoginTestData, _super);
    function LoginTestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginTestData.prototype.enterUsername = function () {
        console.log("Enter username");
    };
    LoginTestData.prototype.enterPassword = function () {
        console.log("Enter password");
    };
    return LoginTestData;
}(testDataParentClass_1.TestData));
var logintestObj = new LoginTestData();
logintestObj.enterCredentials();
logintestObj.navigateToHomePage();
logintestObj.enterUsername();
logintestObj.enterPassword();

"use strict";
//what is any type?
//any type is something
//that we avoid when it comes to 
//typescript 
//typing parameters
exports.__esModule = true;
exports.getName = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNum(a, b) {
    return a + b;
}
exports["default"] = addNum;
// export const addStrings = (string1:string, string2:string):string => `${string1}${string2}`
//default params
var addStrings = function (string1, string2) {
    if (string2 === void 0) { string2 = ""; }
    return "".concat(string1).concat(string2);
};
exports.addStrings = addStrings;
//union types
var format = function (title, param) { return "".concat(title).concat(param); };
exports.format = format;
//function that doesn't return anything
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
//returns a promise?
// export const fetchData = (url:string):Promise<string> => Promise.resolve(`data from${url}`)
//...rest parameters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return ("".concat(salutation).concat(names.join(" ")));
}
//misconception
//typescript only enforces types
//at compile time and not at run time
function getName(user) {
    var _a, _b;
    return ("".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first').concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last'));
}
exports.getName = getName;

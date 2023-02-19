"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function radixSort(array) {
    if (array.length < 2) {
        return array;
    }
    else {
        var newArray = [];
        return newArray;
    }
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(radixSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
(0, helpers_1.validateFxn)(radixSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
(0, helpers_1.validateFxn)(radixSort([309, 910, 560, 111]), [111, 309, 560, 910]);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
function longestNumber(array) {
    var biggestNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > biggestNumber) {
            biggestNumber = array[i];
        }
    }
    if (biggestNumber / 1000 > 0) {
        return 4;
    }
    if (biggestNumber / 100 > 0) {
        return 3;
    }
    if (biggestNumber / 10 > 0) {
        return 2;
    }
    return 1;
}
function radixSort(array) {
    var buckets = new Array(10);
    for (var i = 0; i < 10; i++) {
        buckets[i] = new Array(2);
    }
    // now sort
    var numberOfPlaces = longestNumber(array);
    for (var i = 0; i < numberOfPlaces; i++) {
        for (var j = 0; j < array.length; j++) {
            var place = array[j] % 1;
            buckets[place][0] = array[j];
        }
    }
    var holder = buckets;
    var newArray = [];
    return newArray;
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(radixSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
(0, helpers_1.validateFxn)(radixSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
(0, helpers_1.validateFxn)(radixSort([309, 910, 560, 111]), [111, 309, 560, 910]);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
//# sourceMappingURL=index.js.map
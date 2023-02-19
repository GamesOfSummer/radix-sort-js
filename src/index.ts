import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function longestNumber(array: number[]) {
    let biggestNumber = 0;
    for (let i = 0; i < array.length; i++) {
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

function radixSort(array: number[]) {
    const numberOfPlaces = longestNumber(array);

    let buckets: number[][];
    for (let i = 0; i < 10; i++) {
        buckets[i] = new Array(2);
    }

    let newArray = [];
    return newArray;
}

consoleStart();

validateFxn(radixSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
validateFxn(radixSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
validateFxn(radixSort([309, 910, 560, 111]), [111, 309, 560, 910]);

consoleEnd();
consoleBuffer();

export {};

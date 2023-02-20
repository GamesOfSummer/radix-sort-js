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

function calculatePlace(passNumber: number): number {
    if (passNumber === 0) {
        return 10;
    } else if (passNumber === 1) {
        return 100;
    } else if (passNumber === 2) {
        return 1000;
    }
}

function radixSort(array: number[]) {
    let buckets: any[] = new Array(10);
    for (let i = 0; i < 10; i++) {
        buckets[i] = new Array();
    }

    // now sort
    const numberOfPlaces = longestNumber(array);
    for (let i = 0; i < numberOfPlaces; i++) {
        for (let j = 0; j < array.length; j++) {
            let place = array[j] % calculatePlace(i);

            if (buckets[place] != undefined && place !== undefined) {
                buckets[place].push(array[j]);
            }
        }

        // buckets are sorted correctly
        // now pop everything off and put back into one array

        let newArray = [];

        let columnCounter = 0;
        for (let j = 0; j < 10; j++) {
            while (buckets[j].length > 0) {
                newArray.push(buckets[j].shift());
            }
        }

        // for (let j = 0; j < array.length; j++) {
        //     newArray[j] = newArray.shift();
        // }

        array = newArray;
    }

    const holder = array;
    return array;
}

consoleStart();

// validateFxn(radixSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// validateFxn(radixSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
validateFxn(
    radixSort([309, 910, 560, 994, 0, 111, 555]),
    [0, 111, 309, 555, 560, 910, 994]
);

consoleEnd();
consoleBuffer();

export {};

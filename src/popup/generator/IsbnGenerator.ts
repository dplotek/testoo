import {randomNumber, randomNumberAsString} from "@src/popup/generator/Generator";

export interface IsbnGeneratorOptions {
    type: IsbnGeneratorType,
}

export enum IsbnGeneratorType {
    TEN = 10, THIRTEEN = 13
}

export function getValue(options: IsbnGeneratorOptions): string {
    let type;

    if (options.hasOwnProperty('type') && (options.type === IsbnGeneratorType.TEN || options.type === IsbnGeneratorType.THIRTEEN)) {
        type = options.type;
    } else {
        type = randomNumber(0, 1) === 0 ? IsbnGeneratorType.TEN : IsbnGeneratorType.THIRTEEN;
    }

    if (type === IsbnGeneratorType.THIRTEEN) {
        return getValue13();
    }

    return getValue10();
}

function getValue10(): string {
    const weights = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let countryPart = CountryCodes[randomNumber(0, CountryCodes.length - 1)].toString();
    let digits = countryPart;
    let rest = 9 - digits.length;
    let length = randomNumber(2, rest - 2)
    let middlePart = randomNumberAsString(length);
    let lastPart = randomNumberAsString(rest - length);
    digits += middlePart + lastPart;

    let checkSum = 0, value;

    for (let i = 0; i < digits.length; i++) {
        value = parseInt(digits[i]);
        checkSum += value * weights[i];
    }

    checkSum = (11 - checkSum % 11) % 11;
    return `${countryPart}-${middlePart}-${lastPart}-${checkSum === 10 ? 'X' : checkSum.toString()}`;
}

function getValue13(): string {
    let firstPart = randomNumber(0, 1) === 0 ? '978' : '979';
    let countryPart = CountryCodes[randomNumber(0, CountryCodes.length - 1)].toString();
    let digits = firstPart + countryPart;
    let rest = 12 - digits.length;
    let length = randomNumber(2, rest - 2)
    let middlePart = randomNumberAsString(length);
    let lastPart = randomNumberAsString(rest - length);
    digits += middlePart + lastPart;

    let checkSum = 0, value;

    for (let i = 0; i < digits.length; i++) {
        value = parseInt(digits[i]);

        if (i % 2 !== 0) {
            value *= 3;
        }

        checkSum += value;
    }

    checkSum %= 10;

    if (checkSum !== 0) {
        checkSum = 10 - checkSum;
    }

    return `${firstPart}-${countryPart}-${middlePart}-${lastPart}-${checkSum}`;
}

const CountryCodes: Array<number> = [
    0, 1, 2, 3, 4, 5, 7, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
    950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 967, 968,
    969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 987,
    9960, 9963, 9964, 9966, 9968, 9970, 9971, 9972, 9973, 9974, 9976, 9977,
    9978, 9979, 9980, 9981, 9982, 9983, 9984, 9985, 9986, 9987, 9988, 9989,
    99903, 99904, 99908, 99909, 99911, 99912, 99913, 99914, 99915, 99916, 99917, 99920, 99921
]

export function getValue() {
    const lettersPart = getLettersPart();
    const digitsPart = getDigitsPart();
    const controlSum = getControlSum(lettersPart, digitsPart);
    return lettersPart + controlSum + digitsPart;
}

const letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

enum LetterValues {
    A = 10, B = 11, C = 12, D = 13, E = 14, F = 15, G = 16, H = 17, I = 18, J = 19, K = 20,
    L = 21, M = 22, N = 23, O = 24, P = 25, Q = 26, R = 27, S = 28, T = 29, U = 30, V = 31,
    W = 32, X = 33, Y = 34, Z = 35
}

function getLettersPart(): string {
    let lettersPart = "";
    for (let i = 0; i < 3; i++) {
        const randomLetter = letters[getRandomInt(0, 25)];
        lettersPart = lettersPart + randomLetter;
    }
    return lettersPart;
}

function getDigitsPart(): string {
    const randomInt: number = getRandomInt(0, 99999);
    return "" + addLeadingZeros(randomInt, 5);
}

function getControlSum(lettersPart, digitsPart): number {
    const controlSum =  7 * LetterValues[lettersPart[0]] + 3 * LetterValues[lettersPart[1]] + 1 * LetterValues[lettersPart[2]] +
        7 * digitsPart[0] + 3 * digitsPart[1] + 1 * digitsPart[2] + 7 * digitsPart[3] + 3 * digitsPart[4];
    return controlSum % 10;
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addLeadingZeros(number: number, length: number) {
    let value = number.toString();
    const zerosNumber = length - value.length;

    for (let i = 0; i < zerosNumber; i++) {
        value = "0" + value;
    }
    return value;
}
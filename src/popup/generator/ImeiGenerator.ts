import Generator from "./Generator.js";

export default class ImeiGenerator extends Generator {
    getValue(): string {
        let result = '',
            checkSum = 0,
            value, digits = '';

        for (let i = 0; i < 14; i++) {
            value = this.randomNumber(0, 9);
            result += value.toString();

            if (i % 2 !== 0) {
                value *= 2;
            }

            digits += value.toString();
        }

        for (let i = 0; i < digits.length; i++) {
            checkSum += parseInt(digits[i]);
        }

        if (checkSum % 10 === 0) {
            return result + '0';
        }

        checkSum = 10 - (checkSum % 10);
        return result + checkSum.toString();
    }
}
import Generator from "./Generator.js";

export enum RegonType {
    NINE = 9, FOURTEEN = 14,
}

export interface RegonGeneratorOptions {
    length: RegonType,
}

export default class RegonGenerator extends Generator {
    getValue(options: RegonGeneratorOptions): string {
        const types = [9, 14];
        const weights9 = [8, 9, 2, 3, 4, 5, 6, 7];
        const weights14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
        let result = '',
            checkSum = 0,
            value, type;

        if (options.hasOwnProperty('length') && types.includes(options.length)) {
            type = types.indexOf(options.length);
        } else {
            type = this.randomNumber(0, 1);
        }

        for (const i in weights9) {
            value = this.randomNumber(0, 9);
            checkSum += value * weights9[i];
            result += value.toString();
        }

        checkSum %= 11;

        if (checkSum === 10) {
            checkSum = 0;
        }

        result += checkSum.toString();

        if (type > 0) {
            checkSum = 0;

            for (let i = 0; i < result.length; i++) {
                checkSum += parseInt(result[i]) * weights14[i];
            }

            for (let i = 9; i < weights14.length; i++) {
                value = this.randomNumber(0, 9);
                checkSum += value * weights14[i];
                result += value.toString();
            }

            checkSum %= 11;

            if (checkSum === 10) {
                checkSum = 0;
            }

            result += checkSum.toString();
        }

        return result;
    }
}
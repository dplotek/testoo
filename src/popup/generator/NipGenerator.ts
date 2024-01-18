import Generator from "./Generator.js";

export default class NipGenerator extends Generator {
    getValue(): string {
        const weights =  [6, 5, 7, 2, 3, 4, 5, 6, 7];
        let result, checkSum, value;

        do {
            result = '';
            checkSum = 0;

            for (const i in weights) {
                value = this.randomNumber(0, 9);
                checkSum += value * weights[i];
                result += value.toString();
            }

            checkSum %= 11;
        } while(checkSum >= 10);

        return result + checkSum.toString();
    }
}
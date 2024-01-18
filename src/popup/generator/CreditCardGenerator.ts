import Generator from "./Generator";

export interface CreditCardGeneratorOptions {
    type: CreditCardType|undefined,
}

export enum CreditCardType {
    AIRLINE = 1, CLUB_CARR = 3, VISA = 4, MASTER_CARD = 5, FINANCES = 6, FUEL = 7, TELECOMMUNICATION = 8, OTHER = 9
}

export default class CreditCardGenerator extends Generator {
    getValue(options: CreditCardGeneratorOptions): string {
        const type = options.type ?? 1;
        let result = type.toString();
        let digits = (type * 2).toString();

        for (let i = 1; i < 15; i++) {
            let value = this.randomNumber(0, 9);
            result += value.toString();

            if (i % 2 === 0) {
                value *= 2;
            }

            digits += value.toString();
        }

        let checkSum = 0;
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
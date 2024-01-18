import Generator from "./Generator.js";

export enum Sex {
    RANDOM = 0, MALE = 1, FEMALE = 2
}

export interface PeselGeneratorOptions {
    sex: Sex|undefined,
    startDate: string|undefined,
    endDate: string|undefined,
}

export default class PeselGenerator extends Generator {
    getValue(options: PeselGeneratorOptions): string {
        const weights: Array<number> = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        const sixDigits: Array<Array<number>> = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // random
            [1, 3, 5, 7, 9],                // male
            [0, 2, 4, 6, 8]                 // female
        ];
        let result = '',
            checkSum = 0,
            sexDigits;
        /** @type {Date} */
        let startDate = new Date(1800, 0, 1);
        /** @type {Date} */
        let endDate = new Date(2200, 11, 31);

        if (options.sex && options.sex > 0 && options.sex < 3) {
            sexDigits = sixDigits[options.sex];
        } else {
            sexDigits = sixDigits[0];
        }

        if (options.startDate) {
            const validDate = this.getValidateDate(options.startDate);

            if (validDate !== null) {
                startDate = validDate;
            }
        }

        if (options.endDate) {
            const validDate = this.getValidateDate(options.endDate);

            if (validDate !== null) {
                endDate = validDate;
            }
        }

        const date = this.getRandomDate(startDate, endDate);

        let x = [80, 0, 20, 40, 60];
        let month = date.month;
        let century = 1800;

        for (let i = 0; i < x.length; i++) {
            if (date.year >= century && date.year < century + 100) {
                month += x[i];
                break;
            }

            century += 100;
        }

        result = date.year.toString().slice(2, 4);
        result += month.toString().padStart(2, '0');
        result += date.day.toString().padStart(2, '0');
        result += this.randomNumber(0, 999).toString().padStart(3, '0');
        result += sexDigits[this.randomNumber(0, sexDigits.length - 1)].toString();

        for (const i in weights) {
            checkSum += parseInt(result[i]) * weights[i];
        }

        checkSum = 10 - checkSum % 10;

        if (checkSum === 10) {
            checkSum = 0;
        }

        return result + checkSum.toString();
    }

    getValidateDate(date: string): Date|null {
        let result = date.match(/^((1[8-9]\d{2})|(2[0-2]\d{2}))-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/);

        if (result !== null) {
            let year = parseInt(result[1]);
            let month = parseInt(result[4]);
            let day = parseInt(result[5]);
            let numberOfDays = this.getNumberOfDays(year, month);

            if (day > 0 && day <= numberOfDays) {
                return new Date(year, month - 1, day);
            }
        }

        return null;
    }

    getRandomDate(startDate: Date, endDate: Date): {year: number, month: number, day: number} {
        const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };
    }

    getNumberOfDays(year: number, month: number): number {
        let result = PeselGenerator.numberOfDaysInMonth[month - 1];

        if (month === 2 && year % 4 === 0) {
            result++;
        }

        return result;
    }

    static numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
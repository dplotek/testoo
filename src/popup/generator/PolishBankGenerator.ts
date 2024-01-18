import Generator from "./Generator.js";

export interface PolishBankGenerator {
    bank: number,
}

export default class PolishBankGenerator extends Generator {
    getValue(options: PolishBankGenerator): string {
        const weights: Array<number> = [3, 9, 7, 1, 3, 9, 7];
        let result,
            checkSum = 0,
            value,
            bankId = '';

        if (options.hasOwnProperty('bank')) {
            const bank = PolishBankGenerator.Banks.find(b => b.id === options.bank) || null;

            if (bank !== null) {
                bankId = bank.id.toString();
            }
        }

        if (bankId.length === 0) {
            bankId = PolishBankGenerator.Banks[this.randomNumber(0, PolishBankGenerator.Banks.length - 1)].id.toString();
        }

        result = bankId;

        for (let i = 0; i < bankId.length; i++) {
            value = parseInt(bankId[i]);
            checkSum += value * weights[i];
        }

        for (let i = 4; i < weights.length; i++) {
            value = this.randomNumber(0, 9);
            checkSum += value * weights[i];
            result += value.toString();
        }

        if (checkSum % 10 === 0) {
            return result + '0';
        }

        checkSum = 10 - (checkSum % 10);
        return result + checkSum.toString();
    }

    static Banks: Array<{id: number, name: string}> = [
        {id: 1010, name: 'Narodowy Bank Polski'},
        {id: 1020, name: 'PKO BP'},
        {id: 1030, name: 'Bank Handlowy (Citi Handlowy)'},
        {id: 1050, name: 'ING Bank Śląski'},
        {id: 1090, name: 'Santander Bank Polska'},
        {id: 1130, name: 'BGK'},
        {id: 1140, name: 'mBank'},
        {id: 1160, name: 'Bank Millennium'},
        {id: 1240, name: 'Pekao SA'},
        {id: 1320, name: 'Bank Pocztowy'},
        {id: 1540, name: 'BOŚ Bank'},
        {id: 1580, name: 'Mercedes-Benz Bank Polska'},
        {id: 1610, name: 'SGB - Bank'},
        {id: 1670, name: 'RBS Bank (Polska)'},
        {id: 1680, name: 'Plus Bank'},
        {id: 1840, name: 'Societe Generale'},
        {id: 1870, name: 'Nest Bank'},
        {id: 1930, name: 'Bank Polskiej Spółdzielczości'},
        {id: 1940, name: 'Credit Agricole Bank Polska'},
        {id: 2030, name: 'BNP Paribas'},
        {id: 2120, name: 'Santander Consumer Bank'},
        {id: 2160, name: 'Toyota Bank'},
        {id: 2190, name: 'DNB Bank Polska'},
        {id: 2480, name: 'Getin Noble Bank'},
        {id: 2490, name: 'Alior Bank'},
        {id: 2710, name: 'FCE Bank Polska'},
        {id: 2720, name: 'Inbank'},
        {id: 2770, name: 'Volkswagen Bank'},
        {id: 2800, name: 'HSBC'},
        {id: 2910, name: 'Aion Bank'}
    ];
}
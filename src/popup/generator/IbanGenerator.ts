import {getValue as getPolishBankValue} from "./PolishBankGenerator.ts";
import {randomNumber} from "@src/popup/generator/Generator";

export interface IbanGeneratorOptions {
    countryCode: string | undefined,
}

export function getValue(options: IbanGeneratorOptions): string {
    let value, country, countryIndex, bankId = '',
        bban, ctrlSum;

    if (options.hasOwnProperty('countryCode')
        && (countryIndex = Countries.findIndex(c => c.code === options.countryCode)) >= 0) {
        country = Countries[countryIndex];
    } else {
        country = Countries[randomNumber(0, Countries.length - 1)];
    }

    if (country.code === 'PL') {
        bankId = getPolishBankValue({});
    } else {
        bankId = randomNumber(0, 99999999).toString();
    }

    bban = bankId.toString();

    for (let i = bban.length; i < country.length - 4; i++) {
        bban += randomNumber(0, 9).toString();
    }

    value = bban + (country.code.charCodeAt(0) - 55) + (country.code.charCodeAt(1) - 55) + '00';
    ctrlSum = (98 - modulo(value, 97)).toString().padStart(2, '0');
    return country.code + ctrlSum + bban;
}

function modulo(number: string, m: number): number {
    let result = 0;
    let x = '';

    for (let i = 0; i < number.length; i++) {
        if (result === 0) {
            x = number[i];
        } else {
            x = result.toString() + number[i];
        }

        result = parseInt(x);
        result %= m;
    }

    return result;
}

const Countries: Array<{ code: string, name: string, length: number }> = [
    {code: 'AD', name: 'Andora', length: 24},
    {code: 'AE', name: 'Zjednoczone Emiraty Arabskie', length: 23},
    {code: 'AL', name: 'Albania', length: 28},
    {code: 'AT', name: 'Austria', length: 20},
    //{code: 'AZ', name: 'Azerbejdżan', length: 28},
    {code: 'BA', name: 'Bośnia i Hercegowina', length: 20},
    {code: 'BE', name: 'Belgia', length: 16},
    //{code: 'BG', name: 'Bułgaria', length: 22},
    //{code: 'BH', name: 'Bahrajn', length: 22},
    //{code: 'BR', name: 'Brazylia', length: 29},
    //{code: 'BY', name: 'Białoruś', length: 28},
    {code: 'CH', name: 'Szwajcaria', length: 21},
    {code: 'CR', name: 'Kostaryka', length: 22},
    {code: 'CY', name: 'Cypr', length: 28},
    {code: 'CZ', name: 'Czechy', length: 24},
    {code: 'DE', name: 'Niemcy', length: 22},
    {code: 'DK', name: 'Dania', length: 18},
    //{code: 'DO', name: 'Dominikana', length: 28},
    {code: 'EE', name: 'Estonia', length: 20},
    {code: 'EG', name: 'Egipt', length: 29},
    {code: 'ES', name: 'Hiszpania', length: 24},
    {code: 'FI', name: 'Finlandia', length: 18},
    //{code: 'FI', name: 'Wyspy Alandzkie', length: 18},
    {code: 'FR', name: 'Francja', length: 27},
    //{code: 'FR', name: 'Francuskie Terytoria Południowe i Antarktyczne', length: 27},
    {code: 'FR', name: 'Gujana Francuska', length: 27},
    {code: 'FR', name: 'Gwadelupa', length: 27},
    //{code: 'FR', name: 'Majotta', length: 27},
    //{code: 'FR', name: 'Martynika', length: 27},
    //{code: 'FR', name: 'Nowa Kaledonia	', length: 27},
    //{code: 'FR', name: 'Polinezja Francuska', length: 27},
    //{code: 'FR', name: 'Reunion', length: 27},
    //{code: 'FR', name: 'Saint-Barthélemy', length: 27},
    //{code: 'FR', name: 'Saint-Martin', length: 27},
    //{code: 'FR', name: 'Saint-Pierre i Miquelon', length: 27},
    //{code: 'FR', name: 'Wallis i Futuna', length: 27},
    {code: 'FO', name: 'Wyspy Owcze', length: 18},
    //{code: 'GB', name: 'Wielka Brytania', length: 22},
    //{code: 'GB', name: 'Wyspa Man', length: 22},
    //{code: 'GE', name: 'Gruzja', length: 22},
    //{code: 'GI', name: 'Gibraltar', length: 23},
    {code: 'GL', name: 'Grenlandia', length: 18},
    {code: 'GR', name: 'Grecja', length: 27},
    //{code: 'GT', name: 'Gwatemala', length: 28},
    {code: 'HR', name: 'Chorwacja', length: 21},
    {code: 'HU', name: 'Węgry', length: 28},
    //{code: 'IE', name: 'Irlandia', length: 22},
    {code: 'IL', name: 'Izrael', length: 23},
    //{code: 'IQ', name: 'Irak', length: 23},
    {code: 'IS', name: 'Islandia', length: 26},
    //{code: 'IT', name: 'Włochy', length: 27},
    //{code: 'JO', name: 'Jordania', length: 30},
    //{code: 'KW', name: 'Kuwejt', length: 30},
    {code: 'KZ', name: 'Kazachstan', length: 20},
    {code: 'LB', name: 'Liban', length: 28},
    //{code: 'LC', name: 'Saint Lucia', length: 32},
    {code: 'LI', name: 'Liechtenstein', length: 21},
    {code: 'LT', name: 'Litwa', length: 20},
    {code: 'LU', name: 'Luksemburg', length: 20},
    //{code: 'LV', name: 'Łotwa', length: 21},
    {code: 'LY', name: 'Libia', length: 25},
    {code: 'MC', name: 'Monako', length: 27},
    //{code: 'MD', name: 'Mołdawia', length: 24},
    {code: 'ME', name: 'Czarnogóra', length: 22},
    {code: 'MK', name: 'Macedonia Północna', length: 19},
    {code: 'MR', name: 'Mauretania', length: 27},
    //{code: 'MT', name: 'Malta', length: 31},
    //{code: 'MU', name: 'Mauritius', length: 30},
    //{code: 'NL', name: 'Holandia', length: 18},
    {code: 'NO', name: 'Norwegia', length: 15},
    //{code: 'PK', name: 'Pakistan', length: 24},
    {code: 'PL', name: 'Polska', length: 28},
    //{code: 'PS', name: 'Palestyna', length: 29},
    {code: 'PT', name: 'Portugalia', length: 25},
    //{code: 'QA', name: 'Katar', length: 29},
    //{code: 'RO', name: 'Rumunia', length: 24},
    {code: 'RS', name: 'Serbia', length: 22},
    {code: 'SA', name: 'Arabia Saudyjska', length: 24},
    //{code: 'SC', name: 'Seszele', length: 31},
    {code: 'SD', name: 'Sudan', length: 18},
    {code: 'SE', name: 'Szwecja', length: 24},
    {code: 'SI', name: 'Słowenia', length: 19},
    {code: 'SK', name: 'Słowacja', length: 24},
    //{code: 'SM', name: 'San Marino', length: 27},
    {code: 'ST', name: 'Wyspy Świętego Tomasza i Książęca', length: 25},
    //{code: 'SV', name: 'Salwador', length: 28},
    {code: 'TL', name: 'Timor Wschodni', length: 23},
    {code: 'TN', name: 'Tunezja', length: 24},
    {code: 'TR', name: 'Turcja', length: 26},
    {code: 'UA', name: 'Ukraina', length: 29},
    {code: 'VA', name: 'Watykan', length: 22},
    //{code: 'VG', name: 'Brytyjskie Wyspy Dziewicze', length: 24},
    {code: 'XK', name: 'Kosowo', length: 20}
];

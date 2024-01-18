import Generator from "./Generator.js";

export default class IdCardGenerator extends Generator {
    getValue(): string{
        const weights = [7, 3, 1, 9, 7, 3, 1, 7, 3];
        let checkSum = 0,
            value,
            numbers = '',
            serial = this.randomString(3);

        for (let i = 0; i < serial.length; i++) {
            value = (serial.charCodeAt(i) - 55) % 10;
            checkSum += value * weights[i];
        }

        for (let i = 4; i < 9; i++) {
            value = this.randomNumber(0, 9);
            numbers += value.toString();
            checkSum += value * weights[i];
        }

        checkSum %= 10;
        return serial + checkSum.toString() + numbers;
    }
}
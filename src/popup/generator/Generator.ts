export default class Generator {
    randomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomNumberAsString(length: number, min: number = 0, max: number = 1000): string {
        return this.randomNumber(min , max).toString();
    }

    randomString(length: number = 1, characters: string|null = null): string {
        let result = '';

        if (characters === null) {
            characters = Generator.Letters;
        }

        for (let i = 0; i < length; i++) {
            result += characters[this.randomNumber(0, characters.length - 1)];
        }

        return result;
    }

    static Letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}
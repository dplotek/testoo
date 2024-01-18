import Generator from "./Generator.js";

export default class GuidGenerator extends Generator {
    getValue(): string {
        let result: Array<string> = [];
        let lengths: Array<number> = [8, 4, 4, 4, 8];

        for (let i = 0; i < 5; i++) {
            result.push(this.randomString(lengths[i], GuidGenerator.Characters));
        }

        return result.join('-');
    }

    static Characters = '0123456789ABCDEF';
}
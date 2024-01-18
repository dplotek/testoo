import {randomString} from "@src/popup/generator/Generator";

const Characters = '0123456789ABCDEF';

export function getValue(): string {
    let result: Array<string> = [];
    let lengths: Array<number> = [8, 4, 4, 4, 8];

    for (let i = 0; i < 5; i++) {
        result.push(randomString(lengths[i], Characters));
    }

    return result.join('-');
}


const input = await Deno.readTextFile("input.txt");
const numbers = input.split(",").map(Number);
console.log(part1(numbers, 5));

function part1(input: number[], id: number) {
    const program = [...input];
    let pointer = 0;
    const outputs: number[] = [];

    const getValue = (offset: number, mode: number): number => {
        const param = program[pointer + offset];
        if (mode === 1) return param;
        return program[param];
    };

    const getStoreAddress = (offset: number): number => program[pointer + offset];

    while(program[pointer] !== 99) {
        const instruction = program[pointer];
        const opcode = instruction % 100;
        const c = Math.floor(instruction / 100) % 10;
        const b = Math.floor(instruction / 1000) % 10;
        let jump = 0;
        switch (opcode) {
            case 1:
                program[getStoreAddress(3)] = getValue(1, c) + getValue(2, b);
                jump = 4;
                break;
            case 2:
                program[getStoreAddress(3)] = getValue(1, c) * getValue(2, b);
                jump = 4;
                break;
            case 3:
                program[getStoreAddress(1)] = id;
                jump = 2;
                break;
            case 4:
                const output_value = getValue(1, c);
                outputs.push(output_value);
                jump = 2;
                break;
            case 5:
                if (getValue(1, c) !== 0) {
                    pointer = getValue(2, b);
                } else {
                    jump = 3;
                }
                break;
            case 6:
                if (getValue(1, c) === 0) {
                    pointer = getValue(2, b);
                } else {
                    jump = 3;
                }
                break;
            case 7:
                program[getStoreAddress(3)] = getValue(1, c) < getValue(2, b) ? 1 : 0;
                jump = 4;
                break;
            case 8:
                program[getStoreAddress(3)] = getValue(1, c) === getValue(2, b) ? 1 : 0;
                jump = 4;
                break;
        }
        pointer += jump;
    }
    return outputs;
}
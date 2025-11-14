const input = await Deno.readTextFile("input.txt");
const numbers = input.split(",").map(Number);
console.log(part2());

function part1(input: number[], noun: number, verb: number): number {
    const numbers = input.slice();
    numbers[1] = noun;
    numbers[2] = verb;
    for (let i = 0; i < numbers.length; i += 4) {
        const opcode = numbers[i];
        if (opcode === 99) break;
        if (opcode === 1) {
            numbers[numbers[i+3]] = numbers[numbers[i+1]] + numbers[numbers[i+2]];
        }
        if (opcode === 2) {
            numbers[numbers[i+3]] = numbers[numbers[i+1]] * numbers[numbers[i+2]];
        }
    }
    return numbers[0];
}

function part2(): number {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (part1(numbers, i, j) == 19690720) return 100 * i + j;
        }
    }
}

function part2_b(): number {
    const TARGET = 19690720;
    let noun = 0;
    let verb = 99;
    while (noun < 100 && verb >= 0) {
        const result = part1(numbers, noun, verb);
        if (result === TARGET) return 100 * noun + verb;
        if (result < TARGET) noun++;
        else verb--;
    }
    throw new Error("Keine Lösung gefunden");
}
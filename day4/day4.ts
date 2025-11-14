const input = await Deno.readTextFile("input.txt");
const min = Number(input.split("-")[0]);
const max = Number(input.split("-")[1]);
console.log(part1());

function part1() {
    let options = 0;
    for (let i = min; i <= max; i++) {
        const s = String(i);
        let hasAdjacentDuplicates = false;
        let isNeverDecreasing = true;
        for (let j = 1; j < s.length; j++) {
            let previous = s[j - 1];
            let current = s[j];
            if (previous === current) {
                hasAdjacentDuplicates = true;
            }
            if (previous > current) {
                isNeverDecreasing = false;
            }
        }
        if (hasAdjacentDuplicates && isNeverDecreasing) {
            options++;
        }
    }
    return options;
}


const input = await Deno.readTextFile("input.txt");
const min = Number(input.split("-")[0]);
const max = Number(input.split("-")[1]);
console.log(part1and2());

function part1and2() {
    let options = 0;
    for (let i = min; i <= max; i++) {
        const s = String(i);
        let hasAdjacentDuplicates = false;
        let isNeverDecreasing = true;
        let j = 0;
        while (j < s.length) {
            if (j > 0 && s[j] < s[j - 1]) {
                isNeverDecreasing = false;
                break;
            }
            let current = s[j];
            let streak = 1;
            while (j + 1 < s.length && s[j + 1] === current) {
                streak++;
                j++;
            }
            if (streak === 2) {
                hasAdjacentDuplicates = true;
            }
            j++;
        }
        if (hasAdjacentDuplicates && isNeverDecreasing) {
            options++;
        }
    }
    return options;
}
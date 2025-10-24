const input = await Deno.readTextFile("input.txt");
const numbers = input.split("\n").map(Number);
console.log(part1_2(numbers));

function part1_2(numbers: number[]): number {
    let total = 0;
    numbers.forEach(num => {
        do {
            num = Math.floor(num / 3) - 2;
            if (num < 0) num = 0;
            total += num
        } while (num > 0)
    })
    return total;
}
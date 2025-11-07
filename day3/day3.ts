const input = await Deno.readTextFile("input.txt");
const paths = input.split("\n").map(str => str.split(",").map(str => [str[0], parseInt(str.substring(1))]));
console.log(part1())

function part1() {
    const histories: Set<string>[] = []
    for (const p of paths) {
        histories.push(calculatePath(p, [0, 0]))
    }
    let intersections = histories[0].intersection(histories[1]);
    return Math.min(
        ...Array.from(intersections.values())
            .map(str => {
                const[x, y] = str.split(",").map(str => parseInt(str, 10));
                return Math.abs(x) + Math.abs(y);
            })
    );
}

function calculatePath(instructions: (string | number)[][], coordinates: number[]): Set<string> {
    let path = [...coordinates];
    const history: Set<string> = new Set();
    for (const [direction, distance] of instructions) {
        for (let i = 1; i <= distance; i++) {
            switch (direction) {
                case "U":
                    path[1]--
                    break;
                case "D":
                    path[1]++
                    break;
                case "L":
                    path[0]--
                    break;
                case "R":
                    path[0]++
                    break;
            }
            history.add(path.toString())
        }
    }
    return history;
}
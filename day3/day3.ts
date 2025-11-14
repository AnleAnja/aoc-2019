const input = await Deno.readTextFile("input.txt");
const paths = input.split("\n").map(str => str.split(",").map(str => [str[0], parseInt(str.substring(1))]));
part1and2()

function part1and2() {
    const pathMap = calculatePath(paths[0]);
    let minDistance = Infinity;
    let minSteps = Infinity;
    let path2 = [0, 0]
    let step = 0;
    for (const [direction, distance] of paths[1]) {
        for (let i = 1; i <= distance; i++) {
            step++;
            switch (direction) {
                case "U":
                    path2[1]--
                    break;
                case "D":
                    path2[1]++
                    break;
                case "L":
                    path2[0]--
                    break;
                case "R":
                    path2[0]++
                    break;
            }
            const key = path2.toString();
            if (pathMap.has(key)) {
                const distance = Math.abs(path2[0]) + Math.abs(path2[1]);
                minDistance = Math.min(minDistance, distance);
                const path1Step = pathMap.get(key)!;
                const steps = path1Step + step;
                minSteps = Math.min(minSteps, steps);
            }
        }
    }
    console.log(minDistance, minSteps)
}

function calculatePath(instructions: (string | number)[][]): Map<string, number> {
    let path = [0, 0];
    const history: Map<string, number> = new Map();
    let step = 0;
    for (const [direction, distance] of instructions) {
        for (let i = 1; i <= distance; i++) {
            step++;
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
            const key = path.toString();
            if (!history.has(key)) {
                history.set(key, step)
            }
        }
    }
    return history;
}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0], 10);
const graph = input.slice(1).map(line => line.split(' ').map(Number));

function floydWarshall(n, graph) {
    let reach = Array.from(Array(n), () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (graph[i][j] === 1) {
                reach[i][j] = 1;
            }
        }
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (reach[i][j] === 0 && (reach[i][k] === 1 && reach[k][j] === 1)) {
                    reach[i][j] = 1;
                }
            }
        }
    }

    return reach;
}

const result = floydWarshall(n, graph);

// Print the result
for (let i = 0; i < n; i++) {
    console.log(result[i].join(' '));
}

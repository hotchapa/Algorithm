const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let arr = input.slice(1).map(line => line.split(" ").map(Number));
let count = 0;
let visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [1, 1, 0, -1, -1, -1, 0, 1];
const dy = [0, -1, -1, -1, 0, 1, 1, 1];

function dfs(x, y) {
    visited[y][x] = true;
    let isPeak = true;

    for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if (arr[ny][nx] > arr[y][x]) {
                isPeak = false;
            } else if (arr[ny][nx] === arr[y][x] && !visited[ny][nx]) {
                if (!dfs(nx, ny)) {
                    isPeak = false;
                }
            }
        }
    }
    return isPeak;
}


for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!visited[i][j]) {
            if (dfs(j, i)) {
                count++;
            }
        }
    }
}

console.log(count);

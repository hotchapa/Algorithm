
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
let arr =input.slice().map(line => line.split(" ").map(Number));


const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let queue = [];
let unripeTomatoes = 0;

// 초기 토마토 상태 및 익은 토마토 위치 큐에 저장
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            if (arr[n][m] === 1) {
                queue.push([n, m, 0]);
            } else if (arr[n][m] === 0) {
                unripeTomatoes++;
            }
        }
    }


// BFS
let days = 0;
let front = 0;

while (front < queue.length) {
    const [x, y, day] = queue[front];
    front++;
    days = day;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
            if (arr[nx][ny] === 0) {
                arr[nx][ny] = 1;
                queue.push([nx, ny, day + 1]);
                unripeTomatoes--;
            }
        }
    }
}

if (unripeTomatoes === 0) {
    console.log(days);
} else {
    console.log(-1);
}

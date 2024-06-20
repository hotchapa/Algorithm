// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// // 처음 주어지는 판 정보는 H의 개수만큼 나눠서 생각해야함.

// const [M, N, H] = input.shift().split(" ").map(Number);
// let arr = [];
// for (let h = 0; h < H; h++) {
//     arr.push(input.slice(h * N, (h + 1) * N).map(line => line.split(" ").map(Number)));
// }

// const dz = [1, -1, 0, 0, 0, 0];
// const dx = [0, 0, 1, -1, 0, 0];
// const dy = [0, 0, 0, 0, 1, -1];

// let queue = [];
// let unripeTomatoes = 0;

// // 초기 토마토 상태 및 익은 토마토 위치 큐에 저장
// for (let h = 0; h < H; h++) {
//     for (let n = 0; n < N; n++) {
//         for (let m = 0; m < M; m++) {
//             if (arr[h][n][m] === 1) {
//                 queue.push([h, n, m, 0]);
//             } else if (arr[h][n][m] === 0) {
//                 unripeTomatoes++;
//             }
//         }
//     }
// }

// // BFS
// let days = 0;
// while (queue.length > 0) {
//     const [z, x, y, day] = queue.shift();
//     days = day;

//     for (let i = 0; i < 6; i++) {
//         const nz = z + dz[i];
//         const nx = x + dx[i];
//         const ny = y + dy[i];

//         if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M) {
//             if (arr[nz][nx][ny] === 0) {
//                 arr[nz][nx][ny] = 1;
//                 queue.push([nz, nx, ny, day + 1]);
//                 unripeTomatoes--;
//             }
//         }
//     }
// }

// if (unripeTomatoes === 0) {
//     console.log(days);
// } else {
//     console.log(-1);
// }


const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);
let arr = [];
for (let h = 0; h < H; h++) {
    arr.push(input.slice(h * N, (h + 1) * N).map(line => line.split(" ").map(Number)));
}

const dz = [1, -1, 0, 0, 0, 0];
const dx = [0, 0, 1, -1, 0, 0];
const dy = [0, 0, 0, 0, 1, -1];

let queue = [];
let unripeTomatoes = 0;

// 초기 토마토 상태 및 익은 토마토 위치 큐에 저장
for (let h = 0; h < H; h++) {
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            if (arr[h][n][m] === 1) {
                queue.push([h, n, m, 0]);
            } else if (arr[h][n][m] === 0) {
                unripeTomatoes++;
            }
        }
    }
}

// BFS
let days = 0;
let front = 0;

while (front < queue.length) {
    const [z, x, y, day] = queue[front];
    front++;
    days = day;

    for (let i = 0; i < 6; i++) {
        const nz = z + dz[i];
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M) {
            if (arr[nz][nx][ny] === 0) {
                arr[nz][nx][ny] = 1;
                queue.push([nz, nx, ny, day + 1]);
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

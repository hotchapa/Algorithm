// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");
// const n = input[0] * 1;
// let map = [];

// for (let i = 1; i < n + 1; i++) {
//   map.push(input[i].split(" ").map(Number));
// }



// let maxMap = Array.from({length:3},()=>Array(3).fill(0))
// let minMap = Array.from({length:3},()=>Array(3).fill(0))

// // tc1
// // 3 -> 6 -> 9
// // 1 -> 5 -> 0

// // 가장 큰 경우와 작은 경우를 나눠서 기록
// for(let i =0; i<3; i++){
//   maxMap[0][i] = map[0][i]
//   minMap[0][i] = map[0][i]
// }

// for(let i =1; i<n; i++){
//   // 큰 경우
//   // 첫 번째 칸은 윗 줄에 있는 칸들 중 첫 번째칸과 두 번째 칸에서 첫 번째 칸으로 이동 가능
//   // 두 번째 칸은 윗 줄에 있는 칸들 전부에서 두 번째 칸으로 이동 가능
//   // 세 번째 칸은 윗 줄에 있는 칸들 중 두 번째 칸과 셋 번째 칸에서 세 번째칸으로 이동 가능

//   maxMap[i][0] = Math.max(maxMap[i-1][0],maxMap[i-1][1]) + map[i][0]
//   maxMap[i][1] = Math.max(maxMap[i-1][0],maxMap[i-1][1],maxMap[i-1][2]) + map[i][1]
//   maxMap[i][2] = Math.max(maxMap[i-1][1],maxMap[i-1][2]) + map[i][2]

//   minMap[i][0] = Math.min(minMap[i-1][0],minMap[i-1][1]) + map[i][0]
//   minMap[i][1] = Math.min(minMap[i-1][0],minMap[i-1][1],minMap[i-1][2]) + map[i][1]
//   minMap[i][2] = Math.min(minMap[i-1][1],minMap[i-1][2]) + map[i][2]
// }

// console.log(Math.max(Math.max(maxMap[n-1][0],maxMap[n-1][1],maxMap[n-1][2])))
// console.log(Math.min(Math.min(minMap[n-1][0],minMap[n-1][1],minMap[n-1][2])))



const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const n = input[0] * 1;
let map = [];

for (let i = 1; i < n + 1; i++) {
  map.push(input[i].split(" ").map(Number));
}

let maxMap = Array(3).fill(0);
let minMap = Array(3).fill(0);

// tc1
// 3 -> 6 -> 9
// 1 -> 5 -> 0

// 가장 큰 경우와 작은 경우를 나눠서 기록
for (let i = 0; i < 3; i++) {
  maxMap[i] = map[0][i];
  minMap[i] = map[0][i];
}

for (let i = 1; i < n; i++) {
  // 첫 번째 칸은 윗 줄에 있는 칸들 중 첫 번째칸과 두 번째 칸에서 첫 번째 칸으로 이동 가능
  // 두 번째 칸은 윗 줄에 있는 칸들 전부에서 두 번째 칸으로 이동 가능
  // 세 번째 칸은 윗 줄에 있는 칸들 중 두 번째 칸과 셋 번째 칸에서 세 번째칸으로 이동 가능

  let max = [...maxMap];
  let min = [...minMap];

  maxMap[0] = Math.max(max[0], max[1]) + map[i][0];
  maxMap[1] = Math.max(max[0], max[1], max[2]) + map[i][1];
  maxMap[2] = Math.max(max[1], max[2]) + map[i][2];

  minMap[0] = Math.min(min[0], min[1]) + map[i][0];
  minMap[1] = Math.min(min[0], min[1], min[2]) + map[i][1];
  minMap[2] = Math.min(min[1], min[2]) + map[i][2];
}


console.log(Math.max(...maxMap))
console.log(Math.min(...minMap))
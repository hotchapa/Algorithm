const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")
const N = Number(input.shift());
let arr = input.map((e) => e.split(" ").map(Number));

const dp = Array(N).fill(1);
let answer = 0;

arr = arr.sort((a, b) => a[0] - b[0]);

for (let i = 1; i < N; i++) {
  count = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i][1] > arr[j][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

answer = N - Math.max(...dp);
console.log(answer);
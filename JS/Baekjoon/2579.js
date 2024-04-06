const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const numList = input.slice(1, N + 1).map(Number);
const dp = new Array(N + 1);


dp[1] = numList[0];
dp[2] = dp[1] + numList[1];
dp[3] = Math.max(numList[0], numList[1]) + numList[2];

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + numList[i - 2] + numList[i - 1], dp[i - 2] + numList[i - 1]);
}

console.log(dp[N]);
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift()*1;
const P = input.shift().split(" ").map(x=> +x)
P.unshift(0);
let dp = Array(P.length).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], P[j] + dp[i - j]);
  }
}

console.log(dp[N]);

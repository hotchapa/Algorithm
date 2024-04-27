
const fs =require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const dp = Array(n+1).fill(0);

dp[0] = 0;
dp[1] = 1;

for(let i = 2; i<=n; i++){
  dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[n])



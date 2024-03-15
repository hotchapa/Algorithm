// DP !
// 최적해를 갱신해나가면 바로 전값만 비교해도 최대값이 도출됨
// 어제 풀이한 포도주 문제와 거의 같음

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const n = input[0]*1;
let numList = input.slice(1).map(Number);
let dp = Array(n).fill(0);

dp[0] = numList[0];
for(let i=1; i<n; i++){
  dp[i] = numList[i];
  dp[i] = Math.max(dp[i],dp[i]*dp[i-1])
}

dp.sort((a,b) => b-a)
console.log(dp[0].toFixed(3))
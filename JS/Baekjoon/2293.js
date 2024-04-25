


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n,k] = input[0].split(" ").map(Number);
let numList = [];
for(let i =1; i<=n; i++){
  numList.push(Number(input[i]));
}

let dp = Array(k+1).fill(0);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = numList[i]; j <= k; j++) {
    dp[j] = dp[j] + dp[j - numList[i]];
  }
}
console.log(dp[k])

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().split("\n");
const t = input[0]*1
let index = 1;

for(let tc = 0; tc<t; tc++){
  let k = input[index];
  let n = input[index+1]
  
  let dp = Array.from({length : k+1}, ()=> Array(n).fill(0));
  
  for(let i = 1; i<=n; i++){
    dp[0][i] = i;
  }

  for(let i = 1; i<=k; i++){
    for(let j = 1; j<=n; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  console.log(dp[k][n])
  index +=2;
}


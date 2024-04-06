const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const arr = [];
for(let i = 1; i<=N; i++){
  arr.push(input[i].split(" ").map(Number));
}

// N이 1일때는 1행, 즉 왼쪽에서 오른쪽으로 넘어오는 경우만 생각하면 됨
// N이 2일때는 2행, 1열은 위에서 아래로 오는 경우만, 2열부터는 왼쪽에서 넘어오는 것, 대각선에서 넘어오는 것, 위에서 넘어오는 것을 다 고려해서 가장 큰 값을 더하면 됨

let dp = Array.from({length : N}, ()=> Array(M).fill(0));
dp[0][0] = arr[0][0];

for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){

    if(i == 0 && j >= 1){
      dp[i][j] = dp[i][j-1]+arr[i][j];
    }

    if(i >= 1){
      if(j == 0){
        dp[i][j] = dp[i-1][j]+ arr[i][j];
      }
      if(j >= 1){
        dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]) + arr[i][j];
      }
    }
    
  }
}

console.log(dp[N-1][M-1]);
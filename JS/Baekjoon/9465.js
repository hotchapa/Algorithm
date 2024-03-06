
function solution(n,arr){
  // 스티커 점수 배열 생성
  let dp = Array.from({length:2}, ()=> Array(n+1).fill(0));

  // 초기값 설정
  dp[0][1] = arr[0][0];
  dp[1][1] = arr[1][0];

  for(let i = 2; i <= n; i++){
    dp[0][i] = Math.max(dp[1][i-1], dp[1][i-2]) + arr[0][i-1]; // 현재 위치에서 위쪽 스티커를 뗀 경우
    dp[1][i] = Math.max(dp[0][i-1], dp[0][i-2]) + arr[1][i-1]; // 현재 위치에서 아래쪽 스티커를 뗀 경우
  }

  return Math.max(dp[0][n], dp[1][n]);
}


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = input[0] *1
let index = 1;

for(let tc = 1; tc<=t; tc++){
  let n = input[index]*1;
  let arr = [];
  for(let x = index+1; x<=index+2; x++){
    arr.push(input[x].split(" ").map(Number));
  }

  maxNum = -1e9;

  console.log(solution(n,arr));

  index += 3;
}

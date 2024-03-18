// 증가하는 수열인지 아닌지를 판단하고, 맞다면 수열의 합을 갱신해나가며 답을 찾음!
// 즉 DP로 문제를 해결하면 됨!
// 단, i와 j자리 헷갈리지말자...

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input[0] * 1
let arr = input[1].split(" ").map(x=> +x);

let dp = [...arr];

for(let i=1; i<n; i++){
  for(let j=0; j<i; j++){
    if(arr[j]<arr[i]){
      dp[i] = Math.max(dp[i],arr[i]+dp[j])
    }
  }
}

let max = Math.max(...dp);
console.log(max)
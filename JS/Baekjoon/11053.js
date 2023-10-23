const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift() * 1;
const numList = input.shift().split(" ").map(x=>+x);
let dp = Array(T).fill(1);

function solution(T,numList,dp){
  if(T > 1){
  let answer = 1;
  for(j=1; j<T; j++){
    let count = 0;
    for(i=0; i<j; i++){
      if(numList[j] > numList[i]){
        count = Math.max(count,dp[i])
      }
    }
    dp[j] += count;
    answer = Math.max(dp[j],answer);
  }
    return answer;
  }else{
    return 1;
}
}

console.log(solution(T,numList,dp));

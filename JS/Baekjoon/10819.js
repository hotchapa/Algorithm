// 순서를 고려한 순열을 만들어서
// 최대값을 비교

// dfs를 활용해서
// 현재 재귀 수준이 n과 같으면  == 완전 순열이 형성됨!
// 이때 차의 합들을 구하자

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const n = Number(input[0]);
let numList = input[1].split(" ").map(Number)
let result = [];
let maxValue = -1e9
let visited = new Array(n).fill(false);

function dfs(depth){
  if(depth == n){
    let current = 0;
    for(let i = 0; i<n-1; i++){
      current += Math.abs(result[i] - result[i+1]); 
      maxValue = Math.max(maxValue,current);
    }
  }
  for(let i=0; i<n; i++){
    if(visited[i]) continue;
    visited[i]= true;
    result.push(numList[i]);
    dfs(depth+1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0);
console.log(maxValue)
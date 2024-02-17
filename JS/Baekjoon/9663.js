const fs =require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = input[0]*1
let queens = []; // 퀸 정보

function possible (x,y){
  for(let[a,b] of queens){
    if(a == x || b == y) return false;
    if(Math.abs(a-x) == Math.abs(b-y)) return false;
  }
  return true;
}

let cnt = 0;

function dfs(row){
  if(row == n){
    cnt += 1;
  }
  for(let i = 0; i<n; i++){
    if(!possible(row,i)){
      continue;
    }
    queens.push([row,i]);
    dfs(row+1)
    queens.pop();
  }
}

dfs(0);
console.log(cnt)
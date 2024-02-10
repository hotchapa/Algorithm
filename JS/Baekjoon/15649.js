// 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n,m] = [input[0].split(" ").map(x=> +x);]
let arr = [];

for(let i =1; i<=n; i++){
  arr.push(i);
} // arr = [1,2,3]

let visited = new Array(n).fill(false);
let selected = [];

let answer = "";

function dfs(arr, depth){
  if(depth == m){ // 모든 순열을 확인하는 부분
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for(let i=0; i< arr.length; i++){
    if(visited[i])
    continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth +1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(answer);

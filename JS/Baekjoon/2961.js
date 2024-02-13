
function dfs(depth,start){
  if (depth >= 1){
    let totalX = 1;
    let totalY = 0;
    for(let i of result){
      let [x,y] = arr[i]
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX-totalY));
  }
  for(let i = start; i < arr.length; i++){
    if(visited[i])
      continue;
      result.push(i); //현재 원소 선택
      visited[i] = true; // 방문 처리
      dfs(depth+1, i+1) // 다음 인덱스 넣어 재귀호출
      visited[i] = false; // 방문 처리 취소
      result.pop(); // 원소 선택 취소
  }
}


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift().split(" ") * 1
let arr = []; // 계산하고자 하는 원소가 담긴 배열
for(let i = 0; i<n; i++){
  arr.push(input[i].split(" ").map(x=>+x)) 
}
let visited = new Array(n).fill(false); // 방문여부
let result = []; // 현재 조합에 포함된 원소
let answer = 1e9;

dfs(0,0)
console.log(answer)


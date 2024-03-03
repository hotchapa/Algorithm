// 연산 수행 마다 비용이 1씩 증가
// 최소 연산 (최단 거리)을 구하는 문제이므로 BFS를 사용
// queue에 값과 연사자를 동시에 넣는 센스가 필요한 문제였음
// 값의 범위가 1e9만큼 큰 경우, visited 배열이 아니라 객체로 선언하여 
// 활용하면 메모리 효율에 큰 도움이 됨

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
let [s,t] = input[0].split(" ").map(Number);

let visited = {};
let queue = [{ val: s, ops: "" }];

if(s == t) {
  console.log(0);
  return;
}

while(queue.length) {
  let cur = queue.shift();
  
  if(cur.val == t) {
    console.log(cur.ops);
    return;
  }
  
  let opsList = [cur.val * cur.val, cur.val + cur.val, cur.val - cur.val, 1];
  let opsChar = ["*", "+", "-", "/"];
  
  for(let i=0; i<4; i++) {
    if(opsList[i] > 0 && opsList[i] <= 1e9 && !(opsList[i] in visited)) {
      visited[opsList[i]] = true;
      queue.push({ val: opsList[i], ops: cur.ops + opsChar[i] });
    }
  }
}

console.log(-1);

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n")
// let [s,t] = input[0].split(" ").map(Number);
// let visited = Array(1e9).fill(false);
// if(s==t){
//   console.log(0)
// }
// function bfs(start){
//   let queue = [];
//   let answer = [];
//   queue.push(start)
//   while(queue.length){
//     let curNode = queue.shift();
//     if(curNode == t){
//       return answer
//     }
//     if(!visited[curNode*curNode] && 1e9 >= curNode*curNode && curNode*curNode>= 1){
//       queue.push(curNode*curNode);
//       visited[curNode*curNode] = true;
//       answer.push("*")
//     }
//     
//   return -1;
//   }

// bfs(s)
  


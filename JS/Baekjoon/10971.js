// 2부터 N까지의 수를 하나씩 골라 나열하는 모든 순열을 계산
function dfs(depth){ 
  if (depth == n-1){ //현재 순열 처리
     let totalCost = 0; // 1번 노드 출발
     let cur = 1; // 1번 노드 출발
     for (let i = 0; i< n-1; i++){ // 현재 순열에 따라 노드 이동
      let nextNode = result[i]; // 다음 이동 노드까지의 비용 계싼
      let cost = graph[cur][nextNode];
      if (cost == 0) return; // 이동 불가능하면 무시
      totalCost += cost; // 가능하면 비용 더하고 노드 이동
      cur = nextNode;
     }
     // 마지막 노드에서 1로 돌아오기
     let cost = graph[cur][1];
     if (cost == 0) return; // 불가능하면 무시
     totalCost += cost; // 이동 가능하면 비용 더하고 노드 이동
     minValue = Math.min(minValue, totalCost); // 경로 최소 비용 저장
  }
  for (let i = 2; i <= n; i++){
    if (visited[i]) continue;
    result.push(i) // 방문처리
    visited[i] = true;
    dfs(depth +1); // 재귀함수호출
    result.pop(); // 방문 처리 해제
    visited[i] = false;
  }
}


const fs = require("fs");
const { debugPort } = require('process');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0]*1;

let graph = [];
for(let i =0; i <= n; i++){
  graph.push([0]);
}
for(let i = 1; i<=n; i++){
  line = input[i].split(" ").map(x=> +x);
  for(let j = 0; j < n; j++){
    graph[i].push(line[j]);
  }
}
let visited = new Array(11).fill(false); // 방문처리 배열
let result = [];
let minValue = 1e9;

dfs(0);
console.log(minValue)


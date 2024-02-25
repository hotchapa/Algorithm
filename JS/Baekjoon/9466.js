// 숫자 고르기와 마찬가지로 싸이클을 구하는 문제
// 싸이클을 이루는 노드를 구해서 전체 노드의 값에서 뺀 뒤
// 이루지 못한 노드의 수를 출력하면 됨

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const t = input.shift() * 1;

function dfs(graph, start, visited, completed,result){
  visited[start] = true;
  let next = graph[start];
  if(!visited[next]){
    dfs(graph,next,visited,completed, result)
  }
  else if (!completed[next]){
    while(next != start){
      result.push(next);
      next = graph[next];
    }
    result.push(start);
  }
  completed[start] = true;
}


for(let tc = 0; tc<t; tc++){
  let result = [];
  let n = input.shift()* 1;
  let graph = input.shift().split(" ").map(x=>+x);
  graph.unshift(0);
  let visited = Array(n+1).fill(false);
  let completed = Array(n+1).fill(false);

  for(let x = 1; x <= n; x++){
    if(!visited[x]){
      dfs(graph,x,visited,completed,result)
    }
  }

  let answer = n - result.length;
  console.log(answer)
}



// 특정 노드까지의 최단 거리 찾는 문제
// BFS로 풀이

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let [n, m, k, x] = input[0].split(" ").map(Number);
let graph = Array.from({length: n+1}, () => []);

for(let i=1; i<=m; i++){
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

let distance = Array(n+1).fill(Infinity);
distance[x] = 0;

let queue = [[x, 0]];
let isExist = false;

while(queue.length) {
  let [now, dist] = queue.shift();
  if(dist === k) {
    console.log(now);
    isExist = true;
  }
  if(dist < k) {
    for(let next of graph[now]) {
      if(distance[next] === Infinity) {
        distance[next] = dist + 1;
        queue.push([next, dist + 1]);
      }
    }
  }
}

if(!isExist) console.log(-1);

// 모든 도시에 대한 최단거리를 구하는 문제다.
// 때문에 다익스트라가 아니라, 플루이드 워셜 알고리즘을 이용한다.
// 노드 개수가 최대 100개기 때문에, N 세제곱으로도 풀이가 가능하다.
// 두 노드간 간선이 여러 개일수 있다. 따라서 최소의 경우만 고려한다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().split("\n");
const n = input[0]*1;
const m = input[1]*1;

// graph[i][j]는 i에서 j로 가기 위한 초기 비용(간선 비용)
let graph = [new Array(n + 1).fill(1e9)];

for (let i = 1; i <= n; i++) {
  graph.push(new Array(n + 1).fill(1e9));
  graph[i][i] = 0; // 자기 자신으로 가는 비용은 0원 
}

for (let i = 2; i < m + 2; i++) {
  let [a, b, c] = input[i].split(" ").map(Number); 
  graph[a][b] = Math.min(graph[a][b], c);
}


// 점화식에 따라 플로이드 워셜 알고리즘을 수행
for (let k = 1; k <= n; k++) { // K는 거쳐가는 노드
  for (let a = 1; a <= n; a++) { 
    for (let b = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b];
      if (graph[a][b] > cost) { // K를 거쳐갈 때 비용이 더 저렴하다면 테이블 갱신
              graph[a][b] = cost;
            }
          }
      }
  }

for (let a = 1; a <= n; a++) { // 수행된 결과를 출력 
    let line = "";
    
    for (let b = 1; b <= n; b++) {
      if (graph[a][b] == 1e9) line += "0 "; // 도달할 수 없는 경우, "0"이라고 출력
      else line += graph[a][b] + " "; // 도달할 수 있는 경우 거리를 출력 
    }

    console.log(line); 
}


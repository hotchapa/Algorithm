// input.shift()로 하면 시간초과가 발생한다
// 데이터 값이 많을때는 index로 접근하는 습관을 들이자
// https://okky.kr/questions/725749 참고



// js의 array는 다른 언어와 달리 메모리상에 순서대로 배치되는게 아니라
// 각 인덱스마다 참조하는 메모리가 뒤죽박죽으로 되어 있음(리스트 형태)
// 그래서 인덱스는 메모리를 참조하기 위해 사용되는 것이 아니라
// 데이터의 순서를 보장하는 property일 뿐임
// 마지막을 제거하여 반환하는 pop은 나머지의 인덱스값을 변화시킬 필요가 없지만
// 처음을 제거하여 반환하는 shift는 나머지의 모든 인덱스를 변화하므로 메모리 


// 인접 노드와 색상이 다른 지 아닌지 판별
// 인접 노드에 대해서 색깔을 칠함
// 단, 현재 노드의 색상과 반대 색상을 할당
// 현재 방문하려는 노드를 이미 방문했는데, 그 노드의 색상이 현재 노드의 색상과 같다면 그래프는 이분 그래프일 수 없으므로 false를 반환
// 굳이 color 배열까지 만들어서 구현할 필요가 없어보임

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n")
// let k = Number(input.shift());

// for(let tc = 0; tc<k; tc++){
//   let [v,e] = input.shift().split(" ").map(Number);
//   let graph = Array(v+1).fill(null).map(() => Array());
//   let visited = Array(v+1).fill(false);
//   let color = Array(v+1).fill(0);

//   for(let i = 0; i<e; i++){
//     let [a, b] = input.shift().split(" ").map(Number);
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   function bfs(start){
//     let queue = [];
//     queue.push(start);
//     visited[start] = true;
//     color[start] = 1;

//     while(queue.length){
//       let nextNode = queue.shift();
      
//       for(let i=0; i<graph[nextNode].length; i++){
//         let node = graph[nextNode][i];
//         if(!visited[node]){
//           queue.push(node);
//           visited[node] = true;
//           color[node] = color[nextNode] == 1 ? 2 : 1;
//         } else if(color[node] == color[nextNode]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

//   let isBipartite = true;
//   for(let i=1; i<=v; i++) {
//     if(!visited[i]) {
//       isBipartite = bfs(i);
//       if(!isBipartite) break;
//     }
//   }

//   console.log(isBipartite ? "YES" : "NO");
// }


// 이렇게 구현할 수도 있을듯

// for(let tc = 0; tc<k; tc++){
//   let [v,e] = input.shift().split(" ").map(Number);
//   let graph = Array(v+1).fill(null).map(() => Array());
//   let visited = Array(v+1).fill(0);

//   for(let i = 0; i<e; i++){
//     let [a, b] = input.shift().split(" ").map(Number);
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   function bfs(start){
//     let queue = [];
//     queue.push(start);
//     visited[start] = 1;

//     while(queue.length){
//       let nextNode = queue.shift();

//       for(let i=0; i<graph[nextNode].length; i++){
//         let node = graph[nextNode][i];
//         if(visited[node] === 0){
//           queue.push(node);
//           visited[node] = visited[nextNode] == 1 ? 2 : 1;
//         } else if(visited[node] == visited[nextNode]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

//   let isBipartite = true;
//   for(let i=1; i<=v; i++) {
//     if(visited[i] === 0) {
//       isBipartite = bfs(i);
//       if(!isBipartite) break;
//     }
//   }

//   console.log(isBipartite ? "YES" : "NO");
// }

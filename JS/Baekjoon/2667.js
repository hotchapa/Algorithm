// 1. 주어진 지도 정보를 바탕으로, DFS 이용하여 연결된 집들의 단지를 찾음
// 2. 각 단지에 속하는 집의 수를 세어 counts에 저장
// 3. counts를 오름차순으로 정렬, 총 단지 수와 각 단지별 집의 수 출력

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const area = input.map(line => line.split('').map(Number));
let visited = Array.from({length: N}, () => Array(N).fill(false));
let counts = [];

// DFS 함수 정의
function dfs(x, y) {
    if (y < 0 || y >= N || x < 0 || x >= N || !area[y][x] || visited[y][x]) return;
    
    visited[y][x] = true;
    counts[counts.length -1]++;

    dfs(x - 1, y); // 왼쪽
    dfs(x + 1, y); // 오른쪽
    dfs(x, y - 1); // 위쪽
    dfs(x, y + 1); // 아래쪽
}

for (let i=0;i<N;i++){
   for(let j=0;j<N;j++){
       if(area[i][j]==1 && !visited[i][j]){
           counts.push(0);
           dfs(j,i);
       }
   }
}

counts.sort((a,b) => a-b);

console.log(counts.length);
counts.forEach(count => console.log(count));

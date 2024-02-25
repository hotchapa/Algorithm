
// function dfs(n,i,j,visited,color){
//   if(i<0 || i >=n || j<0 || j >=n || visited[i][j]){
//   return false;
//   }

//   visited[i][j] = true;
//   let curColor = arr[i][j];

//   if(curColor == color){
//     dfs(n,i+1,j,visited,color);
//     dfs(n,i-1,j,visited,color);
//     dfs(n,i,j-1,visited,color);
//     dfs(n,i,j+1,visited,color);
//     return true;
//     }

//   return false;
// }

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");
// const n = input.shift() * 1;
// let arr = [];

// for(let i = 0; i<n; i++){
// arr.push(input[i].split(""));
// }

// let normal = 0;
// let abnormal = 0;

// // 적록색약이 아닌 경우
// let visited = Array.from({length : n},()=> Array(n).fill(false));

// for(let i = 0; i<n; i++){
// for(let j = 0; j<n; j++){
// let color = arr[i][j];
// if(dfs(n,i,j,visited,color)) normal++;
// }
// }


// for(let i = 0; i<n; i++){
//   for(let j = 0; j<n; j++){
//     if(arr[i][j] == "R" || arr[i][j] == "G"){
//       arr[i][j] = "R"; // 빨간색과 초록색을 같은 색으로 변경
//     }
//   }
// }
// // 적록색약인 경우

// let visited2 = Array.from({length : n},()=> Array(n).fill(false));
// for(let i = 0; i<n; i++){
// for(let j = 0; j<n; j++){
// let color2 = arr[i][j]
// if(dfs(n,i,j,visited2,color2)) abnormal++;
// }
// }

// console.log(normal, abnormal);


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]); // 전체 맵의 크기(N)
let graph = []; // 그래프 정보 입력
for (let i = 1; i <= n; i++) graph.push(input[i].split(''));
// 상, 하, 좌, 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
function dfs(x, y) {
if (!visited[x][y]) { // 방문하지 않았다면
visited[x][y] = true; // 방문 처리
for (let i = 0; i < 4; i++) { // 인접한 영역을 하나씩 확인
let nx = x + dx[i];
let ny = y + dy[i];
if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue; // 공간을 벗어나는 경우 무시
if (graph[x][y] == graph[nx][ny]) dfs(nx, ny); // 같은 색상이라면 재귀적으로 dfs() 호출
}
    return true;
  }
return false; 
}
// DFS를 이용하여 연결 요소 세기
let result1 = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    if (dfs(i, j, 0)) result1++;
// R → G 변환 이후에 다시 한 번 연결 요소 세기
for (let i = 0; i < n; i++) for (let j = 0; j < n; j++)
    if (graph[i][j] == 'R') graph[i][j] = 'G';
// DFS를 이용하여 연결 요소 세기
let result2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false)); for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    if (dfs(i, j)) result2++;
console.log(result1 + ' ' + result2);